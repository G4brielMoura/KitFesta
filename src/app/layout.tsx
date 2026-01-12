import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mimosstudio.com.br"),

  title: {
    default: "Mimos Studio | Presentes Criativos e Personalizados",
    template: "%s | Mimos Studio",
  },

  description:
    "Mimos Studio é uma loja especializada em presentes criativos, personalizados e feitos com carinho. Ideal para datas especiais, surpreenda quem você ama.",

  applicationName: "Mimos Studio",

  keywords: [
    "Mimos Studio",
    "presentes personalizados",
    "presentes criativos",
    "lembrancinhas personalizadas",
    "presentes para datas especiais",
    "loja de presentes online",
    "artesanato personalizado",
  ],

  authors: [{ name: "Mimos Studio" }],
  creator: "Mimos Studio",
  publisher: "Mimos Studio",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.mimosstudio.com.br",
    siteName: "Mimos Studio",
    title: "Mimos Studio | Presentes Criativos e Personalizados",
    description:
      "Presentes personalizados e criativos feitos com carinho para tornar cada momento inesquecível.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mimos Studio - Presentes Personalizados",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mimos Studio | Presentes Criativos",
    description:
      "Surpreenda com presentes personalizados e criativos da Mimos Studio.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  category: "ecommerce",
}

export const viewport = {
  themeColor: "#0084ff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
