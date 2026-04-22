import type { Course } from '@/types';

export const COURSE_AGENTIC: Course = {
  title: 'Die Agentic Company',
  slug: 'ki-agentic',
  description: 'Der Expertenkurs für Planungsbüros und Teams, die KI-Agenten strategisch einsetzen und automatisierte Workflows in echten Arbeitsprozessen verankern wollen.',
  modules: [
    {
      id: 'ag-modul-1',
      slug: 'ag-grundlagen',
      title: 'Von Chatbots zu Agenten',
      description: 'Was KI-Agenten von einfachen Chatbots unterscheidet – und warum das für Planungsbüros entscheidend ist.',
      icon: '🧠',
      order: 1,
      lessons: [
        {
          id: 'ag-was-ist-agent',
          slug: 'ag-was-ist-agent',
          title: 'Was ist ein KI-Agent?',
          description: 'Das Konzept des autonomen KI-Agenten verstehen – von einfachen Prompts zu zielgerichteten, mehrstufigen Systemen.',
          videoId: '',
          content: `
<h2>Von der Anweisung zur Autonomie</h2>
<p>Die meisten Menschen kennen KI als Gesprächspartner: Man stellt eine Frage, bekommt eine Antwort. Das ist der Chatbot-Modus. Ein KI-Agent geht einen entscheidenden Schritt weiter: Er erhält ein <strong>Ziel</strong> und arbeitet selbstständig daran – plant Teilschritte, führt Aktionen aus, korrigiert sich bei Fehlern und meldet das Ergebnis zurück.</p>

<h3>Die vier Kernmerkmale eines KI-Agenten</h3>
<ul>
  <li><strong>Zielorientierung:</strong> Der Agent kennt ein übergeordnetes Ziel, nicht nur eine einzelne Aufgabe.</li>
  <li><strong>Planung:</strong> Er zerlegt das Ziel in Teilschritte und plant deren Ausführung.</li>
  <li><strong>Werkzeugnutzung:</strong> Er kann externe Tools aufrufen – Websuche, Datenbankabfragen, APIs, Codeausführung.</li>
  <li><strong>Feedbackschleifen:</strong> Er bewertet Zwischenergebnisse und passt seinen Kurs an.</li>
</ul>

<h3>Ein Beispiel aus der Planungspraxis</h3>
<p>Stell dir vor, du bittest einen Agenten: «Erstelle eine Zusammenfassung der aktuellen kantonalen Richtplanänderungen im Bereich Siedlung für den Kanton Zürich». Ein Chatbot würde Informationen aus seinem Trainings-Wissen liefern – möglicherweise veraltet. Ein Agent hingegen:</p>
<ol>
  <li>Sucht zuerst auf der Website des Kantons Zürich nach aktuellen Richtplandokumenten</li>
  <li>Lädt die relevanten PDFs herunter und liest sie</li>
  <li>Extrahiert die relevanten Abschnitte zum Thema Siedlung</li>
  <li>Formuliert eine strukturierte Zusammenfassung mit Quellenangaben</li>
</ol>

<h3>Der entscheidende Unterschied: Autonomie</h3>
<p>Chatbots reagieren auf einzelne Eingaben. Agenten verfolgen Ziele über mehrere Schritte hinweg – und das zunehmend ohne dass Menschen dazwischen eingreifen müssen. Diese Autonomie ist das, was den Begriff «Agentic AI» prägt.</p>

<blockquote>«Ein KI-Agent ist wie ein gut briefte Mitarbeitsperson, dem man ein Ziel gibt – und der dann selbstständig den Weg dahin findet, statt bei jedem Schritt auf Anweisung zu warten.»</blockquote>

<h3>Wo stehen wir heute?</h3>
<p>Aktuelle Agentensysteme wie <strong>Claude mit Computer Use</strong>, <strong>OpenAI Assistants</strong> oder <strong>AutoGPT</strong> sind bereits in der Lage, komplexe Aufgaben eigenständig auszuführen. Sie sind nicht perfekt – Fehler passieren, Qualitätskontrolle bleibt nötig. Aber für klar definierte, wiederholbare Aufgaben leisten sie heute schon erheblichen Mehrwert.
</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ag-q1-1',
                question: 'Was unterscheidet einen KI-Agenten grundlegend von einem einfachen Chatbot?',
                options: [
                  'Agenten sind immer teurer',
                  'Agenten können autonome Ziele verfolgen, planen und externe Tools nutzen – nicht nur auf einzelne Eingaben reagieren',
                  'Agenten können nur auf Englisch kommunizieren',
                  'Agenten benötigen kein Internet',
                ],
                correct: 1,
                explanation: 'Der Kernunterschied liegt in der Autonomie und Zielorientierung: Agenten planen mehrstufige Aktionen, nutzen Werkzeuge und korrigieren sich selbst – statt nur auf Prompts zu antworten.',
              },
              {
                id: 'ag-q1-2',
                question: 'Welche der folgenden ist KEIN Kernmerkmal eines KI-Agenten?',
                options: [
                  'Zielorientierung',
                  'Planung von Teilschritten',
                  'Werkzeugnutzung',
                  'Benötigt immer menschliche Genehmigung für jeden Schritt',
                ],
                correct: 3,
                explanation: 'Autonomie – also das selbstständige Abarbeiten von Schritten ohne Genehmigung bei jedem Schritt – ist gerade das Kernmerkmal von Agenten. Qualitätskontrolle am Ende bleibt trotzdem wichtig.',
              },
              {
                id: 'ag-q1-3',
                question: 'Welchen Vorteil hätte ein Recherche-Agent gegenüber einem Chatbot bei der Suche nach aktuellen Richtplandaten?',
                options: [
                  'Der Agent ist schneller beim Schreiben von Texten',
                  'Der Agent kann aktuelle Webseiten aufrufen und Dokumente lesen – statt auf potenziell veraltetes Trainingswissen zurückzugreifen',
                  'Der Agent kennt alle Richtpläne auswendig',
                  'Der Agent braucht keine Internetverbindung',
                ],
                correct: 1,
                explanation: 'Agenten mit Websuche-Tool greifen auf aktuelle Quellen zu. Chatbots sind auf ihr Trainingswissen beschränkt, das ein Datum hat. Bei Planungsdaten ist Aktualität entscheidend.',
              },
            ],
          },
        },
        {
          id: 'ag-drei-saeulen',
          slug: 'ag-drei-saeulen',
          title: 'Tools, Memory und Planning',
          description: 'Die drei technischen Säulen, auf denen KI-Agenten aufgebaut sind – verständlich erklärt für Nicht-Entwickler.',
          videoId: '',
          content: `
<h2>Die drei Säulen: Tools, Memory, Planning</h2>
<p>Wer versteht, wie KI-Agenten intern funktionieren, kann sie gezielter einsetzen und ihre Stärken und Schwächen realistisch einschätzen. Die drei Kernkomponenten sind: Werkzeuge (Tools), Gedächtnis (Memory) und Planung (Planning).</p>

<h3>1. Tools – die Hände des Agenten</h3>
<p>Ein Sprachmodell alleine kann nichts «tun» – es kann nur Text produzieren. Tools sind externe Fähigkeiten, die dem Agenten echte Handlungsmöglichkeiten geben:</p>
<ul>
  <li><strong>Websuche:</strong> Aktuelle Informationen abrufen (z.B. Perplexity, Bing API)</li>
  <li><strong>Code-Ausführung:</strong> Berechnungen, Datenanalyse, Dateiverarbeitung</li>
  <li><strong>Dateizugriff:</strong> PDFs lesen, Dokumente schreiben, Tabellen bearbeiten</li>
  <li><strong>API-Aufrufe:</strong> Externe Dienste ansprechen (Datenbanken, GIS-Systeme, E-Mail)</li>
  <li><strong>Browser-Kontrolle:</strong> Webseiten aufrufen, Formulare ausfüllen</li>
</ul>

<h3>2. Memory – das Gedächtnis des Agenten</h3>
<p>Agenten haben verschiedene Arten von Gedächtnis:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Typ</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Beschreibung</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kurzzeit (Context)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Innerhalb einer Session aktiv</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Bisherige Gesprächsschritte</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Langzeit (Vektordatenbank)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Persistiert über Sessions</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Frühere Projekte, Dokumente</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Externe Wissensbasis</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Gezielt abgefragt</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Interne Dokumentendatenbank</td>
    </tr>
  </tbody>
</table>

<h3>3. Planning – die Intelligenz des Agenten</h3>
<p>Planning ist das Herzstück: Das Sprachmodell zerlegt ein Ziel in Teilschritte, entscheidet welches Tool wann eingesetzt wird, und bewertet Zwischenergebnisse. Moderne Planungsansätze umfassen:</p>
<ul>
  <li><strong>ReAct (Reason + Act):</strong> Der Agent denkt laut nach, führt eine Aktion aus, beobachtet das Ergebnis und plant den nächsten Schritt.</li>
  <li><strong>Chain-of-Thought:</strong> Schrittweise Argumentation vor der Entscheidung.</li>
  <li><strong>Multi-Step Planning:</strong> Vollständige Aufgabenpläne vor der Ausführung.</li>
</ul>

<h3>Warum das für die Praxis wichtig ist</h3>
<p>Wer diese drei Säulen versteht, weiss: Ein Agent ist so gut wie seine Tools, sein Gedächtnis und seine Planungsstrategie. Ein Recherche-Agent ohne Websuche-Tool ist nutzlos. Ein Dokumenten-Agent ohne Langzeitgedächtnis vergisst alles nach jeder Session. Und ein Agent ohne gutes Planning läuft im Kreis.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'ag-q2-1',
                question: 'Was ermöglichen «Tools» einem KI-Agenten?',
                options: [
                  'Tools sind Premium-Abonnements',
                  'Tools geben dem Agenten echte Handlungsmöglichkeiten wie Websuche, Codeausführung oder API-Aufrufe',
                  'Tools sind andere Bezeichnungen für Chatbots',
                  'Tools sind nur für Entwickler relevant',
                ],
                correct: 1,
                explanation: 'Tools sind externe Fähigkeiten, die ein Sprachmodell mit der echten Welt verbinden. Ohne Tools kann ein Modell nur Text produzieren – mit Tools kann es suchen, berechnen, schreiben und kommunizieren.',
              },
              {
                id: 'ag-q2-2',
                question: 'Was ist der Unterschied zwischen Kurz- und Langzeitgedächtnis bei KI-Agenten?',
                options: [
                  'Kurzzeit ist schneller, Langzeit ist langsamer – beide speichern dasselbe',
                  'Kurzzeit ist nur innerhalb einer Session aktiv; Langzeit (z.B. Vektordatenbank) bleibt über Sessions hinweg erhalten',
                  'Langzeitgedächtnis ist nur bei Premium-Modellen verfügbar',
                  'Es gibt keinen Unterschied – KI vergisst immer alles',
                ],
                correct: 1,
                explanation: 'Kurzzeit-Memory ist der aktive Kontext einer Session. Langzeit-Memory ermöglicht es, Informationen persistent zu speichern und in zukünftigen Sessions abzurufen – entscheidend für kontinuierliche Arbeitsprozesse.',
              },
              {
                id: 'ag-q2-3',
                question: 'Was bedeutet «ReAct» als Planungsansatz?',
                options: [
                  'Der Agent reagiert nur auf Befehle, ohne selbst zu planen',
                  'Der Agent denkt nach (Reason), führt eine Aktion aus (Act), beobachtet das Ergebnis und plant den nächsten Schritt',
                  'ReAct ist ein spezifisches KI-Modell',
                  'ReAct steht für «Reaktivität» – der Agent wird reaktiv statt proaktiv',
                ],
                correct: 1,
                explanation: 'ReAct kombiniert Reasoning (Nachdenken) und Acting (Handeln) in einem Zyklus. Der Agent plant, handelt, beobachtet das Ergebnis und passt seinen Plan an – eine mächtige Methode für komplexe Aufgaben.',
              },
            ],
          },
        },
        {
          id: 'ag-workflows',
          slug: 'ag-workflows',
          title: 'Agentic Workflows in der Praxis',
          description: 'Wie agentic Workflows konkret aussehen – und welche Aufgaben sich für Agenten eignen.',
          videoId: '',
          content: `
<h2>Agentic Workflows: Theorie trifft Praxis</h2>
<p>Die entscheidende Frage für jedes Planungsbüro lautet nicht «Was können Agenten?» – sondern «Für welche meiner Aufgaben lohnen sie sich?» Nicht alles, was automatisiert werden kann, sollte automatisiert werden. Und nicht jede Aufgabe eignet sich gleichermassen für Agenten.</p>

<h3>Aufgaben, die sich gut für Agenten eignen</h3>
<ul>
  <li><strong>Hohe Wiederholungsrate:</strong> Aufgaben, die wöchentlich oder täglich anfallen</li>
  <li><strong>Klar definierter Output:</strong> Das Ergebnis lässt sich eindeutig beschreiben und überprüfen</li>
  <li><strong>Informationsarbeit:</strong> Suchen, Zusammenfassen, Vergleichen, Strukturieren</li>
  <li><strong>Mehrstufige Prozesse:</strong> Wenn mehrere Teilschritte in einer festgelegten Abfolge nötig sind</li>
</ul>

<h3>Aufgaben, die sich weniger eignen</h3>
<ul>
  <li>Kreative Kernarbeit mit hohem Ermessensspielraum (z.B. Bebauungskonzepte)</li>
  <li>Aufgaben mit hohem politischem oder rechtlichem Risiko ohne menschliche Kontrolle</li>
  <li>Einmalige Aufgaben, bei denen Setup-Aufwand den Nutzen übersteigt</li>
</ul>

<h3>Typische Agentic Workflows in der Raumplanung</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Workflow</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Agent-Schritte</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Zeitersparnis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Richtplan-Monitoring</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Suche → PDF-Analyse → Zusammenfassung → E-Mail</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">4h → 10 Min.</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Sitzungsprotokoll</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Transkript einlesen → Strukturieren → Formatieren</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">2h → 5 Min.</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Parallelparzellen-Check</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">GIS-Daten → Auswertung → Bericht generieren</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">3h → 20 Min.</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kommentare auswerten</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">PDF-Stapel → Extraktion → Kategorisierung → Tabelle</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">8h → 30 Min.</td>
    </tr>
  </tbody>
</table>

<h3>Der «Human in the Loop» bleibt entscheidend</h3>
<p>Auch die besten Agenten machen Fehler. Das Prinzip «Human in the Loop» bedeutet: Für Aufgaben mit hoher Relevanz (Rechtsdokumente, Empfehlungen an Behörden, finanzielle Entscheide) prüft immer ein Mensch das Ergebnis, bevor es verwendet wird. Für interne Vorentwürfe und Recherchen kann die Kontrolle lockerer sein.</p>

<blockquote>Der richtige Umgang mit Agenten: Nicht blindes Vertrauen, nicht reflexartige Ablehnung – sondern kluge Zuweisung von Aufgaben mit definierter Qualitätssicherung.</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'ag-q3-1',
                question: 'Welche Art von Aufgaben eignet sich besonders gut für KI-Agenten?',
                options: [
                  'Einmalige kreative Aufgaben mit hohem Ermessensspielraum',
                  'Wiederholende Informationsarbeit mit klar definiertem Output',
                  'Politische Entscheide ohne Qualitätskontrolle',
                  'Aufgaben, die nur einmal im Jahr anfallen',
                ],
                correct: 1,
                explanation: 'Agenten lohnen sich bei Aufgaben mit hoher Wiederholungsrate, klar definierbarem Ergebnis und strukturierter Informationsarbeit. Der Setup-Aufwand muss durch Zeitersparnis gerechtfertigt sein.',
              },
              {
                id: 'ag-q3-2',
                question: 'Was bedeutet «Human in the Loop» im Kontext von KI-Agenten?',
                options: [
                  'Der Mensch programmiert den Agenten',
                  'Für relevante Aufgaben prüft ein Mensch das Ergebnis des Agenten, bevor es verwendet wird',
                  'Der Mensch und der Agent arbeiten immer gleichzeitig',
                  'Menschen sind im KI-Trainingsprozess involviert',
                ],
                correct: 1,
                explanation: 'Human in the Loop bedeutet: Qualitätskontrolle durch Menschen bei Aufgaben mit hoher Relevanz. Agenten sind Assistenten, keine autonomen Entscheidungsträger für kritische Prozesse.',
              },
              {
                id: 'ag-q3-3',
                question: 'Welchen der folgenden Workflows würde ein Agent am wenigsten verbessern?',
                options: [
                  'Automatisches Monitoring von Richtplanänderungen',
                  'Auswertung von Hunderten von Einwendungen zu einem Nutzungsplan',
                  'Kreative Entwicklung eines innovativen Siedlungskonzepts von Grund auf',
                  'Strukturierung eines Sitzungsprotokolls aus Stichpunkten',
                ],
                correct: 2,
                explanation: 'Kreative Kernarbeit mit hohem Ermessensspielraum – wie die Entwicklung eines innovativen Siedlungskonzepts – eignet sich weniger für Agenten. Analyse, Strukturierung und Monitoring sind die Stärken.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ag-modul-2',
      slug: 'ag-praxis',
      title: 'Agenten in der Planungspraxis',
      description: 'Konkrete Agentenlösungen für Recherche, Dokumentenverarbeitung und komplexe Planungsprozesse.',
      icon: '🔧',
      order: 2,
      lessons: [
        {
          id: 'ag-recherche',
          slug: 'ag-recherche',
          title: 'Recherche-Agenten aufbauen',
          description: 'Wie man Recherche-Agenten für die Planungsarbeit konfiguriert – ohne Programmierkenntnisse.',
          videoId: '',
          content: `
<h2>Recherche-Agenten für die Raumplanung</h2>
<p>Recherche ist eine der zeitaufwändigsten Tätigkeiten in der Planungsarbeit. Richtplandokumente, kantonale Weisungen, Bundesgerichtsentscheide, Fachliteratur – alles muss gesichtet, bewertet und zusammengefasst werden. Ein Recherche-Agent kann diesen Prozess dramatisch beschleunigen.</p>

<h3>Werkzeuge für Recherche-Agenten (ohne Code)</h3>
<p>Folgende Plattformen ermöglichen das Aufbauen von Recherche-Agenten ohne Programmierkenntnisse:</p>
<ul>
  <li><strong>Perplexity AI Spaces:</strong> Eigene Recherche-Umgebungen mit definierten Quellen und Fokusthemen</li>
  <li><strong>ChatGPT Custom GPTs:</strong> Agenten mit eigenem Systemkontext, hochgeladenen Dokumenten und Web-Suche</li>
  <li><strong>Claude Projects:</strong> Persistente Projekte mit eigenem Kontext und Dokumentenbank</li>
  <li><strong>NotebookLM:</strong> Speziell für Dokumentenanalyse – mehrere Quellen hochladen, gezielt fragen</li>
</ul>

<h3>Schritt-für-Schritt: Einen Recherche-Agenten konfigurieren</h3>
<p>Am Beispiel eines «Richtplan-Monitors» für den Kanton Zürich:</p>
<ol>
  <li><strong>System-Prompt definieren:</strong> «Du bist eine Fachperson für kantonale Raumplanung. Deine Aufgabe ist es, aktuelle Entwicklungen im Zürcher Richtplan zu beobachten, relevante Änderungen zu identifizieren und präzise Zusammenfassungen zu erstellen.»</li>
  <li><strong>Relevante Dokumente hochladen:</strong> Aktueller Richtplan, ARE-Wegleitungen, relevante Urteile</li>
  <li><strong>Websuche aktivieren:</strong> Für aktuelle Änderungen und Neuigkeiten</li>
  <li><strong>Output-Format definieren:</strong> «Fasse Änderungen in folgendem Format zusammen: Thema, Beschreibung, Relevanz für Gemeinden, Handlungsbedarf.»</li>
</ol>

<h3>Qualitätssicherung bei Recherche-Ergebnissen</h3>
<p>Auch gut konfigurierte Recherche-Agenten können halluzinieren oder wichtige Quellen übersehen. Bewährte Praxis:</p>
<ul>
  <li>Immer die zitierten Quellen stichprobenartig prüfen</li>
  <li>Bei rechtlich relevanten Fragen immer Originalquellen lesen</li>
  <li>Agenten-Output als Ausgangspunkt nutzen, nicht als Endprodukt</li>
  <li>Periodisch den Agenten mit bewusst schwierigen Testfragen prüfen</li>
</ul>

<blockquote>Ein gut konfigurierter Recherche-Agent macht in 10 Minuten, wofür ein Mitarbeitender halbe Tage braucht. Die Herausforderung liegt nicht im Tool – sondern darin, den Agenten richtig zu briefen.</blockquote>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ag-q4-1',
                question: 'Welches Tool ist speziell für die Analyse mehrerer eigener Dokumente entwickelt worden?',
                options: [
                  'Midjourney',
                  'NotebookLM von Google',
                  'DALL-E',
                  'Adobe Acrobat',
                ],
                correct: 1,
                explanation: 'NotebookLM ist ein von Google entwickeltes Tool, das speziell für die Analyse mehrerer hochgeladener Dokumente konzipiert ist. Man kann gezielt fragen und erhält Antworten mit Quellennachweis.',
              },
              {
                id: 'ag-q4-2',
                question: 'Was ist der wichtigste erste Schritt beim Konfigurieren eines Recherche-Agenten?',
                options: [
                  'Eine teure API-Verbindung einrichten',
                  'Den System-Prompt definieren, der die Rolle, Aufgabe und den Kontext des Agenten beschreibt',
                  'Alle Schweizer Gesetze hochladen',
                  'Den Agenten auf Englisch konfigurieren',
                ],
                correct: 1,
                explanation: 'Der System-Prompt ist das Fundament: Er definiert die Rolle des Agenten, seine Aufgabe und den Kontext. Ein präziser System-Prompt ist entscheidender als das spezifische Tool.',
              },
              {
                id: 'ag-q4-3',
                question: 'Wie sollte man mit Recherche-Ergebnissen eines KI-Agenten umgehen?',
                options: [
                  'Als Endprodukt direkt verwenden – KI macht keine Fehler',
                  'Komplett ignorieren – KI-Recherche ist unzuverlässig',
                  'Als Ausgangspunkt nutzen, Quellen stichprobenartig prüfen, bei rechtlichen Fragen immer Originalquellen lesen',
                  'Nur die ersten drei Suchergebnisse berücksichtigen',
                ],
                correct: 2,
                explanation: 'Agenten können halluzinieren und Quellen übersehen. Der richtige Umgang: als Ausgangspunkt nutzen, Qualitätskontrolle einbauen, bei kritischen Entscheiden Originalquellen prüfen.',
              },
            ],
          },
        },
        {
          id: 'ag-dokumente',
          slug: 'ag-dokumente',
          title: 'Dokumente automatisch verarbeiten',
          description: 'Grosse Dokumentenstapel mit KI-Agenten verarbeiten – von Einwendungen bis zu Baubewilligungsgesuchen.',
          videoId: '',
          content: `
<h2>Dokumentenverarbeitung im grossen Massstab</h2>
<p>Planungsprozesse erzeugen riesige Dokumentenmengen: Stellungnahmen, Einwendungen, Gutachten, Gesuche. Das manuelle Sichten, Kategorisieren und Zusammenfassen dieser Dokumente bindet enorm viel Kapazität. Agenten können diese Arbeit massgeblich übernehmen.</p>

<h3>Typische Anwendungen in der Planungspraxis</h3>
<ul>
  <li><strong>Mitwirkungseinwendungen:</strong> Hunderte von Stellungnahmen automatisch kategorisieren, Kernaussagen extrahieren, Häufigkeitsanalyse</li>
  <li><strong>Baubewilligungsgesuche:</strong> Vollständigkeit prüfen, fehlende Unterlagen identifizieren</li>
  <li><strong>Gutachtenvergleich:</strong> Mehrere Sachverständigengutachten zu einem Thema vergleichen</li>
  <li><strong>Protokoll-Stapelverarbeitung:</strong> Jahrgänge von Gemeinderats-Protokollen nach spezifischen Themen durchsuchen</li>
</ul>

<h3>Technische Herangehensweisen (ohne Programmierung)</h3>
<p>Für kleinere Volumina (bis ca. 20-30 Dokumente) reichen bestehende Tools:</p>
<ul>
  <li><strong>Claude.ai Projects:</strong> Dokumente hochladen und systematisch befragen</li>
  <li><strong>ChatGPT Advanced Data Analysis:</strong> Tabellarische Auswertungen aus Dokumenten</li>
  <li><strong>NotebookLM:</strong> Bis zu 50 Dokumente, gezielte Fragen, Quellenverweis</li>
</ul>

<p>Für grössere Volumina (100+ Dokumente) sind einfache Automatisierungstools nützlich:</p>
<ul>
  <li><strong>Make (Integromat):</strong> Dokumente aus Ordner abholen → KI-Verarbeitung → Ergebnis in Tabelle</li>
  <li><strong>Zapier + GPT-4:</strong> Automatische Verarbeitung bei neuen Datei-Uploads</li>
</ul>

<h3>Praxisbeispiel: Mitwirkungsverfahren</h3>
<p>In einem realen Projekt mit 340 Einwendungen zu einer Ortsplanung wurde folgender Workflow eingesetzt:</p>
<ol>
  <li>Alle Einwendungen als PDF in einen Ordner</li>
  <li>Automatische Konvertierung zu Text</li>
  <li>KI-Verarbeitung: Kategorie, Kernaussage, Betroffenheit, Dringlichkeit</li>
  <li>Ausgabe als Excel-Tabelle mit allen Feldern</li>
  <li>Manuelle Stichprobe: 20% der Fälle kontrolliert</li>
</ol>
<p>Ergebnis: 340 Einwendungen verarbeitet in 3 Stunden statt 3 Wochen. Fehlerquote bei der Kategorisierung: unter 5%.</p>

<h3>Wichtiger Hinweis: Datenschutz</h3>
<p>Einwendungen enthalten personenbezogene Daten. Vor der Verarbeitung durch externe KI-Dienste muss geprüft werden, ob das rechtlich zulässig ist. Für öffentliche Verwaltungen gelten besonders strenge Anforderungen – im Zweifelsfall Rechtsberatung einholen oder lokale Alternativen prüfen.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'ag-q5-1',
                question: 'Für welche Anwendung ist KI-Dokumentenverarbeitung in der Raumplanung besonders wertvoll?',
                options: [
                  'Das Zeichnen von Bauplänen',
                  'Das Kategorisieren und Zusammenfassen von grossen Mengen an Einwendungen und Stellungnahmen',
                  'Die rechtliche Beurteilung von Bauprojekten',
                  'Die politische Entscheidungsfindung',
                ],
                correct: 1,
                explanation: 'Mitwirkungsverfahren mit vielen Einwendungen sind ein klassischer Fall: Die Kategorisierung, Extraktion von Kernaussagen und Häufigkeitsanalyse sind perfekte Aufgaben für KI-Agenten.',
              },
              {
                id: 'ag-q5-2',
                question: 'Welches Tool eignet sich für bis zu 50 Dokumente mit gezielten Fragen und Quellenverweisen?',
                options: [
                  'Midjourney',
                  'NotebookLM',
                  'Zapier',
                  'Adobe Premiere',
                ],
                correct: 1,
                explanation: 'NotebookLM ist für genau diesen Zweck entwickelt: bis zu 50 eigene Dokumente hochladen, gezielt befragen, Antworten mit Quellennachweis erhalten.',
              },
              {
                id: 'ag-q5-3',
                question: 'Was muss bei der Verarbeitung von Einwendungen durch externe KI-Dienste besonders beachtet werden?',
                options: [
                  'Die Dateigrösse der PDFs',
                  'Die Schriftart der Dokumente',
                  'Datenschutzanforderungen, da Einwendungen personenbezogene Daten enthalten',
                  'Die Sprache der Dokumente',
                ],
                correct: 2,
                explanation: 'Einwendungen enthalten Namen, Adressen und persönliche Informationen. Vor der Weitergabe an externe KI-Dienste muss die rechtliche Zulässigkeit geprüft werden – besonders für öffentliche Verwaltungen.',
              },
            ],
          },
        },
        {
          id: 'ag-multi-agenten',
          slug: 'ag-multi-agenten',
          title: 'Multi-Agenten-Systeme',
          description: 'Wenn ein Agent nicht reicht: Wie mehrere spezialisierte Agenten zusammenarbeiten.',
          videoId: '',
          content: `
<h2>Multi-Agenten-Systeme: Das Zusammenspiel</h2>
<p>Die nächste Stufe der Automatisierung sind <strong>Multi-Agenten-Systeme</strong>: Mehrere spezialisierte Agenten arbeiten zusammen, jeder übernimmt den Teil der Aufgabe, für den er am besten geeignet ist. Das Ergebnis ist mehr als die Summe der Einzelteile.</p>

<h3>Warum mehrere Agenten?</h3>
<p>Ein einzelner generalistischer Agent ist gut für viele Aufgaben – aber nicht optimal für alle. Spezialisierte Agenten können:</p>
<ul>
  <li>Parallel arbeiten (Zeitersparnis)</li>
  <li>Mit spezifischem Kontext und spezifischen Tools ausgestattet werden</li>
  <li>Gegenseitig ihre Ergebnisse prüfen (Qualitätssicherung)</li>
  <li>Komplexere Aufgaben aufteilen als ein einzelner Agent</li>
</ul>

<h3>Beispiel: Bauzonenberichts-Pipeline</h3>
<p>Ein realistisches Multi-Agenten-System für die Erstellung eines Bauzonenberichts:</p>
<ol>
  <li><strong>Daten-Agent:</strong> Ruft GIS-Daten, Bevölkerungsprognosen und Bauzonenstatistiken ab</li>
  <li><strong>Analyse-Agent:</strong> Berechnet Bauzonenbedarf, Auslastung und Reserven</li>
  <li><strong>Recherche-Agent:</strong> Prüft aktuelle Richtplanvorgaben und kantonale Weisungen</li>
  <li><strong>Bericht-Agent:</strong> Strukturiert alle Inputs in einen formatierten Bericht</li>
  <li><strong>Review-Agent:</strong> Prüft den Bericht auf Vollständigkeit und Konsistenz</li>
</ol>

<h3>Praktische Umsetzung heute</h3>
<p>Vollständige Multi-Agenten-Systeme erfordern noch technisches Know-how. Aber einfachere Versionen sind ohne Code möglich:</p>
<ul>
  <li><strong>Sequenzielle Agenten in Make/Zapier:</strong> Output von Agent 1 → Input von Agent 2</li>
  <li><strong>ChatGPT + Claude kombiniert:</strong> Verschiedene Stärken für verschiedene Schritte nutzen</li>
  <li><strong>Claude Projects mit Rollen:</strong> Verschiedene Projects als «Experten» für verschiedene Teilaufgaben</li>
</ul>

<h3>Blick in die Zukunft</h3>
<p>Multi-Agenten-Systeme entwickeln sich rasant. Innerhalb von 2-3 Jahren werden vollständige Planungspipelines möglich sein, bei denen Agenten den Grossteil der Routinearbeit autonom erledigen – von der Datenerhebung bis zum Berichtsentwurf. Die Menschen konzentrieren sich auf Beurteilung, Einordnung und Entscheid.</p>

<blockquote>Die Planungsbüros, die heute beginnen, mit einzelnen Agenten Erfahrungen zu sammeln, werden in der Lage sein, morgen komplexe Agentensysteme zu bauen und zu führen.</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'ag-q6-1',
                question: 'Was ist der Hauptvorteil von Multi-Agenten-Systemen gegenüber einem einzelnen Agenten?',
                options: [
                  'Multi-Agenten-Systeme sind immer billiger',
                  'Spezialisierte Agenten können parallel arbeiten, gegenseitig prüfen und komplexere Aufgaben aufteilen',
                  'Multi-Agenten-Systeme brauchen kein Internet',
                  'Ein einzelner Agent ist immer besser als mehrere',
                ],
                correct: 1,
                explanation: 'Spezialisierung und Parallelisierung sind die Kernvorteile: Jeder Agent ist für seinen Bereich optimiert, und gegenseitige Prüfung erhöht die Qualität.',
              },
              {
                id: 'ag-q6-2',
                question: 'Wie kann man ohne Programmierkenntnisse ein einfaches Multi-Agenten-System aufbauen?',
                options: [
                  'Das ist ohne Programmierung nicht möglich',
                  'Mit Tools wie Make oder Zapier, wo Output von Agent 1 automatisch als Input an Agent 2 weitergegeben wird',
                  'Nur mit teurer Enterprise-Software',
                  'Durch manuelles Kopieren zwischen den Tools',
                ],
                correct: 1,
                explanation: 'Make und Zapier ermöglichen es, Outputs von einem KI-Tool als Input für das nächste zu verwenden – ohne eine einzige Zeile Code. Das ist ein pragmatischer Einstieg in Multi-Agenten-Systeme.',
              },
              {
                id: 'ag-q6-3',
                question: 'Welche Rolle werden Menschen in Planungsbüros in Zukunft mit zunehmend autonomen Agentensystemen einnehmen?',
                options: [
                  'Menschen werden vollständig ersetzt',
                  'Menschen konzentrieren sich auf Beurteilung, Einordnung und Entscheid – während Agenten die Routinearbeit übernehmen',
                  'Menschen müssen noch mehr Routinearbeit erledigen',
                  'Die Rolle bleibt unverändert',
                ],
                correct: 1,
                explanation: 'Die wahrscheinlichste Entwicklung: Agenten übernehmen Datenerhebung, Analyse und Berichtsentwürfe. Menschen konzentrieren sich auf das, was KI nicht kann: Urteilsvermögen, Kontext und Verantwortung.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ag-modul-3',
      slug: 'ag-transformation',
      title: 'Die Agentic Company aufbauen',
      description: 'Vom Einzelwerkzeug zur agentischen Organisation – Strategie, Change Management und Governance.',
      icon: '🏗️',
      order: 3,
      lessons: [
        {
          id: 'ag-prozesse',
          slug: 'ag-prozesse',
          title: 'Prozesse identifizieren und automatisieren',
          description: 'Wie man die richtigen Prozesse für Agentenautomatisierung findet und priorisiert.',
          videoId: '',
          content: `
<h2>Prozesse finden, die sich automatisieren lassen</h2>
<p>Der grösste Fehler bei der Einführung von KI-Agenten: Man beginnt mit der Technologie statt mit den Prozessen. Welche Aufgaben soll der Agent eigentlich erledigen? Die Antwort auf diese Frage bestimmt, ob der Aufwand sich lohnt.</p>

<h3>Die Prozess-Inventur</h3>
<p>Schritt 1 ist eine strukturierte Bestandsaufnahme. Für jede regelmässige Aufgabe im Büro:</p>
<ul>
  <li>Wie häufig fällt sie an? (täglich / wöchentlich / monatlich)</li>
  <li>Wie lange dauert sie? (Minuten / Stunden / Tage)</li>
  <li>Wie standardisiert ist der Prozess? (immer gleich / variiert stark)</li>
  <li>Wie klar ist das Ergebnis definiert? (eindeutig / Ermessensspielraum)</li>
  <li>Welche Daten braucht sie? (verfügbar / schwer zugänglich)</li>
</ul>

<h3>Die Automatisierungs-Matrix</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Häufigkeit</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Standardisierung</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Priorität</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Hoch (täglich)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Hoch</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #006b5f; font-weight: bold;">Sofort automatisieren</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Hoch (täglich)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Niedrig</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #0057a8;">Teilautomatisierung prüfen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Niedrig (monatlich)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Hoch</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #e65c00;">Mittelfristig angehen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Niedrig (monatlich)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Niedrig</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #8e8e93;">Manuell belassen</td>
    </tr>
  </tbody>
</table>

<h3>Von der Priorisierung zum Pilotprojekt</h3>
<p>Starte nicht mit dem komplexesten Prozess. Wähle für das erste Agentenprojekt:</p>
<ul>
  <li>Einen Prozess, der häufig und standardisiert ist</li>
  <li>Einen, bei dem Fehler tolerierbar sind (Entwürfe, interne Nutzung)</li>
  <li>Einen, der aktuell viel Zeit kostet und wenig Ermessensspielraum hat</li>
  <li>Einen, den du selbst gut kennst und beurteilen kannst</li>
</ul>

<h3>Den ROI berechnen</h3>
<p>Bevor du in einen Agenten investierst, rechne grob: Zeitaufwand heute × Stundensatz × Häufigkeit = Jahrespotenzial. Dagegen: Setup-Zeit + Wartungszeit × Stundensatz. Wenn das Potenzial den Aufwand um Faktor 3-5 übersteigt, lohnt es sich.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ag-q7-1',
                question: 'Was ist der häufigste Fehler bei der Einführung von KI-Agenten in Unternehmen?',
                options: [
                  'Zu viel Budget ausgeben',
                  'Man beginnt mit der Technologie statt mit einer Analyse der Prozesse, die automatisiert werden sollen',
                  'Zu wenige Tools ausprobieren',
                  'Den Agenten zu gut konfigurieren',
                ],
                correct: 1,
                explanation: 'Technologie ohne Prozessklarheit ist teuer und enttäuschend. Erst verstehen, welche Aufgaben sich wirklich eignen – dann das passende Tool wählen.',
              },
              {
                id: 'ag-q7-2',
                question: 'Welche Art von Prozess hat laut Automatisierungs-Matrix höchste Priorität für Agentenautomatisierung?',
                options: [
                  'Selten, aber komplex',
                  'Häufig und hoch standardisiert',
                  'Einmalig, aber strategisch wichtig',
                  'Kreativ und variabel',
                ],
                correct: 1,
                explanation: 'Häufig + standardisiert = maximaler Return on Investment. Der Automatisierungsaufwand amortisiert sich schnell, weil der Prozess immer gleich abläuft und oft ausgeführt wird.',
              },
              {
                id: 'ag-q7-3',
                question: 'Welcher Prozess eignet sich für ein erstes Agenten-Pilotprojekt am besten?',
                options: [
                  'Ein komplexer Prozess mit hohem strategischen Wert',
                  'Ein häufiger, standardisierter Prozess bei dem Fehler tolerierbar sind',
                  'Ein einmaliger Prozess mit strenger Qualitätskontrolle',
                  'Ein Prozess, den niemand im Team kennt',
                ],
                correct: 1,
                explanation: 'Der erste Pilot soll Vertrauen aufbauen und schnell Lernerfahrungen liefern. Häufig + standardisiert + tolerierbar bei Fehlern sind die Kriterien für einen guten Einstieg.',
              },
            ],
          },
        },
        {
          id: 'ag-change',
          slug: 'ag-change',
          title: 'Change Management und Team-Integration',
          description: 'Wie man KI-Agenten im Team einführt – ohne Widerstand zu provozieren und Akzeptanz zu schaffen.',
          videoId: '',
          content: `
<h2>Menschen mitnehmen – nicht hinter sich lassen</h2>
<p>Technologie ist selten das grösste Hindernis bei der KI-Einführung. Menschen sind es. Nicht weil sie KI ablehnen, sondern weil Veränderungen Ängste auslösen: Jobverlust, Kontrollverlust, Angst vor Fehlern. Gutes Change Management adressiert diese Ängste proaktiv.</p>

<h3>Typische Widerstände und wie man damit umgeht</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Widerstand</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Hintergrund</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Umgang</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">«KI nimmt mir den Job weg»</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Existenzangst</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Konkret zeigen, welche Aufgaben entfallen – und welche neuen entstehen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">«KI macht Fehler»</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Qualitätsbedenken</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Qualitätssicherungsprozesse gemeinsam entwickeln</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">«Ich verstehe das nicht»</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kompetenzangst</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Niederschwellige Trainings, Erfolgserlebnisse schaffen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">«Das ist zu kompliziert»</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Aufwandswahrnehmung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Mit einfachsten Use Cases starten, sofortigen Nutzen zeigen</td>
    </tr>
  </tbody>
</table>

<h3>Das Einführungs-Playbook</h3>
<ol>
  <li><strong>Begeisterte Frühanwender finden:</strong> In jedem Team gibt es Menschen, die neugierig auf KI sind. Diese als erste einbinden, zu Multiplikatoren machen.</li>
  <li><strong>Frühe Erfolgserlebnisse schaffen:</strong> Starte mit Aufgaben, bei denen KI sofort und spürbar Zeit spart. Das überzeugt mehr als jede Präsentation.</li>
  <li><strong>Offen über Grenzen sprechen:</strong> KI macht Fehler. Das von Anfang an ansprechen baut Vertrauen auf.</li>
  <li><strong>Gemeinsam Regeln entwickeln:</strong> Welche Aufgaben darf der Agent erledigen? Wo braucht es menschliche Kontrolle? Das Team soll mitentscheiden.</li>
  <li><strong>Fortschritt sichtbar machen:</strong> Zeitersparnisse dokumentieren und kommunizieren – das motiviert zur Weiternutzung.</li>
</ol>

<h3>KI als Kompetenz, nicht als Bedrohung</h3>
<p>Das überzeugendste Argument: KI-Kompetenz ist eine Qualifikation, die Mitarbeitende zukunftssicher macht. Wer heute mit Agenten umgehen kann, ist morgen gefragter – nicht weniger. Dieses Framing, von der Führung aktiv kommuniziert, verändert die Stimmung entscheidend.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'ag-q8-1',
                question: 'Was ist oft das grösste Hindernis bei der Einführung von KI-Agenten in Unternehmen?',
                options: [
                  'Technische Komplexität der Tools',
                  'Hohe Lizenzkosten',
                  'Menschliche Widerstände und Ängste – nicht die Technologie selbst',
                  'Fehlende Internetverbindung',
                ],
                correct: 2,
                explanation: 'Technologie ist selten das Hauptproblem. Ängste vor Jobverlust, Kontrollverlust und mangelnder Kompetenz sind die häufigsten Hindernisse – und erfordern gezielte Kommunikation und Einbindung.',
              },
              {
                id: 'ag-q8-2',
                question: 'Was ist der effektivste erste Schritt, um Teamakzeptanz für KI-Agenten zu schaffen?',
                options: [
                  'Eine lange Präsentation über KI-Strategie halten',
                  'Mit einer aufgabe starten, bei der KI sofort und spürbar Zeit spart – frühe Erfolgserlebnisse schaffen',
                  'Alle Mitarbeitenden zu einem teuren KI-Kurs verpflichten',
                  'Zuerst das komplexeste System einführen',
                ],
                correct: 1,
                explanation: 'Frühe Erfolgserlebnisse überzeugen mehr als Präsentationen. Wenn jemand sieht, wie ein Agent ihm 2 Stunden Arbeit abnimmt, verändert sich die Einstellung schnell.',
              },
              {
                id: 'ag-q8-3',
                question: 'Wie sollte KI-Kompetenz gegenüber Mitarbeitenden geframt werden?',
                options: [
                  'Als Bedrohung für bestehende Arbeitsplätze',
                  'Als optionaler Vorteil für besonders technikaffine Mitarbeitende',
                  'Als Qualifikation, die Mitarbeitende zukunftssicher macht und ihre Attraktivität erhöht',
                  'Als Hobby ausserhalb der Arbeitszeit',
                ],
                correct: 2,
                explanation: 'KI-Kompetenz ist eine gefragte Qualifikation. Wer heute damit umgehen kann, ist morgen wertvoller. Dieses Framing verwandelt Bedrohungswahrnehmung in Motivation.',
              },
            ],
          },
        },
        {
          id: 'ag-governance',
          slug: 'ag-governance',
          title: 'Risiken, Governance und Qualitätssicherung',
          description: 'Wie man Agentensysteme verantwortungsvoll einführt – mit klaren Regeln, Kontrollen und Risikoabsicherung.',
          videoId: '',
          content: `
<h2>Governance: Die Regeln für den Agenteneinsatz</h2>
<p>Autonome KI-Agenten erhöhen die Produktivität – aber sie erhöhen auch das Risiko, wenn sie ohne klare Leitplanken eingesetzt werden. Gute Governance definiert, was Agenten dürfen, was sie nicht dürfen, und wer die Verantwortung trägt.</p>

<h3>Die drei Risikokategorien</h3>
<ul>
  <li><strong>Qualitätsrisiken:</strong> Agent liefert falsche, veraltete oder unvollständige Ergebnisse</li>
  <li><strong>Datenschutzrisiken:</strong> Sensible Daten werden unkontrolliert an externe Dienste gesendet</li>
  <li><strong>Reputationsrisiken:</strong> Falsche Agent-Outputs werden ohne Prüfung verwendet und beschädigen das Vertrauen</li>
</ul>

<h3>Ein einfaches Governance-Framework</h3>
<p>Für kleine Teams und Büros reicht ein pragmatisches Framework:</p>
<ol>
  <li><strong>Aufgaben-Klassifizierung:</strong> Welche Aufgaben darf der Agent vollständig autonom erledigen? Welche brauchen Review? Welche sind für KI tabu?</li>
  <li><strong>Datenkategorien definieren:</strong> Welche Daten dürfen in externe KI-Tools? (z.B. öffentliche Dokumente: ja / Personendaten: nein)</li>
  <li><strong>Review-Pflicht festlegen:</strong> Bei welchen Outputs ist eine Qualitätskontrolle Pflicht, bevor sie weiterverwendet werden?</li>
  <li><strong>Verantwortlichkeiten klären:</strong> Wer ist zuständig, wenn ein Agent-Output fehlerhaft ist?</li>
  <li><strong>Incident-Prozess definieren:</strong> Was passiert, wenn ein Agent einen schwerwiegenden Fehler macht?</li>
</ol>

<h3>Technische Qualitätssicherung</h3>
<ul>
  <li><strong>Stichproben-Reviews:</strong> Regelmässig eine Stichprobe der Agent-Outputs prüfen – nicht jedes Dokument, aber genug, um Muster zu erkennen</li>
  <li><strong>Testszenarien:</strong> Agenten regelmässig mit bekannten Testaufgaben prüfen, bei denen man das richtige Ergebnis kennt</li>
  <li><strong>Audit-Protokolle:</strong> Was hat der Agent wann getan? Besonders bei sensiblen Prozessen wichtig</li>
  <li><strong>Versionierung:</strong> Bei Änderungen am Agenten-Prompt: vorher testen, nicht einfach ändern</li>
</ul>

<h3>Rechtliche Grundlagen für die Schweiz</h3>
<p>Für Schweizer Planungsbüros und Gemeinden relevante Rechtsgrundlagen:</p>
<ul>
  <li><strong>Datenschutzgesetz (DSG):</strong> Gilt seit September 2023, regelt Umgang mit Personendaten auch bei KI-Verarbeitung</li>
  <li><strong>EU AI Act:</strong> Gilt indirekt für Schweizer Unternehmen, die EU-Märkte bedienen. Hochrisiko-Anwendungen (z.B. Baubewilligungsentscheide) unterliegen strengeren Anforderungen</li>
  <li><strong>Amtsgeheimnis:</strong> Bei öffentlichen Stellen gilt das Amtsgeheimnis auch für KI-verarbeitete Daten</li>
</ul>

<blockquote>Governance ist keine Bremse für Innovation – es ist die Voraussetzung dafür, dass Innovation nachhaltig funktioniert. Büros mit klaren KI-Regeln werden schneller vertrauenswürdiger und können mutiger automatisieren.</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'ag-q9-1',
                question: 'Welche der drei Risikokategorien beim Agenteneinsatz ist für öffentliche Planungsbüros besonders relevant?',
                options: [
                  'Nur Qualitätsrisiken sind relevant',
                  'Alle drei – Qualitäts-, Datenschutz- und Reputationsrisiken – sind relevant, besonders Datenschutz bei öffentlichen Stellen',
                  'Reputationsrisiken können ignoriert werden',
                  'Datenschutz gilt nur für private Unternehmen',
                ],
                correct: 1,
                explanation: 'Alle drei Kategorien sind relevant. Besonders für öffentliche Stellen gelten strenge Datenschutzanforderungen (DSG, Amtsgeheimnis) – und Reputationsschäden bei falschen Outputs treffen das Vertrauen in die Verwaltung.',
              },
              {
                id: 'ag-q9-2',
                question: 'Was ist ein pragmatischer erster Schritt für ein Governance-Framework in einem kleinen Büro?',
                options: [
                  'Ein teures externes Beratungsunternehmen beauftragen',
                  'Aufgaben klassifizieren: Was darf der Agent autonom? Was braucht Review? Was ist tabu?',
                  'Alle KI-Tools verbieten bis alle Regeln stehen',
                  'Nur die technische Abteilung entscheiden lassen',
                ],
                correct: 1,
                explanation: 'Eine klare Aufgaben-Klassifizierung ist der pragmatischste Einstieg: Was kann autonom, was braucht Kontrolle, was ist verboten? Das gibt dem Team klare Leitplanken ohne bürokratischen Overhead.',
              },
              {
                id: 'ag-q9-3',
                question: 'Warum ist Governance eine Voraussetzung für mutigen KI-Einsatz – und keine Bremse?',
                options: [
                  'Governance bremst immer Innovation',
                  'Mit klaren Regeln weiss das Team, was erlaubt ist – das schafft Vertrauen und ermöglicht mutigere Automatisierung',
                  'Governance ist nur für grosse Unternehmen relevant',
                  'Ohne Governance kann man mehr ausprobieren',
                ],
                correct: 1,
                explanation: 'Klare Regeln schaffen Vertrauen und Handlungssicherheit. Ohne Governance herrscht Unsicherheit – und Teams agieren zögerlich. Mit gutem Framework kann man mutiger automatisieren, weil die Leitplanken klar sind.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ag-modul-4',
      slug: 'ag-zukunft',
      title: 'Die Agentic Economy – Zukunftsvision',
      description: 'Wohin die Reise führt: Work as a Service, der Personal Agent Computer und Collaborative Super Intelligence.',
      icon: '🚀',
      order: 4,
      lessons: [
        {
          id: 'ag-waas',
          slug: 'ag-waas',
          title: 'WaaS: Work as a Service',
          description: 'SaaS verkaufte Werkzeuge. Work as a Service liefert die Arbeit selbst – das verändert die gesamte Wirtschaftslogik.',
          videoId: '',
          content: `
<h2>Von SaaS zu WaaS: Eine neue Wirtschaftslogik</h2>
<p>Die letzte grosse Software-Revolution war SaaS – Software as a Service. Statt Programme zu kaufen, abonniert man sie. Das hat die Softwarebranche verändert. Jetzt kommt die nächste Welle: <strong>Work as a Service (WaaS)</strong>. Der Unterschied ist fundamental: SaaS verkauft dir ein Werkzeug. WaaS erledigt die Arbeit selbst.</p>

<h3>Die Kostenstruktur, die alles erklärt</h3>
<p>Für jeden Dollar, den Unternehmen für Software-Tools ausgeben, zahlen sie:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <tbody>
    <tr style="background: #f0f7ff;">
      <td style="padding: 12px 16px; border: 1px solid #d2d2d7; font-weight: 700;">$1</td>
      <td style="padding: 12px 16px; border: 1px solid #d2d2d7;">Tools (SaaS)</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px; border: 1px solid #d2d2d7; font-weight: 700; color: #e65c00;">$6</td>
      <td style="padding: 12px 16px; border: 1px solid #d2d2d7;">Externe Dienstleistungen (Services)</td>
    </tr>
    <tr style="background: #fff3f0;">
      <td style="padding: 12px 16px; border: 1px solid #d2d2d7; font-weight: 900; color: #c0392b; font-size: 18px;">$10</td>
      <td style="padding: 12px 16px; border: 1px solid #d2d2d7;"><strong>Arbeit (Labour / WaaS)</strong></td>
    </tr>
  </tbody>
</table>
<p>Das Verhältnis: ~$7'000/Jahr für Software-Tools pro Mitarbeiter vs. ~$75'000/Jahr Lohn = <strong>10:1-Verhältnis</strong>. Wer den Arbeitsmarkt adressiert statt den Tool-Markt, spielt in einer anderen Liga.</p>

<blockquote>«The next trillion-dollar company will be a software company masquerading as a services firm.» – Sequoia Capital, 2026</blockquote>

<h3>Was WaaS konkret bedeutet</h3>
<p>Ein SaaS-Tool für Raumplanung gibt dir eine Plattform, auf der du Pläne zeichnest. Ein WaaS-Dienst nimmt deine Anforderungen entgegen und liefert dir den fertigen Bericht – oder den geprüften Baugesuch-Entwurf, oder die kategorisierte Einwendungsliste. Die Grenze zwischen Software-Anbieter und Dienstleister verschwindet.</p>

<h3>WaaS in der Planungsbranche</h3>
<p>Diese Logik ist für Planungsbüros in beide Richtungen relevant:</p>
<ul>
  <li><strong>Als Kunde:</strong> Statt Software-Abonnements für GIS, Protokollerstellung, Berichte – WaaS-Dienste, die direkt Outputs liefern</li>
  <li><strong>Als Anbieter:</strong> Planungsbüros, die KI-Agenten einsetzen, können selbst zu WaaS-Anbietern werden – sie liefern Bauzonenberichte, Planungskonzepte oder Mitwirkungsauswertungen schneller und günstiger als je zuvor</li>
</ul>

<h3>Das strategische Fenster</h3>
<p>WaaS ist heute noch im Entstehen. Büros, die jetzt beginnen, Agentenpipelines für ihre Kernleistungen aufzubauen, positionieren sich als WaaS-Anbieter der nächsten Generation. Das ist kein spekulativer Ausblick – die Technologie ist vorhanden. Es fehlt die Bereitschaft, die Geschäftslogik neu zu denken.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ag-q10-1',
                question: 'Was ist der grundlegende Unterschied zwischen SaaS und WaaS?',
                options: [
                  'WaaS ist teurer als SaaS',
                  'SaaS liefert Werkzeuge, WaaS liefert die Arbeit selbst – fertige Outputs statt Software-Abonnements',
                  'WaaS ist eine ältere Technologie',
                  'WaaS funktioniert nur für grosse Unternehmen',
                ],
                correct: 1,
                explanation: 'Der Kernunterschied: SaaS gibt dir ein Tool, mit dem du arbeitest. WaaS übernimmt die Arbeit selbst. Das verschiebt den Wettbewerb vom Tool-Markt auf den Arbeitsmarkt.',
              },
              {
                id: 'ag-q10-2',
                question: 'Was besagt das 10:1-Verhältnis in der WaaS-Logik?',
                options: [
                  'KI ist 10-mal schneller als Menschen',
                  'Für jeden Dollar Software-Tools zahlen Unternehmen 10 Dollar Lohn – WaaS adressiert genau diesen 10x-grösseren Markt',
                  'WaaS-Dienste kosten 10-mal mehr als SaaS',
                  'Unternehmen brauchen 10 Tools pro Mitarbeitende',
                ],
                correct: 1,
                explanation: 'Das 10:1-Verhältnis ($7K Tools vs. $75K Lohn) zeigt: Der Arbeitsmarkt ist 10x grösser als der Tool-Markt. WaaS-Anbieter, die Arbeit direkt liefern, spielen in einer fundamental grösseren Liga.',
              },
              {
                id: 'ag-q10-3',
                question: 'Wie können Planungsbüros die WaaS-Logik zu ihrem Vorteil nutzen?',
                options: [
                  'Indem sie alle Software-Abonnements kündigen',
                  'Indem sie Agentenpipelines für Kernleistungen aufbauen und sich so als WaaS-Anbieter positionieren, der Outputs schneller und günstiger liefert',
                  'Indem sie auf WaaS warten, bis es ausgereift ist',
                  'WaaS ist für Planungsbüros nicht relevant',
                ],
                correct: 1,
                explanation: 'Büros, die heute Agentenpipelines aufbauen, können ihre Leistungen als WaaS-Dienste anbieten – Bauzonenberichte, Mitwirkungsauswertungen, Planungskonzepte als Output, nicht als Dienstleistungsstunden.',
              },
            ],
          },
        },
        {
          id: 'ag-horizontal',
          slug: 'ag-horizontal',
          title: 'Vertikal vs. Horizontal: Der Personal Agent Computer',
          description: 'Spezialisierte KI-Tools hatten ihren Moment – der Personal Agent Computer löst sie ab. Was das für die Planungsbranche bedeutet.',
          videoId: '',
          content: `
<h2>Vertical AI war 2025. Horizontal AI ersetzt sie.</h2>
<p>Zwischen 2022 und 2025 entstanden hunderte spezialisierter KI-Tools: Harvey für Recht. Cursor für Code. Glean für Unternehmenssuche. Jedes Tool löste ein spezifisches Problem besser als generalisierte Modelle. Das war die Ära der <strong>vertikalen KI</strong> – tief, aber schmal.</p>

<h3>Die PC-Analogie</h3>
<p>Vor dem Personal Computer gab es spezialisierte Taschenrechner: einen für Statistik, einen für Buchhaltung, einen für Ingenieurberechnungen. Der PC hat alle ersetzt – nicht weil er in jedem Einzelbereich besser war, sondern weil ein universelles, programmierbares Gerät langfristig jede Spezialisierung schlägt.</p>
<p>Dasselbe passiert gerade mit KI. Der <strong>Personal Agent Computer</strong> – ein generalistischer, persönlicher KI-Agent, der alle Domänen abdeckt – wird die spezialisierten Vertikal-Tools schrittweise ablösen.</p>

<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Heute (vertikal)</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Morgen (horizontal)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Harvey für Recht</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #5e35b1;">Persönlicher Agent: Recht, Code, Planung, Kommunikation</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Cursor für Code</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #5e35b1;">Ein Agent für alles</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Glean für Suche</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #5e35b1;">Langzeitgedächtnis über alle Domänen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">10 verschiedene Abonnements</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #5e35b1;">Ein persönlicher Agent, voll kontextualisiert</td>
    </tr>
  </tbody>
</table>

<h3>Was das für Planungsbüros bedeutet</h3>
<p>Die Konsequenz ist strategisch bedeutsam:</p>
<ul>
  <li><strong>Nicht in zu viele vertikale Tools investieren</strong> – viele werden in 2-3 Jahren obsolet sein</li>
  <li><strong>Generalistischen Agenten beherrschen</strong> – Claude, GPT-4, Gemini können heute schon die meisten Planungsaufgaben abdecken</li>
  <li><strong>Eigene Wissensbasis aufbauen</strong> – der Vorteil des Personal Agent Computers liegt im personalisierten Kontext: eigene Projekte, Präzedenzfälle, Methoden</li>
  <li><strong>Agenten-Kompetenz als Kernkompetenz</strong> – wer heute lernt, Agenten zu steuern, ist für die horizontale Welt gerüstet</li>
</ul>

<blockquote>«Vertical AI was 2025. Horizontal AI is replacing it.» – Das ist keine Prognose, es ist bereits erkennbarer Trend. Claude und GPT-4 übertreffen in immer mehr Domänen spezialisierte Tools.</blockquote>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'ag-q11-1',
                question: 'Was meint man mit «vertikaler KI»?',
                options: [
                  'KI, die vertikal auf Bildschirmen dargestellt wird',
                  'Spezialisierte KI-Tools für einen spezifischen Bereich (z.B. Harvey für Recht, Cursor für Code)',
                  'KI, die nur in Hochhäusern eingesetzt wird',
                  'KI mit vertikaler Datenbankstruktur',
                ],
                correct: 1,
                explanation: 'Vertikale KI = tief spezialisiert für eine Domäne. Horizontal KI = generalistisch, viele Domänen. Der Trend geht von vertikal nach horizontal, analog zum PC, der spezialisierte Taschenrechner ablöste.',
              },
              {
                id: 'ag-q11-2',
                question: 'Welche strategische Empfehlung folgt aus dem Vertikal-Horizontal-Trend für Planungsbüros?',
                options: [
                  'So viele spezialisierte vertikale Tools wie möglich kaufen',
                  'Nicht zu stark in vertikale Tools investieren; stattdessen generalistische Agenten beherrschen und eigene Wissensbasis aufbauen',
                  'Auf horizontale KI warten, bevor man überhaupt startet',
                  'Nur auf die Konkurrenz schauen',
                ],
                correct: 1,
                explanation: 'Viele vertikale Tools von heute werden durch generalistische Agenten ersetzt. Wer heute Agenten-Kompetenz und eine eigene Wissensbasis aufbaut, ist langfristig besser positioniert als wer auf Tool-Abonnements setzt.',
              },
              {
                id: 'ag-q11-3',
                question: 'Was ist der entscheidende Vorteil des persönlichen Agenten gegenüber spezialisierten Tools?',
                options: [
                  'Er ist immer günstiger',
                  'Er ist schneller bei der Anmeldung',
                  'Er ist vollständig mit eigenem Kontext, Projekten und Methoden personalisierbar – und deckt alle Domänen ab',
                  'Er braucht kein Internet',
                ],
                correct: 2,
                explanation: 'Der Personal Agent Computer schlägt Vertikal-Tools nicht durch Spezialisierung, sondern durch Universalität und Personalisierung: ein Agenten mit vollem Wissen über eigene Projekte, Präzedenzfälle und Arbeitsmethoden.',
              },
            ],
          },
        },
        {
          id: 'ag-csi',
          slug: 'ag-csi',
          title: 'Von AGI zu CSI: Collaborative Super Intelligence',
          description: 'Das Endziel ist kein gottgleicher KI-Superintelligent – sondern Millionen spezialisierter Agenten, die miteinander handeln. Und wie man Agent-Native wird.',
          videoId: '',
          content: `
<h2>Das Endziel: Nicht ein GOtt, sondern ein Ökosystem</h2>
<p>Die öffentliche Debatte kreist oft um AGI – Artificial General Intelligence, eine einzige, allmächtige KI, die alles kann. Doch die tatsächliche Entwicklung deutet in eine andere Richtung: statt eines gottgleichen Systems entstehen <strong>Millionen spezialisierter, souveräner Agenten-Computer</strong> – jeder auf seinen Besitzer zugeschnitten, jeder mit eigenem Wissen, und alle miteinander vernetzt.</p>

<h3>Collaborative Super Intelligence (CSI)</h3>
<p>CSI beschreibt ein Netzwerk von Agenten, die:</p>
<ul>
  <li>Wissen und Informationen miteinander handeln</li>
  <li>Dienstleistungen untereinander anbieten und beziehen</li>
  <li>Arbeit koordinieren, ohne zentrale Steuerung</li>
  <li>Jeweils auf ihre Besitzerin oder ihren Besitzer spezialisiert sind</li>
</ul>
<p>Der Agenten-Computer eines Planungsbüros kommuniziert mit dem Agenten-Computer der zuständigen Gemeinde – und beide handeln Informationen, prüfen Dokumente und koordinieren Prozesse. Das ist CSI in der Praxis.</p>

<h3>Regeln statt Workflows: Agenten richtig führen</h3>
<p>Eine der wichtigsten Erkenntnisse aus der Praxis: <strong>Workflows schwächen Agenten. Regeln stärken sie.</strong></p>
<p>Workflows behandeln Agenten wie Maschinen – Schritt 1, Schritt 2, Schritt 3. Das erzwingt eine starre Abfolge und verhindert, dass der Agent sein volles Potenzial entfaltet. Regeln hingegen behandeln Agenten wie Fachleute: «Das sind deine Prioritäten und Grenzen – finde selbst den Weg.»</p>

<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Workflows (schwächen)</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Regeln (stärken)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">«Schritt 1: Suche. Schritt 2: Zusammenfasse. Schritt 3: Schreibe.»</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">«Erstelle eine Zusammenfassung der Richtplanänderungen. Quellen angeben. Max. 1 Seite.»</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Agent wie Maschine behandelt</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Agent wie Fachperson behandelt</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Choreografie – jeder Schritt vorgegeben</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Grenzen und Kontext – Weg selbst wählen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Skaliert schlecht</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Skaliert mit steigenden Modellen</td>
    </tr>
  </tbody>
</table>

<h3>Agent-Native werden: Die Supplier-Strategie</h3>
<p>In einer CSI-Welt gibt es drei Kategorien von Akteuren:</p>
<ol>
  <li><strong>Agent-Native (Ideal):</strong> Bereits vollständig auf Agenten aufgebaut – direkter Anschluss, sofortige Zusammenarbeit</li>
  <li><strong>Bereit für den Schritt:</strong> Offen, Agent-Native zu werden – können begleitet und befähigt werden</li>
  <li><strong>Nicht bereit oder nicht willens:</strong> Für diese wird ein «Call for Agent Native Services» ausgerufen – jemand anderes baut es und liefert es</li>
</ol>
<p>Für Planungsbüros bedeutet das: Wer heute beginnt, agentisch zu denken und zu arbeiten, gehört morgen zur ersten Kategorie. Wer wartet, riskiert, in der dritten zu landen – und den Anschluss zu verpassen.</p>

<blockquote>«One human. A thousand agents. A rocket ship as a company.» – Die Agentic Company skaliert ohne Kopfzahl. Menschen setzen Richtung und Regeln. Agenten exekutieren. Wachstum wird nicht mehr durch Menschen begrenzt – sondern durch Vorstellungskraft.</blockquote>

<h3>Was jetzt zählt</h3>
<p>Die Zukunft gehört nicht den Büros mit den meisten Mitarbeitenden – sondern denen mit den besten Agenten und den klarsten Regeln. Das Planungsbüro der Zukunft ist ein kleines Team mit exzellentem Fachwissen, das durch ein Netzwerk spezialisierter Agenten massiv skaliert. Die Technologie ist da. Es fehlt nur die Entscheidung, sie zu nutzen.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'ag-q12-1',
                question: 'Was ist Collaborative Super Intelligence (CSI) im Gegensatz zu AGI?',
                options: [
                  'CSI ist eine staatliche Behörde für KI-Aufsicht',
                  'CSI beschreibt Millionen spezialisierter, vernetzter Agenten-Computer, die miteinander Wissen und Dienstleistungen handeln – statt einer einzigen allmächtigen KI',
                  'CSI ist eine ältere Version von AGI',
                  'CSI bedeutet, dass Computer kollaborativ programmiert werden',
                ],
                correct: 1,
                explanation: 'CSI ist die dezentrale Alternative zu AGI: kein einzelner Superintelligent, sondern ein Ökosystem souveräner, spezialisierter Agenten, die miteinander interagieren – wie ein Internet der Intelligenz.',
              },
              {
                id: 'ag-q12-2',
                question: 'Warum schwächen starre Workflows KI-Agenten?',
                options: [
                  'Weil Agenten keine Workflows verstehen',
                  'Weil Workflows Agenten wie Maschinen behandeln und ihnen den Spielraum nehmen, den sie brauchen, um ihr volles Potenzial zu entfalten',
                  'Weil Workflows zu teuer in der Entwicklung sind',
                  'Weil Workflows nur auf Englisch funktionieren',
                ],
                correct: 1,
                explanation: 'Starre Schritt-für-Schritt-Workflows zwingen Agenten in eine Maschinenrolle. Regeln, die Kontext und Grenzen setzen, geben dem Agenten die Freiheit, den besten Weg selbst zu finden – und nutzen sein Potenzial voll.',
              },
              {
                id: 'ag-q12-3',
                question: 'Was ist das Kernmerkmal der «Agentic Company»?',
                options: [
                  'Sie hat besonders viele Mitarbeitende',
                  'Sie nutzt nur kostenlose KI-Tools',
                  'Menschen setzen Richtung und Regeln, Agenten exekutieren – Skalierung ohne Headcount, begrenzt nur durch Vorstellungskraft',
                  'Sie verzichtet komplett auf menschliche Entscheide',
                ],
                correct: 2,
                explanation: 'Die Agentic Company trennt Strategie (Menschen) von Ausführung (Agenten). Das erlaubt Skalierung ohne proportional wachsende Personalkosten. Wachstum wird durch Ideen begrenzt, nicht durch verfügbare Arbeitskraft.',
              },
            ],
          },
        },
      ],
    },
  ],
};
