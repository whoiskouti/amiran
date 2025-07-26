import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Define the position interface for cursor state
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Handle scroll events to collapse/reopen header on small devices
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
        setIsMenuOpen(false); // Close menu when scrolling down
      } else {
        setIsScrolled(false);
        setIsMenuOpen(true); // Reopen menu when at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 md:p-10 bg-white/80 backdrop-blur-md transition-all duration-300 ${
        isScrolled && !isMenuOpen ? "state-closed" : ""
      }`}
      initial={{ y: 0 }}
      animate={{ y: isScrolled && !isMenuOpen ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Menu Icon for Small Devices */}
      <motion.button
        className="absolute right-4 top-4 md:hidden p-2 rounded-full bg-amber-100 text-amber-600"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        animate={{ rotate: isMenuOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {(!isScrolled || isMenuOpen || window.innerWidth >= 768) && (
          <motion.ul
            className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 flex-col md:flex-row"
            onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
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
    </motion.header>
  );
};

// Tab component props
interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
}

// Tab component
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base text-center"
    >
      {children}
    </li>
  );
};

// Cursor component props
interface CursorProps {
  position: CursorPosition;
}

// Cursor component
const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12 hidden md:block"
    />
  );
};

export default NavHeader;