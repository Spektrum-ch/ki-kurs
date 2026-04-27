// Blog post content as HTML
// Each entry corresponds to a blog.json slug

export const blogContent: Record<string, () => string> = {
  'ki-weiterbildung-2026': () => `
    <h2>Das Problem: Fachkräftemangel und KI-Disruption 2026</h2>
    <p>
      Die Realität ist hart: <strong>80% aller Schweizer Gemeinden berichten von Fachkräftemangel</strong> (FSU-Umfrage 2025).
      Gleichzeitig setzen Planungsbüros, Kantone und progressive Gemeinden bereits KI-Tools ein – nicht als "nette Ergänzung",
      sondern als <strong>Kern ihrer operativen Effizienz</strong>.
    </p>
    <p>
      Ein Bauzonenbericht dauerte 2020 noch 40 Arbeitstage. Mit modernen KI-Tools sind es heute 12 Tage – ein Produktivitätsgain von 70%.
      Das heißt: Gemeinden und Büros, die diese Tools nutzen, arbeiten schneller, billiger und besser.
    </p>
    <p>
      Die harte Wahrheit für Raumplaner ohne KI-Kompetenz: Sie werden <strong>nicht angestellt</strong>. Oder wenn doch, dann für die
      routinemäßigsten Arbeiten zu Einstiegsgehältern. HR-Abteilungen in Planungsbüros zahlen mittlerweile 15–30% mehr für
      Mitarbeitende mit KI-Skills.
    </p>

    <h2>Das Kernproblem: Warum traditionelle Weiterbildung nicht reicht</h2>
    <p>
      Die üblichen Kurse – "KI-Grundlagen für Manager", "ChatGPT 101", generische Prompt-Engineering – sind für Raumplaner nutzlos.
      Sie behandeln nicht:
    </p>
    <ul>
      <li><strong>Schweizer Recht (RPG/RPV)</strong> – wie KI Bauzonen, Interessenabwägungen oder Bauingenieurgesundchecks ändert</li>
      <li><strong>Governance & Compliance</strong> – wer trägt Verantwortung? Was darf die KI machen? Welche Outputs benötigen Fachüberprüfung?</li>
      <li><strong>Praktische Integration</strong> – wie nutze ich ChatGPT, Claude oder Mistral in meinen aktuellen Workflows? Wie integriere ich mit GIS?</li>
      <li><strong>Finanzielle ROI-Logik</strong> – was spart mir KI wirklich? (Antwort: CHF 4'000–12'000 pro Planer pro Jahr)</li>
    </ul>
    <p>
      Ein Raumplaner, der ChatGPT gesehen hat, aber nicht weiß, wie man eine RPG-konforme Interessenabwägung mit KI-Assistance
      erstellt, ist immer noch unproduktiv.
    </p>

    <h2>Die Lösung: Spezialisierte KI-Weiterbildung für Raumplaner</h2>
    <p>
      SPEKTRUM hat 2025–2026 ein 3-Säulen-Modell entwickelt, das genau diese Lücke füllt:
    </p>

    <h3>Säule 1: Grundlagen + Plattformen (Starter-Courses)</h3>
    <p>
      Kurs <strong>"KI für Verwaltung & Gemeinden"</strong> oder <strong>"KI für Planungsbüros"</strong>:
    </p>
    <ul>
      <li>Verstehen, wie ChatGPT/Claude/Mistral funktionieren (nicht technisch, sondern praktisch)</li>
      <li>Prompt-Engineering für Raumplanung: Wie formuliere ich Anfragen so, dass die KI Brauchbares liefert?</li>
      <li>Fallstudien: Dokumentenverarbeitung, Entwurfsbeschreibungen, Partizipationsprozesse</li>
      <li>Datenschutz & Compliance: GDPR, DSG, was darf ich hochladen? (Antwort: Nicht alles)</li>
      <li>Kosten-Kalkulation: Welche KI-Tools sind kostenlos? Welche kosten CHF 20–50/Monat?</li>
    </ul>
    <p><strong>Dauer:</strong> 12–16 Stunden über 6 Wochen • <strong>Level:</strong> Anfänger (kein Programmieren) • <strong>Preis:</strong> CHF 290–590</p>

    <h3>Säule 2: Spezialisierte Use-Cases (Professionalization)</h3>
    <p>
      Kurs <strong>"KI für Interessenabwägung & Partizipation"</strong> oder <strong>"KI-Agenten für Gemeindeplanung"</strong>:
    </p>
    <ul>
      <li>Wie automatisiere ich Interessenabwägungen mit KI-Agents? (RPG 4, Abs. 2)</li>
      <li>Partizipationsprozesse mit KI: Wie sammle ich, analysiere und dokumentiere Einwendungen effizienter?</li>
      <li>Baudaten-Integration: Wie verbinde ich ChatGPT mit meinen GIS-Datenbanken?</li>
      <li>Qualitätssicherung: Welche KI-Outputs brauchen Fachüberprüfung? Wer trägt Haftung?</li>
      <li>Praktische Demo: Live-Integration mit Arc GIS oder QGIS</li>
    </ul>
    <p><strong>Dauer:</strong> 16–20 Stunden • <strong>Level:</strong> Fortgeschrittene • <strong>Preis:</strong> CHF 590–1'200</p>

    <h3>Säule 3: Zertifizierung & Karriere (Certification Path)</h3>
    <p>
      <strong>"KI-Intensivprogramm für Raumplaner"</strong> (Kombination aller Kurse):
    </p>
    <ul>
      <li>3 aufeinander abgestimmte Module (36–40 Stunden über 4–6 Monate)</li>
      <li>Persönliche Teilnahmebestätigung (nicht eidgenössisch anerkannt, aber gewichtig im Lebenslauf)</li>
      <li>Plus-Tier: 1:1-Sessions mit Andreas Rupf (MAS CAS Direktor ETH Zurich) für Fragen & Mentoring</li>
      <li>Business-Tier: Team-Lizenzen für Gemeinden/Büros (CHF 2'900 pro Programm, unbegrenzte Plätze)</li>
    </ul>
    <p><strong>Preis Einzelperson:</strong> CHF 1'200–2'500 • <strong>Preis Team:</strong> CHF 2'900/Programm (5–25 Personen)</p>

    <h2>Die harte ROI-Rechnung</h2>
    <p>
      Für eine 5-Person-Planungsgruppe in einer Mittelgemeinde:
    </p>
    <ul>
      <li><strong>Investment:</strong> CHF 2'900 (Team-Lizenz) = CHF 580 pro Person</li>
      <li><strong>Nutzen pro Person/Jahr:</strong>
        <ul>
          <li>Bauzonenbericht: 40h → 12h mit KI = 28h Einsparung × CHF 150/h = CHF 4'200 Ersparnis</li>
          <li>2–3 Berichte pro Jahr = CHF 8'400–12'600 Jahresersparnis</li>
          <li>ROI: 580 CHF Investment → 8'400–12'600 CHF Ertrag = 1450% ROI, amortisiert in 2–3 Wochen</li>
        </ul>
      </li>
      <li><strong>Weitere Gewinne:</strong> Schnellere Partizipation, bessere Entscheidungsfindung, weniger Beschwerdeverfahren (schwer zu monetarisieren, aber echt)</li>
    </ul>
    <p>
      Für Planungsbüros: Ein Mitarbeitender mit KI-Skills verdient 15–30% mehr und generiert 40–50% mehr Output.
      Das ist keine Meinung – das sind die Gehälter, die 2026 gezahlt werden.
    </p>

    <h2>Warum jetzt 2026?</h2>
    <p>
      Die KI-Landschaft hat sich 2024–2025 stabilisiert. Die wilden frühen Tage sind vorbei:
    </p>
    <ul>
      <li>Claude 3.5 Sonnet, GPT-4o und Mistral haben Qualität auf "produktionsreife" Stufe erreicht</li>
      <li>Regulierung (EU AI Act, DSG) ist klar genug, um rechtsicher zu planen</li>
      <li>Tools-Kosten sind niedrig genug (ChatGPT Plus CHF 20/Monat, Mistral API Cent-Bruchteile)</li>
      <li>Der Markt separiert sich: Wer KI nutzt, hat ein starkes Wettbewerbsvorteil. Wer nicht, wird marginalisiert.</li>
    </ul>
    <p>
      2026 ist die letzte Generation von Planern, die "KI" als Optional ansehen kann. Ab 2027 wird es Baseline-Skill sein.
    </p>

    <h2>Die Mensch-im-Loop-Wahrheit</h2>
    <p>
      Ein wichtiger Punkt: KI ersetzt Raumplaner nicht. KI macht dich als Raumplaner besser. Aber nur wenn du weißt, wie man sie benutzt.
    </p>
    <p>
      Ein Bauzonenbericht wird nicht von ChatGPT geschrieben. Ein Mensch – du – musst:
    </p>
    <ul>
      <li>Die Anfrage richtig stellen (Prompt-Engineering)</li>
      <li>Die Ausgabe überprüfen und korrigieren (Fachüberprüfung)</li>
      <li>Rechtliche Verantwortung tragen (Governance & Signatur)</li>
      <li>Kreative Entscheidungen treffen (KI ist Werkzeug, nicht Entscheider)</li>
    </ul>
    <p>
      Deshalb ist Weiterbildung so wichtig: Du musst verstehen, was die KI kann und – wichtiger – was sie NICHT kann.
    </p>

    <h2>ETH-Verbindung & Glaubwürdigkeit</h2>
    <p>
      SPEKTRUM wird von Andreas Rupf geleitet, der Direktor des CAS/MAS "Raum & KI" an der ETH Zürich ist.
      Das heißt: Die Kurse basieren nicht auf Marketing-Versprechen, sondern auf aktuellen Forschungen und Best Practices
      aus der Schweizer Planungscommunity.
    </p>
    <p>
      ETH RAUM hat über 10 Jahre Expertise in digitaler Transformation von Raumplanung. Diese Kurse bündeln das Beste davon
      – direkt, praktisch und für Gemeinden/Büros verfügbar.
    </p>

    <h2>Nächste Schritte</h2>
    <p>
      Wenn dich das interessiert:
    </p>
    <ol>
      <li><strong>Selbstcheck:</strong> Besuche <a href="https://kurse.spekt.ch/kurse">kurse.spekt.ch/kurse</a> und mache den kostenlosen KI-Selbstcheck (5 min). Dieser zeigt dir, wo du stehst.</li>
      <li><strong>Kurs-Match:</strong> Basierend auf deinem Profil (Gemeinde? Büro? Fachkräftemangel?) können wir den richtigen Kurs empfehlen.</li>
      <li><strong>Kursstart:</strong> Nächste Kohorten starten Juni/Juli 2026. Du kannst sofort anfangen.</li>
      <li><strong>Demo/Mentoring:</strong> Wenn du Fragen hast oder ein Plus-Tier mit 1:1-Sessions möchtest, können wir ein Kick-off-Gespräch machen.</li>
    </ol>

    <h2>Die unbequeme Wahrheit</h2>
    <p>
      Falls du dich fragst, ob dich KI-Weiterbildung wirklich braucht: Vielleicht nicht.
    </p>
    <p>
      Wenn du älter als 55 bist, nur noch 10 Jahre bis Pensionierung hast, und dein Job ohnehin sicher ist – dann vielleicht nicht.
    </p>
    <p>
      Aber wenn du unter 45 bist, in einem konkurrenzintensiven Markt arbeitest, oder langfristig als Raumplanerin relevant bleiben willst – dann ist es nicht optional. Es ist deine Karriere-Versicherung.
    </p>
    <p>
      Der Markt 2026 fragt nicht: "Kennst du KI?" Der Markt fragt: "Kannst du mit KI besser arbeiten als deine Konkurrenz?"
    </p>
  `,
};
