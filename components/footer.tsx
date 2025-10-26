import Link from "next/link"
import { Ticket } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Ticket className="h-6 w-6 text-secondary" />
              <span className="text-foreground">TicketArena</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ihre erste Adresse für Tickets zu den besten Sportveranstaltungen.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-secondary transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/uber-uns" className="text-muted-foreground hover:text-secondary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/veranstaltungen" className="text-muted-foreground hover:text-secondary transition-colors">
                  Veranstaltungen
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-secondary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Sportarten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sportarten/fussball"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  Fußball
                </Link>
              </li>
              <li>
                <Link
                  href="/sportarten/tennis"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  Tennis
                </Link>
              </li>
              <li>
                <Link
                  href="/sportarten/basketball"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  Basketball
                </Link>
              </li>
              <li>
                <Link
                  href="/sportarten/handball"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  Handball
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-secondary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-secondary transition-colors">
                  Cookie-Richtlinie
                </Link>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ticketarenade.com. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
