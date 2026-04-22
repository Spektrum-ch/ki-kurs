import type { Course } from '@/types';

export const COURSE_INTERESSENABWAEGUNG: Course = {
  title: 'Interessenabwägung mit KI',
  slug: 'ki-interessenabwaegung',
  description: 'Fundierte Methodik und praxisorientierte Einführung in das KI-Tool interessenabwaegung.ch – von den rechtlichen Grundlagen nach RPG und RPV bis zur Agenten-Debatte.',
  modules: [
    {
      id: 'ia-modul-1',
      slug: 'ia-grundlagen',
      title: 'Rechtliche Grundlagen und Methodik',
      description: 'Was die Interessenabwägung im Schweizer Planungsrecht bedeutet, welche Methodik dahintersteckt und wie Bundesgerichte urteilen.',
      icon: '⚖️',
      order: 1,
      lessons: [
        {
          id: 'ia-planungsrecht',
          slug: 'ia-planungsrecht',
          title: 'Interessenabwägung im Schweizer Planungsrecht',
          description: 'Die rechtliche Einbettung der Interessenabwägung – RPG, RPV Art. 3 und Art. 47, und was das konkret für Gemeinden und Planungsbüros bedeutet.',
          videoId: '',
          content: `
<h2>Das zentrale Instrument der Schweizer Raumplanung</h2>
<p>Die Interessenabwägung ist kein bürokratisches Ritual – sie ist das <strong>Herzstück des Schweizer Planungsrechts</strong>. Jede Einzonung, Umzonung oder Festlegung eines Gestaltungsplans erfordert eine nachvollziehbare, dokumentierte Abwägung aller betroffenen öffentlichen und privaten Interessen. Ohne sie ist ein Nutzungsplan anfechtbar.</p>

<h3>Die rechtlichen Grundlagen</h3>
<p>Zwei Artikel stehen im Zentrum:</p>
<ul>
  <li><strong>Art. 3 RPV (Interessenabwägung):</strong> Verpflichtet Behörden, bei der Erfüllung von Bundesaufgaben oder bei Erlass von Planungen, Verfügungen oder Bewilligungen alle berührten Interessen zu ermitteln und zu beurteilen sowie abzuwägen. Gilt auch für kantonale und kommunale Planungsbehörden im Rahmen des Bundesrechts.</li>
  <li><strong>Art. 47 RPV (Berichterstattung):</strong> Verlangt von Gemeinden einen Planungsbericht, der insbesondere darlegt, wie der Nutzungsplan die Ziele und Grundsätze der Raumplanung erfüllt und die abwägungsrelevanten Interessen berücksichtigt. Dieser Bericht ist die schriftliche Dokumentation der Interessenabwägung.</li>
</ul>

<h3>Was «alle berührten Interessen» bedeutet</h3>
<p>Das Gesetz verlangt eine vollständige Erfassung – nicht nur der offensichtlichen Interessen, sondern aller betroffenen. Das umfasst zwei grosse Kategorien:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #fff3e0;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Nutzungsinteressen</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Schutzinteressen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Siedlungsentwicklung nach innen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Fruchtfolgeflächen (FFF)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Wirtschaftliche Entwicklung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Naturschutzgebiete, Biotope</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Wohnraumversorgung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Gewässerräume und -schutz</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Öffentliche Bauten und Anlagen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Landschaftsschutz (BLN, ISOS, IVS)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Erschliessung und Mobilität</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Naturgefahren, Lärm, Luft</td>
    </tr>
  </tbody>
</table>

<h3>Die drei Phasen der Interessenabwägung</h3>
<ol>
  <li><strong>Identifikation:</strong> Alle relevanten Interessen werden systematisch erfasst – mit Bezug auf die betroffene Parzelle, den Planungsanlass und die anwendbaren Rechtsgrundlagen.</li>
  <li><strong>Bewertung:</strong> Jedes Interesse wird nach Erheblichkeit und Gewicht beurteilt. Dabei fliesst die fachliche Einschätzung der Planerin oder des Planers ein.</li>
  <li><strong>Abwägung:</strong> Die bewerteten Interessen werden gegeneinander gewogen. Das Ergebnis – ob das Projekt realisierbar ist und unter welchen Bedingungen – muss begründet und dokumentiert werden.</li>
</ol>

<h3>Wer ist verpflichtet?</h3>
<p>Primär die Gemeinden als Träger der kommunalen Nutzungsplanung. In der Praxis übernehmen Planungsbüros die Ausarbeitung im Auftrag der Gemeinde – die Verantwortung für die fachliche Beurteilung bleibt aber beim zuständigen Planer oder der zuständigen Planerin. Kantone prüfen den Art. 47-Bericht im Genehmigungsverfahren.</p>

<blockquote>Eine lückenhafte oder oberflächliche Interessenabwägung ist einer der häufigsten Gründe, warum kommunale Nutzungspläne vor Bundesgericht scheitern oder im kantonalen Genehmigungsverfahren zurückgewiesen werden.</blockquote>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ia-q1-1',
                question: 'Welcher Artikel der RPV verlangt einen Planungsbericht, der die Interessenabwägung dokumentiert?',
                options: [
                  'Art. 3 RPV',
                  'Art. 47 RPV',
                  'Art. 15 RPG',
                  'Art. 24 RPG',
                ],
                correct: 1,
                explanation: 'Art. 47 RPV verlangt von Gemeinden einen Planungsbericht, der die Interessenabwägung dokumentiert und darlegt, wie der Nutzungsplan die Grundsätze der Raumplanung erfüllt. Art. 3 RPV regelt das allgemeine Gebot der Interessenabwägung.',
              },
              {
                id: 'ia-q1-2',
                question: 'Was gehört zu den Schutzinteressen bei einer Interessenabwägung?',
                options: [
                  'Siedlungsentwicklung und Wohnraumversorgung',
                  'Wirtschaftliche Entwicklung und Erschliessung',
                  'Fruchtfolgeflächen, Naturschutzgebiete, Gewässerräume und Bundesinventare',
                  'Öffentliche Bauten und Infrastruktur',
                ],
                correct: 2,
                explanation: 'Schutzinteressen umfassen den Erhalt von Naturwerten, Kulturgütern und ökologisch sensiblen Flächen: Fruchtfolgeflächen, Naturschutzgebiete, Gewässerräume, Bundesinventare (BLN, ISOS, IVS), Naturgefahren und Umweltschutz.',
              },
              {
                id: 'ia-q1-3',
                question: 'Wer trägt die Verantwortung für die fachliche Beurteilung in der Interessenabwägung?',
                options: [
                  'Das KI-Tool, das die Analyse durchführt',
                  'Der Kanton im Genehmigungsverfahren',
                  'Der zuständige Planer oder die zuständige Planerin',
                  'Das Bundesamt für Raumentwicklung (ARE)',
                ],
                correct: 2,
                explanation: 'Die fachliche Verantwortung liegt immer bei den zuständigen Planenden. Werkzeuge – ob analog oder digital – unterstützen den Prozess, ersetzen aber nicht das professionelle Urteilsvermögen.',
              },
            ],
          },
        },
        {
          id: 'ia-methodik',
          slug: 'ia-methodik',
          title: 'Die Methodik: EspaceSuisse und AHP',
          description: 'Wie die Interessenabwägung methodisch strukturiert wird – von der EspaceSuisse-Methodik bis zum Analytic Hierarchy Process.',
          videoId: '',
          content: `
<h2>Methodik: Von der Norm zur Praxis</h2>
<p>Dass eine Interessenabwägung durchgeführt werden muss, schreibt das Gesetz vor. Wie sie methodisch strukturiert wird, liegt weitgehend bei den Kantonen und den Planenden. In der Schweizer Praxis hat sich die <strong>EspaceSuisse-Methodik</strong> als Standard etabliert.</p>

<h3>EspaceSuisse-Methodik</h3>
<p>EspaceSuisse (ehemals VLP-ASPAN) hat eine Methodik entwickelt, die auf drei Säulen basiert:</p>
<ul>
  <li><strong>Vollständigkeit:</strong> Alle relevanten Interessen müssen erfasst werden – auch solche, die gegen das Projekt sprechen</li>
  <li><strong>Transparenz:</strong> Bewertungen müssen begründet und nachvollziehbar sein</li>
  <li><strong>Verhältnismässigkeit:</strong> Die Tiefe der Analyse muss dem Planungsanlass entsprechen</li>
</ul>

<h3>Der Analytic Hierarchy Process (AHP)</h3>
<p>Für die Gewichtung der Interessen hat sich der <strong>Analytic Hierarchy Process (AHP)</strong> bewährt. AHP ist eine mathematisch fundierte Methode für komplexe Entscheidungen mit mehreren Kriterien. In der Interessenabwägung ermöglicht er:</p>
<ul>
  <li>Paarweise Vergleiche zwischen Interessen</li>
  <li>Konsistenzprüfungen der Bewertungen</li>
  <li>Eine nachvollziehbare, mathematisch begründete Gewichtungsmatrix</li>
  <li>Sensitivitätsanalysen: Wie robust ist das Ergebnis?</li>
</ul>

<h3>Die Bewertungsdimensionen</h3>
<p>Jedes Interesse wird entlang zweier Dimensionen bewertet:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #fff3e0;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Dimension</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Frage</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Skala</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;"><strong>Erheblichkeit</strong></td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Wie stark ist das Interesse durch das Vorhaben betroffen?</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">nicht erheblich / gering / mittel / hoch / sehr hoch</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;"><strong>Gewichtung</strong></td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Wie wichtig ist dieses Interesse im konkreten Kontext?</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">gering / mittel / hoch / sehr hoch</td>
    </tr>
  </tbody>
</table>

<h3>Der Interessenkatalog</h3>
<p>Ein strukturierter Interessenkatalog ist der Schlüssel zu vollständigen Interessenabwägungen. Ohne Katalog werden Interessen vergessen. In der Praxis hat sich ein Katalog von über 100 definierten Interessen etabliert, gegliedert nach Themen:</p>
<ul>
  <li>Siedlung und Wohnen (10-15 Interessen)</li>
  <li>Wirtschaft und Arbeit (8-12 Interessen)</li>
  <li>Mobilität und Erschliessung (8-10 Interessen)</li>
  <li>Landschaft und Natur (15-20 Interessen)</li>
  <li>Umwelt und Ressourcen (12-15 Interessen)</li>
  <li>Kulturgüter und Heimatschutz (8-10 Interessen)</li>
  <li>Gefahren und Sicherheit (8-10 Interessen)</li>
</ul>
<p>Jedes Interesse ist mit seiner Rechtsgrundlage (Artikel, Bundesgesetz, kantonales Recht) verknüpft – was die juristische Nachvollziehbarkeit sicherstellt.</p>

<h3>Verhältnismässigkeit der Analyse</h3>
<p>Nicht jedes Vorhaben erfordert dieselbe Tiefe. Faustregeln:</p>
<ul>
  <li><strong>Kleine Einzonung (&lt;0.5 ha):</strong> Fokussierte Analyse, 20-30 Interessen</li>
  <li><strong>Mittlere Umzonung:</strong> Vollständige Analyse, 50-70 Interessen</li>
  <li><strong>Grosse Einzonung / Gestaltungsplan:</strong> Umfassende Analyse, 80-100+ Interessen, mit Detailbegründungen</li>
</ul>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'ia-q2-1',
                question: 'Was ermöglicht der Analytic Hierarchy Process (AHP) bei der Interessenabwägung?',
                options: [
                  'Automatische Entscheide ohne menschliches Zutun',
                  'Paarweise Vergleiche, Konsistenzprüfungen und eine mathematisch begründete Gewichtungsmatrix',
                  'Nur die Darstellung von Interessen als Liste',
                  'Die automatische Genehmigung von Nutzungsplänen',
                ],
                correct: 1,
                explanation: 'AHP ermöglicht strukturierte paarweise Vergleiche, Konsistenzprüfungen und eine nachvollziehbare Gewichtungsmatrix. Das macht Abwägungen mathematisch begründbar und anfechtungssicherer.',
              },
              {
                id: 'ia-q2-2',
                question: 'Welche zwei Dimensionen werden für jedes Interesse bewertet?',
                options: [
                  'Kosten und Nutzen',
                  'Erheblichkeit (wie stark betroffen) und Gewichtung (wie wichtig im Kontext)',
                  'Legalität und Legitimität',
                  'Lokale und kantonale Bedeutung',
                ],
                correct: 1,
                explanation: 'Die zwei Bewertungsdimensionen sind: Erheblichkeit (wie stark ist das Interesse durch das Vorhaben betroffen?) und Gewichtung (wie wichtig ist das Interesse im konkreten Kontext?).',
              },
              {
                id: 'ia-q2-3',
                question: 'Warum ist ein strukturierter Interessenkatalog entscheidend?',
                options: [
                  'Er erspart die fachliche Beurteilung',
                  'Er ist gesetzlich vorgeschrieben',
                  'Ohne Katalog werden systematisch Interessen vergessen – was die Vollständigkeit und Rechtssicherheit gefährdet',
                  'Er beschleunigt das Genehmigungsverfahren automatisch',
                ],
                correct: 2,
                explanation: 'Der Katalog ist das Sicherheitsnetz gegen vergessene Interessen. Vollständigkeit ist eine der drei Säulen der EspaceSuisse-Methodik – und unvollständige Abwägungen sind häufige Gründe für Rückweisungen.',
              },
            ],
          },
        },
        {
          id: 'ia-fehler',
          slug: 'ia-fehler',
          title: 'Häufige Fehler und Bundesgerichtspraxis',
          description: 'Was das Bundesgericht kritisiert, welche Fehler immer wieder vorkommen – und wie man eine anfechtungssichere Interessenabwägung erstellt.',
          videoId: '',
          content: `
<h2>Was das Bundesgericht zur Interessenabwägung sagt</h2>
<p>Das Schweizer Bundesgericht hat in zahlreichen Urteilen Anforderungen an die Interessenabwägung konkretisiert. Wer diese Praxis kennt, kann Schwachstellen in eigenen Abwägungen frühzeitig erkennen und beheben.</p>

<h3>Die häufigsten Fehler in der Praxis</h3>

<p><strong>1. Unvollständige Interessenidentifikation</strong></p>
<p>Der häufigste und folgenreichste Fehler: Nicht alle betroffenen Interessen werden erfasst. Besonders häufig vergessen:</p>
<ul>
  <li>Nachbarliche Schutzinteressen (Lärm, Verschattung, Einblick)</li>
  <li>Bundesinventare (BLN, ISOS, IVS) auch ausserhalb des Perimeters</li>
  <li>Kantonale Richtplanfestlegungen</li>
  <li>Indirekte Auswirkungen auf Schutzgebiete</li>
</ul>

<p><strong>2. Floskeln statt Begründungen</strong></p>
<p>«Das Interesse wird als gering eingestuft» ohne Begründung ist für das Bundesgericht nicht akzeptabel. Jede Bewertung muss nachvollziehbar begründet sein. Das Gericht verlangt «eine auf den Einzelfall bezogene, substantiierte Auseinandersetzung».</p>

<p><strong>3. Fehlende Abwägung zugunsten des Projekts</strong></p>
<p>Manche Berichte dokumentieren nur die Schutzinteressen, ohne explizit zu begründen, warum die Nutzungsinteressen überwiegen. Die Abwägung muss beide Seiten explizit gegenüberstellen und das Ergebnis begründen.</p>

<p><strong>4. Keine Auseinandersetzung mit Alternativen</strong></p>
<p>Besonders bei erheblichen Schutzinteressen verlangt das Bundesgericht, dass Alternativen geprüft wurden: Könnte das Ziel auch mit weniger Eingriff erreicht werden?</p>

<p><strong>5. Veraltete oder fehlende Geodaten</strong></p>
<p>Wenn Fruchtfolgeflächen, Schutzgebiete oder Naturgefahren nicht auf Basis aktueller Geobasisdaten beurteilt wurden, ist die Interessenabwägung angreifbar.</p>

<h3>Schlüsselurteile des Bundesgerichts</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #fff3e0;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Anforderung</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Bundesgericht-Doktrin</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Vollständigkeit</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Alle berührten Interessen müssen erfasst werden – auch wenn sie gegen das Projekt sprechen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Substantiierung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Bewertungen müssen auf den Einzelfall bezogen und begründet sein</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Gegenüberstellung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Schutz- und Nutzungsinteressen müssen explizit gegenübergestellt werden</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Alternativen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Bei erheblichen Eingriffen muss gezeigt werden, dass keine schonendere Alternative möglich ist</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Verhältnismässigkeit</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Das Vorhaben muss geeignet, erforderlich und zumutbar sein</td>
    </tr>
  </tbody>
</table>

<h3>Die anfechtungssichere Interessenabwägung</h3>
<p>Eine robuste Interessenabwägung erfüllt fünf Kriterien:</p>
<ol>
  <li><strong>Vollständig:</strong> Alle Interessen erfasst, Katalog verwendet</li>
  <li><strong>Aktuell:</strong> Geodaten auf dem neusten Stand</li>
  <li><strong>Begründet:</strong> Jede Bewertung mit Einzelfallbegründung</li>
  <li><strong>Balanciert:</strong> Beide Seiten explizit dargestellt</li>
  <li><strong>Dokumentiert:</strong> Nachvollziehbarer Planungsbericht nach Art. 47 RPV</li>
</ol>

<blockquote>Das Bundesgericht formulierte in mehreren Urteilen: Die Interessenabwägung muss erkennen lassen, dass die Behörde sich der Tragweite des Eingriffs bewusst war und alle wesentlichen Gesichtspunkte geprüft hat. Pauschalaussagen ohne Einzelfallbezug genügen nicht.</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'ia-q3-1',
                question: 'Was ist laut Bundesgerichtspraxis der häufigste und folgenreichste Fehler in Interessenabwägungen?',
                options: [
                  'Zu viele Interessen werden erfasst',
                  'Unvollständige Interessenidentifikation – nicht alle betroffenen Interessen werden erfasst',
                  'Die Abwägung ist zu lang',
                  'Fehlende Unterschrift des Planers',
                ],
                correct: 1,
                explanation: 'Unvollständigkeit ist der häufigste Fehler: Vergessene Bundesinventare, übersehene kantonale Richtplanfestlegungen oder nicht erfasste indirekte Auswirkungen machen die Abwägung anfechtbar.',
              },
              {
                id: 'ia-q3-2',
                question: 'Was verlangt das Bundesgericht bei erheblichen Eingriffen in Schutzinteressen zusätzlich?',
                options: [
                  'Eine zweite Unterschrift',
                  'Einen Bundesratsbeschluss',
                  'Eine Prüfung, ob keine schonendere Alternative möglich wäre',
                  'Ein öffentliches Mitwirkungsverfahren',
                ],
                correct: 2,
                explanation: 'Bei erheblichen Eingriffen verlangt das Bundesgericht eine Auseinandersetzung mit Alternativen: Hätte das Planungsziel auch mit weniger Eingriff erreicht werden können? Das ist Teil des Verhältnismässigkeitsprinzips.',
              },
              {
                id: 'ia-q3-3',
                question: 'Was meint das Bundesgericht mit «substantiierter Auseinandersetzung»?',
                options: [
                  'Ein besonders langes Dokument',
                  'Auf den Einzelfall bezogene, konkrete Begründungen für jede Bewertung – keine Floskeln',
                  'Eine externe Fachgutachten',
                  'Eine quantitative Analyse mit Zahlen',
                ],
                correct: 1,
                explanation: '«Substantiiert» bedeutet: konkret, auf den Einzelfall bezogen. «Das Interesse ist gering» ohne Begründung ist keine substantiierte Auseinandersetzung. Jede Bewertung muss erklären, warum sie so ausfällt.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ia-modul-2',
      slug: 'ia-tool',
      title: 'Das KI-Tool in der Praxis',
      description: 'Schritt für Schritt durch interessenabwaegung.ch – von der Parzellenerfassung über die Bewertung bis zur Agenten-Debatte.',
      icon: '🛠️',
      order: 2,
      lessons: [
        {
          id: 'ia-einfuehrung',
          slug: 'ia-einfuehrung',
          title: 'Einführung in das Tool',
          description: 'Überblick über interessenabwaegung.ch: Aufbau, Funktionsweise und Möglichkeiten des KI-gestützten Analyse-Tools.',
          videoId: '',
          content: `
<h2>interessenabwaegung.ch – Überblick</h2>
<p>Das Tool auf <strong>interessenabwaegung.ch</strong> von SPEKTRUM Partner GmbH kombiniert automatisierte Geodatenanalyse mit strukturierter Interessenbewertung nach der EspaceSuisse-Methodik. Ziel ist es, den zeitaufwändigsten Teil der Interessenabwägung zu beschleunigen – ohne die fachliche Verantwortung des Planers zu ersetzen.</p>

<h3>Was das Tool kann</h3>
<ul>
  <li><strong>Automatische Geodatenanalyse:</strong> Daten von Swisstopo und kantonalen Quellen werden automatisch abgerufen und ausgewertet</li>
  <li><strong>Interessenidentifikation:</strong> Über 100 vordefinierte Interessen mit Rechtsgrundlagen werden auf Relevanz geprüft</li>
  <li><strong>KI-Bewertungsvorschläge:</strong> Der KI-Agent macht Vorschläge für Erheblichkeit und Gewichtung – du entscheidest</li>
  <li><strong>Word-Export:</strong> Fertiger Planungsbericht nach Art. 47 RPV inkl. Tabellen, Karten und kantonaler Checkliste</li>
  <li><strong>Agenten-Debatte:</strong> Fünf spezialisierte KI-Agenten analysieren deine Abwägung aus verschiedenen Perspektiven</li>
</ul>

<h3>Wer das Tool nutzt</h3>
<p>Das Tool ist für drei Zielgruppen konzipiert:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #fff3e0;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Zielgruppe</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Hauptnutzen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Planungsbüros</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Effizienzgewinn bei repetitiven Interessenabwägungen; strukturierte Dokumentation</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Gemeinden</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Grundlagenanalyse vor Auftragserteilung; kostengünstige Vorabprüfung</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kantone / ARE</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Vergleichbarkeit von Abwägungsberichten; strukturierte Grundlage</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Verbände / Vereine</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Professionelle Stellungnahmen in Vernehmlassungen und Einspracheverfahren</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Projektentwickler / Investoren</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Frühzeitige Einschätzung der Abwägungschancen vor Gesuchseinreichung</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Hochschulen / Forschung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Methodisch fundierte Fallstudien und Lehrmaterial zu Interessenabwägungen</td>
    </tr>
  </tbody>
</table>

<h3>Angebot und Kosten</h3>
<ul>
  <li><strong>Kostenlos:</strong> Grundanalyse und Vorschau der Interessen</li>
  <li><strong>Professional (CHF 85/Monat oder CHF 850/Jahr):</strong> Word-Export, kantonale Checklisten, Agenten-Debatte, unbegrenzte Analysen</li>
</ul>

<h3>Verfügbarkeit</h3>
<p>Das Tool deckt alle 26 Schweizer Kantone ab und ist in vier Sprachen verfügbar: Deutsch, Französisch, Italienisch und Rätoromanisch. Die Geodaten werden kantonal aktualisiert.</p>

<h3>Was das Tool nicht tut</h3>
<p>Wichtig: Das Tool ersetzt keine fachliche Beurteilung. Es beschleunigt die Identifikation und schlägt Bewertungen vor – die finale Beurteilung, Begründung und Verantwortung liegt bei den zuständigen Planenden.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ia-q4-1',
                question: 'Was liefert die automatische Geodatenanalyse des Tools?',
                options: [
                  'Den fertigen Planungsbericht ohne weitere Eingaben',
                  'Geodaten von Swisstopo und kantonalen Quellen zu Schutzgebieten, Fruchtfolgeflächen, Gewässerräumen und Bundesinventaren',
                  'Nur Grundbuchdaten zur Parzelle',
                  'Die Baubewilligung direkt',
                ],
                correct: 1,
                explanation: 'Die automatische Geodatenanalyse ruft Daten von Swisstopo und kantonalen GIS-Systemen ab: Fruchtfolgeflächen, Schutzgebiete, Gewässerräume, Gefahrenkarten und Bundesinventare (BLN, ISOS, IVS).',
              },
              {
                id: 'ia-q4-2',
                question: 'Was ist der Unterschied zwischen der kostenlosen und der Professional-Version?',
                options: [
                  'Die kostenlose Version deckt nur den Kanton Zürich ab',
                  'Die kostenlose Version liefert die Grundanalyse; Professional umfasst Word-Export, kantonale Checklisten und Agenten-Debatte',
                  'Die Professional-Version läuft schneller',
                  'Es gibt keinen Unterschied',
                ],
                correct: 1,
                explanation: 'Kostenlos: Grundanalyse und Vorschau. Professional (CHF 85/Monat oder 850/Jahr): Word-Export für Art. 47-Bericht, kantonale Checklisten für alle 26 Kantone und die Agenten-Debatte.',
              },
              {
                id: 'ia-q4-3',
                question: 'Welche Grenze hat das Tool explizit?',
                options: [
                  'Es funktioniert nur für Einzonungen',
                  'Es liefert keine Karten',
                  'Es ersetzt nicht die fachliche Beurteilung – Bewertungen sind Vorschläge, die Verantwortung liegt bei Planenden',
                  'Es kann nur auf Deutsch genutzt werden',
                ],
                correct: 2,
                explanation: 'Das Tool beschleunigt und strukturiert, ersetzt aber nicht. Die fachliche Verantwortung – und damit die Haftung – liegt bei den zuständigen Planenden.',
              },
            ],
          },
        },
        {
          id: 'ia-workflow',
          slug: 'ia-workflow',
          title: 'Workflow: Von der Parzelle zum Bericht',
          description: 'Schritt für Schritt durch die fünf Phasen des Tools – von der Eingabe bis zum fertigen Word-Export.',
          videoId: '',
          content: `
<h2>Der Workflow im Detail</h2>
<p>Das Tool führt strukturiert durch fünf Phasen. Jede Phase baut auf der vorherigen auf – und der Planer oder die Planerin trifft in jeder Phase Entscheide, die das Endergebnis prägen.</p>

<h3>Phase 1: Projekt erfassen</h3>
<p>Der Einstieg ist einfach:</p>
<ul>
  <li><strong>Gemeinde und Parzelle:</strong> Adresseingabe oder direkte Koordinaten (EPSG 2056)</li>
  <li><strong>Planungsanlass:</strong> Einzonung, Umzonung oder Gestaltungsplan – je nach Anlass werden unterschiedliche Interessenkategorien priorisiert</li>
  <li><strong>Projektbeschreibung:</strong> Eine kurze Beschreibung des Vorhabens hilft dem Tool, relevante Interessen besser einzuschätzen</li>
</ul>
<p>Das Tool ruft sofort die Parzellendaten aus dem Grundbuch-GIS ab und zeigt eine Übersichtskarte.</p>

<h3>Phase 2: Automatische Geodatenanalyse</h3>
<p>In dieser Phase läuft die Hauptarbeit im Hintergrund. Das Tool fragt automatisch ab:</p>
<ul>
  <li>Fruchtfolgeflächen (FFF) nach VBLN</li>
  <li>Biotope und Naturschutzgebiete</li>
  <li>Gewässerräume nach GSchG</li>
  <li>Gefahrenkarten (Überschwemmung, Rutschung, Lawinen)</li>
  <li>Bundesinventare BLN, ISOS, IVS – auch in der Umgebung</li>
  <li>Waldgrenzen und Waldabstandslinien</li>
  <li>ÖV-Erschliessung (Güteklassen)</li>
  <li>Lärmempfindlichkeitsstufen</li>
  <li>Denkmalschutz und Ortsbildschutz</li>
  <li>Kantonale Richtplanfestlegungen</li>
</ul>
<p>Das Ergebnis: Eine Karte aller relevanten Datenschichten und eine Liste der identifizierten Interessen.</p>

<h3>Phase 3: Interessen bewerten</h3>
<p>Das Herzstück des Tools. Für jedes identifizierte Interesse:</p>
<ol>
  <li>Das Tool zeigt die relevanten Geodaten (z.B. «Parzelle liegt zu 30% in FFF»)</li>
  <li>Es macht einen Bewertungsvorschlag für Erheblichkeit und Gewichtung</li>
  <li>Planende prüfen, passen an und begründen die eigene Einschätzung</li>
  <li>Die Begründung wird direkt im Tool eingegeben und fliesst in den Bericht</li>
</ol>
<p><strong>Wichtig:</strong> Interessen können auch manuell hinzugefügt werden, wenn das Tool etwas nicht automatisch erfasst hat. Planende haben immer das letzte Wort.</p>

<h3>Phase 4: Abwägung und Synthese</h3>
<p>Nach der Einzelbewertung aller Interessen folgt die Gesamtabwägung:</p>
<ul>
  <li>Übersicht aller Schutz- vs. Nutzungsinteressen nach Gewicht</li>
  <li>AHP-Gewichtungsmatrix mit Konsistenzcheck</li>
  <li>Synthese-Feld: Gesamtbeurteilung und Schlussfolgerung (freitext + Vorschlag)</li>
  <li>Auflagen und Bedingungen definieren</li>
</ul>

<h3>Phase 5: Word-Export</h3>
<p>Der exportierte Planungsbericht enthält:</p>
<ul>
  <li>Deckblatt mit Projektinformationen</li>
  <li>Übersichtskarte mit allen Datenschichten</li>
  <li>Vollständige Interessenbewertungstabelle mit Begründungen</li>
  <li>Abwägungsmatrix (AHP)</li>
  <li>Gesamtbeurteilung und Schlussfolgerung</li>
  <li>Kantonale Checkliste (kantonal variierend)</li>
  <li>Rechtsgrundlagenverzeichnis</li>
</ul>
<p>Das Dokument ist so strukturiert, dass es direkt als Planungsbericht nach Art. 47 RPV verwendet werden kann – nach fachlicher Prüfung und allfälliger Ergänzung durch Planende.</p>

<blockquote>Der Workflow des Tools folgt bewusst der Dreischrittmethodik: Identifikation (Phase 2) → Bewertung (Phase 3) → Abwägung (Phase 4). Das entspricht exakt der rechtlichen Anforderung und der EspaceSuisse-Methodik.</blockquote>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'ia-q5-1',
                question: 'Was erfordert das Tool als Eingabe zu Beginn?',
                options: [
                  'Nur den Gemeindenamen',
                  'Gemeinde/Parzelle und den Planungsanlass (Einzonung, Umzonung oder Gestaltungsplan)',
                  'Den fertigen Baugesuch',
                  'Eine Unterschrift des Gemeindepräsidenten',
                ],
                correct: 1,
                explanation: 'Zu Beginn braucht das Tool: Gemeinde und Parzelle (über Adresse oder Koordinaten) sowie den Planungsanlass. Dieser bestimmt, welche Interessenkategorien im Vordergrund stehen.',
              },
              {
                id: 'ia-q5-2',
                question: 'Was enthält der Word-Export des Tools?',
                options: [
                  'Nur eine Interessenliste ohne Karten',
                  'Den fertigen Baubewilligungsentscheid',
                  'Übersichtskarte, vollständige Bewertungstabelle mit Begründungen, AHP-Matrix, Gesamtbeurteilung, kantonale Checkliste und Rechtsgrundlagen',
                  'Nur das Deckblatt',
                ],
                correct: 2,
                explanation: 'Der Word-Export ist ein vollständiger Planungsbericht: Karten, Bewertungstabellen mit Begründungen, AHP-Matrix, Gesamtbeurteilung und kantonale Checkliste – strukturiert nach Art. 47 RPV.',
              },
              {
                id: 'ia-q5-3',
                question: 'Was können Planende in Phase 3 (Interessen bewerten) anpassen?',
                options: [
                  'Nichts – die KI-Bewertungen sind fix',
                  'Nur die Farbe der Tabelle',
                  'Erheblichkeit, Gewichtung und Begründung für jedes Interesse – plus manuelle Ergänzung fehlender Interessen',
                  'Nur die Schlussfolgerung',
                ],
                correct: 2,
                explanation: 'Planende haben volle Kontrolle: KI-Vorschläge sind ein Ausgangspunkt. Erheblichkeit und Gewichtung können angepasst, Begründungen eingegeben und fehlende Interessen manuell ergänzt werden.',
              },
            ],
          },
        },
        {
          id: 'ia-agenten',
          slug: 'ia-agenten',
          title: 'Die Agenten-Debatte',
          description: 'Fünf spezialisierte KI-Agenten analysieren deine Interessenabwägung aus verschiedenen Perspektiven – und decken Schwachstellen auf.',
          videoId: '',
          content: `
<h2>Die Agenten-Debatte: Mehrperspektivische KI-Analyse</h2>
<p>Die Agenten-Debatte ist das innovativste Feature des Tools. Statt einer einzigen KI-Meinung erhalten Planende eine strukturierte Diskussion zwischen fünf spezialisierten KI-Agenten – jeder mit einer klar definierten Rolle und Perspektive. Das Ergebnis ist eine mehrperspektivische Qualitätsprüfung, bevor der Bericht eingereicht wird.</p>

<h3>Die fünf Agenten</h3>

<div style="background: #fff3e0; border-left: 4px solid #e65c00; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>FAKTEN-Agent</strong><br/>
  <em>Rolle: Vollständigkeit und Korrektheit prüfen</em><br/>
  Er analysiert: Wurden alle relevanten Geodaten berücksichtigt? Sind alle Interessen erfasst? Stimmen die zitierten Rechtsgrundlagen? Fehlt ein Bundesinventar? Er sucht aktiv nach Lücken und Ungenauigkeiten – und benennt sie konkret.
</div>

<div style="background: #e8f5e9; border-left: 4px solid #2e7d32; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>PRO-Agent (Nutzungsinteressen)</strong><br/>
  <em>Rolle: Die Projektvision vertreten</em><br/>
  Er argumentiert für das Vorhaben: Was spricht für die Einzonung? Welche Nutzungsinteressen wurden vielleicht untergewichtet? Er prüft, ob Entwicklungspotenziale angemessen berücksichtigt wurden, und liefert stärkere Argumente für die Projektsseite.
</div>

<div style="background: #fce4ec; border-left: 4px solid #c62828; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>CONTRA-Agent (Schutzinteressen)</strong><br/>
  <em>Rolle: Den Advocatus Diaboli spielen</em><br/>
  Er verteidigt Schutzinteressen: Wurden Naturwerte ausreichend gewichtet? Sind Gefahrenrisiken unterschätzt? Er nimmt die Perspektive einer Einsprecherin ein und formuliert die stärksten möglichen Gegenargumente – damit Planende sie adressieren können, bevor jemand anders es tut.
</div>

<div style="background: #e3f2fd; border-left: 4px solid #1565c0; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>RECHT-Agent</strong><br/>
  <em>Rolle: Rechtssicherheit und Bundesgerichtsfestigkeit prüfen</em><br/>
  Er analysiert aus juristischer Perspektive: Entspricht die Abwägung der Bundesgerichtspraxis? Sind die Begründungen substantiiert genug? Wurden Alternativen geprüft? Wo bestehen Anfechtungsrisiken? Er gibt konkrete Hinweise, was rechtlich noch gestärkt werden muss.
</div>

<div style="background: #f3e5f5; border-left: 4px solid #6a1b9a; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>MODERATOR-Agent</strong><br/>
  <em>Rolle: Synthese und Empfehlung</em><br/>
  Er fasst die Diskussion zusammen und liefert: eine Gesamtbeurteilung der Abwägungsqualität, konkrete Verbesserungsempfehlungen, vorgeschlagene Auflagen und Bedingungen, und eine Einschätzung der Genehmigungswahrscheinlichkeit.
</div>

<h3>Der Ablauf der Debatte</h3>
<p>Die Agenten arbeiten in <strong>drei strukturierten Runden</strong>:</p>
<ol>
  <li><strong>Runde 1 – Erstanalyse:</strong> Jeder Agent analysiert die Interessenabwägung aus seiner Perspektive unabhängig</li>
  <li><strong>Runde 2 – Erwiderungen:</strong> Die Agenten reagieren auf die Argumente der anderen – PRO und CONTRA treten in Dialog, RECHT kommentiert die Erwiderungen</li>
  <li><strong>Runde 3 – Synthese:</strong> Der Moderator fasst zusammen, gewichtet die Argumente und formuliert die Empfehlung</li>
</ol>

<h3>Wie man die Debatte nutzt</h3>
<p>Die Agenten-Debatte ist kein Urteil – sie ist ein Spiegel. Die wertvollsten Outputs:</p>
<ul>
  <li><strong>FAKTEN-Agent:</strong> Lücken schliessen, bevor der Kanton sie findet</li>
  <li><strong>CONTRA-Agent:</strong> Schwache Argumente stärken oder Auflagen antizipieren</li>
  <li><strong>RECHT-Agent:</strong> Anfechtungsrisiken vor der Einreichung eliminieren</li>
  <li><strong>MODERATOR:</strong> Empfehlungen direkt in den Bericht übernehmen</li>
</ul>

<blockquote>Die Agenten-Debatte gibt dir einen Blick aus der Perspektive deiner Kritiker – bevor die eigentliche Kritik kommt. Das ist der Unterschied zwischen einer guten und einer sehr guten Interessenabwägung.</blockquote>

<h3>Grenzen der Agenten-Debatte</h3>
<p>Auch die Agenten können irren: Sie kennen nur den digitalen Kontext – nicht die lokalpolitische Situation, persönliche Gespräche oder mündliche Zusicherungen. Die Debatte ist ein Qualitätswerkzeug, kein Ersatz für das Fachurteil der Planerin.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'ia-q6-1',
                question: 'Was ist die Rolle des CONTRA-Agenten in der Agenten-Debatte?',
                options: [
                  'Er prüft die Rechtssicherheit des Berichts',
                  'Er spielt den Advocatus Diaboli: Er verteidigt Schutzinteressen und formuliert die stärksten Gegenargumente gegen das Vorhaben',
                  'Er erstellt die Zusammenfassung',
                  'Er prüft die Vollständigkeit der Geodaten',
                ],
                correct: 1,
                explanation: 'Der CONTRA-Agent nimmt bewusst die Perspektive einer Einsprecherin ein und formuliert die stärksten Gegenargumente. Damit hilft er Planenden, Schwachstellen zu erkennen und zu stärken, bevor Einsprachen eingehen.',
              },
              {
                id: 'ia-q6-2',
                question: 'In wie vielen Runden läuft die Agenten-Debatte ab?',
                options: [
                  'Eine Runde – alle Agenten gleichzeitig',
                  'Fünf Runden – jeder Agent hat eine eigene Runde',
                  'Drei Runden: Erstanalyse, Erwiderungen und Synthese durch den Moderator',
                  'Zwei Runden: Pro und Contra',
                ],
                correct: 2,
                explanation: 'Die Debatte läuft in drei Runden: Erstanalyse (alle Agenten unabhängig), Erwiderungen (Agenten reagieren aufeinander), Synthese (Moderator fasst zusammen und empfiehlt).',
              },
              {
                id: 'ia-q6-3',
                question: 'Welchen Output des RECHT-Agenten sollte man besonders ernst nehmen?',
                options: [
                  'Seine Empfehlung für das Design des Berichts',
                  'Seine Hinweise zu Anfechtungsrisiken und nicht-substantiierten Begründungen – um sie vor der Einreichung zu beheben',
                  'Seine Bewertung der Geodaten',
                  'Seine Einschätzung des Grundstückwerts',
                ],
                correct: 1,
                explanation: 'Der RECHT-Agent prüft gegen die Bundesgerichtspraxis und benennt konkrete Anfechtungsrisiken. Diese Hinweise vor der Einreichung zu beheben ist der direkteste Weg zu einer rechtssicheren Abwägung.',
              },
            ],
          },
        },
        {
          id: 'ia-praxistipps',
          slug: 'ia-praxistipps',
          title: 'Praxistipps und häufige Fragen',
          description: 'Konkrete Tipps für den Einsatz des Tools, typische Fallstricke und wie man die Ergebnisse optimal im Planungsbericht nutzt.',
          videoId: '',
          content: `
<h2>Das Beste aus dem Tool herausholen</h2>
<p>Nach der technischen Einführung kommen die entscheidenden Nuancen: Was funktioniert in der Praxis gut? Wo liegen die typischen Fallstricke? Und wie nutzt man die Tool-Outputs optimal im Planungsprozess?</p>

<h3>Wann setzt man das Tool am besten ein?</h3>
<p>Das Tool ist in verschiedenen Phasen des Planungsprozesses wertvoll:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #fff3e0;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Planungsphase</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Nutzen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Machbarkeitscheck (früh)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Grobes Bild der Konfliktlage – lohnt sich weiterzumachen?</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Vorbereitung Vorstudien</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Geodatenanalyse als Basis für Gesprächsunterlagen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Erarbeitung Planungsbericht</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Vollständige Analyse, strukturierte Bewertung, Bericht-Export</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Vor Einreichung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Agenten-Debatte als letzte Qualitätssicherung</td>
    </tr>
  </tbody>
</table>

<h3>Tipps für bessere Ergebnisse</h3>
<ul>
  <li><strong>Projektbeschreibung nicht leer lassen:</strong> Eine gute Projektbeschreibung verbessert die KI-Vorschläge erheblich. Beschreibe Zweck, Grösse und besondere Merkmale des Vorhabens.</li>
  <li><strong>KI-Bewertungsvorschläge hinterfragen:</strong> Die Vorschläge basieren auf Geodaten – aber nicht auf lokalem Wissen. Ein KI-Vorschlag «gering erheblich» für ein Naturschutzgebiet kann falsch sein, wenn vor Ort bekannte Konflikte bestehen.</li>
  <li><strong>Begründungen ausformulieren:</strong> «Gemäss Geodaten liegt die Parzelle nicht in einem FFF» ist besser als «nicht betroffen». Der Textvorschlag des Tools ist ein Startpunkt – fachliche Ergänzungen stärken den Bericht.</li>
  <li><strong>Manuelle Interessen ergänzen:</strong> Das Tool kennt über 100 Interessen, aber nicht alle lokalen Besonderheiten. Ergänze fehlende Interessen manuell.</li>
  <li><strong>Agenten-Debatte ernst nehmen:</strong> Wenn der RECHT-Agent ein Anfechtungsrisiko nennt, ist das ein reales Risiko – nicht nur eine theoretische Möglichkeit.</li>
</ul>

<h3>Was man aus dem Word-Export direkt übernehmen kann</h3>
<p>Der Bericht ist als Grundlage konzipiert, nicht als Endprodukt. Diese Teile sind oft direkt verwendbar:</p>
<ul>
  <li>Parzellen- und Übersichtskarten</li>
  <li>Interessenbewertungstabelle (nach fachlicher Prüfung)</li>
  <li>Rechtsgrundlagenverzeichnis</li>
  <li>Kantonale Checkliste</li>
</ul>
<p>Diese Teile brauchen typischerweise Ergänzung durch Planende:</p>
<ul>
  <li>Einleitung und Projekthintergrund (lokales Wissen)</li>
  <li>Begründungen für strittige Interessen</li>
  <li>Gesamtbeurteilung und Schlussfolgerung</li>
  <li>Auflagen und Bedingungen</li>
</ul>

<h3>Häufig gestellte Fragen</h3>
<p><strong>Kann der Word-Export direkt beim Kanton eingereicht werden?</strong><br/>
Nach fachlicher Prüfung und allfälliger Ergänzung: ja. Das Dokument ist explizit auf die Anforderungen nach Art. 47 RPV ausgerichtet.</p>

<p><strong>Was, wenn das Tool eine FFF-Fläche falsch ausweist?</strong><br/>
Immer die Originalquelle prüfen (Swisstopo Kartenviewer oder kantonaler GIS-Browser). Bei Unstimmigkeiten die eigene fachliche Einschätzung dokumentieren und begründen.</p>

<p><strong>Ist die Agenten-Debatte vertraulich?</strong><br/>
Ja. Die Inhalte der Debatte und des Berichts werden nicht für das Training von KI-Modellen verwendet.</p>
          `,
          order: 4,
          quiz: {
            questions: [
              {
                id: 'ia-q7-1',
                question: 'Wann ist die Agenten-Debatte am wertvollsten?',
                options: [
                  'Ganz am Anfang, vor der Geodatenanalyse',
                  'Als letzte Qualitätssicherung unmittelbar vor der Einreichung des Planungsberichts',
                  'Nur wenn der Kanton es verlangt',
                  'Nur bei grossen Einzonungen über 2 Hektaren',
                ],
                correct: 1,
                explanation: 'Die Agenten-Debatte ist am wertvollsten, wenn die Abwägung weitgehend fertig ist – als letzter Qualitätscheck vor der Einreichung. Dann können die aufgedeckten Schwachstellen noch behoben werden.',
              },
              {
                id: 'ia-q7-2',
                question: 'Welchen Teil des Word-Exports braucht typischerweise die meiste eigene Ergänzung?',
                options: [
                  'Die Parzellen-Übersichtskarte',
                  'Das Rechtsgrundlagenverzeichnis',
                  'Die Gesamtbeurteilung, Schlussfolgerung und Begründungen für strittige Interessen',
                  'Die kantonale Checkliste',
                ],
                correct: 2,
                explanation: 'Karten, Tabellen und Rechtsgrundlagen sind meist direkt verwendbar. Die Gesamtbeurteilung und Begründungen für heikle Interessen erfordern das lokale Fachwissen des Planers – das kann das Tool nicht ersetzen.',
              },
              {
                id: 'ia-q7-3',
                question: 'Was sollte man tun, wenn das Tool eine Fruchtfolgefläche anders ausweist als erwartet?',
                options: [
                  'Den Tool-Output immer als korrekt akzeptieren',
                  'Die Analyse abbrechen',
                  'Die Originalquelle (Swisstopo / kantonaler GIS-Browser) prüfen und die eigene Einschätzung mit Begründung dokumentieren',
                  'Den Kanton um Klärung bitten, ohne selbst zu prüfen',
                ],
                correct: 2,
                explanation: 'Bei Unstimmigkeiten immer die Originalquelle prüfen. Die fachliche Einschätzung des Planers hat Vorrang – sie muss aber dokumentiert und begründet sein.',
              },
            ],
          },
        },
      ],
    },
  ],
};
