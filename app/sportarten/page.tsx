import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy } from "lucide-react"
import Image from "next/image"

export default function SportartenPage() {
  const sports = [
    {
      name: "Fußball",
      slug: "fussball",
      description: "Die beliebteste Sportart der Welt mit den besten Ligen und Turnieren",
      image: "/vibrant-soccer-match.png",
      leagues: ["Bundesliga", "Champions League", "Europa League", "DFB-Pokal"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Tennis",
      slug: "tennis",
      description: "Eleganz und Spannung auf den größten Courts der Welt",
      image: "/tennis-match-professional.jpg",
      leagues: ["Grand Slams", "ATP Tour", "WTA Tour", "Davis Cup"],
      color: "from-yellow-500/20 to-amber-500/20",
    },
    {
      name: "Basketball",
      slug: "basketball",
      description: "Dynamischer Sport mit spektakulären Spielzügen",
      image: "/basketball-arena.png",
      leagues: ["NBA", "EuroLeague", "BBL", "FIBA"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      name: "Handball",
      slug: "handball",
      description: "Schnell, körperbetont und voller Emotionen",
      image: "/handball-match.png",
      leagues: ["Handball-Bundesliga", "EHF Champions League", "EHF Cup"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Volleyball",
      slug: "volleyball",
      description: "Teamwork und Athletik auf höchstem Niveau",
      image: "/volleyball-match-indoor-arena.jpg",
      leagues: ["Volleyball Bundesliga", "CEV Champions League", "FIVB"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Eishockey",
      slug: "eishockey",
      description: "Rasante Action auf dem Eis",
      image: "/ice-hockey-game-arena.jpg",
      leagues: ["DEL", "NHL", "IIHF WM", "Champions Hockey League"],
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      name: "Formel 1",
      slug: "formel1",
      description: "Geschwindigkeit und Präzision im Motorsport",
      image: "/formula-1-racing-track.jpg",
      leagues: ["F1 Weltmeisterschaft", "Grand Prix Rennen"],
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      name: "Leichtathletik",
      slug: "leichtathletik",
      description: "Die Königin der Sportarten mit vielfältigen Disziplinen",
      image: "/athletics-track-and-field-stadium.jpg",
      leagues: ["Diamond League", "ISTAF", "Weltmeisterschaften", "Olympia"],
      color: "from-indigo-500/20 to-purple-500/20",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Trophy className="h-5 w-5" />
              <span className="text-sm font-medium">8 Sportarten verfügbar</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Alle Sportarten</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Entdecken Sie unsere vielfältige Auswahl an Sportarten und sichern Sie sich Tickets für die besten Ligen
              und Turniere weltweit
            </p>
          </div>
        </div>
      </section>

      {/* Sports Grid - Bento Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Featured Sport - Large */}
          <div className="mb-8">
            <Link
              href={`/sportarten/${sports[0].slug}`}
              className="group block relative overflow-hidden rounded-3xl h-[500px] md:h-[600px]"
            >
              <Image
                src={sports[0].image || "/placeholder.svg"}
                alt={sports[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${sports[0].color} backdrop-blur-sm border border-white/20 mb-4 self-start`}
                >
                  <span className="text-sm font-medium text-white">Beliebteste Sportart</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{sports[0].name}</h2>
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">{sports[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {sports[0].leagues.map((league) => (
                    <span
                      key={league}
                      className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm"
                    >
                      {league}
                    </span>
                  ))}
                </div>
                <Button size="lg" className="self-start group-hover:gap-3 transition-all">
                  Mehr erfahren
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </Link>
          </div>

          {/* Grid Layout - 2 Medium + 2 Small */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {sports.slice(1, 3).map((sport) => (
              <Link
                key={sport.slug}
                href={`/sportarten/${sport.slug}`}
                className="group block relative overflow-hidden rounded-3xl"
              >
                <div className="relative h-[350px] sm:h-[400px]">
                  <Image
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">{sport.name}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 line-clamp-2">
                      {sport.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {sport.leagues.slice(0, 3).map((league) => (
                        <span
                          key={league}
                          className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm"
                        >
                          {league}
                        </span>
                      ))}
                    </div>
                    <Button variant="secondary" className="self-start group-hover:gap-3 transition-all">
                      Entdecken
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Asymmetric Grid - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {sports.slice(3, 6).map((sport, index) => (
              <Link
                key={sport.slug}
                href={`/sportarten/${sport.slug}`}
                className="group block relative overflow-hidden rounded-3xl"
              >
                <div className={`relative ${index === 1 ? "h-[350px] sm:h-[450px] lg:h-[500px]" : "h-[350px]"}`}>
                  <Image
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{sport.name}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/90 mb-3 line-clamp-2">
                      {sport.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {sport.leagues.slice(0, 2).map((league) => (
                        <span
                          key={league}
                          className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs"
                        >
                          {league}
                        </span>
                      ))}
                    </div>
                    <Button size="sm" variant="secondary" className="self-start group-hover:gap-2 transition-all">
                      Details
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Row - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sports.slice(6).map((sport) => (
              <Link
                key={sport.slug}
                href={`/sportarten/${sport.slug}`}
                className="group block relative overflow-hidden rounded-3xl"
              >
                <div className="relative h-[350px]">
                  <Image
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">{sport.name}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 line-clamp-2">
                      {sport.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {sport.leagues.slice(0, 2).map((league) => (
                        <span
                          key={league}
                          className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm"
                        >
                          {league}
                        </span>
                      ))}
                    </div>
                    <Button variant="secondary" className="self-start group-hover:gap-3 transition-all">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[url('/abstract-sports-pattern.png')] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                Finden Sie nicht, was Sie suchen?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 text-balance">
                Wir haben Zugang zu vielen weiteren Sportarten und Veranstaltungen. Kontaktieren Sie uns mit Ihrer
                Anfrage!
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">
                  Jetzt anfragen
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
