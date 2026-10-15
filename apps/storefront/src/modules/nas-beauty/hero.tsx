"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf6f0] via-[#f9e8de] to-[#f0d5c4]">
      <div className="content-container py-12 sm:py-20 flex flex-col items-center text-center gap-6">
        <Image
          src="/brand/logo.png"
          alt="NAS BEAUTY Skin Therapy"
          width={160}
          height={160}
          className="w-28 h-28 sm:w-40 sm:h-40 rounded-full shadow-xl"
          priority
        />
        <div>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            style={{ color: "var(--color-rose-dark)" }}
          >
            NAS BEAUTY
          </h2>
          <p
            className="text-lg sm:text-2xl mt-1 italic"
            style={{ color: "var(--color-gold)", fontFamily: "'Playfair Display', serif" }}
          >
            Skin Therapy
          </p>
        </div>
        <p className="text-grey-50 max-w-md text-sm sm:text-base">
          Des soins authentiques pour sublimer votre peau.
          Commandez facilement par WhatsApp.
        </p>
        <a
          href="#produits"
          className="btn-rose mt-2 inline-flex items-center gap-2"
        >
          Voir nos produits
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  )
}
