export interface Product {
  id: string
  name: string
  category: string
  image: string
  badge?: string
}

export const products: Product[] = [
  // Produits NAS BEAUTY (marque propre)
  {
    id: "gommage-nas",
    name: "Gommage Nettoyant Visage - Argile Rouge",
    category: "Soins Visage",
    image: "/products/gommage-nas.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "gommage-nettoyant",
    name: "Gommage Nettoyant",
    category: "Soins Visage",
    image: "/products/gommage-nettoyant.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "mousse-anti-imperfections",
    name: "Mousse Nettoyante Anti-Imperfections",
    category: "Soins Visage",
    image: "/products/mousse-anti-imperfections.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "mousse-nettoyant",
    name: "Mousse Nettoyante Visage",
    category: "Soins Visage",
    image: "/products/mousse-nettoyant.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "savon-riz",
    name: "Savon au Riz - Éclat Naturel",
    category: "Savons",
    image: "/products/savon-riz.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "trio-nila",
    name: "Trio Réparateur Actif Nila (Savon + Huile + Poudre)",
    category: "Packs",
    image: "/products/trio-nila-savon-huile-poudre.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "gommage-creme-pommade",
    name: "Pack Gommage + Crème + Pommade",
    category: "Packs",
    image: "/products/gommage-creme-pommade.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "gommage-creme-pommade-nas",
    name: "Pack Gommage + Crème + Pommade NAS",
    category: "Packs",
    image: "/products/gommage-creme-pommade-nas.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "savon-creme-pommade",
    name: "Savon + Crème de Visage + Pommade",
    category: "Packs",
    image: "/products/savon-creme-de-visage-pommade.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "savon-carotte-gommage-creme",
    name: "Savon Carotte + Gommage Nettoyant + Crème de Visage",
    category: "Packs",
    image: "/products/savon-carotte-gommage-nettoyant-crme-de-visage.jpeg",
    badge: "NAS BEAUTY",
  },
  {
    id: "savon-noir-creme-visage",
    name: "Savon Noir + Crème de Visage",
    category: "Packs",
    image: "/products/savon-noir-creme-visage.jpeg",
    badge: "NAS BEAUTY",
  },

  // Marques internationales
  {
    id: "cerave",
    name: "CeraVe SA Smoothing Cleanser 236ml",
    category: "Nettoyants",
    image: "/products/cerave.jpeg",
  },
  {
    id: "cerave-2",
    name: "CeraVe Soin Visage",
    category: "Nettoyants",
    image: "/products/cerave-2.jpeg",
  },
  {
    id: "eucerin-oil-control",
    name: "Eucerin Oil Control Sun Gel-Crème SPF 50+",
    category: "Protection Solaire",
    image: "/products/eucerin-oil-control.jpeg",
  },
  {
    id: "la-roche-posay",
    name: "La Roche-Posay",
    category: "Soins Visage",
    image: "/products/la-roche-posay.jpeg",
  },
  {
    id: "serum-the-ordinary",
    name: "Sérum The Ordinary",
    category: "Sérums",
    image: "/products/serum-the-ordinary.jpeg",
  },
  {
    id: "medicube",
    name: "Medicube",
    category: "Soins Visage",
    image: "/products/medicube.jpeg",
  },
  {
    id: "medix-55",
    name: "Medix 5.5",
    category: "Soins Corps",
    image: "/products/medix-55.jpeg",
  },
  {
    id: "mixa",
    name: "Mixa",
    category: "Soins Corps",
    image: "/products/mixa.jpeg",
  },
  {
    id: "gamme-mixa",
    name: "Gamme Mixa",
    category: "Soins Corps",
    image: "/products/gamme-mixa.jpeg",
  },
  {
    id: "gamme-mixa-2",
    name: "Gamme Mixa - Coffret",
    category: "Packs",
    image: "/products/gamme-mixa-2.jpeg",
  },
  {
    id: "johnsons",
    name: "Johnson's",
    category: "Soins Corps",
    image: "/products/johnsons.jpeg",
  },
  {
    id: "topicream",
    name: "Topicrem",
    category: "Soins Corps",
    image: "/products/topicream.jpeg",
  },
  {
    id: "vaseline",
    name: "Vaseline Healthy Bright Daily Brightening",
    category: "Soins Corps",
    image: "/products/vaseline.jpeg",
  },
  {
    id: "heals-softens",
    name: "Palmer's Cocoa Butter Formula",
    category: "Soins Corps",
    image: "/products/heals-softens.jpeg",
  },
]

export const categories = [...new Set(products.map((p) => p.category))]

export const WHATSAPP_NUMBER = "221783165312"

export function buildWhatsAppUrl(
  items: { product: Product; qty: number }[],
  phone: string
): string {
  const lines = items.map(
    (item) => `- ${item.product.name} x${item.qty}`
  )
  const message = [
    `Bonjour NAS BEAUTY ! Je souhaite commander :`,
    ``,
    ...lines,
    ``,
    `Mon numéro : ${phone}`,
    `Merci !`,
  ].join("\n")

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
