"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@lib/cart-store"
import { buildWhatsAppUrl } from "@lib/products"

export function CartDrawer() {
  const { items, count, isOpen, closeCart, removeItem, updateQty, clearCart } =
    useCart()
  const [phone, setPhone] = useState("")
  const [step, setStep] = useState<"cart" | "phone">("cart")

  const handleOrder = () => {
    if (step === "cart") {
      setStep("phone")
      return
    }
    if (!phone.trim()) return
    const url = buildWhatsAppUrl(items, phone)
    window.open(url, "_blank")
    clearCart()
    setStep("cart")
    closeCart()
  }

  const handleClose = () => {
    closeCart()
    setStep("cart")
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={handleClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-grey-10">
          <h2 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            {step === "cart" ? `Panier (${count})` : "Vos coordonnées"}
          </h2>
          <button
            onClick={handleClose}
            className="p-1 rounded-full hover:bg-grey-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {step === "cart" && items.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-grey-40">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <p className="text-sm">Votre panier est vide</p>
            </div>
          )}

          {step === "cart" &&
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 py-3 border-b border-grey-5 last:border-0"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-grey-5 flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-grey-80 truncate">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-grey-40">{item.product.category}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.product.id, item.qty - 1)}
                      className="w-6 h-6 rounded-full bg-grey-10 flex items-center justify-center text-sm hover:bg-grey-20"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.product.id, item.qty + 1)}
                      className="w-6 h-6 rounded-full bg-grey-10 flex items-center justify-center text-sm hover:bg-grey-20"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="text-grey-30 hover:text-red-500 transition-colors self-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            ))}

          {step === "phone" && (
            <div className="flex flex-col gap-4">
              <p className="text-sm text-grey-50">
                Entrez votre numéro de téléphone pour finaliser votre commande sur WhatsApp.
              </p>
              <div>
                <label className="text-sm font-medium text-grey-70 mb-1 block">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+221 77 123 45 67"
                  className="w-full px-4 py-3 border border-grey-20 rounded-xl text-base
                    focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ "--tw-ring-color": "var(--color-rose)" } as React.CSSProperties}
                  autoFocus
                />
              </div>
              <button
                onClick={() => setStep("cart")}
                className="text-sm text-grey-50 underline self-start"
              >
                Retour au panier
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-grey-10">
            <button
              onClick={handleOrder}
              disabled={step === "phone" && !phone.trim()}
              className="btn-whatsapp w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {step === "cart"
                ? "Commander par WhatsApp"
                : "Envoyer la commande"}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
