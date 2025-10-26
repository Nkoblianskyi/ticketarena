"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Ticket } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Ticket className="h-6 w-6 text-secondary" />
            <span className="text-foreground">TicketArena</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-secondary transition-colors">
              Startseite
            </Link>
            <Link href="/uber-uns" className="text-foreground hover:text-secondary transition-colors">
              Über uns
            </Link>
            <Link href="/veranstaltungen" className="text-foreground hover:text-secondary transition-colors">
              Veranstaltungen
            </Link>
            <Link href="/sportarten" className="text-foreground hover:text-secondary transition-colors">
              Sportarten
            </Link>
            <Link href="/kontakt" className="text-foreground hover:text-secondary transition-colors">
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Startseite
            </Link>
            <Link
              href="/uber-uns"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Über uns
            </Link>
            <Link
              href="/veranstaltungen"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Veranstaltungen
            </Link>
            <Link
              href="/sportarten"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sportarten
            </Link>
            <Link
              href="/kontakt"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
