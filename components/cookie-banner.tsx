"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2 text-card-foreground">Cookie-Einstellungen</h3>
            <p className="text-sm text-muted-foreground">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die Nutzung unserer Website stimmen Sie
              unserer{" "}
              <Link href="/cookie-policy" className="text-secondary hover:underline">
                Cookie-Richtlinie
              </Link>{" "}
              und{" "}
              <Link href="/datenschutz" className="text-secondary hover:underline">
                Datenschutzerklärung
              </Link>{" "}
              zu.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={declineCookies} variant="outline" size="sm">
              Ablehnen
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
