"use client"

import { useState } from "react"
import Image from "next/image"
import { products, categories, type Product } from "@lib/products"
import { useCart } from "@lib/cart-store"

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="card-product flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-grey-5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.badge && (
          <span
            className="absolute top-2 left-2 text-[10px] font-bold text-white px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "var(--color-rose)" }}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <span className="text-[10px] uppercase tracking-wider text-grey-40 mb-1">
          {product.category}
        </span>
        <h3 className="text-sm font-medium text-grey-80 leading-snug flex-1">
          {product.name}
        </h3>
        <button
          onClick={handleAdd}
          className={`mt-3 w-full py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            added
              ? "bg-green-500 text-white"
              : "bg-grey-90 text-white hover:bg-grey-70 active:scale-95"
          }`}
        >
          {added ? "Ajouté !" : "Ajouter au panier"}
        </button>
      </div>
    </div>
  )
}

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  return (
    <section id="produits" className="content-container py-10 sm:py-16">
      <h2
        className="text-2xl sm:text-3xl font-bold text-center mb-8"
        style={{ color: "var(--color-rose-dark)" }}
      >
        Nos Produits
      </h2>

      {/* Category filters */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-6 justify-start sm:justify-center">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            !activeCategory
              ? "text-white"
              : "bg-white text-grey-60 hover:bg-grey-10"
          }`}
          style={!activeCategory ? { backgroundColor: "var(--color-rose)" } : {}}
        >
          Tout
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? "text-white"
                : "bg-white text-grey-60 hover:bg-grey-10"
            }`}
            style={
              activeCategory === cat
                ? { backgroundColor: "var(--color-rose)" }
                : {}
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
