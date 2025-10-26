import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Award, Globe } from "lucide-react"

export default function TennisPage() {
  const tournaments = [
    {
      name: "Grand Slam Turniere",
      description: "Wimbledon, French Open, US Open und Australian Open - die vier prestigeträchtigsten Tennis-Events",
      icon: Trophy,
      image: "/grand-slam-tennis-wimbledon.jpg",
      featured: true,
    },
    {
      name: "ATP Masters 1000",
      description: "Die neun wichtigsten Turniere der ATP Tour nach den Grand Slams",
      icon: Award,
      image: "/atp-masters-1000-tournament.jpg",
      featured: true,
    },
    {
      name: "WTA Finals",
      description: "Das Saisonfinale der besten acht Spielerinnen",
      icon: Trophy,
      image: "/wta-finals-womens-tennis.jpg",
    },
    {
      name: "ATP Finals",
      description: "Jahresabschluss der Top 8 Herren-Spieler",
      icon: Trophy,
      image: "/atp-finals-mens-tennis.jpg",
    },
    {
      name: "Davis Cup",
      description: "Der prestigeträchtigste Mannschaftswettbewerb im Herren-Tennis",
      icon: Globe,
      image: "/davis-cup-team-tennis.jpg",
    },
    {
      name: "Laver Cup",
      description: "Team Europa gegen Team Welt im Ryder-Cup-Format",
      icon: Globe,
      image: "/laver-cup-team-competition.jpg",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/98 to-primary/95 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: "url('/grand-slam-tennis-wimbledon.jpg')" }}
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <Trophy className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold text-primary-foreground uppercase tracking-wide">
                Eleganz und Präzision
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground text-balance">Tennis-Tickets</h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 text-pretty max-w-2xl leading-relaxed">
              Erleben Sie Tennis auf höchstem Niveau. Von Wimbledon über die French Open bis zu den ATP Finals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-lg"
            >
              <Link href="/kontakt?sport=tennis">
                Jetzt Tickets anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tournaments Grid Section */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Verfügbare Turniere</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl">
            Tickets für die prestigeträchtigsten Tennis-Turniere weltweit. Erleben Sie die Weltspitze hautnah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {tournaments
            .filter((t) => t.featured)
            .map((tournament, index) => (
              <div
                key={tournament.name}
                className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "h-[600px]" : "h-[290px]"}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                  <img
                    src={tournament.image || "/placeholder.svg"}
                    alt={tournament.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 p-8 md:p-10 z-20 flex flex-col justify-end">
                    <div className="mb-4">
                      <tournament.icon className={`text-secondary ${index === 0 ? "h-12 w-12" : "h-8 w-8"}`} />
                    </div>
                    <h3
                      className={`font-bold text-white mb-3 text-balance ${
                        index === 0 ? "text-4xl md:text-5xl" : "text-2xl"
                      }`}
                    >
                      {tournament.name}
                    </h3>
                    <p className={`text-white/90 mb-6 text-balance ${index === 0 ? "text-lg" : "text-sm"}`}>
                      {tournament.description}
                    </p>
                    <Button
                      asChild
                      size={index === 0 ? "lg" : "default"}
                      className="w-fit bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      <Link href={`/kontakt?sport=tennis&league=${encodeURIComponent(tournament.name)}`}>
                        Tickets anfragen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tournaments
            .filter((t) => !t.featured)
            .map((tournament, index) => (
              <div
                key={tournament.name}
                className="group relative"
                style={{
                  transform: `translateY(${index % 2 === 0 ? "0" : "1.5rem"})`,
                }}
              >
                <div className="absolute inset-0 bg-secondary/5 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
                <div className="relative bg-background border-2 border-border rounded-3xl overflow-hidden hover:border-secondary/40 transition-all hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                    <img
                      src={tournament.image || "/placeholder.svg"}
                      alt={tournament.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <tournament.icon className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-xl text-balance">{tournament.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-balance">{tournament.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                    >
                      <Link href={`/kontakt?sport=tennis&league=${encodeURIComponent(tournament.name)}`}>
                        Tickets anfragen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Tennis live erleben</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="text-pretty leading-relaxed">
                Tennis gehört zu den elegantesten und spannendsten Sportarten der Welt. Die Atmosphäre bei einem Grand
                Slam Turnier ist einzigartig – von der Tradition Wimbledons über die rote Asche von Roland Garros bis
                zur elektrischen Stimmung bei den US Open.
              </p>
              <p className="text-pretty leading-relaxed">
                Wir bieten Ihnen Zugang zu den besten Plätzen bei allen großen Tennis-Events. Ob Sie die Weltspitze auf
                dem Centre Court erleben oder aufstrebende Talente in den frühen Runden verfolgen möchten – wir finden
                die perfekten Tickets für Ihr Tennis-Erlebnis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
