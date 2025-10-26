import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Users, Shield } from "lucide-react"

export default function HomePage() {
  const events = [
    {
      title: "Fußball",
      description: "Bundesliga, Champions League und internationale Turniere",
      image: "/vibrant-soccer-match.png",
      href: "/sportarten/fussball",
    },
    {
      title: "Tennis",
      description: "Grand Slam Turniere und ATP/WTA Events",
      image: "/tennis-match-professional.jpg",
      href: "/sportarten/tennis",
    },
    {
      title: "Basketball",
      description: "NBA, EuroLeague und nationale Meisterschaften",
      image: "/basketball-arena.png",
      href: "/sportarten/basketball",
    },
    {
      title: "Handball",
      description: "Bundesliga und internationale Wettbewerbe",
      image: "/handball-match.png",
      href: "/sportarten/handball",
    },
    {
      title: "Volleyball",
      description: "Bundesliga und Champions League Volleyball",
      image: "/volleyball-match-indoor-arena.jpg",
      href: "/sportarten/volleyball",
    },
    {
      title: "Eishockey",
      description: "DEL, NHL und Weltmeisterschaften",
      image: "/ice-hockey-game-arena.jpg",
      href: "/sportarten/eishockey",
    },
    {
      title: "Formel 1",
      description: "Grand Prix Rennen weltweit",
      image: "/formula-1-racing-track.jpg",
      href: "/sportarten/formel1",
    },
    {
      title: "Leichtathletik",
      description: "Diamond League und internationale Meetings",
      image: "/athletics-track-and-field-stadium.jpg",
      href: "/sportarten/leichtathletik",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/sports-stadium-crowd-atmosphere.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Erleben Sie Sport live – Ihre Tickets für unvergessliche Momente
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 text-pretty">
              Von Fußball über Tennis bis Basketball – wir bringen Sie zu den größten Sportevents. Sichern Sie sich
              jetzt Ihre Tickets für die besten Plätze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/veranstaltungen">
                  Veranstaltungen entdecken
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/uber-uns">Mehr erfahren</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Warum TicketArena?</h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty">
            Wir sind Ihre vertrauenswürdige Quelle für Tickets zu den aufregendsten Sportveranstaltungen weltweit. Mit
            jahrelanger Erfahrung und einem engagierten Team sorgen wir dafür, dass Sie die besten Plätze zu fairen
            Preisen erhalten.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform" />
              <div className="relative bg-background border-2 border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <div className="bg-accent/10 p-4 rounded-2xl mb-4 inline-block">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Premium Events</h3>
                <p className="text-sm text-muted-foreground text-balance">
                  Zugang zu den größten Sportveranstaltungen weltweit
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-secondary/5 rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform" />
              <div className="relative bg-background border-2 border-secondary/20 rounded-2xl p-8 hover:border-secondary/40 transition-colors">
                <div className="bg-secondary/10 p-4 rounded-2xl mb-4 inline-block">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Persönlicher Service</h3>
                <p className="text-sm text-muted-foreground text-balance">
                  Individuelle Beratung für Ihre perfekte Sporterfahrung
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-accent/5 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform" />
              <div className="relative bg-background border-2 border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <div className="bg-accent/10 p-4 rounded-2xl mb-4 inline-block">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Sichere Buchung</h3>
                <p className="text-sm text-muted-foreground text-balance">
                  100% sichere Zahlungsabwicklung und garantierte Tickets
                </p>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/uber-uns">
              Mehr über uns erfahren
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Beliebte Sportveranstaltungen</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Entdecken Sie unsere Top-Sportarten und sichern Sie sich Ihre Tickets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 gap-4 mb-12">
            {/* Large featured card - Football */}
            <div className="sm:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl">
              <div className="relative h-[400px] sm:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={events[0].image || "/placeholder.svg"}
                  alt={events[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 sm:p-8 z-20 flex flex-col justify-end">
                  <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 self-start">
                    BELIEBT
                  </div>
                  <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 text-white">{events[0].title}</h3>
                  <p className="text-white/90 mb-6 text-balance text-sm sm:text-base lg:text-lg line-clamp-2">
                    {events[0].description}
                  </p>
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 self-start">
                    <Link href={events[0].href}>
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Tennis - top right */}
            <div className="sm:col-span-2 group relative overflow-hidden rounded-3xl">
              <div className="relative h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
                <img
                  src={events[1].image || "/placeholder.svg"}
                  alt={events[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
                  <h3 className="font-bold text-xl sm:text-2xl mb-2 text-white">{events[1].title}</h3>
                  <p className="text-white/90 mb-4 text-balance text-sm line-clamp-2">{events[1].description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 self-start"
                  >
                    <Link href={events[1].href}>
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Basketball */}
            <div className="group relative overflow-hidden rounded-3xl">
              <div className="relative h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={events[2].image || "/placeholder.svg"}
                  alt={events[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">{events[2].title}</h3>
                  <p className="text-white/90 mb-4 text-balance text-xs sm:text-sm line-clamp-2">
                    {events[2].description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 self-start"
                  >
                    <Link href={events[2].href}>
                      Mehr
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Handball */}
            <div className="group relative overflow-hidden rounded-3xl">
              <div className="relative h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={events[3].image || "/placeholder.svg"}
                  alt={events[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">{events[3].title}</h3>
                  <p className="text-white/90 mb-4 text-balance text-xs sm:text-sm line-clamp-2">
                    {events[3].description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 self-start"
                  >
                    <Link href={events[3].href}>
                      Mehr
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Volleyball */}
            <div className="group relative overflow-hidden rounded-3xl">
              <div className="relative h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={events[4].image || "/placeholder.svg"}
                  alt={events[4].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">{events[4].title}</h3>
                  <p className="text-white/90 mb-4 text-balance text-xs sm:text-sm line-clamp-2">
                    {events[4].description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 self-start"
                  >
                    <Link href={events[4].href}>
                      Mehr
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Eishockey */}
            <div className="group relative overflow-hidden rounded-3xl">
              <div className="relative h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={events[5].image || "/placeholder.svg"}
                  alt={events[5].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">{events[5].title}</h3>
                  <p className="text-white/90 mb-4 text-balance text-xs sm:text-sm line-clamp-2">
                    {events[5].description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 self-start"
                  >
                    <Link href={events[5].href}>
                      Mehr
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Formel 1 */}
            <div className="sm:col-span-2 group relative overflow-hidden rounded-3xl">
              <div className="relative h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
                <img
                  src={events[6].image || "/placeholder.svg"}
                  alt={events[6].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
                  <h3 className="font-bold text-xl sm:text-2xl mb-2 text-white">{events[6].title}</h3>
                  <p className="text-white/90 mb-4 text-balance text-sm line-clamp-2">{events[6].description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 self-start"
                  >
                    <Link href={events[6].href}>
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Leichtathletik */}
            <div className="sm:col-span-2 group relative overflow-hidden rounded-3xl">
              <div className="relative h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
                <img
                  src={events[7].image || "/placeholder.svg"}
                  alt={events[7].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
                  <h3 className="font-bold text-xl sm:text-2xl mb-2 text-white">{events[7].title}</h3>
                  <p className="text-white/90 mb-4 text-balance text-sm line-clamp-2">{events[7].description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 self-start"
                  >
                    <Link href={events[7].href}>
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/veranstaltungen">
                Alle Veranstaltungen ansehen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
