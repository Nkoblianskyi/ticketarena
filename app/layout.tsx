import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TicketArena - Tickets für Sportveranstaltungen",
  description: "Finden Sie die besten Tickets für Fußball, Tennis, Basketball und mehr",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
