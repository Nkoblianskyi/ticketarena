"use client"

import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ContactPageContent() {
  const searchParams = useSearchParams()
  const sport = searchParams.get("sport") || undefined
  const event = searchParams.get("event") || undefined

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/sports-stadium-crowd-atmosphere.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Kontaktieren Sie uns</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
              Haben Sie Fragen oder möchten Sie Tickets anfragen? Unser Team steht Ihnen gerne zur Verfügung.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="group relative">
            <div className="absolute inset-0 bg-secondary/5 rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform" />
            <div className="relative bg-background border-2 border-secondary/20 rounded-3xl p-8 hover:border-secondary/40 transition-all hover:shadow-xl">
              <div className="bg-secondary/10 p-5 rounded-2xl w-fit mx-auto mb-6">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">E-Mail</h3>
              <p className="text-sm text-muted-foreground mb-3 text-center">Schreiben Sie uns</p>
              <p className="text-secondary hover:underline font-bold text-center block">info@ticketarenade.com</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform" />
            <div className="relative bg-background border-2 border-accent/20 rounded-3xl p-8 hover:border-accent/40 transition-all hover:shadow-xl">
              <div className="bg-accent/10 p-5 rounded-2xl w-fit mx-auto mb-6">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">Telefon</h3>
              <p className="text-sm text-muted-foreground mb-3 text-center">Rufen Sie uns an</p>
              <p className="text-accent hover:underline font-bold text-center block">+49 89 7264 3891</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-secondary/5 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
            <div className="relative bg-background border-2 border-secondary/20 rounded-3xl p-8 hover:border-secondary/40 transition-all hover:shadow-xl">
              <div className="bg-secondary/10 p-5 rounded-2xl w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">Öffnungszeiten</h3>
              <p className="text-sm text-muted-foreground mb-2 text-center">Mo-Fr: 9:00 - 18:00</p>
              <p className="text-sm text-muted-foreground text-center">Sa: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-balance">Ticket-Anfrage</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen mit einem individuellen Angebot.
            </p>
            <ContactForm defaultSport={sport} defaultEvent={event} />
          </div>

          {/* Additional Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-balance">Unser Standort</h2>
            <p className="text-muted-foreground mb-6 text-pretty">
              Besuchen Sie uns in unserem Büro in München oder kontaktieren Sie uns telefonisch oder per E-Mail.
            </p>

            <div className="relative group mb-6">
              <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform" />
              <div className="relative bg-background border-2 border-border rounded-3xl p-6 hover:border-accent/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-4 rounded-2xl">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-lg">Adresse</h3>
                    <p className="text-sm text-muted-foreground">TicketArena GmbH</p>
                    <p className="text-sm text-muted-foreground">Musterstraße 123</p>
                    <p className="text-sm text-muted-foreground">80331 München</p>
                    <p className="text-sm text-muted-foreground">Deutschland</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-3xl p-8 border-2 border-border">
              <h3 className="font-bold mb-6 text-lg">Häufig gestellte Fragen</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2 text-secondary">Wie schnell erhalte ich eine Antwort?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wir antworten in der Regel innerhalb von 24 Stunden auf alle Anfragen.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-secondary">Kann ich Tickets telefonisch bestellen?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ja, Sie können uns während unserer Öffnungszeiten anrufen und Tickets direkt bestellen.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-secondary">Bieten Sie Gruppenrabatte an?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ja, für Gruppen ab 10 Personen bieten wir spezielle Konditionen. Kontaktieren Sie uns für ein
                    individuelles Angebot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Lädt...</div>}>
      <ContactPageContent />
    </Suspense>
  )
}
