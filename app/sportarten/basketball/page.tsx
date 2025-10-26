import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Globe, Award } from "lucide-react"

export default function BasketballPage() {
  const leagues = [
    {
      name: "NBA",
      description: "Die beste Basketball-Liga der Welt mit den größten Stars des Sports",
      icon: Trophy,
      image: "/basketball-arena.png",
      featured: true,
    },
    {
      name: "EuroLeague",
      description: "Europas prestigeträchtigster Klubwettbewerb mit Top-Teams",
      icon: Globe,
      image: "/euroleague-basketball-arena.jpg",
      featured: true,
    },
    {
      name: "Basketball Bundesliga (BBL)",
      description: "Die höchste deutsche Spielklasse",
      icon: Trophy,
      image: "/basketball-bundesliga-game.jpg",
    },
    {
      name: "NCAA March Madness",
      description: "Das legendäre College-Basketball-Turnier",
      icon: Award,
      image: "/basketball-world-cup-arena.jpg",
    },
    {
      name: "FIBA Weltmeisterschaft",
      description: "Internationales Turnier der besten Nationalmannschaften",
      icon: Globe,
      image: "/basketball-arena.png",
    },
    {
      name: "Olympische Spiele",
      description: "Basketball bei den Olympischen Spielen",
      icon: Award,
      image: "/olympic-basketball-games.jpg",
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
            style={{ backgroundImage: "url('/basketball-arena.png')" }}
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <Trophy className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold text-primary-foreground uppercase tracking-wide">
                Dynamik und Athletik
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground text-balance">
              Basketball-Tickets
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 text-pretty max-w-2xl leading-relaxed">
              Erleben Sie Basketball auf höchstem Niveau. Von den NBA Finals über die EuroLeague bis zur BBL.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-lg"
            >
              <Link href="/kontakt?sport=basketball">
                Jetzt Tickets anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leagues Grid Section */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Verfügbare Ligen & Turniere</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl">
            Tickets für die besten Basketball-Wettbewerbe weltweit. Erleben Sie spektakuläre Dunks und packende Spiele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {leagues
            .filter((l) => l.featured)
            .map((league, index) => (
              <div
                key={league.name}
                className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "h-[600px]" : "h-[290px]"}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                  <img
                    src={league.image || "/placeholder.svg"}
                    alt={league.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 p-8 md:p-10 z-20 flex flex-col justify-end">
                    <div className="mb-4">
                      <league.icon className={`text-secondary ${index === 0 ? "h-12 w-12" : "h-8 w-8"}`} />
                    </div>
                    <h3
                      className={`font-bold text-white mb-3 text-balance ${
                        index === 0 ? "text-4xl md:text-5xl" : "text-2xl"
                      }`}
                    >
                      {league.name}
                    </h3>
                    <p className={`text-white/90 mb-6 text-balance ${index === 0 ? "text-lg" : "text-sm"}`}>
                      {league.description}
                    </p>
                    <Button
                      asChild
                      size={index === 0 ? "lg" : "default"}
                      className="w-fit bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      <Link href={`/kontakt?sport=basketball&league=${encodeURIComponent(league.name)}`}>
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
          {leagues
            .filter((l) => !l.featured)
            .map((league, index) => (
              <div
                key={league.name}
                className="group relative"
                style={{
                  transform: `translateY(${index % 2 === 0 ? "0" : "1.5rem"})`,
                }}
              >
                <div className="absolute inset-0 bg-secondary/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform" />
                <div className="relative bg-background border-2 border-border rounded-3xl overflow-hidden hover:border-secondary/40 transition-all hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                    <img
                      src={league.image || "/placeholder.svg"}
                      alt={league.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <league.icon className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-xl text-balance">{league.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-balance">{league.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                    >
                      <Link href={`/kontakt?sport=basketball&league=${encodeURIComponent(league.name)}`}>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Basketball live im Stadion</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="text-pretty leading-relaxed">
                Basketball ist einer der dynamischsten und unterhaltsamsten Sportarten der Welt. Die Geschwindigkeit des
                Spiels, die athletischen Leistungen und die mitreißende Atmosphäre in den Arenen machen jedes Spiel zu
                einem unvergesslichen Erlebnis.
              </p>
              <p className="text-pretty leading-relaxed">
                Ob Sie die Superstars der NBA in Action sehen, die Spannung der EuroLeague erleben oder die deutsche
                Basketball Bundesliga verfolgen möchten – wir bieten Ihnen Zugang zu den besten Plätzen. Unsere
                Partnerschaften ermöglichen es uns, Premium-Tickets für alle großen Basketball-Events anzubieten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
