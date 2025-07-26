"use client"

import { ProductRevealCard } from "../../components/blocks/product-reavel-card"

export default function Page() {
  return (
    <div className="min-h-screen p-4 bg-background flex items-center justify-center">
      <ProductRevealCard />
      <ProductRevealCard />
      <ProductRevealCard />
    </div>
  )
}
