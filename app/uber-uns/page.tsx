import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Shield, Heart, Globe, Star } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Trophy,
      title: "Exzellenz",
      description:
        "Wir streben nach höchster Qualität in allem, was wir tun – von der Ticketauswahl bis zum Kundenservice.",
    },
    {
      icon: Heart,
      title: "Leidenschaft",
      description:
        "Sport ist unsere Leidenschaft. Wir lieben es, unvergessliche Erlebnisse für unsere Kunden zu schaffen.",
    },
    {
      icon: Shield,
      title: "Vertrauen",
      description: "Transparenz und Sicherheit stehen bei uns an erster Stelle. Ihre Zufriedenheit ist unser Erfolg.",
    },
    {
      icon: Globe,
      title: "Vielfalt",
      description: "Von lokalen Derbys bis zu internationalen Turnieren – wir bieten Zugang zu Sportevents weltweit.",
    },
  ]

  // const team = [
  //   {
  //     name: "Michael Schmidt",
  //     role: "Geschäftsführer",
  //     image: "/professional-businessman-portrait.png",
  //     description: "20 Jahre Erfahrung in der Sportbranche",
  //   },
  //   {
  //     name: "Sarah Weber",
  //     role: "Kundenbetreuung",
  //     image: "/professional-business-woman-portrait.png",
  //     description: "Expertin für Premium-Tickets",
  //   },
  //   {
  //     name: "Thomas Müller",
  //     role: "Event-Koordinator",
  //     image: "/professional-business-man-portrait-2.jpg",
  //     description: "Spezialist für internationale Events",
  //   },
  //   {
  //     name: "Lisa Hoffmann",
  //     role: "Marketing",
  //     image: "/professional-business-woman-portrait-2.jpg",
  //     description: "Kreative Köpfin hinter unseren Kampagnen",
  //   },
  // ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/sports-stadium-crowd-atmosphere.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Über TicketArena</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
              Seit über 15 Jahren bringen wir Sportfans zu den aufregendsten Events der Welt. Unsere Mission ist es,
              jedem den Zugang zu unvergesslichen Sporterlebnissen zu ermöglichen.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Unsere Geschichte</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty">
                TicketArena wurde 2009 aus einer einfachen Idee geboren: Sport verbindet Menschen. Was als kleines
                Projekt begann, hat sich zu einem der führenden Ticketanbieter für Sportveranstaltungen in Deutschland
                entwickelt.
              </p>
              <p className="text-pretty">
                Heute arbeiten wir mit den größten Sportvereinen, Ligen und Veranstaltern zusammen, um unseren Kunden
                Zugang zu Premium-Events zu verschaffen. Von der Bundesliga über die Champions League bis hin zu den
                Grand Slam Turnieren – wir sind Ihr Partner für unvergessliche Sporterlebnisse.
              </p>
              <p className="text-pretty">
                Unser engagiertes Team aus Sportbegeisterten arbeitet täglich daran, Ihnen nicht nur Tickets, sondern
                komplette Erlebnisse zu bieten. Wir verstehen, dass jedes Event einzigartig ist und behandeln jede
                Anfrage mit der Aufmerksamkeit, die sie verdient.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <img
              src="/sports-stadium-atmosphere-crowd-celebration.jpg"
              alt="Sportveranstaltung"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Unsere Werte</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative"
                style={{
                  transform: `translateY(${index % 2 === 0 ? "0" : "1.5rem"})`,
                }}
              >
                <div className="absolute inset-0 bg-secondary/5 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform" />
                <div className="relative bg-background border-2 border-border rounded-3xl p-8 hover:border-secondary/40 transition-all hover:shadow-xl">
                  <div className="bg-secondary/10 p-5 rounded-2xl w-fit mb-6">
                    <value.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-primary-foreground/80">Jahre Erfahrung</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50.000+</div>
              <p className="text-primary-foreground/80">Zufriedene Kunden</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <p className="text-primary-foreground/80">Events pro Jahr</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-primary-foreground/80">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-accent/10 rounded-lg p-8 md:p-12 text-center">
          <Star className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bereit für Ihr nächstes Sporterlebnis?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Kontaktieren Sie uns noch heute und lassen Sie uns gemeinsam Ihr perfektes Event finden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/kontakt">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/veranstaltungen">Veranstaltungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
