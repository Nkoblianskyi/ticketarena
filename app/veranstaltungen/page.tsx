"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy } from "lucide-react"
import { useState } from "react"

export default function EventsPage() {
  const sports = [
    {
      id: "fussball",
      name: "Fußball",
      slug: "fussball",
      description: "Die beliebteste Sportart der Welt mit den besten Ligen und Turnieren",
      image: "/vibrant-soccer-match.png",
      leagues: [
        "Bundesliga",
        "UEFA Champions League",
        "UEFA Europa League",
        "DFB-Pokal",
        "Premier League",
        "La Liga",
        "Serie A",
        "Ligue 1",
      ],
      featured: true,
    },
    {
      id: "tennis",
      name: "Tennis",
      slug: "tennis",
      description: "Grand Slams und internationale Turniere auf höchstem Niveau",
      image: "/tennis-match-professional.jpg",
      leagues: ["Grand Slam Turniere", "ATP Tour", "WTA Tour", "Davis Cup", "Laver Cup", "ATP Finals", "Masters 1000"],
      featured: true,
    },
    {
      id: "basketball",
      name: "Basketball",
      slug: "basketball",
      description: "Spektakuläre Action von NBA bis EuroLeague",
      image: "/basketball-arena.png",
      leagues: ["NBA", "EuroLeague", "Basketball Bundesliga (BBL)", "FIBA Weltmeisterschaft", "EuroCup", "NCAA"],
      featured: true,
    },
    {
      id: "handball",
      name: "Handball",
      slug: "handball",
      description: "Temporeiche Spiele der besten Handball-Ligen",
      image: "/handball-match.png",
      leagues: [
        "Handball-Bundesliga",
        "EHF Champions League",
        "EHF European League",
        "Handball-WM",
        "Handball-EM",
        "DHB-Pokal",
      ],
      featured: false,
    },
    {
      id: "volleyball",
      name: "Volleyball",
      slug: "volleyball",
      description: "Internationale Volleyball-Wettbewerbe und nationale Ligen",
      image: "/volleyball-match-indoor-arena.jpg",
      leagues: [
        "Volleyball Bundesliga",
        "CEV Champions League",
        "Volleyball Nations League",
        "Volleyball-WM",
        "Volleyball-EM",
        "DVV-Pokal",
      ],
      featured: false,
    },
    {
      id: "eishockey",
      name: "Eishockey",
      slug: "eishockey",
      description: "Rasante Eishockey-Action aus den Top-Ligen",
      image: "/ice-hockey-game-arena.jpg",
      leagues: ["Deutsche Eishockey Liga (DEL)", "NHL", "IIHF Weltmeisterschaft", "Champions Hockey League", "KHL"],
      featured: false,
    },
    {
      id: "formel1",
      name: "Formel 1",
      slug: "formel1",
      description: "Die Königsklasse des Motorsports mit Grand Prix weltweit",
      image: "/formula-1-racing-track.jpg",
      leagues: [
        "F1 Weltmeisterschaft",
        "Monaco Grand Prix",
        "Großer Preis von Deutschland",
        "Silverstone Grand Prix",
        "Monza Grand Prix",
        "Spa-Francorchamps",
      ],
      featured: false,
    },
    {
      id: "leichtathletik",
      name: "Leichtathletik",
      slug: "leichtathletik",
      description: "Weltklasse-Athleten bei internationalen Meetings",
      image: "/athletics-track-and-field-stadium.jpg",
      leagues: [
        "Diamond League",
        "ISTAF Berlin",
        "Leichtathletik-WM",
        "Leichtathletik-EM",
        "Olympische Spiele",
        "World Athletics Indoor Tour",
      ],
      featured: false,
    },
  ]

  const [activeFilter, setActiveFilter] = useState<string>("Alle")

  const filteredSports = activeFilter === "Alle" ? sports : sports.filter((sport) => sport.name === activeFilter)

  const featuredSports = filteredSports.filter((sport) => sport.featured)
  const regularSports = filteredSports.filter((sport) => !sport.featured)

  const sportCategories = ["Alle", ...sports.map((sport) => sport.name)]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/sports-stadium-crowd-atmosphere.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sportarten & Ligen</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
              Entdecken Sie alle Sportarten und Ligen. Wählen Sie Ihre Lieblingssportart und erfahren Sie mehr über
              verfügbare Tickets für verschiedene Ligen und Turniere.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {sportCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={
                  activeFilter === category
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full"
                    : "rounded-full bg-transparent"
                }
                onClick={() => setActiveFilter(category)}
              >
                {category === "Alle" ? "Alle Sportarten" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {featuredSports.length > 0 && (
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Beliebte Sportarten</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Die gefragtesten Sportarten mit den besten Ligen und Turnieren
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* First featured sport - large hero card */}
            {featuredSports[0] && (
              <div className="lg:col-span-8 group relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative h-[500px] sm:h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 z-10" />
                  <img
                    src={featuredSports[0].image || "/placeholder.svg"}
                    alt={featuredSports[0].name}
                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 p-6 sm:p-8 md:p-12 z-20 flex flex-col justify-end">
                    <div className="mb-6">
                      <span className="bg-secondary text-secondary-foreground px-5 py-2 rounded-full text-sm font-bold shadow-lg inline-block">
                        Top Sportart
                      </span>
                    </div>
                    <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-white text-balance">
                      {featuredSports[0].name}
                    </h3>
                    <p className="text-base sm:text-lg text-white/90 mb-6 max-w-xl text-balance line-clamp-2">
                      {featuredSports[0].description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-secondary font-bold text-sm mb-3 uppercase tracking-wide">
                        Verfügbare Ligen & Turniere:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredSports[0].leagues.slice(0, 6).map((league, idx) => (
                          <span
                            key={idx}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm"
                          >
                            {league}
                          </span>
                        ))}
                        {featuredSports[0].leagues.length > 6 && (
                          <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                            +{featuredSports[0].leagues.length - 6} weitere
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 self-start"
                    >
                      <Link href={`/sportarten/${featuredSports[0].slug}`}>
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Second and third featured sports - stacked cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {featuredSports.slice(1, 3).map((sport) => (
                <div
                  key={sport.id}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-[280px] sm:h-[290px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent z-10" />
                    <img
                      src={sport.image || "/placeholder.svg"}
                      alt={sport.name}
                      className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
                      <h3 className="font-bold text-xl sm:text-2xl mb-3 text-white text-balance">{sport.name}</h3>
                      <p className="text-sm text-white/90 mb-4 text-balance line-clamp-2">{sport.description}</p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {sport.leagues.slice(0, 3).map((league, idx) => (
                            <span
                              key={idx}
                              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-2 py-0.5 rounded-full text-xs"
                            >
                              {league}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 self-start"
                      >
                        <Link href={`/sportarten/${sport.slug}`}>
                          Details ansehen
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {activeFilter === "Alle" ? "Alle Sportarten" : activeFilter}
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Wählen Sie Ihre Sportart und entdecken Sie alle verfügbaren Ligen
            </p>
          </div>

          {regularSports.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularSports.map((sport, index) => (
                <Link
                  key={sport.id}
                  href={`/sportarten/${sport.slug}`}
                  className="group relative overflow-hidden rounded-3xl bg-background border-2 border-transparent hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <div className="relative">
                    <div className="relative overflow-hidden h-56">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <img
                        src={sport.image || "/placeholder.svg"}
                        alt={sport.name}
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {sport.name}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col" style={{ minHeight: "280px" }}>
                      <p className="text-sm text-muted-foreground mb-4 text-balance line-clamp-2 flex-grow">
                        {sport.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-secondary mb-3 uppercase tracking-wide">
                          Ligen & Turniere:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {sport.leagues.map((league, idx) => (
                            <span
                              key={idx}
                              className="bg-muted text-foreground px-3 py-1 rounded-full text-xs border border-border"
                            >
                              {league}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all mt-auto">
                        <span className="text-sm">Mehr erfahren</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Keine Sportarten in dieser Kategorie gefunden.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('/sports-stadium-crowd-atmosphere.jpg')] bg-cover bg-center opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sportart nicht gefunden?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
              Wir haben Zugang zu vielen weiteren Sportarten und Ligen. Kontaktieren Sie uns mit Ihrer Anfrage und wir
              finden die perfekten Tickets für Sie.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/kontakt">
                Individuelle Anfrage stellen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
