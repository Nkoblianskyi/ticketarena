import Link from "next/link"

export default function DatenschutzPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Datenschutzerklärung</h1>
          <p className="text-lg text-muted-foreground">Letzte Aktualisierung: Januar 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>

          <h3 className="text-xl font-bold mb-3 mt-6">Allgemeine Hinweise</h3>
          <p className="text-muted-foreground mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
          <h4 className="text-lg font-semibold mb-2 mt-4">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h4>
          <p className="text-muted-foreground mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie
            dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>

          <h4 className="text-lg font-semibold mb-2 mt-4">Wie erfassen wir Ihre Daten?</h4>
          <p className="text-muted-foreground mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
            Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer
            Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
            (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <h4 className="text-lg font-semibold mb-2 mt-4">Wofür nutzen wir Ihre Daten?</h4>
          <p className="text-muted-foreground mb-4">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
            Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">2. Hosting</h2>
          <p className="text-muted-foreground mb-4">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

          <h3 className="text-xl font-bold mb-3 mt-6">Vercel</h3>
          <p className="text-muted-foreground mb-4">
            Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend „Vercel"). Vercel
            ist ein Dienst zum Hosting von Webseiten. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene
            Logfiles inklusive Ihrer IP-Adressen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-xl font-bold mb-3 mt-6">Datenschutz</h3>
          <p className="text-muted-foreground mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
          <p className="text-muted-foreground mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="text-muted-foreground mb-4">
            TicketArena GmbH
            <br />
            Musterstraße 123
            <br />
            80331 München
            <br />
            Deutschland
          </p>
          <p className="text-muted-foreground mb-4">
            Telefon: +49 89 7264 3891
            <br />
            E-Mail: info@ticketarena.com
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Speicherdauer</h3>
          <p className="text-muted-foreground mb-4">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
            personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">4. Datenerfassung auf dieser Website</h2>

          <h3 className="text-xl font-bold mb-3 mt-6">Cookies</h3>
          <p className="text-muted-foreground mb-4">
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem
            Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies)
            oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Kontaktformular</h3>
          <p className="text-muted-foreground mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen bei uns gespeichert.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">5. Ihre Rechte</h2>
          <p className="text-muted-foreground mb-4">Sie haben folgende Rechte:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
            <li>Recht auf Berichtigung unrichtiger Daten</li>
            <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
            <li>Recht auf Einschränkung der Datenverarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
          </ul>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <p className="text-sm text-muted-foreground">
              Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:{" "}
              <Link href="mailto:datenschutz@ticketarena.com" className="text-secondary hover:underline">
                datenschutz@ticketarena.com
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
