import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy } from "lucide-react"
import { Footer } from "@/components/footer"

export default function VolleyballPage() {
  const leagues = [
    {
      name: "Volleyball Bundesliga",
      description: "Die höchste deutsche Spielklasse im Volleyball",
      image: "/volleyball-match-indoor-arena.jpg",
    },
    {
      name: "CEV Champions League",
      description: "Der prestigeträchtigste europäische Klubwettbewerb",
      image: "/volleyball-champions-league-final.jpg",
    },
    {
      name: "Volleyball Nations League",
      description: "Internationaler Wettbewerb der besten Nationalmannschaften",
      image: "/volleyball-match-indoor-arena.jpg",
    },
    {
      name: "Volleyball-WM",
      description: "Die Weltmeisterschaft im Volleyball",
      image: "/volleyball-champions-league-final.jpg",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/volleyball-match-indoor-arena.jpg')" }}
        />
        <div className="relative z-20 container mx-auto px-4 py-20 text-center text-primary-foreground">
          <div className="inline-block mb-6 p-4 bg-secondary/20 backdrop-blur-sm rounded-full">
            <Trophy className="h-16 w-16 text-secondary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Volleyball</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 text-balance">
            Dynamische Ballwechsel und spektakuläre Aktionen
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/kontakt?sport=volleyball">
              Tickets anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Leagues Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ligen & Turniere</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Die wichtigsten Volleyball-Wettbewerbe national und international
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leagues.map((league, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0 ? "md:col-span-2" : ""
              } shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="relative">
                <div className={`relative overflow-hidden ${index === 0 ? "h-96" : "h-72"}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  <img
                    src={league.image || "/placeholder.svg"}
                    alt={league.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <h3 className={`font-bold text-white mb-3 text-balance ${index === 0 ? "text-3xl" : "text-2xl"}`}>
                      {league.name}
                    </h3>
                    <p className="text-white/90 mb-6 text-balance">{league.description}</p>
                    <Button
                      asChild
                      size={index === 0 ? "lg" : "default"}
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      <Link href={`/kontakt?sport=volleyball&league=${encodeURIComponent(league.name)}`}>
                        Tickets anfragen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
