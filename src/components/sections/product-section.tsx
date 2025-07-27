"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../../components/ui/button"
import { ProductRevealCard } from "../../components/blocks/product-reavel-card"

interface Product {
  name: string
  price: string
  originalPrice: string
  image: string
  description: string
  rating: number
  reviewCount: number
  features: { title: string; description: string }[]
}

export default function Page() {
  const initialProducts: Product[] = [
    {
      name: "Premium Wireless Headphones",
      price: "$199",
      originalPrice: "$299",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop",
      description: "Experience studio-quality sound with advanced noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
      rating: 4.8,
      reviewCount: 124,
      features: [
        { title: "30h Battery", description: "Long-lasting" },
        { title: "Noise Cancel", description: "Studio quality" },
      ],
    },
    {
      name: "Smartwatch Pro",
      price: "$249",
      originalPrice: "$349",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=600&fit=crop",
      description: "Track your fitness, stay connected, and enjoy a sleek design with this advanced smartwatch. Up to 7 days of battery life.",
      rating: 4.6,
      reviewCount: 89,
      features: [
        { title: "7-Day Battery", description: "Extended use" },
        { title: "Fitness Tracking", description: "Heart rate & steps" },
      ],
    },
    {
      name: "4K Ultra HD Camera",
      price: "$399",
      originalPrice: "$499",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc49?w=800&h=600&fit=crop",
      description: "Capture every moment in stunning detail with this 4K camera, featuring advanced stabilization and low-light performance.",
      rating: 4.9,
      reviewCount: 156,
      features: [
        { title: "4K Resolution", description: "Crystal clear" },
        { title: "Stabilization", description: "Smooth footage" },
      ],
    },
  ]

  // Initialize visibleProducts based on screen size
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([])
  const [showMore, setShowMore] = useState(true)

  useEffect(() => {
    // Check if the screen is medium or larger (md: 768px and above)
    const isMediumOrLarger = window.matchMedia("(min-width: 768px)").matches
    if (isMediumOrLarger) {
      setVisibleProducts(initialProducts)
      setShowMore(false)
    } else {
      setVisibleProducts([initialProducts[0]])
      setShowMore(true)
    }
  }, [])

  const handleShowMore = () => {
    setVisibleProducts(initialProducts)
    setShowMore(false)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              HOT SALES
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Grab these amazing deals before they're gone!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {visibleProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
                className="mx-auto"
              >
                <ProductRevealCard
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  description={product.description}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  features={product.features}
                  onAdd={() => console.log(`Added ${product.name} to cart`)}
                  onFavorite={() => console.log(`Favorited ${product.name}`)}
                  enableAnimations={true}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-8 text-center">
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="md:hidden"
              >
                <Button
                  size="lg"
                  className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
                  onClick={handleShowMore}
                >
                  Show More
                </Button>
              </motion.div>
            )}
            {!showMore && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
                >
                  All Products
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
} 