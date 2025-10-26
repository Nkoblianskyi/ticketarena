import Link from "next/link"

export default function AGBPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-lg text-muted-foreground">Letzte Aktualisierung: Januar 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold mb-4">1. Geltungsbereich</h2>
          <p className="text-muted-foreground mb-4">
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Vermittlung von Tickets für
            Sportveranstaltungen zwischen der TicketArena GmbH (nachfolgend „Anbieter") und dem Kunden.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">2. Vertragspartner</h2>
          <p className="text-muted-foreground mb-4">
            Der Vertrag kommt zustande mit:
            <br />
            TicketArena GmbH
            <br />
            Musterstraße 123
            <br />
            80331 München
            <br />
            Deutschland
            <br />
            E-Mail: info@ticketarena.com
            <br />
            Telefon: +49 89 7264 3891
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">3. Vertragsschluss</h2>
          <p className="text-muted-foreground mb-4">
            Die Darstellung der Tickets auf unserer Website stellt kein rechtlich bindendes Angebot dar, sondern eine
            Aufforderung zur Abgabe einer Bestellung. Durch das Absenden einer Anfrage über unser Kontaktformular geben
            Sie eine verbindliche Anfrage zum Erwerb der Tickets ab.
          </p>
          <p className="text-muted-foreground mb-4">
            Wir bestätigen den Eingang Ihrer Anfrage per E-Mail. Diese Eingangsbestätigung stellt noch keine Annahme
            Ihrer Anfrage dar. Ein Vertrag kommt erst durch unsere ausdrückliche Annahme Ihrer Anfrage zustande, die wir
            Ihnen per E-Mail mitteilen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">4. Preise und Zahlung</h2>
          <p className="text-muted-foreground mb-4">
            Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Die Preise für Tickets können je nach
            Verfügbarkeit, Kategorie und Veranstaltung variieren. Der endgültige Preis wird Ihnen vor Vertragsschluss
            mitgeteilt.
          </p>
          <p className="text-muted-foreground mb-4">
            Die Zahlung erfolgt nach Vereinbarung per Überweisung, Kreditkarte oder anderen angebotenen
            Zahlungsmethoden. Die Tickets werden erst nach vollständigem Zahlungseingang versandt oder zur Abholung
            bereitgestellt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">5. Lieferung</h2>
          <p className="text-muted-foreground mb-4">
            Die Lieferung der Tickets erfolgt per E-Mail (E-Tickets), per Post oder zur Abholung an einer vereinbarten
            Stelle. Die Lieferzeit beträgt in der Regel 5-10 Werktage nach Zahlungseingang, kann aber je nach
            Veranstaltung variieren.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">6. Widerrufsrecht</h2>
          <p className="text-muted-foreground mb-4">
            Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Bitte beachten Sie jedoch, dass das Widerrufsrecht
            bei Tickets für Veranstaltungen, die zu einem bestimmten Zeitpunkt stattfinden, ausgeschlossen ist, sobald
            die Veranstaltung begonnen hat oder wenn die Tickets personalisiert sind.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">7. Gewährleistung</h2>
          <p className="text-muted-foreground mb-4">
            Wir gewährleisten, dass die von uns vermittelten Tickets gültig sind und zum Besuch der jeweiligen
            Veranstaltung berechtigen. Für die Durchführung der Veranstaltung selbst ist der jeweilige Veranstalter
            verantwortlich.
          </p>
          <p className="text-muted-foreground mb-4">
            Bei Ausfall oder Verlegung einer Veranstaltung richten sich die Ansprüche nach den Bedingungen des
            Veranstalters. Wir unterstützen Sie bei der Geltendmachung Ihrer Ansprüche.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">8. Haftung</h2>
          <p className="text-muted-foreground mb-4">
            Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit haften wir nur bei
            Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße
            Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen
            darf.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">9. Datenschutz</h2>
          <p className="text-muted-foreground mb-4">
            Wir verarbeiten Ihre personenbezogenen Daten gemäß den geltenden Datenschutzbestimmungen. Weitere
            Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz" className="text-secondary hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">10. Schlussbestimmungen</h2>
          <p className="text-muted-foreground mb-4">
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist,
            soweit gesetzlich zulässig, München.
          </p>
          <p className="text-muted-foreground mb-4">
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
            Bestimmungen hiervon unberührt.
          </p>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <p className="text-sm text-muted-foreground">
              Bei Fragen zu unseren AGB kontaktieren Sie uns bitte unter:{" "}
              <Link href="mailto:info@ticketarena.com" className="text-secondary hover:underline">
                info@ticketarena.com
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
