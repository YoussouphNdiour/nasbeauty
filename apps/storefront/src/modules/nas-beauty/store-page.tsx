"use client"

import { CartProvider } from "@lib/cart-store"
import { Header } from "./header"
import { Hero } from "./hero"
import { ProductGrid } from "./product-grid"
import { CartDrawer } from "./cart-drawer"
import { WhatsAppFab } from "./whatsapp-fab"
import { Footer } from "./footer"

export function StorePage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--color-cream)" }}>
        <Header />
        <Hero />
        <main className="flex-1">
          <ProductGrid />
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppFab />
      </div>
    </CartProvider>
  )
}
