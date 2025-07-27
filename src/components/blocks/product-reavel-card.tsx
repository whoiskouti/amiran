"use client"

import { motion, useReducedMotion } from "framer-motion"
import { buttonVariants } from "../../components/ui/button"
import { ShoppingCart, Star, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { cn } from "../../lib/utils"

interface Feature {
  title: string
  description: string
}

interface ProductRevealCardProps {
  name?: string
  price?: string
  originalPrice?: string
  image?: string
  description?: string
  rating?: number
  reviewCount?: number
  features?: Feature[]
  onAdd?: () => void
  onFavorite?: () => void
  enableAnimations?: boolean
  className?: string
}

export function ProductRevealCard({
  name = "Premium Wireless Headphones",
  price = "$199",
  originalPrice = "$299",
  image = "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop",
  description = "Experience studio-quality sound with advanced noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  rating = 4.8,
  reviewCount = 124,
  features = [
    { title: "30h Battery", description: "Long-lasting" },
    { title: "Noise Cancel", description: "Studio quality" },
  ],
  onAdd,
  onFavorite,
  enableAnimations = true,
  className,
}: ProductRevealCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const shouldAnimate = enableAnimations && !shouldReduceMotion

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setIsFavorite(!isFavorite)
    onFavorite?.()
    setIsOverlayOpen(false)
  }

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    onAdd?.()
    setIsOverlayOpen(false)
  }

  const handleViewDetails = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setIsOverlayOpen(false)
  }

  const handleCloseOverlay = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setIsOverlayOpen(false)
  }

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('[data-slot="close-button"]')) {
      return
    }
    e.stopPropagation()
    e.preventDefault()
    setIsOverlayOpen(true)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOverlayOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const containerVariants = {
    rest: { 
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
    active: shouldAnimate ? { 
      scale: 1.03, 
      y: -8,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.8,
      }
    } : {},
  }

  const imageVariants = {
    rest: { scale: 1 },
    active: { scale: 1.1 },
  }

  const overlayVariants = {
    rest: { 
      y: "100%", 
      opacity: 0,
      filter: "blur(4px)",
    },
    active: { 
      y: "0%", 
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const contentVariants = {
    rest: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    active: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      },
    },
  }

  const buttonVariants_motion = {
    rest: { scale: 1, y: 0 },
    active: shouldAnimate ? { 
      scale: 1.05, 
      y: -2,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }
    } : {},
    tap: shouldAnimate ? { scale: 0.95 } : {},
  }

  const favoriteVariants = {
    rest: { scale: 1, rotate: 0 },
    favorite: { 
      scale: [1, 1.3, 1], 
      rotate: [0, 10, -10, 0],
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    },
  }

  return (
    <motion.div
      ref={cardRef}
      data-slot="product-reveal-card"
      initial="rest"
      animate={isOverlayOpen ? "active" : "rest"}
      whileHover="active"
      variants={containerVariants}
      onClick={handleCardClick}
      onTouchStart={handleCardClick}
      className={cn(
        "relative w-80 rounded-2xl border border-border/50 bg-card text-card-foreground overflow-hidden",
        "shadow-lg shadow-black/5 cursor-pointer group",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="h-56 w-full object-cover"
          variants={imageVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
        {originalPrice && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"
          >
            {Math.round(((parseFloat(originalPrice.replace('$', '')) - parseFloat(price.replace('$', ''))) / parseFloat(originalPrice.replace('$', ''))) * 100)}% OFF
          </motion.div>
        )}
      </div>

      <div className="p-6 space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < Math.floor(rating) 
                    ? "text-yellow-400 fill-current" 
                    : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} ({reviewCount} reviews)
          </span>
        </div>

        <div className="space-y-1">
          <motion.h3 
            className="text-xl font-bold leading-tight tracking-tight"
            initial={{ opacity: 0.9 }}
            animate={isOverlayOpen ? { opacity: 1 } : { opacity: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      <motion.div
        variants={overlayVariants}
        animate={isOverlayOpen ? "active" : "rest"}
        className="absolute inset-0 bg-background/96 backdrop-blur-xl flex flex-col justify-end"
      >
        <div className="relative p-6 space-y-4">
          <motion.button
            data-slot="close-button"
            onClick={handleCloseOverlay}
            onTouchStart={handleCloseOverlay}
            variants={buttonVariants_motion}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className={cn(
              "absolute top-2 right-2 p-2 rounded-full backdrop-blur-sm border border-border/50",
              "bg-background/80 text-foreground hover:bg-background"
            )}
          >
            <X className="w-4 h-4" />
          </motion.button>

          <motion.div variants={contentVariants}>
            <h4 className="font-semibold mb-2">Product Details</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div variants={contentVariants}>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {features.map((feature, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-2 text-center">
                  <div className="font-semibold">{feature.title}</div>
                  <div className="text-muted-foreground">{feature.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={contentVariants} className="space-y-3">
            <motion.button
              onClick={handleAddToCart}
              onTouchStart={handleAddToCart}
              variants={buttonVariants_motion}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className={cn(
                buttonVariants({ variant: "default" }), 
                "w-full h-12 font-medium",
                "bg-gradient-to-r from-primary to-primary/90",
                "hover:from-primary/90 hover:to-primary",
                "shadow-lg shadow-primary/25"
              )}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </motion.button>
            
            <motion.button
              onClick={handleViewDetails}
              onTouchStart={handleViewDetails}
              variants={buttonVariants_motion}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className={cn(
                buttonVariants({ variant: "outline" }), 
                "w-full h-10 font-medium"
              )}
            >
              View Details
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}