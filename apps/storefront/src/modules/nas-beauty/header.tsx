"use client"

import Image from "next/image"
import { useCart } from "@lib/cart-store"

export function Header() {
  const { count, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-grey-10">
      <div className="content-container flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/logo.png"
            alt="NAS BEAUTY"
            width={48}
            height={48}
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
          />
          <div>
            <h1 className="text-lg sm:text-xl font-bold leading-tight" style={{ color: "var(--color-rose-dark)" }}>
              NAS BEAUTY
            </h1>
            <p className="text-xs tracking-widest text-grey-40 uppercase hidden sm:block">
              Skin Therapy
            </p>
          </div>
        </div>

        <button
          onClick={openCart}
          className="relative p-2 rounded-full hover:bg-grey-5 transition-colors"
          aria-label="Panier"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {count > 0 && (
            <span
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center"
              style={{ backgroundColor: "var(--color-rose)" }}
            >
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
