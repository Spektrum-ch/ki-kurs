import type { Course } from '@/types';

export const COURSE_ALLGEMEIN: Course = {
  title: 'KI-Grundkurs: Einsteiger',
  slug: 'ki-einsteiger',
  description: 'Der perfekte Einstieg in die Welt der Künstlichen Intelligenz – für alle, die KI verstehen und im Alltag nutzen wollen.',
  modules: [
    {
      id: 'ag-modul-0',
      slug: 'ki-grundlagen',
      title: 'KI-Grundlagen',
      description: 'Geschichte, Arten und Wirkungsweise der KI – der perfekte Einstieg für alle Neulinge.',
      icon: '🧠',
      order: 1,
      lessons: [
        {
          id: 'ag-ki-geschichte',
          slug: 'ki-geschichte-und-arten',
          title: 'KI: Geschichte & Arten',
          description: 'Von Alan Turing bis ChatGPT – wie sich KI entwickelt hat und welche Arten es gibt.',
          videoId: '',
          content: `
<h2>Was ist Künstliche Intelligenz?</h2>
<p>Künstliche Intelligenz (KI) beschreibt die Fähigkeit von Computersystemen, menschliche Denkprozesse zu simulieren: Lernen, Schlussfolgerungen ziehen, Probleme lösen und Entscheidungen treffen. Das reicht von einfacher Automatisierung bis hin zu komplexen neuronalen Netzwerken.</p>

<h3>Die Geschichte der KI auf einen Blick</h3>
<ul>
  <li><strong>1950er:</strong> Alan Turing entwickelt den Turing-Test – der erste formale Massstab für Maschinenintellligenz. John McCarthy prägt den Begriff «Artificial Intelligence».</li>
  <li><strong>1960er:</strong> Erste Programme wie ELIZA (ein früher Chatbot) und SHRDLU zeigen, dass Maschinen Sprache verarbeiten können.</li>
  <li><strong>1970er–80er:</strong> Expertensysteme und ein erster Boom im Machine Learning. Maschinen lernen aus Daten.</li>
  <li><strong>1990er:</strong> Neuronale Netzwerke gewinnen an Bedeutung.</li>
  <li><strong>2000er:</strong> Deep Learning ermöglicht Durchbrüche in Bilderkennung und Sprachverarbeitung.</li>
  <li><strong>2010er–heute:</strong> KI-Anwendungen in allen Branchen – von Natural Language Processing (NLP) über Computer Vision bis hin zu generativer KI.</li>
</ul>

<h3>Was treibt KI-Fortschritt an?</h3>
<p>Vier technologische Entwicklungen haben KI erst wirklich möglich gemacht:</p>
<ul>
  <li><strong>Internet:</strong> Schneller Zugang zu riesigen Datenmengen</li>
  <li><strong>Distributed Computing:</strong> Verteilte Rechenleistung für grosse Datensätze</li>
  <li><strong>IoT (Internet of Things):</strong> Vernetzte Geräte erzeugen massenhaft Daten</li>
  <li><strong>Social Media:</strong> Unstrukturierte Daten in grossem Massstab</li>
</ul>

<h3>Drei KI-Stärken – Narrow, General, Super AI</h3>
<p>KI lässt sich nach ihrer Fähigkeit kategorisieren:</p>
<ul>
  <li><strong>Schwache / Narrow AI:</strong> Auf einen spezifischen Bereich spezialisiert. Beispiele: Sprachassistenten, Spam-Filter, Übersetzungsprogramme, Empfehlungsalgorithmen. Das ist die KI, die wir heute kennen.</li>
  <li><strong>Starke / General AI:</strong> Kann unterschiedliche, unzusammenhängende Aufgaben bewältigen und selbstständig dazulernen. Auf menschlichem Intelligenzniveau. Noch in Entwicklung.</li>
  <li><strong>Super AI / Conscious AI:</strong> KI mit menschlichem Bewusstsein und darüber hinausgehenden Fähigkeiten. Aktuell noch Science-Fiction – da wir «Bewusstsein» selbst nicht vollständig definieren können.</li>
</ul>

<h3>Wie lernt eine KI?</h3>
<p>Maschinen haben keine angeborene Intelligenz. Wir geben ihnen die Fähigkeit, aus Beispielen zu lernen:</p>
<ul>
  <li><strong>Supervised Learning (überwachtes Lernen):</strong> Die KI lernt anhand beschrifteter Beispiele (Input + gewünschter Output).</li>
  <li><strong>Unsupervised Learning (unüberwachtes Lernen):</strong> Die KI entdeckt selbst Muster in Daten ohne Vorgaben.</li>
  <li><strong>Reinforcement Learning (bestärkendes Lernen):</strong> Die KI lernt durch Versuch, Irrtum und Belohnung – ähnlich wie ein Kind.</li>
</ul>

<blockquote>«KI ist kein Zaubertrick – sondern das Ergebnis von jahrzehntelanger Forschung, riesigen Datensätzen und immer leistungsfähigerer Hardware.»</blockquote>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ag-g1',
                question: 'Wer prägte den Begriff «Artificial Intelligence» in den 1950er Jahren?',
                options: [
                  'Albert Einstein',
                  'Alan Turing',
                  'John McCarthy',
                  'Tim Berners-Lee',
                ],
                correct: 2,
                explanation: 'John McCarthy prägte 1956 den Begriff «Artificial Intelligence». Alan Turing entwickelte bereits 1950 den Turing-Test als Massstab für Maschinenintellligenz.',
              },
              {
                id: 'ag-g2',
                question: 'Was ist «Narrow AI» (Schwache KI)?',
                options: [
                  'Eine KI, die bewusst schlechte Ergebnisse liefert',
                  'Eine KI, die für einen spezifischen Anwendungsbereich optimiert ist',
                  'Eine KI mit menschlichem Bewusstsein',
                  'Eine KI, die nur auf langsamen Computern läuft',
                ],
                correct: 1,
                explanation: 'Narrow AI ist auf einen bestimmten Bereich spezialisiert – z.B. Sprachassistenten oder Empfehlungsalgorithmen. Das ist die KI, die wir heute überall einsetzen.',
              },
              {
                id: 'ag-g3',
                question: 'Welche Lernmethode beschreibt das Lernen aus beschrifteten Beispielen mit vorgegebenem Ziel?',
                options: [
                  'Reinforcement Learning',
                  'Unsupervised Learning',
                  'Supervised Learning',
                  'Transfer Learning',
                ],
                correct: 2,
                explanation: 'Beim Supervised Learning (überwachtes Lernen) lernt die KI anhand von Beispielen, bei denen Input und der gewünschte Output klar definiert sind.',
              },
            ],
          },
        },
        {
          id: 'ag-augmented-intel',
          slug: 'mensch-ki-augmented-intelligence',
          title: 'Mensch, Maschine & Augmented Intelligence',
          description: 'Wann ersetzt KI den Menschen – und wann verstärkt sie ihn? Die entscheidende Unterscheidung.',
          videoId: '',
          content: `
<h2>Drei Formen der Intelligenz</h2>
<p>Es gibt nicht nur «Menschliche Intelligenz» und «Künstliche Intelligenz». Der interessanteste Bereich liegt dazwischen: die <strong>Augmented Intelligence</strong>.</p>

<h3>Ein Alltagsbeispiel: Die Fahrt zur Arbeit</h3>
<p>Stell dir vor, du fährst mit dem Auto ins Büro. Diese Fahrt nutzt drei verschiedene Intelligenzformen:</p>
<ul>
  <li><strong>Menschliche Intelligenz:</strong> Du lenkst, schaust in die Spiegel, triffst Entscheidungen im Verkehr.</li>
  <li><strong>Künstliche Intelligenz:</strong> Du aktivierst den Autopiloten auf der Autobahn – das Fahrzeug übernimmt vollständig, kein menschlicher Eingriff nötig.</li>
  <li><strong>Augmented Intelligence:</strong> Beim Abfahren von der Autobahn helfen Fahrassistenten: Kollisionswarnung, Toter-Winkel-Erkennung. Du fährst, aber mit maschineller Unterstützung.</li>
</ul>

<h3>Was können Maschinen besser?</h3>
<ul>
  <li>Grosse Datenmengen schnell verarbeiten</li>
  <li>Repetitive Aufgaben fehlerfrei und ausdauernd ausführen</li>
  <li>Muster in riesigen Datensätzen erkennen</li>
</ul>

<h3>Was können Menschen besser?</h3>
<ul>
  <li><strong>Generalisierung:</strong> Aus einem Einzelbeispiel das zugrundeliegende Konzept verstehen</li>
  <li><strong>Kreativität:</strong> Neue Ideen entwickeln, Probleme auf unerwartete Weise lösen</li>
  <li><strong>Emotionale Intelligenz:</strong> Reaktionen anderer Menschen verstehen und empathisch handeln – unverzichtbar in Beratung, Pflege, Führung</li>
</ul>

<h3>Augmented Intelligence – der Sweet Spot</h3>
<p>Augmented Intelligence kombiniert die Stärken beider Welten. Die Maschine übernimmt datenintensive, repetitive Aufgaben – der Mensch trifft Urteile, zeigt Empathie und trägt Verantwortung.</p>

<p>Das ist keine abstrakte Idee, sondern bereits Realität:</p>
<ul>
  <li>Ärzte, die KI-Diagnosen als zweite Meinung nutzen, aber die Entscheidung selbst treffen</li>
  <li>Juristen, die KI-gestützte Dokumentenanalyse nutzen, aber selbst urteilen</li>
  <li>Planer und Gemeinden, die KI-Datenauswertungen als Entscheidungsgrundlage verwenden</li>
</ul>

<blockquote>«KI soll unterstützen, nicht ersetzen. Der Mensch bleibt Autor seiner Entscheidungen.» – SPEKTRUM</blockquote>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'ag-g4',
                question: 'Was versteht man unter «Augmented Intelligence»?',
                options: [
                  'KI, die Bilder künstlich vergrössert',
                  'Das Zusammenspiel von Mensch und Maschine, das die Stärken beider kombiniert',
                  'KI, die Menschen vollständig ersetzt',
                  'Eine neue Generation von Smartphones',
                ],
                correct: 1,
                explanation: 'Augmented Intelligence ist der Sweet Spot: Maschinen übernehmen datenintensive Aufgaben, Menschen treffen Entscheidungen, zeigen Empathie und tragen Verantwortung.',
              },
              {
                id: 'ag-g5',
                question: 'Worin sind Menschen Maschinen klar überlegen?',
                options: [
                  'Wiederholende Aufgaben fehlerfrei ausführen',
                  'Grosse Datensätze schnell verarbeiten',
                  'Kreativität, Empathie und komplexes Urteilsvermögen',
                  'Immer 24/7 verfügbar sein',
                ],
                correct: 2,
                explanation: 'Menschen sind Maschinen bei Kreativität, emotionaler Intelligenz und komplexem Urteilsvermögen überlegen. Maschinen sind besser bei Datenmengen und Wiederholung.',
              },
              {
                id: 'ag-g6',
                question: 'Welche der folgenden Aussagen beschreibt «Künstliche Intelligenz» am besten?',
                options: [
                  'KI und Mensch arbeiten zusammen zur gegenseitigen Verstärkung',
                  'Maschinen ersetzen den Menschen vollständig – kein menschlicher Eingriff nötig',
                  'Nur menschliche Intelligenz ohne technische Unterstützung',
                  'Eine Technologie, die ausschliesslich in Robotern eingesetzt wird',
                ],
                correct: 1,
                explanation: 'Klassische KI ersetzt den Menschen bei definierten Aufgaben vollständig – wie ein Autopilot auf der Autobahn. Augmented Intelligence hingegen unterstützt den Menschen.',
              },
            ],
          },
        },
        {
          id: 'ag-generative-ki',
          slug: 'generative-ki-und-llms',
          title: 'Generative KI & Large Language Models',
          description: 'Was ChatGPT, Midjourney und Co. auszeichnet – und warum Generative KI eine neue Ära einläutet.',
          videoId: '',
          content: `
<h2>Traditionelle KI vs. Generative KI</h2>
<p>Die meisten KI-Anwendungen, die wir seit Jahrzehnten kennen, analysieren Daten und treffen Entscheidungen – sie empfehlen Songs, übersetzen Sprachen oder erkennen Spam. <strong>Generative KI macht etwas grundlegend anderes: Sie erschafft neue Inhalte.</strong></p>

<h3>Was ist Generative KI?</h3>
<p>Generative KI ist eine KI-Technologie, die vollständig neue Daten erzeugen kann: Texte, Bilder, Audio, Video und Code. Sie arbeitet nicht mit fixen Regeln, sondern mit tiefen Lernmodellen, die aus riesigen Datensätzen trainiert werden.</p>

<h3>Was sind Large Language Models (LLMs)?</h3>
<p>LLMs sind das Herzstück moderner Text-KI. Sie sind darauf ausgelegt, menschenähnliche Sprache zu verstehen und zu erzeugen. Ihre wichtigsten Fähigkeiten:</p>
<ul>
  <li><strong>Textgenerierung:</strong> Artikel, E-Mails, Berichte, Code schreiben</li>
  <li><strong>Übersetzung:</strong> Professionelle Übersetzungen in Echtzeit</li>
  <li><strong>Zusammenfassung:</strong> Lange Dokumente auf den Punkt bringen</li>
  <li><strong>Konversation:</strong> Natürliche, menschenähnliche Gespräche führen</li>
</ul>

<p>Bekannte LLMs: ChatGPT (GPT-4 von OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta).</p>

<h3>Die wirtschaftliche Dimension</h3>
<p>Laut einer Studie von Goldman Sachs könnte Generative KI:</p>
<ul>
  <li>Das globale Wirtschaftswachstum um <strong>7%</strong> steigern (rund 7 Billionen USD)</li>
  <li>Das Produktivitätswachstum über 10 Jahre um <strong>1,5 Prozentpunkte</strong> erhöhen</li>
</ul>

<h3>Wo wird Generative KI heute eingesetzt?</h3>
<ul>
  <li><strong>Marketing:</strong> Personalisierte Werbetexte, E-Mail-Kampagnen, Social-Media-Posts</li>
  <li><strong>Kreativwirtschaft:</strong> KI-generierte Bilder, Musik, Videoinhalte</li>
  <li><strong>Healthcare:</strong> Massgeschneiderte Behandlungsvorschläge, Simulation von Eingriffen</li>
  <li><strong>Bildung:</strong> Personalisierte Lernmaterialien und interaktive Lernumgebungen</li>
  <li><strong>Planung & Verwaltung:</strong> Auswertung von Dokumenten, Berichterstellung, Protokollgenerierung</li>
</ul>

<h3>Was bedeutet das für die Raumplanung und Verwaltung?</h3>
<p>Generative KI eröffnet auch für Gemeinden, Planungsbüros und Ämter neue Möglichkeiten:</p>
<ul>
  <li>Protokolle automatisch erstellen (→ MINU-AI)</li>
  <li>Planungsberichte strukturieren und formulieren</li>
  <li>Rechtliche Texte zusammenfassen und erklären</li>
  <li>Bürgeranfragen schneller beantworten</li>
</ul>

<blockquote>Generative KI ist keine ferne Zukunft – sie ist heute verfügbar und bereits im Einsatz. Die Frage ist nicht ob, sondern wie du sie nutzt.</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'ag-g7',
                question: 'Was unterscheidet Generative KI von traditioneller KI?',
                options: [
                  'Generative KI ist älter und bewährter',
                  'Generative KI analysiert nur Daten, während traditionelle KI neue Inhalte erzeugt',
                  'Generative KI erschafft neue Inhalte, traditionelle KI analysiert und entscheidet',
                  'Es gibt keinen Unterschied – beide Begriffe bedeuten dasselbe',
                ],
                correct: 2,
                explanation: 'Der Schlüsselunterschied: Traditionelle KI analysiert und trifft Entscheidungen (z.B. Spam-Filter). Generative KI erschafft vollständig neue Inhalte wie Texte, Bilder oder Audio.',
              },
              {
                id: 'ag-g8',
                question: 'Wofür stehen «LLMs» in der KI-Welt?',
                options: [
                  'Local Language Modules',
                  'Large Language Models',
                  'Linear Learning Mechanisms',
                  'Logical Logic Methods',
                ],
                correct: 1,
                explanation: 'LLM steht für «Large Language Model» – grosse Sprachmodelle wie GPT-4, Claude oder Gemini, die auf riesigen Textmengen trainiert wurden und menschenähnliche Texte verstehen und erzeugen.',
              },
              {
                id: 'ag-g9',
                question: 'Welchen wirtschaftlichen Effekt prognostiziert Goldman Sachs durch Generative KI?',
                options: [
                  '+1% Wirtschaftswachstum global',
                  '+7% Wirtschaftswachstum global (~7 Billionen USD)',
                  '-5% Rückgang der Produktivität',
                  'Keine messbaren Auswirkungen',
                ],
                correct: 1,
                explanation: 'Laut Goldman Sachs könnte Generative KI das globale Wirtschaftswachstum um rund 7% steigern – das entspricht fast 7 Billionen USD.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ag-modul-1',
      slug: 'ki-basics',
      title: 'KI-Tools & Prompting',
      description: 'Die wichtigsten KI-Tools kennenlernen und mit präzisen Prompts das Beste herausholen.',
      icon: '🤖',
      order: 2,
      lessons: [
        {
          id: 'ag-ki-erklaert',
          slug: 'ki-einfach-erklaert',
          title: 'KI im Alltag – du nutzt sie schon',
          description: 'KI ist längst überall. Erkenne, wo du sie bereits täglich verwendest – ohne es zu wissen.',
          videoId: '',
          content: `
<h2>KI im Alltag – du nutzt sie schon</h2>
<p>KI ist kein Science-Fiction mehr. Sie ist in deinem Smartphone, in deiner Suchmaschine, in deiner Musik-App und in deinem E-Mail-Postfach. Meistens bemerken wir sie gar nicht – weil sie einfach funktioniert.</p>

<h3>Wo begegnet dir KI täglich?</h3>
<ul>
  <li><strong>Gesichtserkennung:</strong> Dein Smartphone entsperrt sich, weil es dein Gesicht kennt.</li>
  <li><strong>Empfehlungen:</strong> Spotify, Netflix, YouTube wissen fast besser als du, was du als nächstes hören oder sehen möchtest.</li>
  <li><strong>Spam-Filter:</strong> Dein E-Mail-Postfach hält täglich Hunderte von Spam-Mails fern – durch KI.</li>
  <li><strong>Navigation:</strong> Google Maps berechnet in Echtzeit die schnellste Route auf Basis von Millionen Datenpunkten.</li>
  <li><strong>Übersetzungen:</strong> DeepL und Google Translate liefern in Sekunden präzise Übersetzungen.</li>
  <li><strong>Autocomplete:</strong> Wenn du eine SMS tippst, schlägt dein Telefon das nächste Wort vor.</li>
</ul>

<h3>Und jetzt auch im Berufsalltag</h3>
<p>Was bisher im Konsumbereich dominierte, hält nun Einzug in den professionellen Alltag:</p>
<ul>
  <li>KI schreibt E-Mails, Berichte und Protokolle</li>
  <li>KI analysiert Dokumente und findet relevante Stellen</li>
  <li>KI erstellt Bilder, Präsentationen und Code</li>
  <li>KI beantwortet Fachfragen als intelligenter Assistent</li>
</ul>

<h3>Die wichtigste Erkenntnis</h3>
<p>KI ist kein Ersatz für dich – sie ist ein Werkzeug, das dich <strong>schneller, genauer und kreativer</strong> macht. Der Unterschied zwischen Profis, die KI nutzen, und solchen, die es nicht tun, wird in den nächsten Jahren massiv wachsen.</p>

<blockquote>Du musst KI nicht programmieren können – du musst lernen, sie richtig einzusetzen.</blockquote>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ag-q1',
                question: 'Welche der folgenden Alltagsanwendungen basiert NICHT auf KI?',
                options: [
                  'Spotify-Musikempfehlungen',
                  'Google Maps Routenberechnung',
                  'Ein einfacher Taschenrechner',
                  'Spam-Filter im E-Mail-Postfach',
                ],
                correct: 2,
                explanation: 'Ein klassischer Taschenrechner folgt fixen Rechenregeln – das ist keine KI. KI lernt aus Daten und passt sich an. Empfehlungen, Navigation und Spam-Filter sind klassische KI-Anwendungen.',
              },
            ],
          },
        },
        {
          id: 'ag-chatgpt-basics',
          slug: 'chatgpt-grundlagen',
          title: 'ChatGPT & Co. – die wichtigsten Tools',
          description: 'Ein Überblick über die bekanntesten KI-Tools und wofür man sie einsetzt.',
          videoId: '',
          content: `
<h2>Die wichtigsten KI-Tools im Überblick</h2>
<p>Der Markt für KI-Tools wächst rasend schnell. Diese Tools solltest du kennen:</p>

<h3>Texte schreiben & verstehen</h3>
<ul>
  <li><strong>ChatGPT (OpenAI):</strong> Das bekannteste KI-Tool. Schreibt Texte, beantwortet Fragen, übersetzt, programmiert.</li>
  <li><strong>Claude (Anthropic):</strong> Stärker bei langen Dokumenten, sehr verlässlich und präzise.</li>
  <li><strong>Gemini (Google):</strong> Direkt in Google-Dienste integriert.</li>
</ul>

<h3>Bilder erstellen</h3>
<ul>
  <li><strong>Midjourney:</strong> Professionelle KI-Bilder aus Textbeschreibungen.</li>
  <li><strong>DALL-E:</strong> In ChatGPT integriert, einfach zugänglich.</li>
</ul>

<h3>Suchen & Recherchieren</h3>
<ul>
  <li><strong>Perplexity AI:</strong> KI-Suchmaschine mit Quellenangaben.</li>
  <li><strong>NotebookLM (Google):</strong> Analysiert eigene Dokumente mit KI.</li>
</ul>

<blockquote>Tipp: Starte mit ChatGPT oder Claude. Beide sind kostenlos nutzbar und decken 80% aller Anwendungsfälle ab.</blockquote>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'ag-q2',
                question: 'Welches Tool ist am besten für das Erstellen von KI-Bildern geeignet?',
                options: [
                  'ChatGPT',
                  'Perplexity',
                  'Midjourney',
                  'NotebookLM',
                ],
                correct: 2,
                explanation: 'Midjourney ist speziell auf die Bildgenerierung ausgelegt und liefert professionelle Ergebnisse.',
              },
            ],
          },
        },
        {
          id: 'ag-prompting',
          slug: 'prompting-grundlagen',
          title: 'Prompting: KI richtig ansprechen',
          description: 'Wie du KI-Tools mit präzisen Anfragen (Prompts) bessere Ergebnisse bekommst.',
          videoId: '',
          content: `
<h2>Was ist ein Prompt?</h2>
<p>Ein <strong>Prompt</strong> ist die Eingabe, die du einer KI gibst – deine Frage, Aufgabe oder Anweisung. Die Qualität des Prompts bestimmt massgeblich die Qualität der Antwort.</p>

<h3>Die 4 Grundregeln für gute Prompts</h3>
<ol>
  <li><strong>Kontext geben:</strong> Erkläre, wer du bist und warum du fragst.</li>
  <li><strong>Konkret sein:</strong> Je präziser die Frage, desto besser die Antwort.</li>
  <li><strong>Format angeben:</strong> «Schreib eine Liste mit 5 Punkten» oder «Erkläre in 3 Sätzen».</li>
  <li><strong>Iterieren:</strong> Erste Antwort nicht gut? Verfeinere den Prompt.</li>
</ol>

<h3>Beispiel: Schlechter vs. guter Prompt</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Schlechter Prompt</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Guter Prompt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">«Schreib mir eine E-Mail»</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">«Schreib eine höfliche Absage-E-Mail an einen Lieferanten. Ton: professionell, kurz (3 Sätze). Grund: zu hohe Kosten.»</td>
    </tr>
  </tbody>
</table>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'ag-q3',
                question: 'Was ist die wichtigste Grundregel für gute Prompts?',
                options: [
                  'Möglichst kurze Anfragen stellen',
                  'Nur auf Englisch schreiben',
                  'Kontext geben und konkret sein',
                  'Immer höflich formulieren',
                ],
                correct: 2,
                explanation: 'Kontext und Präzision sind entscheidend. Je mehr die KI über deine Situation weiss, desto besser kann sie helfen.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ag-modul-2',
      slug: 'ki-im-beruf',
      title: 'KI im Beruf',
      description: 'Konkrete Anwendungen für den Arbeitsalltag – von E-Mails bis Präsentationen.',
      icon: '💼',
      order: 3,
      lessons: [
        {
          id: 'ag-texte-beruf',
          slug: 'texte-und-kommunikation',
          title: 'Texte & Kommunikation',
          description: 'E-Mails, Berichte, Präsentationen – KI als Schreibassistent.',
          videoId: '',
          content: `
<h2>KI als Schreibassistent im Beruf</h2>
<p>Einer der grössten Zeitgewinner durch KI: das Schreiben. Von der E-Mail-Vorlage bis zum Bericht – KI übernimmt den ersten Entwurf.</p>

<h3>Anwendungsbeispiele</h3>
<ul>
  <li><strong>E-Mails:</strong> Entwurf schreiben, Ton anpassen, kürzen oder verlängern</li>
  <li><strong>Berichte:</strong> Struktur vorschlagen, Texte aus Stichpunkten generieren</li>
  <li><strong>Präsentationen:</strong> Gliederung erstellen, Slides-Texte ausformulieren</li>
  <li><strong>Protokolle:</strong> Notizen in strukturierte Zusammenfassungen umwandeln</li>
  <li><strong>Übersetzungen:</strong> Professionelle Übersetzungen in Sekunden</li>
</ul>

<h3>Wichtig: KI als Entwurfshelfer, nicht als Endprodukt</h3>
<p>KI-generierte Texte solltest du immer lesen, anpassen und als eigene Stimme formulieren. Sie liefert den Rohling – du gibst dem Text das letzte Finish.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ag-q4',
                question: 'Wie solltest du KI-generierte Texte verwenden?',
                options: [
                  'Direkt 1:1 übernehmen ohne zu lesen',
                  'Als Entwurf – immer lesen und anpassen',
                  'Nur für interne Dokumente',
                  'Nur auf Englisch',
                ],
                correct: 1,
                explanation: 'KI liefert einen guten ersten Entwurf. Du solltest ihn immer prüfen, anpassen und mit deiner eigenen Stimme verfeinern.',
              },
            ],
          },
        },
        {
          id: 'ag-recherche',
          slug: 'recherche-und-analyse',
          title: 'Recherche & Analyse',
          description: 'Informationen schneller finden, Dokumente zusammenfassen, Daten verstehen.',
          videoId: '',
          content: `
<h2>KI für Recherche und Analyse</h2>
<p>KI kann grosse Mengen an Text in Sekunden verarbeiten und die wichtigsten Informationen herausfiltern.</p>

<h3>Dokumente zusammenfassen</h3>
<p>Lade ein PDF in Claude oder ChatGPT hoch und frage: «Fasse die wichtigsten Punkte in 5 Stichpunkten zusammen» oder «Welche Risiken erwähnt dieses Dokument?»</p>

<h3>Recherche mit Perplexity AI</h3>
<p>Perplexity AI ist eine KI-Suchmaschine, die Quellen transparent ausweist. Ideal für:</p>
<ul>
  <li>Aktuelle Informationen (im Gegensatz zu ChatGPT mit Wissens-Cutoff)</li>
  <li>Schnelle Markt- oder Wettbewerbs-Recherchen</li>
  <li>Überprüfen von Fakten mit Quellennachweis</li>
</ul>

<h3>Daten verstehen</h3>
<p>Hast du eine Excel-Tabelle und weisst nicht, wie du sie auswerten sollst? Beschreibe ChatGPT dein Datenproblem – es erklärt dir die nötigen Formeln oder wertet Daten direkt aus (via Code Interpreter).</p>
          `,
          order: 2,
        },
        {
          id: 'ag-workflow',
          slug: 'ki-workflow-aufbauen',
          title: 'Deinen KI-Workflow aufbauen',
          description: 'Schritt für Schritt: Wie du KI sinnvoll in deinen Arbeitsalltag integrierst.',
          videoId: '',
          content: `
<h2>KI in den Alltag integrieren – aber richtig</h2>
<p>Der grösste Fehler: KI für alles auf einmal ausprobieren und dann aufzuhören weil es überwältigend ist. Besser: Mit einem konkreten Anwendungsfall starten.</p>

<h3>Der 3-Schritte-Plan</h3>
<ol>
  <li><strong>Eine Aufgabe wählen:</strong> Welche Aufgabe kostet dich regelmässig viel Zeit? (z.B. E-Mails schreiben)</li>
  <li><strong>Eine Woche testen:</strong> Nutze KI genau für diese eine Aufgabe täglich.</li>
  <li><strong>Auswerten und erweitern:</strong> Hat es Zeit gespart? Dann eine weitere Aufgabe dazunehmen.</li>
</ol>

<h3>Deine persönliche KI-Toolbox</h3>
<ul>
  <li>📝 <strong>Texte schreiben:</strong> ChatGPT oder Claude</li>
  <li>🔍 <strong>Recherche:</strong> Perplexity AI</li>
  <li>🎨 <strong>Bilder:</strong> Midjourney oder DALL-E</li>
  <li>📊 <strong>Daten:</strong> ChatGPT Code Interpreter</li>
  <li>🎙️ <strong>Audio/Video:</strong> Whisper, ElevenLabs</li>
</ul>
          `,
          order: 3,
        },
      ],
    },
    {
      id: 'ag-modul-3',
      slug: 'ki-chancen-risiken',
      title: 'Chancen & Risiken',
      description: 'Was KI kann, wo sie Grenzen hat und worauf du bei Datenschutz & Ethik achten musst.',
      icon: '⚖️',
      order: 4,
      lessons: [
        {
          id: 'ag-grenzen',
          slug: 'grenzen-von-ki',
          title: 'Was KI (noch) nicht kann',
          description: 'KI ist mächtig – aber nicht unfehlbar. Die wichtigsten Grenzen im Überblick.',
          videoId: '',
          content: `
<h2>Die Grenzen der KI</h2>
<p>KI beeindruckt täglich mit neuen Fähigkeiten. Aber es gibt wichtige Einschränkungen, die du kennen solltest.</p>

<h3>Halluzinationen</h3>
<p>KI-Modelle «halluzinieren» manchmal – sie erfinden Fakten, die sich plausibel anhören, aber falsch sind. <strong>Wichtig: Fakten immer in verlässlichen Quellen prüfen!</strong></p>

<h3>Kein aktuelles Wissen (je nach Tool)</h3>
<p>ChatGPT hat einen Wissens-Cutoff und kennt keine aktuellen Ereignisse. Für aktuelle Informationen: Perplexity AI oder ChatGPT mit aktivierter Websuche nutzen.</p>

<h3>Kein echtes Verstehen</h3>
<p>KI verarbeitet statistische Muster – sie «versteht» nicht im menschlichen Sinne. Sie kann brillant klingen, aber fundamentale Zusammenhänge falsch einschätzen.</p>

<h3>Kein Urteilsvermögen</h3>
<p>Ethische Entscheidungen, Empathie, moralisches Urteil – das bleibt Aufgabe des Menschen. KI kann Optionen aufzeigen, aber nicht entscheiden.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'ag-q5',
                question: 'Was bedeutet «Halluzination» bei KI-Modellen?',
                options: [
                  'KI macht visuelle Fehler bei Bildern',
                  'KI erfindet plausibel klingende, aber falsche Fakten',
                  'KI antwortet zu langsam',
                  'KI versteht keine Schweizer Dialekte',
                ],
                correct: 1,
                explanation: 'Halluzination beschreibt das Phänomen, dass KI-Modelle selbstsicher Fakten erfinden, die sich korrekt anhören, es aber nicht sind. Faktencheck ist immer nötig!',
              },
            ],
          },
        },
        {
          id: 'ag-datenschutz',
          slug: 'datenschutz-und-ki',
          title: 'Datenschutz beim KI-Einsatz',
          description: 'Was du mit KI-Tools teilen darfst und was nicht.',
          videoId: '',
          content: `
<h2>Datenschutz im KI-Alltag</h2>
<p>Bevor du Daten in KI-Tools eingibst, musst du wissen: Was passiert damit?</p>

<h3>Was du NICHT eingeben solltest</h3>
<ul>
  <li>Personenbezogene Daten von Kunden oder Mitarbeitenden (DSGVO!)</li>
  <li>Vertrauliche Geschäftsgeheimnisse</li>
  <li>Passwörter, API-Keys oder Zugangsdaten</li>
  <li>Gesundheitsdaten oder sensible Finanzinformationen</li>
</ul>

<h3>Datenschutz-freundliche Einstellungen</h3>
<p>Die meisten Tools bieten Optionen, um Training mit deinen Daten zu deaktivieren:</p>
<ul>
  <li><strong>ChatGPT:</strong> Einstellungen → Datenkontrolle → «Modell verbessern» deaktivieren</li>
  <li><strong>Claude:</strong> Standardmässig keine Nutzung für Training (Privacy Policy prüfen)</li>
</ul>

<h3>Schweizer & EU-Perspektive</h3>
<p>Das Schweizer Datenschutzgesetz (DSG) und die EU-DSGVO gelten auch für KI-Tools. Unternehmen und Behörden müssen sicherstellen, dass keine personenbezogenen Daten unzulässig verarbeitet werden.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'ag-q6',
                question: 'Was sollte NICHT in KI-Tools eingegeben werden?',
                options: [
                  'Allgemeine Wissensfragen',
                  'Öffentlich zugängliche Informationen',
                  'Personenbezogene Kundendaten',
                  'Textvorlagen ohne Personenbezug',
                ],
                correct: 2,
                explanation: 'Personenbezogene Daten unterliegen dem Datenschutzgesetz. Ihre Eingabe in externe KI-Tools ist ohne rechtliche Grundlage nicht erlaubt.',
              },
            ],
          },
        },
        {
          id: 'ag-zukunft',
          slug: 'ki-und-zukunft-der-arbeit',
          title: 'KI und die Zukunft der Arbeit',
          description: 'Welche Berufe sich verändern – und wie du mit KI wettbewerbsfähig bleibst.',
          videoId: '',
          content: `
<h2>KI und Arbeit – was ändert sich?</h2>
<p>KI wird viele Berufe verändern, aber nicht ersetzen – sie verändert, wie wir arbeiten.</p>

<h3>Was sich verändert</h3>
<p>Routineaufgaben, die klaren Mustern folgen, werden automatisiert. Das betrifft:</p>
<ul>
  <li>Standardisierte Textproduktion</li>
  <li>Datenerfassung und -analyse</li>
  <li>Einfache Bildbearbeitung</li>
  <li>Basisrecherchen</li>
</ul>

<h3>Was bleibt menschlich</h3>
<ul>
  <li>Kreativität und originelle Ideen</li>
  <li>Komplexe Urteilsfindung</li>
  <li>Empathie und soziale Intelligenz</li>
  <li>Verantwortung und ethisches Handeln</li>
  <li>Kontextwissen aus Erfahrung</li>
</ul>

<h3>Dein Vorteil: KI-Kompetenz</h3>
<p><strong>Die entscheidende Fähigkeit der nächsten Jahre ist nicht, KI zu ersetzen – sondern sie sinnvoll einzusetzen.</strong> Wer KI-Tools beherrscht, ist produktiver, kreativer und wettbewerbsfähiger.</p>

<blockquote>«KI wird Menschen nicht ersetzen. Aber Menschen, die KI nutzen, werden Menschen ersetzen, die es nicht tun.»</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'ag-q7',
                question: 'Was ist die wichtigste Kompetenz im Umgang mit KI?',
                options: [
                  'Programmieren lernen',
                  'KI sinnvoll einsetzen und kritisch bewerten können',
                  'Möglichst viele Tools ausprobieren',
                  'KI so wenig wie möglich nutzen',
                ],
                correct: 1,
                explanation: 'KI-Kompetenz bedeutet: Tools kennen, sinnvoll einsetzen und kritisch hinterfragen. Das ist die entscheidende Fähigkeit – nicht technisches Wissen.',
              },
            ],
          },
        },
      ],
    },
  ],
};
