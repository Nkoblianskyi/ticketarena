import { Footer } from "@/components/footer"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Cookie-Richtlinie</h1>
          <p className="text-lg text-muted-foreground">Letzte Aktualisierung: Januar 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold mb-4">Was sind Cookies?</h2>
          <p className="text-muted-foreground mb-4">
            Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät gespeichert werden, wenn Sie eine
            Website besuchen. Sie werden weitverbreitet eingesetzt, um Websites funktionsfähig zu machen oder ihre
            Effizienz zu verbessern, und um Informationen an die Eigentümer der Website zu übermitteln.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Wie verwenden wir Cookies?</h2>
          <p className="text-muted-foreground mb-4">
            Wir verwenden Cookies aus verschiedenen Gründen, die im Folgenden erläutert werden. Leider gibt es in den
            meisten Fällen keine branchenüblichen Optionen zum Deaktivieren von Cookies, ohne die Funktionalität und
            Funktionen, die sie dieser Website hinzufügen, vollständig zu deaktivieren.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Arten von Cookies, die wir verwenden</h2>

          <h3 className="text-xl font-bold mb-3 mt-6">1. Notwendige Cookies</h3>
          <p className="text-muted-foreground mb-4">
            Diese Cookies sind für den Betrieb unserer Website unbedingt erforderlich. Sie ermöglichen grundlegende
            Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website. Die Website kann ohne diese
            Cookies nicht ordnungsgemäß funktionieren.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>
              <strong>Cookie-Einwilligung:</strong> Speichert Ihre Cookie-Präferenzen
            </li>
            <li>
              <strong>Sitzungs-Cookies:</strong> Ermöglichen die Navigation auf der Website
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">2. Funktionale Cookies</h3>
          <p className="text-muted-foreground mb-4">
            Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen.
            Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">3. Analyse-Cookies</h3>
          <p className="text-muted-foreground mb-4">
            Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie
            Informationen anonym sammeln und melden. Diese Informationen helfen uns, die Website zu verbessern.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>
              <strong>Vercel Analytics:</strong> Erfasst anonyme Nutzungsstatistiken
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Cookie-Verwaltung</h2>
          <p className="text-muted-foreground mb-4">
            Sie können Cookies jederzeit über Ihre Browser-Einstellungen verwalten oder löschen. Bitte beachten Sie,
            dass das Deaktivieren von Cookies die Funktionalität dieser und vieler anderer Websites, die Sie besuchen,
            beeinträchtigen kann.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Browser-Einstellungen</h3>
          <p className="text-muted-foreground mb-4">
            Die meisten Webbrowser ermöglichen eine gewisse Kontrolle über die meisten Cookies über die
            Browser-Einstellungen. Um mehr über Cookies zu erfahren, einschließlich wie Sie sehen können, welche Cookies
            gesetzt wurden, und wie Sie sie verwalten und löschen können, besuchen Sie:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                www.allaboutcookies.org
              </a>
            </li>
            <li>
              <a
                href="https://www.youronlinechoices.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                www.youronlinechoices.eu
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ihre Cookie-Einstellungen ändern</h2>
          <p className="text-muted-foreground mb-4">
            Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf den Cookie-Banner klicken, der beim
            ersten Besuch unserer Website erscheint, oder indem Sie Ihre Browser-Einstellungen anpassen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Weitere Informationen</h2>
          <p className="text-muted-foreground mb-4">
            Wenn Sie weitere Informationen zu unserer Verwendung von Cookies wünschen oder Fragen zu dieser
            Cookie-Richtlinie haben, kontaktieren Sie uns bitte:
          </p>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <p className="text-sm text-muted-foreground">
              E-Mail:{" "}
              <p className="text-secondary hover:underline">
                datenschutz@ticketarenade.com
              </p>
              <br />
              Weitere Informationen finden Sie auch in unserer{" "}
              <Link href="/datenschutz" className="text-secondary hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
