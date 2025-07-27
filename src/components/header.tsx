import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Position interface for animated underline cursor
interface CursorPosition {
  left: number;
  width: number;
  opacity: number;
}

// NavHeader component
const NavHeader: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isClosed, setIsClosed] = useState(false); // closed state (collapsed)
  const [isMobile, setIsMobile] = useState(false); // responsive
  const lastScrollY = useRef(0);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // use md breakpoint
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll behavior (only for mobile)
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY.current && scrollY > 100) {
        setIsClosed(true); // hide nav
      } else if (scrollY < lastScrollY.current && scrollY < 50) {
        setIsClosed(false); // show nav
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Toggle manually
  const toggleMenu = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 pb-0 transition-all backdrop-blur-sm duration-300 border-0 z-[1]">
      {/* MENU ICON (only visible when nav is closed on mobile) */}
      {isMobile && isClosed && (
        <button
          onClick={toggleMenu}
          className="absolute right-4 top-4 text-3xl font-bold z-50 md:hidden"
        >
          =
        </button>
      )}

      {/* NAVIGATION TABS */}
      <AnimatePresence>
        {(!isMobile || !isClosed) && (
          <motion.ul
            key="nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 z-[1]"
            onMouseLeave={() =>
              setPosition((prev) => ({ ...prev, opacity: 0 }))
            }
          >
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Pricing</Tab>
            <Tab setPosition={setPosition}>About</Tab>
            <Tab setPosition={setPosition}>Services</Tab>
            <Tab setPosition={setPosition}>Contact</Tab>

            <Cursor position={position} />
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

// Tab component
interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
}

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

// Cursor component
interface CursorProps {
  position: CursorPosition;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default NavHeader;
