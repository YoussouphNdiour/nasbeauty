import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  title: "NAS BEAUTY - Skin Therapy",
  description:
    "Produits de soins pour la peau. Commandez par WhatsApp au Sénégal.",
  icons: { icon: "/brand/logo.png" },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-grey-80 antialiased">
        {props.children}
      </body>
    </html>
  )
}
