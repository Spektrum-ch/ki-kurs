import type { Course } from '@/types';

export const COURSE: Course = {
  title: 'KI für die Planungswelt',
  slug: 'ki-planungswelt',
  description: 'Lerne in 5 Modulen, wie du KI konkret in deinem Planungsalltag einsetzt – praxisnah, rechtssicher und sofort anwendbar.',
  modules: [
    {
      id: 'modul-0',
      slug: 'ki-grundlagen',
      title: 'KI-Grundlagen',
      description: 'Geschichte, Arten und Wirkungsweise der KI – der Einstieg, bevor wir in die Planungswelt eintauchen.',
      icon: '🧠',
      order: 1,
      lessons: [
        {
          id: 'pw-ki-geschichte',
          slug: 'ki-geschichte-und-arten',
          title: 'KI: Geschichte & Arten',
          description: 'Von Alan Turing bis ChatGPT – wie sich KI entwickelt hat und welche Arten heute relevant sind.',
          videoId: '',
          content: `
<h2>Was ist Künstliche Intelligenz?</h2>
<p>Künstliche Intelligenz (KI) beschreibt die Fähigkeit von Computersystemen, menschliche Denkprozesse zu simulieren: Lernen, Schlussfolgerungen ziehen, Probleme lösen und Entscheidungen treffen. Das reicht von einfacher Automatisierung bis hin zu komplexen neuronalen Netzwerken.</p>

<h3>Die Geschichte der KI auf einen Blick</h3>
<ul>
  <li><strong>1950er:</strong> Alan Turing entwickelt den Turing-Test. John McCarthy prägt den Begriff «Artificial Intelligence».</li>
  <li><strong>1960er:</strong> Erste Chatbots (ELIZA) zeigen, dass Maschinen Sprache verarbeiten können.</li>
  <li><strong>1970er–80er:</strong> Expertensysteme und erster Machine-Learning-Boom.</li>
  <li><strong>1990er:</strong> Neuronale Netzwerke gewinnen an Bedeutung.</li>
  <li><strong>2000er:</strong> Deep Learning ermöglicht Durchbrüche in Bilderkennung und Sprachverarbeitung.</li>
  <li><strong>2010er–heute:</strong> KI in allen Branchen – Natural Language Processing, Computer Vision, Generative KI.</li>
</ul>

<h3>Was treibt KI-Fortschritt an?</h3>
<p>Vier technologische Entwicklungen haben KI erst wirklich möglich gemacht:</p>
<ul>
  <li><strong>Internet:</strong> Schneller Zugang zu riesigen Datenmengen</li>
  <li><strong>Distributed Computing:</strong> Verteilte Rechenleistung für grosse Datensätze</li>
  <li><strong>IoT (Internet of Things):</strong> Vernetzte Geräte erzeugen massenhaft Daten – auch in Städten und Gemeinden (Smart City)</li>
  <li><strong>Social Media & Open Data:</strong> Unstrukturierte Daten in grossem Massstab</li>
</ul>

<h3>Drei KI-Stärken – Narrow, General, Super AI</h3>
<ul>
  <li><strong>Schwache / Narrow AI:</strong> Auf einen spezifischen Bereich spezialisiert. Beispiele: Sprachassistenten, Übersetzungsprogramme, Empfehlungsalgorithmen, Baugesuchsanalyse. <em>Das ist die KI, die wir heute nutzen.</em></li>
  <li><strong>Starke / General AI:</strong> Kann unterschiedliche Aufgaben bewältigen und selbstständig dazulernen. Noch in Entwicklung.</li>
  <li><strong>Super AI / Conscious AI:</strong> KI mit menschlichem Bewusstsein. Aktuell noch Science-Fiction.</li>
</ul>

<h3>Wie lernt eine KI?</h3>
<ul>
  <li><strong>Supervised Learning:</strong> Lernen anhand beschrifteter Beispiele (Input + gewünschter Output). Z.B. Baugesuche als «bewilligungsfähig» oder «nicht bewilligungsfähig» klassifizieren.</li>
  <li><strong>Unsupervised Learning:</strong> KI entdeckt selbst Muster in Daten. Z.B. ähnliche Quartiertypen in Geodaten identifizieren.</li>
  <li><strong>Reinforcement Learning:</strong> Lernen durch Versuch, Irrtum und Belohnung.</li>
</ul>

<blockquote>«KI ist kein Zaubertrick – sondern das Ergebnis von jahrzehntelanger Forschung, riesigen Datensätzen und immer leistungsfähigerer Hardware.»</blockquote>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'pw-g1',
                question: 'Wer prägte den Begriff «Artificial Intelligence» in den 1950er Jahren?',
                options: [
                  'Albert Einstein',
                  'Alan Turing',
                  'John McCarthy',
                  'Tim Berners-Lee',
                ],
                correct: 2,
                explanation: 'John McCarthy prägte 1956 den Begriff «Artificial Intelligence». Alan Turing entwickelte bereits 1950 den Turing-Test als Massstab für Maschinenintelligenz.',
              },
              {
                id: 'pw-g2',
                question: 'Was ist «Narrow AI» (Schwache KI)?',
                options: [
                  'Eine KI, die absichtlich schlechte Ergebnisse liefert',
                  'Eine KI, die für einen spezifischen Anwendungsbereich optimiert ist',
                  'Eine KI mit menschlichem Bewusstsein',
                  'Eine KI, die nur auf Supercomputern läuft',
                ],
                correct: 1,
                explanation: 'Narrow AI ist auf einen bestimmten Bereich spezialisiert – z.B. Übersetzungsprogramme oder Baugesuchsanalysen. Das ist die KI, die wir heute überall einsetzen.',
              },
              {
                id: 'pw-g3',
                question: 'Welche Lernmethode beschreibt das Lernen aus beschrifteten Beispielen?',
                options: [
                  'Reinforcement Learning',
                  'Unsupervised Learning',
                  'Supervised Learning',
                  'Deep Learning',
                ],
                correct: 2,
                explanation: 'Beim Supervised Learning (überwachtes Lernen) lernt die KI anhand von Beispielen mit klar definiertem Input und gewünschtem Output – z.B. Baugesuche klassifizieren.',
              },
            ],
          },
        },
        {
          id: 'pw-augmented-intel',
          slug: 'mensch-ki-augmented-intelligence',
          title: 'Mensch, Maschine & Augmented Intelligence',
          description: 'Wann ersetzt KI Planende – und wann unterstützt sie sie? Die entscheidende Unterscheidung.',
          videoId: '',
          content: `
<h2>Drei Formen der Intelligenz</h2>
<p>Es gibt nicht nur «Menschliche Intelligenz» und «Künstliche Intelligenz». Der interessanteste Bereich liegt dazwischen: die <strong>Augmented Intelligence</strong> – und genau hier liegt der Mehrwert für die Planungspraxis.</p>

<h3>Die drei Intelligenzformen</h3>
<ul>
  <li><strong>Menschliche Intelligenz:</strong> Du lenkst, entscheidest, trägst Verantwortung – z.B. im Planungsausschuss oder im Gespräch mit Einsprechenden.</li>
  <li><strong>Künstliche Intelligenz:</strong> Die Maschine übernimmt vollständig, kein menschlicher Eingriff nötig – z.B. automatische Klassifizierung von Bodennutzungsdaten.</li>
  <li><strong>Augmented Intelligence:</strong> Mensch und Maschine arbeiten zusammen. Die KI liefert Analyse, Zusammenfassung und Vorschlag – du bewertest und entscheidest.</li>
</ul>

<h3>Was können Maschinen besser?</h3>
<ul>
  <li>Grosse Datenmengen schnell verarbeiten (z.B. Hunderte Einsprachen sichten)</li>
  <li>Repetitive Aufgaben fehlerfrei ausführen (z.B. Protokolle formatieren)</li>
  <li>Muster in komplexen Geodatensätzen erkennen</li>
</ul>

<h3>Was können Planerinnen und Planer besser?</h3>
<ul>
  <li><strong>Kontextwissen:</strong> Das lokale Gefüge, politische Dynamiken, Interessenkonflikte verstehen</li>
  <li><strong>Abwägung:</strong> Widersprüchliche Interessen gewichten und vertretbare Entscheide treffen</li>
  <li><strong>Empathie:</strong> Mit Bevölkerung, Behörden und Einsprechenden kommunizieren</li>
  <li><strong>Verantwortung:</strong> Rechtlich und ethisch für Planungsentscheide einstehen</li>
</ul>

<h3>Augmented Intelligence in der Planungspraxis</h3>
<p>Konkrete Beispiele, wo Augmented Intelligence heute schon funktioniert:</p>
<ul>
  <li>KI fasst Einsprachen zusammen → Planende gewichten und empfehlen</li>
  <li>KI analysiert Bauzonenpotenziale aus Geodaten → Gemeinderat entscheidet</li>
  <li>KI erstellt Entwurf für Planungsbericht → Planerin prüft, ergänzt, zeichnet verantwortlich</li>
  <li>KI protokolliert Sitzungen → Verantwortliche genehmigen</li>
</ul>

<blockquote>«KI soll unterstützen, nicht ersetzen. Der Mensch bleibt Autor seiner Entscheidungen.» – SPEKTRUM</blockquote>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'pw-g4',
                question: 'Was versteht man unter «Augmented Intelligence» in der Planungspraxis?',
                options: [
                  'KI, die Planungsdokumente automatisch genehmigt',
                  'Das Zusammenspiel von Mensch und Maschine – KI analysiert, Mensch entscheidet',
                  'KI, die Planerinnen und Planer vollständig ersetzt',
                  'Eine neue GIS-Software für die Gemeindeverwaltung',
                ],
                correct: 1,
                explanation: 'Augmented Intelligence ist der Sweet Spot: KI übernimmt Datenanalyse und Entwürfe, der Mensch bewertet, gewichtet und trägt die Verantwortung.',
              },
              {
                id: 'pw-g5',
                question: 'Worin sind Planerinnen und Planer der KI klar überlegen?',
                options: [
                  'Hunderte Dokumente in Sekunden lesen',
                  'Repetitive Aufgaben fehlerfrei ausführen',
                  'Lokales Kontextwissen, Abwägung und Verantwortung',
                  'Immer 24/7 verfügbar sein',
                ],
                correct: 2,
                explanation: 'Lokales Wissen, politische Abwägung, Empathie gegenüber Einsprechenden und rechtliche Verantwortung bleiben menschliche Stärken – KI kann hier nur unterstützen.',
              },
              {
                id: 'pw-g6',
                question: 'Welches Beispiel zeigt Augmented Intelligence in der Planung?',
                options: [
                  'GIS berechnet automatisch Zonenflächen',
                  'KI genehmigt Baugesuche ohne menschliche Prüfung',
                  'KI fasst Einsprachen zusammen – Planende gewichten und empfehlen',
                  'Ein Tabellenkalkulationsprogramm erstellt Berichte',
                ],
                correct: 2,
                explanation: 'KI fasst zusammen, der Mensch bewertet und entscheidet – das ist Augmented Intelligence. GIS-Berechnungen sind klassische Software, keine KI.',
              },
            ],
          },
        },
        {
          id: 'pw-generative-ki',
          slug: 'generative-ki-und-llms',
          title: 'Generative KI & LLMs in der Planung',
          description: 'Was ChatGPT und Co. für Planende bedeuten – und wo Generative KI bereits in der Praxis eingesetzt wird.',
          videoId: '',
          content: `
<h2>Traditionelle KI vs. Generative KI</h2>
<p>Die meisten KI-Anwendungen analysieren Daten und treffen Entscheidungen. <strong>Generative KI macht etwas grundlegend anderes: Sie erschafft neue Inhalte.</strong> Das ist für Planerinnen und Planer besonders relevant – denn ein Grossteil des Planungsalltags besteht aus Schreiben, Strukturieren und Kommunizieren.</p>

<h3>Was ist Generative KI?</h3>
<p>Generative KI ist eine KI-Technologie, die vollständig neue Inhalte erzeugen kann: Texte, Bilder, Audio, Video und Code. Sie arbeitet nicht mit fixen Regeln, sondern mit tiefen Lernmodellen, die aus riesigen Datensätzen trainiert wurden.</p>

<h3>Was sind Large Language Models (LLMs)?</h3>
<p>LLMs sind das Herzstück moderner Text-KI – darauf ausgelegt, menschenähnliche Sprache zu verstehen und zu erzeugen:</p>
<ul>
  <li><strong>Textgenerierung:</strong> Planungsberichte, Stellungnahmen, E-Mails</li>
  <li><strong>Zusammenfassung:</strong> Lange Dokumente, Rechtstexte, Einsprachen auf den Punkt bringen</li>
  <li><strong>Übersetzung:</strong> Mehrsprachige Kommunikation in Gemeinden</li>
  <li><strong>Konversation:</strong> Bürgeranfragen beantworten, Informationen aufbereiten</li>
</ul>
<p>Bekannte LLMs: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google).</p>

<h3>Die wirtschaftliche Dimension</h3>
<p>Laut einer Studie von Goldman Sachs könnte Generative KI:</p>
<ul>
  <li>Das globale Wirtschaftswachstum um <strong>7%</strong> steigern (~7 Billionen USD)</li>
  <li>Das Produktivitätswachstum über 10 Jahre um <strong>1,5 Prozentpunkte</strong> erhöhen</li>
</ul>
<p>Für Gemeinden und Planungsbüros bedeutet das: Wer KI früh integriert, hat einen messbaren Effizienzvorteil.</p>

<h3>Konkrete Anwendungen in der Planungspraxis</h3>
<ul>
  <li><strong>Planungsberichte:</strong> Struktur vorschlagen, Rohtext aus Stichpunkten generieren, Formulierungen verfeinern</li>
  <li><strong>Einsprachen-Management:</strong> Hunderte Einsprachen sichten, thematisch clustern, zusammenfassen</li>
  <li><strong>Protokolle:</strong> Sitzungsnotizen automatisch in strukturierte Protokolle umwandeln (→ MINU-AI)</li>
  <li><strong>Rechtliche Texte:</strong> RPG, RPV, kantonale Richtpläne verständlich erklären lassen</li>
  <li><strong>Bürger-Kommunikation:</strong> Antworten auf häufige Anfragen strukturiert und verständlich aufbereiten</li>
</ul>

<blockquote>Generative KI ist keine ferne Zukunft – sie ist heute verfügbar. Im nächsten Modul zeigen wir dir, wie du sie konkret im Planungsalltag einsetzt.</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'pw-g7',
                question: 'Was unterscheidet Generative KI von traditioneller KI?',
                options: [
                  'Generative KI ist älter und bewährter',
                  'Generative KI erschafft neue Inhalte, traditionelle KI analysiert und entscheidet',
                  'Generative KI analysiert nur Daten',
                  'Es gibt keinen Unterschied',
                ],
                correct: 1,
                explanation: 'Traditionelle KI analysiert und entscheidet (z.B. Spam-Filter). Generative KI erschafft vollständig neue Inhalte – Texte, Bilder, Pläne – was für den Planungsalltag besonders wertvoll ist.',
              },
              {
                id: 'pw-g8',
                question: 'Welche Planungsaufgabe eignet sich besonders gut für Generative KI?',
                options: [
                  'Zonenflächen im GIS berechnen',
                  'Eine Grundbucheintragung vornehmen',
                  'Einen Planungsbericht aus Stichpunkten formulieren',
                  'Eine Parzelle vermessen',
                ],
                correct: 2,
                explanation: 'Texte schreiben – Berichte, Stellungnahmen, Protokolle – ist eine Kernstärke von Generativer KI. GIS-Berechnungen und Vermessungen sind klassische Software.',
              },
              {
                id: 'pw-g9',
                question: 'Was ist MINU-AI im SPEKTRUM-Kontext?',
                options: [
                  'Ein GIS-Tool zur Flächenberechnung',
                  'Ein Tool zur automatischen Protokollgenerierung aus Sitzungen',
                  'Eine Datenbank für Baugesuche',
                  'Ein Visualisierungstool für Richtpläne',
                ],
                correct: 1,
                explanation: 'MINU-AI ist ein SPEKTRUM-Tool, das Sitzungsnotizen automatisch in strukturierte Protokolle umwandelt – ein konkretes Beispiel für Generative KI im Verwaltungsalltag.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'modul-1',
      slug: 'ki-verstehen',
      title: 'KI verstehen',
      description: 'Grundlagen der Künstlichen Intelligenz – einfach erklärt, ohne Technik-Kauderwelsch.',
      icon: '🤖',
      order: 2,
      lessons: [
        {
          id: 'was-ist-ki',
          slug: 'was-ist-ki',
          title: 'Was ist KI – einfach erklärt',
          description: 'Ein verständlicher Einstieg: Was KI ist, was sie kann und was nicht.',
          videoId: 'DEIN_YOUTUBE_ID_1', // YouTube Video ID hier eintragen
          content: `
<h2>Was ist Künstliche Intelligenz?</h2>
<p>Künstliche Intelligenz (KI) ist ein Oberbegriff für Computerprogramme, die Aufgaben ausführen können, die normalerweise menschliche Intelligenz erfordern – wie Texte verstehen, Bilder erkennen oder Muster in Daten finden.</p>

<h3>Die wichtigste Unterscheidung</h3>
<p>Im Gegensatz zu klassischer Software, die strikt nach vorprogrammierten Regeln arbeitet, <strong>lernt KI aus Beispielen</strong>. Das macht sie flexibel – aber auch schwerer vorhersehbar.</p>

<h3>Drei Arten von KI, die du kennen solltest</h3>
<ul>
  <li><strong>Machine Learning:</strong> KI lernt Muster aus grossen Datensätzen (z.B. Baugesuchsdaten analysieren)</li>
  <li><strong>Generative KI:</strong> KI erzeugt neue Inhalte – Texte, Bilder, Pläne (z.B. ChatGPT, Midjourney)</li>
  <li><strong>Computer Vision:</strong> KI erkennt und interpretiert Bilder und Karten (z.B. Luftbildanalyse)</li>
</ul>

<h3>Relevanz für die Planungswelt</h3>
<p>In der Raumplanung, Architektur und Gemeindepolitik verändert KI bereits heute wie wir Daten auswerten, Berichte schreiben und Szenarien entwickeln.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'q1',
                question: 'Was unterscheidet KI von klassischer Software hauptsächlich?',
                options: [
                  'KI ist schneller als klassische Software',
                  'KI lernt aus Beispielen statt nach festen Regeln zu arbeiten',
                  'KI braucht keine Daten',
                  'KI kann nur Texte verarbeiten',
                ],
                correct: 1,
                explanation: 'Richtig! KI lernt aus Daten und Beispielen, während klassische Software strikt nach vorprogrammierten Regeln arbeitet.',
              },
              {
                id: 'q2',
                question: 'Welche KI-Art erzeugt neue Inhalte wie Texte oder Bilder?',
                options: [
                  'Machine Learning',
                  'Computer Vision',
                  'Generative KI',
                  'Klassische Programmierung',
                ],
                correct: 2,
                explanation: 'Generative KI (z.B. ChatGPT, Midjourney) kann neue Inhalte erzeugen – von Texten über Bilder bis zu Plänen.',
              },
            ],
          },
        },
        {
          id: 'ki-vs-software',
          slug: 'ki-vs-software',
          title: 'KI vs. klassische Software',
          description: 'Wann ist KI sinnvoll und wann reicht klassische Software?',
          content: `
<h2>KI vs. klassische Software – wann was?</h2>
<p>Nicht jede Aufgabe braucht KI. Die richtige Wahl hängt von der Art des Problems ab.</p>

<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 12px; text-align: left; border: 1px solid #d2d2d7;">Klassische Software</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #d2d2d7;">Künstliche Intelligenz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #d2d2d7;">Klare, feste Regeln</td>
      <td style="padding: 12px; border: 1px solid #d2d2d7;">Viele Ausnahmen, komplexe Muster</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px; border: 1px solid #d2d2d7;">Zonenplan-Verwaltung</td>
      <td style="padding: 12px; border: 1px solid #d2d2d7;">Einsprachen-Zusammenfassung</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #d2d2d7;">Flächen berechnen</td>
      <td style="padding: 12px; border: 1px solid #d2d2d7;">Planungsbericht schreiben</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px; border: 1px solid #d2d2d7;">Formulare ausfüllen</td>
      <td style="padding: 12px; border: 1px solid #d2d2d7;">Luftbilder analysieren</td>
    </tr>
  </tbody>
</table>

<h3>Fazit für Planer</h3>
<p>KI ergänzt bestehende Werkzeuge – sie ersetzt nicht GIS, AutoCAD oder dein Fachwissen. Sie nimmt dir repetitive, sprachliche und analytische Aufgaben ab, damit du dich auf das Wesentliche konzentrieren kannst.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'q3',
                question: 'Für welche Aufgabe eignet sich KI besonders gut?',
                options: [
                  'Eine Fläche in GIS berechnen',
                  'Einen Planungsbericht aus Rohdaten zusammenfassen',
                  'Eine Grundbucheintragung vornehmen',
                  'Eine Tabelle formatieren',
                ],
                correct: 1,
                explanation: 'KI ist stark bei komplexen Sprach- und Analyseaufgaben – wie das Zusammenfassen von Planungsberichten aus vielen Eingaben.',
              },
            ],
          },
        },
        {
          id: 'ki-planungswelt-heute',
          slug: 'ki-planungswelt-heute',
          title: 'Wie KI die Planungsbranche verändert',
          description: 'Aktuelle Anwendungen und Trends – was passiert schon heute.',
          videoId: 'DEIN_YOUTUBE_ID_2',
          content: `
<h2>KI in der Planungswelt – was passiert schon heute?</h2>
<p>Die Planungsbranche steht am Anfang einer grossen Transformation. Hier sind die wichtigsten Entwicklungen:</p>

<h3>1. Textarbeit & Berichte</h3>
<p>Planungsberichte, Einsprachen-Zusammenfassungen, Nutzungskonzepte – KI kann erste Entwürfe in Minuten statt Stunden erstellen.</p>

<h3>2. Geodaten-Analyse</h3>
<p>KI-gestützte Tools analysieren Luftbilder, erkennen Gebäudetypen, schätzen Bevölkerungsdichten und erstellen automatisierte Auswertungen.</p>

<h3>3. Öffentlichkeitsbeteiligung</h3>
<p>KI kann Hunderte von Rückmeldungen aus Mitwirkungsverfahren automatisch kategorisieren und zusammenfassen.</p>

<h3>4. Visualisierung & Entwurf</h3>
<p>Architekten und Stadtplaner nutzen generative KI für schnelle Konzepte, Visualisierungen und Varianten-Studien.</p>

<blockquote style="border-left: 4px solid #0057a8; padding: 12px 20px; margin: 20px 0; background: #f0f7ff; border-radius: 0 8px 8px 0;">
  <strong>Wichtig:</strong> KI ist kein Ersatz für planerisches Fachwissen, Ortskenntnis und rechtliche Verantwortung. Sie ist ein leistungsstarkes Werkzeug – nicht mehr, nicht weniger.
</blockquote>
          `,
          order: 3,
        },
      ],
    },
    {
      id: 'modul-2',
      slug: 'ki-tools-alltag',
      title: 'KI-Tools im Planungsalltag',
      description: 'Konkrete Werkzeuge, die Planende sofort nutzen können.',
      icon: '🛠️',
      order: 3,
      lessons: [
        {
          id: 'ki-fuer-texte',
          slug: 'ki-fuer-texte',
          title: 'KI für Texte & Berichte',
          description: 'ChatGPT, Claude & Co. effektiv für Planungsaufgaben nutzen.',
          content: `
<h2>KI für Texte – der grösste Quick Win</h2>
<p>Grosse Sprachmodelle wie ChatGPT oder Claude sind der einfachste Einstieg in die KI-Nutzung für Planende.</p>

<h3>Konkrete Einsatzgebiete</h3>
<ul>
  <li>Erste Entwürfe für Planungsberichte und Konzepte</li>
  <li>Zusammenfassung von Einsprachen und Stellungnahmen</li>
  <li>Übersetzung von Fachtext in Bürgersprache</li>
  <li>Antworten auf häufige Anfragen formulieren</li>
  <li>Sitzungsprotokolle strukturieren</li>
</ul>

<h3>Der Schlüssel: Der richtige Prompt</h3>
<p>Die Qualität des Ergebnisses hängt direkt von der Qualität deiner Anfrage ab. Ein guter Prompt enthält:</p>
<ol>
  <li><strong>Rolle:</strong> «Du bist ein erfahrener Raumplaner in der Schweiz...»</li>
  <li><strong>Aufgabe:</strong> «Schreibe einen Planungsbericht für...»</li>
  <li><strong>Kontext:</strong> «Die Gemeinde hat 3'200 Einwohner, liegt in...»</li>
  <li><strong>Format:</strong> «Strukturiere den Bericht mit: Ausgangslage, Ziele, Massnahmen»</li>
</ol>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'q-m2-1',
                question: 'Was ist der wichtigste Faktor für gute KI-Textergebnisse?',
                options: [
                  'Die Geschwindigkeit der Internetverbindung',
                  'Die Qualität und Präzision des Prompts',
                  'Die Anzahl der Wiederholungen',
                  'Das verwendete Gerät',
                ],
                correct: 1,
                explanation: 'Ein präziser, gut strukturierter Prompt (Anfrage) ist der wichtigste Faktor für hochwertige KI-Ergebnisse.',
              },
            ],
          },
        },
        {
          id: 'ki-fuer-visualisierungen',
          slug: 'ki-fuer-visualisierungen',
          title: 'KI für Visualisierungen',
          description: 'Midjourney, DALL-E und andere Tools für Planungsvisualisierungen.',
          content: `
<h2>KI-Visualisierungen in der Planung</h2>
<p>Generative Bildmodelle revolutionieren, wie wir Planungsideen visualisieren und kommunizieren.</p>

<h3>Einsatzgebiete</h3>
<ul>
  <li>Erste Konzeptvisualisierungen für Mitwirkungsverfahren</li>
  <li>Stimmungsbilder für Gestaltungskonzepte</li>
  <li>Varianten-Studien (Was wäre wenn?)</li>
  <li>Kommunikation mit der Öffentlichkeit</li>
</ul>

<h3>Wichtige Tools</h3>
<ul>
  <li><strong>Midjourney:</strong> Bester Output für architektonische Visualisierungen</li>
  <li><strong>DALL-E (ChatGPT):</strong> Direkt in ChatGPT integriert, einfach nutzbar</li>
  <li><strong>Adobe Firefly:</strong> DSGVO-konform, trainiert auf lizenzierten Inhalten</li>
</ul>

<blockquote style="border-left: 4px solid #e8a000; padding: 12px 20px; margin: 20px 0; background: #fffbf0; border-radius: 0 8px 8px 0;">
  <strong>Rechtlicher Hinweis:</strong> KI-generierte Bilder sollten in offiziellen Planungsdokumenten als solche gekennzeichnet werden. Urheberrechtsfragen sind noch nicht abschliessend geklärt – mehr dazu in Modul 4.
</blockquote>
          `,
          order: 2,
        },
        {
          id: 'workflow-automatisierung',
          slug: 'workflow-automatisierung',
          title: 'Workflow-Automatisierung im Büro',
          description: 'Repetitive Aufgaben mit KI automatisieren und Zeit sparen.',
          content: `
<h2>Workflows automatisieren</h2>
<p>Die grössten Zeitersparnisse entstehen nicht durch einzelne KI-Anfragen, sondern durch systematisierte Workflows.</p>

<h3>Typische automatisierbare Workflows für Planer</h3>

<div style="background: #f0f7ff; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <strong>Workflow 1: Eingangs-E-Mails kategorisieren</strong><br>
  E-Mail empfangen → KI klassifiziert Anfrage → automatische Weiterleitung ans richtige Team
</div>

<div style="background: #f0fff8; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <strong>Workflow 2: Protokoll-Erstellung</strong><br>
  Sitzung aufnehmen → Transkription → KI strukturiert Protokoll → Review & Versand
</div>

<div style="background: #fff8f0; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <strong>Workflow 3: Baugesuch-Prüfung</strong><br>
  Unterlagen hochladen → KI prüft Vollständigkeit → Checkliste wird automatisch ausgefüllt
</div>

<h3>Empfohlene Tools</h3>
<ul>
  <li><strong>Make.com</strong> (ehemals Integromat) – visueller Workflow-Builder, kein Code nötig</li>
  <li><strong>Zapier</strong> – ähnlich wie Make, sehr viele Integrationen</li>
  <li><strong>Microsoft Copilot</strong> – direkt in Office 365 integriert</li>
</ul>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'q-m2-3',
                question: 'Welches Tool eignet sich für visuelle Workflow-Automatisierung ohne Code?',
                options: [
                  'Python Scripts',
                  'Make.com (ehemals Integromat)',
                  'Excel Makros',
                  'Adobe Photoshop',
                ],
                correct: 1,
                explanation: 'Make.com (ehemals Integromat) ist ein visueller Workflow-Builder, der ohne Programmierkenntnisse komplexe Automatisierungen ermöglicht.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'modul-3',
      slug: 'ki-raumplanung',
      title: 'KI in der Raumplanung',
      description: 'Bauzonenanalyse, Bevölkerungsprognosen und Szenarien mit KI.',
      icon: '🗺️',
      order: 4,
      lessons: [
        {
          id: 'bauzonenanalyse',
          slug: 'bauzonenanalyse',
          title: 'Bauzonenanalyse mit KI',
          description: 'Wie KI die Bauzonenkapazitätsberechnung unterstützt.',
          content: `
<h2>Bauzonenanalyse – KI als Unterstützung</h2>
<p>Die Bauzonenkapazitätsberechnung nach RPG Art. 15 ist eine zentrale Aufgabe der Raumplanung. KI kann diesen Prozess erheblich beschleunigen.</p>

<h3>Was KI leisten kann</h3>
<ul>
  <li>Automatische Auswertung von GIS-Daten</li>
  <li>Erkennung von Lücken und Reserveflächen in Luftbildern</li>
  <li>Berechnung von Kapazitätskennzahlen</li>
  <li>Generierung von Berichtstexten aus Rohdaten</li>
</ul>

<h3>Was KI nicht ersetzen kann</h3>
<ul>
  <li>Ortskenntnis und lokales Kontextwissen</li>
  <li>Rechtliche Beurteilung nach kantonalem Recht</li>
  <li>Politische Abwägungen und demokratische Prozesse</li>
</ul>

<div style="background: #f0f7ff; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <strong>Praxisbeispiel:</strong> Ein Kanton hat GIS-Daten mit KI ausgewertet und dabei 180 ha überbaubare Bauzonenfläche identifiziert, die bisher nicht als Potenzial erfasst war. Der manuelle Prozess hätte Wochen gedauert – die KI-gestützte Analyse dauerte 2 Tage.
</div>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'q-m3-1',
                question: 'Welchen Vorteil bietet KI bei der Bauzonenanalyse hauptsächlich?',
                options: [
                  'Sie ersetzt die rechtliche Beurteilung',
                  'Sie beschleunigt die Datenauswertung erheblich',
                  'Sie macht Ortsbegehungen überflüssig',
                  'Sie erstellt rechtsgültige Planungsdokumente',
                ],
                correct: 1,
                explanation: 'KI beschleunigt die Datenauswertung – die rechtliche Beurteilung, Ortskenntnis und politische Abwägungen bleiben menschliche Aufgaben.',
              },
            ],
          },
        },
        {
          id: 'bevoelkerungsprognosen',
          slug: 'bevoelkerungsprognosen',
          title: 'Bevölkerungsprognosen & Szenarien',
          description: 'Datengestützte Szenarien für die Raumplanung.',
          content: `
<h2>Bevölkerungsprognosen mit KI</h2>
<p>Prognosen sind die Grundlage jeder langfristigen Raumplanung. KI kann verschiedene Szenarien schnell berechnen und visualisieren.</p>

<h3>Szenario-Planung mit KI</h3>
<p>Statt eines einzelnen Prognosewertes lassen sich mit KI schnell multiple Szenarien berechnen:</p>
<ul>
  <li><strong>Trendszenario:</strong> Fortschreibung der aktuellen Entwicklung</li>
  <li><strong>Wachstumsszenario:</strong> Attraktivitätssteigerung durch Investitionen</li>
  <li><strong>Schrumpfungsszenario:</strong> Abwanderung und Alterung</li>
</ul>

<h3>Datenquellen in der Schweiz</h3>
<ul>
  <li>BFS STATPOP – Bevölkerungsstatistik</li>
  <li>ARE Raumbeobachtung – Raumplanerische Kennzahlen</li>
  <li>Kantonale GIS-Portale</li>
  <li>swisstopo – Geodaten</li>
</ul>
          `,
          order: 2,
        },
        {
          id: 'ki-nutzungskonzepte',
          slug: 'ki-nutzungskonzepte',
          title: 'KI für Nutzungskonzepte',
          description: 'Wie KI bei der Entwicklung von Nutzungskonzepten helfen kann.',
          content: `
<h2>KI für Nutzungskonzepte</h2>
<p>Nutzungskonzepte erfordern die Synthese von vielen Informationen. Genau hier kann KI einen grossen Mehrwert liefern.</p>

<h3>Typischer KI-unterstützter Prozess</h3>
<ol>
  <li><strong>Datensammlung:</strong> Bestehende Studien, Statistiken, Planungsdokumente</li>
  <li><strong>KI-Analyse:</strong> Zusammenfassung, Widersprüche identifizieren, Muster erkennen</li>
  <li><strong>Konzeptentwicklung:</strong> KI schlägt Varianten vor, du wählst und verfeinert</li>
  <li><strong>Kommunikation:</strong> KI erstellt verständliche Zusammenfassungen für verschiedene Zielgruppen</li>
</ol>

<h3>Fallstudie: Umnutzung Industriegebiet</h3>
<p>Eine Gemeinde musste ein 8 ha grosses Industriegebiet neu planen. Mit KI-Unterstützung wurden 47 Vergleichsbeispiele aus der Schweiz ausgewertet, Stärken und Schwächen identifiziert und drei Nutzungsvarianten entwickelt – in 3 Tagen statt 3 Wochen.</p>
          `,
          order: 3,
        },
      ],
    },
    {
      id: 'modul-4',
      slug: 'recht-datenschutz',
      title: 'Recht, Datenschutz & Ethik',
      description: 'Sicher und verantwortungsvoll KI einsetzen im Planungskontext.',
      icon: '⚖️',
      order: 5,
      lessons: [
        {
          id: 'rpg-und-ki',
          slug: 'rpg-und-ki',
          title: 'RPG & KI – was ist erlaubt?',
          description: 'Rechtliche Grundlagen für KI-Einsatz in der Raumplanung.',
          content: `
<h2>RPG und KI – der rechtliche Rahmen</h2>
<p>Der Einsatz von KI in der Raumplanung ist grundsätzlich erlaubt – aber mit wichtigen Einschränkungen.</p>

<h3>Was ist erlaubt</h3>
<ul>
  <li>KI als Hilfsmittel für Analysen und Textentwürfe</li>
  <li>Automatisierte Datenauswertungen als Entscheidungsgrundlage</li>
  <li>KI-gestützte Visualisierungen in Mitwirkungsverfahren</li>
</ul>

<h3>Was problematisch ist</h3>
<ul>
  <li>Automatisierte Entscheide ohne menschliche Überprüfung</li>
  <li>KI-generierte Dokumente ohne Kennzeichnung</li>
  <li>Verwendung von KI-Ergebnissen ohne Verständnis des Prozesses</li>
</ul>

<h3>Grundsatz: Menschliche Verantwortung bleibt</h3>
<p>Planungsentscheide sind Ermessensentscheide von Behörden oder Fachleuten. Die Verantwortung kann nicht an eine KI delegiert werden. KI kann informieren und unterstützen – entscheiden müssen Menschen.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'q-m4-1',
                question: 'Was ist beim KI-Einsatz in offiziellen Planungsverfahren besonders wichtig?',
                options: [
                  'KI-Ergebnisse dürfen direkt übernommen werden',
                  'Die menschliche Verantwortung für Entscheide bleibt immer',
                  'KI muss immer das letzte Wort haben',
                  'Datenschutz spielt keine Rolle',
                ],
                correct: 1,
                explanation: 'Die menschliche Verantwortung für Planungsentscheide kann nicht an KI delegiert werden. KI unterstützt – Menschen entscheiden.',
              },
            ],
          },
        },
        {
          id: 'datenschutz-dsg',
          slug: 'datenschutz-dsg',
          title: 'Datenschutz beim KI-Einsatz (DSG/DSGVO)',
          description: 'Schweizer und europäisches Datenschutzrecht im KI-Kontext.',
          content: `
<h2>Datenschutz beim KI-Einsatz</h2>

<h3>Schweizer Datenschutzgesetz (DSG)</h3>
<p>Seit September 2023 gilt das revidierte DSG in der Schweiz. Wichtige Punkte für den KI-Einsatz:</p>
<ul>
  <li>Personendaten dürfen nur für den angegebenen Zweck verwendet werden</li>
  <li>Transparenz über automatisierte Entscheidungen ist erforderlich</li>
  <li>Daten sind zu schützen und nicht unnötig zu sammeln</li>
</ul>

<h3>Praktische Regeln für den Planungsalltag</h3>
<div style="background: #fff0f0; padding: 20px; border-radius: 12px; margin: 16px 0;">
  <strong>❌ Nicht tun:</strong> Persönliche Daten von Bürgern in öffentliche KI-Tools (ChatGPT etc.) eingeben
</div>
<div style="background: #f0fff8; padding: 20px; border-radius: 12px; margin: 16px 0;">
  <strong>✅ Erlaubt:</strong> Anonymisierte Daten und Statistiken verwenden, interne KI-Lösungen mit Datenverarbeitungsvertrag nutzen
</div>

<h3>Empfehlung</h3>
<p>Für sensitive Gemeindedaten: entweder anonymisieren oder KI-Tools mit EU/CH-Datenverarbeitung und Auftragsverarbeitungsvertrag nutzen (z.B. Microsoft Copilot mit Azure CH-Rechenzentrum).</p>
          `,
          order: 2,
        },
        {
          id: 'ethik-planung',
          slug: 'ethik-planung',
          title: 'Ethik & Bias in der Planung',
          description: 'Faire und ethische KI-Nutzung in der Raumplanung.',
          content: `
<h2>Ethik und Bias – was Planende wissen müssen</h2>

<h3>Was ist Bias in KI?</h3>
<p>KI-Modelle lernen aus historischen Daten. Wenn diese Daten bestimmte Gruppen unter- oder überrepräsentieren, spiegelt sich das in den Ergebnissen wider.</p>

<h3>Konkrete Risiken in der Planung</h3>
<ul>
  <li><strong>Stadtentwicklung:</strong> KI könnte historisch benachteiligte Quartiere systematisch schlechter bewerten</li>
  <li><strong>Verkehrsplanung:</strong> Wenn Mobilitätsdaten primär von der Mehrheit stammen, werden Minderheiten vernachlässigt</li>
  <li><strong>Bevölkerungsprognosen:</strong> Modelle basieren auf Vergangenheit – strukturelle Veränderungen werden oft unterschätzt</li>
</ul>

<h3>Gegenmassnahmen</h3>
<ol>
  <li>Diverse Datensätze verwenden</li>
  <li>KI-Ergebnisse kritisch hinterfragen</li>
  <li>Betroffene Gruppen in Planungsprozesse einbeziehen</li>
  <li>Transparenz über KI-Einsatz schaffen</li>
</ol>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'q-m4-3',
                question: 'Wie entsteht Bias in KI-Systemen hauptsächlich?',
                options: [
                  'Durch schlechte Hardware',
                  'Durch einseitige oder nicht repräsentative Trainingsdaten',
                  'Durch zu viel Rechenleistung',
                  'Durch Programmierfehler',
                ],
                correct: 1,
                explanation: 'Bias entsteht hauptsächlich durch nicht repräsentative Trainingsdaten. KI spiegelt die Ungleichgewichte in den Daten, mit denen sie trainiert wurde.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'modul-5',
      slug: 'ki-reifegrad',
      title: 'Dein KI-Reifegrad',
      description: 'Standortbestimmung und persönlicher Fahrplan für deinen KI-Einstieg.',
      icon: '🚀',
      order: 6,
      lessons: [
        {
          id: 'selbsttest',
          slug: 'selbsttest',
          title: 'Selbsttest: Wo stehst du?',
          description: 'Bestimme deinen aktuellen KI-Reifegrad.',
          content: `
<h2>Dein KI-Reifegrad</h2>
<p>Beantworte die folgenden Fragen ehrlich – es gibt keine falschen Antworten. Ziel ist ein klares Bild deines aktuellen Stands.</p>

<p style="background: #f0f7ff; padding: 16px; border-radius: 10px; margin: 20px 0;">
  💡 <strong>Tipp:</strong> Nutze das Quiz unten, um deinen Reifegrad zu ermitteln. Die Auswertung zeigt dir, wo du stehst und was die nächsten sinnvollen Schritte sind.
</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'reife-1',
                question: 'Wie oft nutzt du aktuell KI-Tools in deiner Arbeit?',
                options: [
                  'Noch nie / kaum',
                  'Gelegentlich (1–2x pro Woche)',
                  'Regelmässig (täglich)',
                  'KI ist fester Teil meines Workflows',
                ],
                correct: 3,
                explanation: 'Es gibt kein falsches Ergebnis – je öfter du KI nutzt, desto mehr Erfahrung sammelst du.',
              },
              {
                id: 'reife-2',
                question: 'Welche KI-Tools kennst und nutzt du?',
                options: [
                  'Ich kenne keine KI-Tools',
                  'ChatGPT oder Claude gelegentlich',
                  'Mehrere Tools für verschiedene Aufgaben',
                  'Ich habe KI in bestehende Workflows integriert',
                ],
                correct: 3,
                explanation: 'Die Integration von KI in bestehende Workflows ist das Ziel – du bist auf einem guten Weg.',
              },
              {
                id: 'reife-3',
                question: 'Wie sicher fühlst du dich im Umgang mit Datenschutz beim KI-Einsatz?',
                options: [
                  'Unsicher – ich weiss nicht, was erlaubt ist',
                  'Ich habe Grundkenntnisse',
                  'Ich kenne die wichtigsten Regeln',
                  'Ich habe klare Richtlinien für mein Büro definiert',
                ],
                correct: 3,
                explanation: 'Klare interne Richtlinien sind der beste Schutz – du bist gut aufgestellt.',
              },
            ],
          },
        },
        {
          id: 'quick-wins',
          slug: 'quick-wins',
          title: 'Deine Quick Wins – sofort starten',
          description: 'Konkrete erste Schritte für morgen früh.',
          content: `
<h2>Quick Wins – starte morgen früh</h2>
<p>Theorie ist gut – Praxis ist besser. Hier sind drei Aktionen, die du in der nächsten Woche umsetzen kannst:</p>

<div style="background: #f0f7ff; border-radius: 12px; padding: 24px; margin: 20px 0;">
  <h3 style="color: #0057a8; margin-bottom: 12px;">🥇 Quick Win 1: Einen Planungsbericht skizzieren</h3>
  <p>Nimm ein aktuelles Projekt und lass ChatGPT oder Claude einen ersten Berichtsentwurf erstellen. Gib dabei Gemeinde, Ausgangslage und Ziele als Kontext an.</p>
  <p><strong>Zeitaufwand:</strong> 20 Minuten</p>
</div>

<div style="background: #f0fff8; border-radius: 12px; padding: 24px; margin: 20px 0;">
  <h3 style="color: #00a896; margin-bottom: 12px;">🥈 Quick Win 2: Sitzungsnotizen zusammenfassen</h3>
  <p>Tippe oder diktiere die Kernpunkte deiner nächsten Sitzung in die KI und lass ein strukturiertes Protokoll erstellen.</p>
  <p><strong>Zeitaufwand:</strong> 15 Minuten</p>
</div>

<div style="background: #fff8f0; border-radius: 12px; padding: 24px; margin: 20px 0;">
  <h3 style="color: #e8a000; margin-bottom: 12px;">🥉 Quick Win 3: Eine Einsprache zusammenfassen</h3>
  <p>Kopiere eine längere Einsprache in die KI und bitte um eine strukturierte Zusammenfassung der Hauptargumente.</p>
  <p><strong>Zeitaufwand:</strong> 10 Minuten</p>
</div>
          `,
          order: 2,
        },
        {
          id: 'netzwerk-ausblick',
          slug: 'netzwerk-ausblick',
          title: 'Community & nächste Schritte',
          description: 'Bleib am Ball – mit Netzwerk und weiterführenden Angeboten.',
          content: `
<h2>Du hast den Kurs abgeschlossen 🎉</h2>
<p>Herzlichen Glückwunsch! Du hast alle 5 Module abgeschlossen und einen soliden Grundstein für deinen KI-Einsatz in der Planungswelt gelegt.</p>

<h3>Was jetzt?</h3>

<div style="background: linear-gradient(135deg, #f0f7ff, #f0fff8); border-radius: 16px; padding: 28px; margin: 24px 0;">
  <h4>📬 Newsletter</h4>
  <p>Du erhältst ab sofort regelmässige Updates zu KI-Tools, Fallstudien und Praxistipps aus der Planungswelt.</p>
</div>

<div style="background: #f8f9fa; border-radius: 16px; padding: 28px; margin: 24px 0;">
  <h4>🤝 Netzwerk</h4>
  <p>Tausche dich mit anderen Planern aus, die KI einsetzen. Der Austausch von Erfahrungen ist der schnellste Lernweg.</p>
</div>

<div style="background: linear-gradient(135deg, #0057a8, #00a896); border-radius: 16px; padding: 28px; margin: 24px 0; color: white;">
  <h4>🚀 Vertiefung mit SPEKTRUM</h4>
  <p>Du möchtest tiefer einsteigen? Andreas Rupf und das SPEKTRUM-Team bieten massgeschneiderte Workshops und Beratung für Planungsbüros und Gemeinden an.</p>
  <a href="https://spekt.ch/ki-workshop.html" style="display: inline-block; background: white; color: #0057a8; padding: 10px 20px; border-radius: 8px; font-weight: 600; margin-top: 12px;">
    Mehr erfahren →
  </a>
</div>
          `,
          order: 3,
        },
      ],
    },
  ],
};

/** Alle Lektionen flach als Array */
export function getAllLessons() {
  return COURSE.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id, moduleSlug: m.slug })));
}

/** Lektion anhand von Modul- und Lektions-Slug finden */
export function findLesson(moduleSlug: string, lessonSlug: string) {
  const module = COURSE.modules.find(m => m.slug === moduleSlug);
  if (!module) return null;
  const lesson = module.lessons.find(l => l.slug === lessonSlug);
  if (!lesson) return null;
  return { module, lesson };
}

/** Nächste Lektion finden */
export function findNextLesson(moduleSlug: string, lessonSlug: string) {
  const allLessons = getAllLessons();
  const idx = allLessons.findIndex(l => l.moduleSlug === moduleSlug && l.slug === lessonSlug);
  if (idx === -1 || idx === allLessons.length - 1) return null;
  return allLessons[idx + 1];
}

/** Vorherige Lektion finden */
export function findPrevLesson(moduleSlug: string, lessonSlug: string) {
  const allLessons = getAllLessons();
  const idx = allLessons.findIndex(l => l.moduleSlug === moduleSlug && l.slug === lessonSlug);
  if (idx <= 0) return null;
  return allLessons[idx - 1];
}
