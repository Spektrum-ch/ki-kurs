import type { Course } from '@/types';

export const COURSE_GEMEINDEN: Course = {
  title: 'KI für Gemeinden',
  slug: 'ki-gemeinden',
  description: 'Künstliche Intelligenz in der kommunalen Verwaltung: Grundlagen, Tools, Datenschutz, Effizienz, Zukunftstrends und strategische Entscheidungsgrundlagen für Schweizer Gemeinden.',
  modules: [
    // ─────────────────────────────────────────
    // MODUL 1 – KI-Grundlagen für die Verwaltung
    // ─────────────────────────────────────────
    {
      id: 'gm-modul-1',
      slug: 'gm-grundlagen',
      title: 'KI-Grundlagen für die Verwaltung',
      description: 'Was Künstliche Intelligenz wirklich ist, welche Technologien dahinterstecken und wie der Stand in Schweizer Gemeinden heute aussieht.',
      icon: '🤖',
      order: 1,
      lessons: [
        {
          id: 'gm-ki-verstehen',
          slug: 'gm-ki-verstehen',
          title: 'Künstliche Intelligenz verstehen',
          description: 'Was KI bedeutet, wie sie funktioniert und warum das Thema für Gemeindeverwaltungen heute relevant ist.',
          videoId: '',
          content: `
<h2>Was ist Künstliche Intelligenz – und was ist sie nicht?</h2>
<p>Künstliche Intelligenz (KI) ist eines der meistdiskutierten Themen unserer Zeit – gleichzeitig aber auch eines der missverstandensten. Für Gemeindeverwaltungen ist ein realistisches Grundverständnis wichtiger als jede Begeisterung oder Skepsis. Wer weiss, was KI kann und was sie nicht kann, trifft bessere Entscheidungen.</p>

<h3>Eine einfache Definition</h3>
<p>KI bezeichnet Computersysteme, die Aufgaben erledigen können, die bisher menschliche Intelligenz erforderten: Texte verstehen und schreiben, Bilder erkennen, Muster in Daten finden, Fragen beantworten. Moderne KI-Systeme lernen dabei aus grossen Datenmengen – sie werden nicht mehr manuell programmiert, sondern trainiert. Das Ergebnis sind Modelle, die in vielen Bereichen erstaunlich gute Leistungen erbringen.</p>

<h3>Was KI in der Praxis bedeutet</h3>
<p>Wenn eine Gemeindemitarbeiterin mit ChatGPT einen Entwurf für eine Medienmitteilung erstellt, nutzt sie ein sogenanntes grosses Sprachmodell (Large Language Model, LLM). Wenn ein System eingescannte Dokumente automatisch liest und sortiert, steckt Bilderkennungs-KI dahinter. Wenn ein Chatbot auf der Gemeindewebsite Bürgerfragen beantwortet, kombiniert er mehrere KI-Technologien. All das ist heute Realität – keine ferne Zukunft.</p>

<h3>Was KI nicht ist</h3>
<p>KI ist keine Superintelligenz, die selbständig denkt oder plant. Sie hat kein Bewusstsein, keine Absichten und kein Verständnis im menschlichen Sinn. KI-Systeme sind sehr gute Mustererkenner und Textgeneratoren – aber sie machen auch Fehler, erfinden manchmal Fakten und können komplexe ethische Abwägungen nicht selbständig treffen. Das zu wissen schützt vor unrealistischen Erwartungen in beide Richtungen.</p>

<h3>Warum Gemeinden heute handeln sollten</h3>
<p>Der Druck auf Schweizer Gemeinden wächst: mehr Aufgaben, weniger Personal, höhere Bürgererwartungen. KI bietet echtes Entlastungspotenzial – aber nur für jene, die sich frühzeitig damit auseinandersetzen. Wer wartet, bis alles «ausgereift» ist, wartet möglicherweise zu lang. Die ersten Erfahrungen zu sammeln ist heute einfacher und günstiger als je zuvor.
</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'gm-q1-1',
                question: 'Was ist das Grundprinzip moderner KI-Systeme?',
                options: [
                  'Sie werden von Experten manuell mit Regeln programmiert',
                  'Sie lernen aus grossen Datenmengen und werden trainiert, nicht programmiert',
                  'Sie kopieren das Verhalten menschlicher Gehirne vollständig',
                  'Sie sind nur in grossen Rechenzentren lauffähig',
                ],
                correct: 1,
                explanation: 'Moderne KI-Systeme werden nicht Regel für Regel programmiert, sondern aus Daten trainiert. Das ermöglicht ihnen, Muster zu erkennen und Aufgaben zu erledigen, die früher nur Menschen meistern konnten.',
              },
              {
                id: 'gm-q1-2',
                question: 'Was ist ein grosses Sprachmodell (Large Language Model)?',
                options: [
                  'Ein Wörterbuch in digitaler Form',
                  'Ein KI-System, das Texte verstehen und generieren kann, wie z.B. ChatGPT',
                  'Eine spezielle Programmiersprache für Verwaltungen',
                  'Ein Übersetzungsprogramm für Amtssprachen',
                ],
                correct: 1,
                explanation: 'Grosse Sprachmodelle wie ChatGPT sind auf riesigen Textmengen trainierte KI-Systeme, die natürliche Sprache verstehen und erzeugen können – ideal für viele Verwaltungsaufgaben.',
              },
              {
                id: 'gm-q1-3',
                question: 'Welche Aussage über KI-Systeme ist korrekt?',
                options: [
                  'KI-Systeme haben Bewusstsein und eigene Absichten',
                  'KI kann keine Fehler machen',
                  'KI ist ein leistungsfähiger Mustererkenner, macht aber auch Fehler und kann Fakten erfinden',
                  'KI trifft ethische Entscheidungen zuverlässiger als Menschen',
                ],
                correct: 2,
                explanation: 'KI-Systeme sind leistungsstark, aber keine fehlerfreien Alleskönner. Das sogenannte Halluzinationsproblem – Systeme erfinden manchmal glaubwürdig klingende Falschinformationen – ist eine wichtige Einschränkung.',
              },
              {
                id: 'gm-q1-4',
                question: 'Warum ist frühes Engagement mit KI für Gemeinden empfehlenswert?',
                options: [
                  'Weil KI ab 2026 gesetzlich vorgeschrieben wird',
                  'Weil erste Erfahrungen heute einfach und günstig zu sammeln sind und Gemeinden besser positioniert',
                  'Weil KI nur während einer kurzen Zeitfenster zugänglich ist',
                  'Weil die Konkurrenz aus dem Ausland sonst Schweizer Gemeinden überholt',
                ],
                correct: 1,
                explanation: 'Wer jetzt erste Erfahrungen sammelt, baut Kompetenz auf und kann von Lerneffekten profitieren. Warten kostet später mehr – sowohl Zeit als auch Aufholaufwand.',
              },
            ],
          },
        },
        {
          id: 'gm-technologien',
          slug: 'gm-technologien',
          title: 'KI-Technologien im Überblick',
          description: 'Welche KI-Technologien es gibt, wie sie funktionieren und welche für Gemeinden besonders relevant sind.',
          videoId: '',
          content: `
<h2>Die wichtigsten KI-Technologien für Gemeinden</h2>
<p>Der Begriff «Künstliche Intelligenz» umfasst ein breites Spektrum an Technologien. Für den Gemeindekontext sind nicht alle gleich relevant. Dieser Überblick konzentriert sich auf jene Bereiche, die heute bereits praktisch einsetzbar sind und echten Nutzen bringen.</p>

<h3>Textverarbeitung und Sprachmodelle</h3>
<p>Grosse Sprachmodelle (LLMs) wie GPT-4, Claude oder Mistral können Texte verstehen, zusammenfassen, übersetzen und generieren. Für Gemeinden sind das die nützlichsten Werkzeuge: Sitzungsprotokolle zusammenfassen, Medienmitteilungen entwerfen, Antworten auf Bürgeranfragen formulieren, komplexe Dokumente verständlich aufbereiten. Diese Technologie ist heute über einfache Web-Interfaces zugänglich – keine IT-Kenntnisse erforderlich.</p>

<h3>Optische Zeichenerkennung (OCR) und Dokumenten-KI</h3>
<p>OCR-Systeme wandeln gescannte Dokumente in editierbaren Text um. Moderne KI-gestützte OCR erkennt auch handschriftliche Texte zuverlässig und extrahiert strukturierte Daten aus Formularen. Für Gemeinden, die noch viel Papier verarbeiten, ist das ein unmittelbarer Effizienzgewinn: Eingescannte Baugesuche, Anträge oder Einsprachen werden automatisch lesbar und suchbar.</p>

<h3>Sprach-KI und Transkription</h3>
<p>Spracherkennungs-KI wie OpenAIs Whisper kann gesprochene Sprache in Text umwandeln – mit hoher Genauigkeit, auch in Dialekten und Mehrsprachigkeit. Das ermöglicht automatische Protokollierung von Gemeinderatssitzungen, Transkription von Beratungsgesprächen oder barrierefreie Audio-Inhalte auf der Gemeinde-Website.</p>

<h3>Chatbots und Konversations-KI</h3>
<p>Moderne Chatbots nutzen LLMs, um natürlichsprachliche Fragen zu verstehen und präzise zu beantworten. Im Gegensatz zu älteren regelbasierten Chatbots brauchen sie keine starren Entscheidungsbäume. Sie können trainiert werden auf die spezifischen Inhalte einer Gemeinde – Reglemente, Zuständigkeiten, Öffnungszeiten – und geben dann konsistente, korrekte Antworten.</p>

<h3>Automatisierung und Workflow-KI</h3>
<p>Tools wie Make (ehemals Integromat) oder n8n verbinden verschiedene Software-Systeme und automatisieren Abläufe mithilfe von KI-Bausteinen. Ein eingehendes Formular wird automatisch gelesen, klassifiziert, weitergeleitet und bestätigt – ohne manuellen Eingriff. Diese sogenannte «Low-Code-Automatisierung» ist auch für technisch weniger versierte Gemeinden zugänglich.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'gm-q2-1',
                question: 'Wofür eignen sich grosse Sprachmodelle (LLMs) in der Gemeindeverwaltung?',
                options: [
                  'Ausschliesslich für maschinelle Übersetzungen ins Englische',
                  'Für Textgenerierung, Zusammenfassungen, Übersetzungen und Bürgerantworten',
                  'Nur für die Buchführung und Finanzverwaltung',
                  'Für die automatische Erstellung von Bauplänen',
                ],
                correct: 1,
                explanation: 'LLMs sind vielseitig einsetzbar: Protokolle zusammenfassen, Texte entwerfen, Dokumente verständlich aufbereiten. Sie sind der Kern vieler heutiger KI-Werkzeuge.',
              },
              {
                id: 'gm-q2-2',
                question: 'Was leistet moderne KI-gestützte OCR-Technologie?',
                options: [
                  'Sie druckt Dokumente automatisch in der richtigen Formatierung',
                  'Sie erkennt und extrahiert Text aus gescannten Dokumenten, auch handschriftlich',
                  'Sie übersetzt Dokumente in alle vier Landessprachen',
                  'Sie prüft Dokumente auf rechtliche Korrektheit',
                ],
                correct: 1,
                explanation: 'OCR kombiniert mit KI wandelt eingescannte oder handschriftliche Dokumente in editierbaren, suchbaren Text um – ein grosser Effizienzgewinn für papierreiche Verwaltungen.',
              },
              {
                id: 'gm-q2-3',
                question: 'Was unterscheidet moderne KI-Chatbots von älteren regelbasierten Chatbots?',
                options: [
                  'Moderne Chatbots sind teurer und brauchen mehr Wartung',
                  'Moderne Chatbots brauchen keine starren Entscheidungsbäume und verstehen natürliche Sprache',
                  'Regelbasierte Chatbots können mehr Sprachen verstehen',
                  'Moderne Chatbots funktionieren nur auf mobilen Geräten',
                ],
                correct: 1,
                explanation: 'LLM-basierte Chatbots verstehen natürliche Sprache ohne starre Menüstrukturen. Sie können auf spezifische Gemeindeninhalte trainiert werden und geben flexiblere, präzisere Antworten.',
              },
              {
                id: 'gm-q2-4',
                question: 'Was ist "Low-Code-Automatisierung" und warum ist sie für Gemeinden interessant?',
                options: [
                  'Programmierung mit wenig Code, erfordert hohe IT-Kenntnisse',
                  'Tools, die Prozesse automatisieren, ohne dass tiefes Programmierwissen nötig ist',
                  'Eine günstige Alternative zu teuren ERP-Systemen',
                  'Automatisierung, die nur auf lokalen Servern läuft',
                ],
                correct: 1,
                explanation: 'Low-Code-Tools wie Make oder n8n ermöglichen Automatisierung ohne Programmierkenntnisse. Auch kleinere Gemeinden ohne IT-Abteilung können damit Abläufe automatisieren.',
              },
            ],
          },
        },
        {
          id: 'gm-schweiz-heute',
          slug: 'gm-schweiz-heute',
          title: 'KI in Schweizer Verwaltungen heute',
          description: 'Wie weit Schweizer Gemeinden und Kantone beim KI-Einsatz sind und was andere bereits erfolgreich umsetzen.',
          videoId: '',
          content: `
<h2>KI in Schweizer Gemeinden und Kantonen – Stand 2025</h2>
<p>Die Digitalisierung der Schweizer Verwaltung hat in den letzten Jahren deutlich an Tempo gewonnen. Städte wie Zürich, Bern und Basel haben erste KI-Pilotprojekte abgeschlossen. Doch auch kleinere Gemeinden holen auf. Ein realistischer Blick auf den aktuellen Stand hilft, einzuordnen, wo man selbst steht und was möglich ist.</p>

<h3>Vorreiter: Grosse Städte</h3>
<p>Die Stadt Zürich hat KI-gestützte Transkription für Ratssitzungen eingeführt und testet Chatbots für Bürgeranfragen. Bern experimentiert mit KI-Unterstützung bei der Bearbeitung von Einsprachen. Basel-Stadt hat ein KI-Kompetenzzentrum für die Verwaltung aufgebaut. Diese Projekte zeigen: KI in der Verwaltung ist kein Hype, sondern konkrete Realität. Gleichzeitig sind diese grossen Städte nicht repräsentativ für die meisten Schweizer Gemeinden.</p>

<h3>Die Realität in mittleren und kleinen Gemeinden</h3>
<p>Die grosse Mehrheit der rund 2'100 Schweizer Gemeinden hat noch keine formelle KI-Strategie. Viele Mitarbeitende nutzen aber bereits privat oder halboffiziell Tools wie ChatGPT für Textentwürfe – ohne klare Leitlinien oder Datenschutzabklärungen. Hier liegt ein unmittelbarer Handlungsbedarf: nicht unbedingt eine komplette KI-Strategie, aber zumindest eine klare Haltung zu erlaubten Tools und Datenschutzgrenzen.</p>

<h3>Kantonale Initiativen als Unterstützung</h3>
<p>Mehrere Kantone haben Leitfäden und Rahmenwerke für den KI-Einsatz in kommunalen Verwaltungen erarbeitet. Der Kanton Zürich, Bern und Aargau bieten Gemeinden Orientierungshilfen an. Verbände wie EspaceSuisse und der Schweizerische Gemeindeverband engagieren sich für Wissenstransfer zwischen Gemeinden. Diese Ressourcen sollten genutzt werden – sie ersparen das Erfinden des Rades.</p>

<h3>Was heute schon funktioniert</h3>
<p>Folgende Anwendungen sind in Schweizer Gemeinden bereits bewährt und rechtlich einigermassen klar geregelt: KI-Assistenz bei der Texterstellung (mit manueller Überprüfung), automatische Transkription von Sitzungen, KI-Chatbots für allgemeine Informationsanfragen und OCR-gestützte Dokumentenverarbeitung. Das sind sinnvolle Einstiegspunkte für Gemeinden, die noch am Anfang stehen.
</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'gm-q3-1',
                question: 'Wie ist der KI-Stand in der Mehrheit der Schweizer Gemeinden?',
                options: [
                  'Fast alle haben eine vollständige KI-Strategie umgesetzt',
                  'Die meisten haben noch keine formelle KI-Strategie, aber Mitarbeitende nutzen Tools bereits informell',
                  'KI ist in der Schweizer Verwaltung gesetzlich verboten',
                  'Nur Gemeinden über 50\'000 Einwohner dürfen KI einsetzen',
                ],
                correct: 1,
                explanation: 'Die meisten Gemeinden haben noch keine Strategie, aber informelle Nutzung findet bereits statt. Das schafft Klärungsbedarf bezüglich Datenschutz und erlaubter Tools.',
              },
              {
                id: 'gm-q3-2',
                question: 'Welche kantonalen Ressourcen stehen Gemeinden beim KI-Einstieg zur Verfügung?',
                options: [
                  'Keine – Gemeinden sind auf sich alleine gestellt',
                  'Leitfäden, Rahmenwerke und Orientierungshilfen von Kantonen und Verbänden',
                  'Nur kostenpflichtige Beratungsangebote',
                  'Ausschliesslich internationale Normen ohne Schweizer Bezug',
                ],
                correct: 1,
                explanation: 'Kantone wie Zürich, Bern und Aargau sowie Verbände wie EspaceSuisse bieten Orientierungshilfen. Diese Ressourcen ersparen Gemeinden das Erfinden des Rades.',
              },
              {
                id: 'gm-q3-3',
                question: 'Welche KI-Anwendungen sind in Schweizer Gemeinden bereits bewährt?',
                options: [
                  'Vollautomatische Baubewilligungen ohne menschliche Kontrolle',
                  'KI-gestützte Texterstellung, Transkription, Chatbots für Infoanfragen und OCR',
                  'Autonome Drohnenüberwachung des Gemeindegebiets',
                  'KI-generierte Gemeinderatsbeschlüsse',
                ],
                correct: 1,
                explanation: 'Texterstellung mit KI-Unterstützung, Transkription, einfache Chatbots und OCR sind praxisbewährt und rechtlich einigermaassen klar – gute Einstiegspunkte für Gemeinden.',
              },
              {
                id: 'gm-q3-4',
                question: 'Was ist der unmittelbarste Handlungsbedarf für Gemeinden ohne KI-Strategie?',
                options: [
                  'Sofortige Einstellung aller KI-Nutzung bis zur vollständigen Regulierung',
                  'Eine klare Haltung zu erlaubten Tools und Datenschutzgrenzen für Mitarbeitende',
                  'Aufbau eines eigenen KI-Kompetenzzentrums',
                  'Abwarten, bis der Bund eine nationale Lösung bereitstellt',
                ],
                correct: 1,
                explanation: 'Bevor eine vollständige Strategie steht, braucht es klare Leitlinien: welche Tools dürfen wie genutzt werden, und was ist datenschutzrechtlich zulässig.',
              },
            ],
          },
        },
        {
          id: 'gm-potenziale',
          slug: 'gm-potenziale',
          title: 'Potenziale und Grenzen',
          description: 'Ein realistisches Bild: Wo KI Gemeinden wirklich hilft – und wo klare Grenzen gelten.',
          videoId: '',
          content: `
<h2>Potenziale und Grenzen – ein nüchterner Blick</h2>
<p>KI-Technologien bieten echte Chancen für Gemeinden. Aber nur wer die Grenzen kennt, setzt sie richtig ein. Weder blinder Enthusiasmus noch pauschale Ablehnung helfen weiter. Dieser Abschnitt gibt eine ehrliche Einschätzung – auf der Basis von Praxiserfahrungen in Schweizer Verwaltungen.</p>

<h3>Die grössten Potenziale für Gemeinden</h3>
<p>KI entlastet am stärksten dort, wo Aufgaben strukturiert, repetitiv und zeitintensiv sind:</p>
<ul>
  <li><strong>Zeitersparnis bei Texterstellung:</strong> Protokollentwürfe, Medienmitteilungen, Berichtsentwürfe – was früher Stunden dauerte, geht heute in Minuten.</li>
  <li><strong>24/7-Verfügbarkeit:</strong> Chatbots beantworten Bürgeranfragen auch ausserhalb der Öffnungszeiten.</li>
  <li><strong>Konsistenz:</strong> Standardisierte Aufgaben werden gleichbleibend korrekt erledigt.</li>
  <li><strong>Sprachliche Qualität:</strong> KI unterstützt bei mehrsprachigen Texten und verbessert Formulierungen.</li>
  <li><strong>Dokumentenerschliessung:</strong> Auch alte, eingescannte Archive werden durchsuchbar.</li>
</ul>

<h3>Die wichtigsten Grenzen</h3>
<p>Für Gemeinden sind drei Grenzen besonders relevant:</p>
<ul>
  <li><strong>Keine rechtliche Verbindlichkeit:</strong> KI-generierte Texte sind Entwürfe. Verfügungen, Bescheide und rechtliche Beurteilungen müssen immer von einem Menschen verantwortet werden.</li>
  <li><strong>Halluzinationsrisiko:</strong> KI erfindet manchmal sachlich falsche, aber überzeugend klingende Informationen. Jede Aussage, die in einem offiziellen Dokument landet, muss geprüft werden.</li>
  <li><strong>Datenschutz:</strong> Personenbezogene Daten dürfen nicht unkontrolliert in externe KI-Systeme eingegeben werden. Das nDSG und kantonales Recht gelten uneingeschränkt.</li>
</ul>

<h3>Was das für den Alltag bedeutet</h3>
<p>Die goldene Regel lautet: <strong>KI-Output ist immer ein Entwurf, nicht ein Endprodukt.</strong> Ein Mitarbeitender, der KI nutzt, bleibt für das Ergebnis verantwortlich. Das ist keine Einschränkung, sondern der einzig vernünftige Umgang mit einem mächtigen Werkzeug, das Fehler machen kann. Mit dieser Haltung lässt sich KI sehr produktiv einsetzen – rechtssicher und im Vertrauen der Bevölkerung.</p>

<h3>Wo KI nichts zu suchen hat</h3>
<p>Es gibt Bereiche, in denen KI keinen sinnvollen Platz hat: Entscheide mit erheblichem Ermessensspielraum und Grundrechtsrelevanz, persönliche Beratung in schwierigen Lebenslagen, politische Abwägungen im Gemeinderat. Hier geht es um menschliche Urteilskraft, Empathie und demokratische Legitimität – Qualitäten, die KI nicht ersetzen kann und nicht soll.</p>
          `,
          order: 4,
          quiz: {
            questions: [
              {
                id: 'gm-q4-1',
                question: 'In welchen Aufgabentypen entfaltet KI das grösste Potenzial?',
                options: [
                  'Bei komplexen politischen Entscheidungsprozessen',
                  'Bei strukturierten, repetitiven und zeitintensiven Aufgaben',
                  'Bei der persönlichen Beratung von Bürgerinnen und Bürgern in schwierigen Situationen',
                  'Bei der Durchführung von Gemeindeversammlungen',
                ],
                correct: 1,
                explanation: 'KI glänzt bei repetitiven, strukturierten Aufgaben: Textentwürfe, Dokumentenverarbeitung, Standardanfragen. Hier ist die Zeitersparnis am grössten.',
              },
              {
                id: 'gm-q4-2',
                question: 'Was bedeutet die goldene Regel im Umgang mit KI in der Verwaltung?',
                options: [
                  'KI-Output darf niemals verwendet werden',
                  'KI-Output ist immer ein Entwurf – die Verantwortung bleibt beim Menschen',
                  'KI-Output ersetzt die menschliche Kontrolle, wenn die KI gut trainiert ist',
                  'Goldene Regel bedeutet: nur teure KI-Systeme einsetzen',
                ],
                correct: 1,
                explanation: 'KI-Output ist immer ein Entwurf. Die menschliche Verantwortung für Richtigkeit, Rechtmässigkeit und Qualität ist nicht delegierbar – das gilt in der Verwaltung besonders.',
              },
              {
                id: 'gm-q4-3',
                question: 'Was ist das Halluzinationsproblem bei KI-Systemen?',
                options: [
                  'KI zeigt visuelle Artefakte in Bildausgaben',
                  'KI produziert manchmal sachlich falsche, aber überzeugend klingende Informationen',
                  'KI verweigert Antworten auf bestimmte Fragen',
                  'KI rechnet bei mathematischen Aufgaben mit Phantomzahlen',
                ],
                correct: 1,
                explanation: 'Halluzinationen sind ein grundlegendes Risiko: KI erfindet Fakten, Quellen oder Details, die nicht existieren, aber plausibel klingen. In der Verwaltung ist Faktenkontrolle daher Pflicht.',
              },
              {
                id: 'gm-q4-4',
                question: 'In welchem Bereich hat KI in der Gemeindeverwaltung nichts zu suchen?',
                options: [
                  'Bei der Erstellung von Protokollentwürfen',
                  'Bei der Beantwortung von Standardfragen auf der Website',
                  'Bei Entscheiden mit erheblichem Ermessensspielraum und Grundrechtsrelevanz',
                  'Bei der Übersetzung von Formularen in andere Sprachen',
                ],
                correct: 2,
                explanation: 'Entscheide mit Ermessensspielraum und Grundrechtsrelevanz erfordern menschliches Urteilsvermögen, Empathie und demokratische Legitimität. KI kann hier nicht und soll nicht eingesetzt werden.',
              },
            ],
          },
        },
      ],
    },

    // ─────────────────────────────────────────
    // MODUL 2 – KI-Tools für Gemeinden
    // ─────────────────────────────────────────
    {
      id: 'gm-modul-2',
      slug: 'gm-tools',
      title: 'KI-Tools für Gemeinden',
      description: 'Konkrete Tools für Textgenerierung, Bürgerkommunikation, Chatbots und Praxisbeispiele aus Schweizer Gemeinden.',
      icon: '🛠️',
      order: 2,
      lessons: [
        {
          id: 'gm-texttools',
          slug: 'gm-texttools',
          title: 'Textgenerierung und Dokumentenverarbeitung',
          description: 'KI-Tools für Textentwürfe, Zusammenfassungen, Übersetzungen und die automatische Verarbeitung von Dokumenten.',
          videoId: '',
          content: `
<h2>Textgenerierung und Dokumentenverarbeitung mit KI</h2>
<p>Textarbeit macht einen grossen Teil des Verwaltungsalltags aus: Medienmitteilungen, Berichte, Briefe, Protokolle, interne Notizen. KI kann bei all diesen Aufgaben unterstützen – und die Zeitersparnis ist erheblich. Wer heute noch stundenlang auf eine leere Seite starrt, bevor der erste Satz steht, kann das ändern.</p>

<h3>Welche Tools eignen sich?</h3>
<p>Für die meisten Textaufgaben in der Gemeinde reichen drei Kategorien:</p>
<ul>
  <li><strong>ChatGPT (OpenAI):</strong> Breiter Einsatz, sehr gute Sprachqualität auf Deutsch. Datenschutzhinweis: Keine personenbezogenen Daten eingeben; Business-Version mit Datenschutzgarantien nutzen.</li>
  <li><strong>Claude (Anthropic):</strong> Besonders stark bei langen Dokumenten und strukturierten Texten. Sehr gute Qualität auf Deutsch.</li>
  <li><strong>Microsoft Copilot (in M365):</strong> Direkt integriert in Word, Outlook, Teams. Für Gemeinden, die bereits Microsoft 365 nutzen, oft der einfachste Einstieg, da Datenschutz im bestehenden M365-Vertrag geregelt ist.</li>
</ul>

<h3>Typische Anwendungen in der Gemeinde</h3>
<ul>
  <li><strong>Protokollentwürfe:</strong> Kurz-Notizen aus einer Sitzung in ein strukturiertes Protokoll umwandeln lassen</li>
  <li><strong>Medienmitteilungen:</strong> Aus einem kurzen Briefing einen publizierbaren Entwurf erstellen</li>
  <li><strong>Übersetzen:</strong> Texte in alle vier Landessprachen übersetzen (Qualität prüfen!)</li>
  <li><strong>Zusammenfassungen:</strong> Lange Berichte oder Gesetze auf die wesentlichen Punkte kürzen</li>
  <li><strong>Briefe und Bescheide:</strong> Standardschreiben auf Basis von Vorlagen oder Stichpunkten erstellen</li>
</ul>

<h3>Dokumentenverarbeitung: OCR und mehr</h3>
<p>Für die Verarbeitung eingescannter Dokumente bieten sich spezialisierte Lösungen an: <strong>Adobe Acrobat Pro</strong> mit KI-gestützter OCR, <strong>ABBYY FineReader</strong> für anspruchsvolle Dokumentenverarbeitung oder cloudbasierte Document-AI-Dienste von Google oder Microsoft. Diese Systeme extrahieren Text, erkennen Strukturen (Tabellen, Felder) und können mit anderen Systemen integriert werden.</p>

<h3>Praktische Regel: Das Vier-Augen-Prinzip</h3>
<p>Jeder KI-generierte Text, der in einem offiziellen Dokument landet, muss von einer Person gelesen, geprüft und freigegeben werden. Das ist nicht nur rechtlich geboten, sondern auch qualitätssichernd: KI macht Fehler, übersieht Kontext und kennt die lokale Situation nicht. Die menschliche Überprüfung bleibt unverzichtbar.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'gm-q5-1',
                question: 'Welches Tool ist für Gemeinden, die bereits Microsoft 365 nutzen, oft der einfachste KI-Einstieg?',
                options: [
                  'ChatGPT, weil es am bekanntesten ist',
                  'Microsoft Copilot, da er direkt in M365 integriert ist und Datenschutz im bestehenden Vertrag geregelt',
                  'Spezialisierte Open-Source-KI auf eigenem Server',
                  'Google Gemini, weil er kostenlos ist',
                ],
                correct: 1,
                explanation: 'Microsoft Copilot ist direkt in Word, Outlook und Teams integriert. Für M365-Nutzer ist der Datenschutz bereits im Vertrag geregelt – das erleichtert den Einstieg erheblich.',
              },
              {
                id: 'gm-q5-2',
                question: 'Was muss bei der Nutzung von ChatGPT (kostenlose Version) in der Verwaltung beachtet werden?',
                options: [
                  'ChatGPT darf nur auf Windows-Computern verwendet werden',
                  'Keine personenbezogenen Daten eingeben; für dienstliche Nutzung die Business-Version mit Datenschutzgarantien verwenden',
                  'ChatGPT muss zuerst auf dem lokalen Server installiert werden',
                  'Die Nutzung ist nur für IT-Mitarbeitende gestattet',
                ],
                correct: 1,
                explanation: 'In der kostenlosen Version werden Eingaben potenziell für das Training genutzt. Personenbezogene Daten dürfen nie eingegeben werden. Die Business-Version bietet bessere Datenschutzgarantien.',
              },
              {
                id: 'gm-q5-3',
                question: 'Welche Aufgabe eignet sich besonders gut für KI-Textunterstützung?',
                options: [
                  'Das Erstellen einer rechtsgültigen Baubewilligung',
                  'Das Verfassen eines Protokollentwurfs auf Basis von Sitzungsnotizen',
                  'Die politische Beschlussfassung im Gemeinderat',
                  'Die Budgetverabschiedung an der Gemeindeversammlung',
                ],
                correct: 1,
                explanation: 'Protokollentwürfe aus Stichpunkten zu erstellen ist eine ideale KI-Aufgabe: strukturiert, zeitintensiv und mit klarem Input. Das fertige Protokoll wird dann von Mensch geprüft und freigegeben.',
              },
              {
                id: 'gm-q5-4',
                question: 'Was bedeutet das Vier-Augen-Prinzip bei KI-generierten Texten?',
                options: [
                  'Zwei KI-Systeme müssen den Text unabhängig prüfen',
                  'Jeder KI-generierte Text muss von einer Person gelesen, geprüft und freigegeben werden',
                  'Texte müssen von vier verschiedenen Mitarbeitenden kontrolliert werden',
                  'KI-Texte müssen dem Gemeinderat vorgelegt werden',
                ],
                correct: 1,
                explanation: 'Das Vier-Augen-Prinzip stellt sicher, dass kein KI-Output ungeprüft in offizielle Dokumente fliesst. Eine menschliche Überprüfung ist rechtlich geboten und qualitätssichernd.',
              },
            ],
          },
        },
        {
          id: 'gm-buerger-tools',
          slug: 'gm-buerger-tools',
          title: 'KI für Bürgerkommunikation',
          description: 'Wie KI die Kommunikation zwischen Gemeinde und Bevölkerung effizienter, zugänglicher und bürgerfreundlicher macht.',
          videoId: '',
          content: `
<h2>Bürgerkommunikation neu gedacht mit KI</h2>
<p>Die Kommunikation zwischen Gemeinde und Bevölkerung ist eine Kernaufgabe der öffentlichen Verwaltung. Gleichzeitig ist sie ressourcenintensiv: Anfragen bearbeiten, Informationen aufbereiten, Texte übersetzen, Mitteilungen publizieren. KI kann an vielen dieser Stellen unterstützen – ohne dabei die menschliche Nähe zu ersetzen.</p>

<h3>Mehrsprachige Kommunikation</h3>
<p>Schweizer Gemeinden mit internationalem Bevölkerungsanteil stehen vor der Herausforderung, Informationen in mehreren Sprachen bereitzustellen. KI-gestützte Übersetzung (DeepL, Google Translate, oder direkt über LLMs) macht das heute erschwinglich: Wichtige Gemeindemitteilungen lassen sich schnell in Deutsch, Französisch, Italienisch und weitere Sprachen übersetzen. Die Qualität ist bei allgemeinen Texten ausreichend gut – fachliche oder rechtliche Texte müssen aber immer von muttersprachlichen Fachleuten gegengelesen werden.</p>

<h3>Barrierefreie Kommunikation</h3>
<p>KI kann helfen, komplexe Verwaltungstexte in einfache Sprache umzuwandeln. Das kommt nicht nur Menschen mit eingeschränkter Lesekompetenz zugute, sondern verbessert die Verständlichkeit für alle. Ein «Erkläre das einem 12-Jährigen»-Prompt für einen komplizierten Reglementstext liefert oft überraschend nützliche Vereinfachungen.</p>

<h3>Social Media und Online-Kommunikation</h3>
<p>Gemeinden, die auf Social Media präsent sind, wissen: Regelmässige, ansprechende Beiträge zu produzieren kostet Zeit. KI kann auf Basis eines kurzen Briefings Beitragsentwürfe für Facebook, Instagram oder LinkedIn erstellen – in verschiedenen Tonalitäten und Längen. Das beschleunigt den Redaktionsprozess erheblich, ohne die Authentizität der Gemeindekommuinkation zu gefährden, solange Mitarbeitende die Entwürfe persönlich gestalten und freigeben.</p>

<h3>Automatisierte Newsletter und Informationsschreiben</h3>
<p>KI-gestützte Tools wie Brevo oder Mailchimp bieten inzwischen integrierte Texthilfe: Newsletter-Entwürfe entstehen auf Basis von Stichpunkten. Für Gemeinden mit einem regelmässigen Informationsschreiben an die Bevölkerung kann das die Produktionszeit deutlich reduzieren. Wichtig: Inhaltliche Kontrolle und persönliche Handschrift bleiben beim Gemeindepersonal.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'gm-q6-1',
                question: 'Für welche Art von Texten ist KI-gestützte Übersetzung ausreichend gut?',
                options: [
                  'Für alle Texte ohne Einschränkungen',
                  'Für allgemeine Informationstexte; rechtliche oder fachliche Texte brauchen muttersprachliche Fachleute',
                  'Nur für Englischübersetzungen',
                  'Nur für interne Dokumente, nie für Bürgerkommunikation',
                ],
                correct: 1,
                explanation: 'KI-Übersetzung ist für allgemeine Informationstexte meist ausreichend. Bei rechtlichen oder fachlichen Inhalten ist eine menschliche Gegenkontrolle durch Fachleute unerlässlich.',
              },
              {
                id: 'gm-q6-2',
                question: 'Wie hilft KI bei barrierefreier Kommunikation?',
                options: [
                  'KI generiert automatisch Audiodateien für Sehbehinderte',
                  'KI kann komplexe Verwaltungstexte in einfache, verständliche Sprache umwandeln',
                  'KI übersetzt Texte in Gebärdensprache',
                  'KI vergrössert automatisch Schriftgrössen auf Websites',
                ],
                correct: 1,
                explanation: 'Einfache Sprache durch KI macht Verwaltungstexte zugänglicher – für Menschen mit eingeschränkter Lesekompetenz, aber auch für alle anderen. Ein nützlicher Prompt: «Erkläre das einem 12-Jährigen».',
              },
              {
                id: 'gm-q6-3',
                question: 'Wie kann KI bei Social-Media-Kommunikation von Gemeinden helfen?',
                options: [
                  'KI verwaltet Social-Media-Konten vollständig autonom',
                  'KI erstellt Beitragsentwürfe auf Basis von Briefings, die Mitarbeitende dann prüfen und freigeben',
                  'KI analysiert, welche Beiträge am meisten Likes erzielen',
                  'KI löscht negative Kommentare automatisch',
                ],
                correct: 1,
                explanation: 'KI beschleunigt die Texterstellung für Social-Media-Beiträge erheblich. Die inhaltliche Kontrolle und die persönliche Handschrift der Gemeinde bleiben beim Personal.',
              },
              {
                id: 'gm-q6-4',
                question: 'Was ist beim Einsatz von KI für Gemeinde-Newsletter besonders wichtig?',
                options: [
                  'Newsletter dürfen nur mit speziell zertifizierten KI-Tools erstellt werden',
                  'Inhaltliche Kontrolle und persönliche Handschrift bleiben beim Gemeindepersonal',
                  'KI-generierte Newsletter brauchen keine Überprüfung, wenn das Tool bekannt ist',
                  'Newsletter müssen dem kantonalen Datenschutzbeauftragten vorgelegt werden',
                ],
                correct: 1,
                explanation: 'KI liefert Entwürfe, aber die inhaltliche Hoheit und Verantwortung bleibt immer beim Gemeindepersonal. Authentizität und Korrektheit sichern das Vertrauen der Bevölkerung.',
              },
            ],
          },
        },
        {
          id: 'gm-chatbots',
          slug: 'gm-chatbots',
          title: 'Chatbots im Gemeindekontext',
          description: 'Wie Chatbots auf Gemeinde-Websites eingerichtet werden, was sie leisten können und wo die Grenzen liegen.',
          videoId: '',
          content: `
<h2>Chatbots für Gemeinden – praktisch einrichten und klug begrenzen</h2>
<p>Ein gut konfigurierter Chatbot auf der Gemeinde-Website beantwortet Standardfragen rund um die Uhr, entlastet den Schalter und das Telefon – und hinterlässt bei Bürgerinnen und Bürgern den Eindruck einer modernen, zugänglichen Verwaltung. Der Aufwand für die Einrichtung ist heute deutlich geringer als noch vor wenigen Jahren.</p>

<h3>Zwei Arten von Chatbots</h3>
<p>Es gibt grundsätzlich zwei Ansätze:</p>
<ul>
  <li><strong>Regelbasierte Chatbots:</strong> Folgen einem vordefinierten Entscheidungsbaum. Vorteil: sehr kontrolliert, keine unerwarteten Antworten. Nachteil: starr, keine natürliche Sprache, aufwendig zu warten.</li>
  <li><strong>KI-gestützte Chatbots:</strong> Nutzen LLMs und verstehen natürliche Sprache. Vorteil: flexibel, natürlich, lernfähig. Nachteil: können unerwartete Antworten geben, brauchen sorgfältige Konfiguration und Datenschutzabklärung.</li>
</ul>
<p>Für die meisten Gemeinden empfiehlt sich heute ein KI-gestützter Chatbot, der auf die eigenen Inhalte beschränkt ist – sogenanntes «Retrieval Augmented Generation» (RAG): Der Chatbot beantwortet nur Fragen auf Basis von Dokumenten, die die Gemeinde bereitgestellt hat.</p>

<h3>Was ein Gemeinde-Chatbot beantworten sollte</h3>
<ul>
  <li>Öffnungszeiten, Kontaktdaten, Zuständigkeiten</li>
  <li>Antragsverfahren und benötigte Unterlagen</li>
  <li>Informationen zu Reglements- und Gesetzestexten der Gemeinde</li>
  <li>Veranstaltungshinweise und aktuelle Mitteilungen</li>
  <li>Wegweiser zu Online-Formularen und E-Government-Diensten</li>
</ul>

<h3>Was ein Gemeinde-Chatbot nicht tun sollte</h3>
<p>Der Chatbot sollte nie versuchen, rechtliche Beurteilungen abzugeben, persönliche Daten zu verarbeiten oder Entscheide zu fällen. Er muss klar als KI erkennbar sein und immer einen einfachen Weg zu einem menschlichen Ansprechpartner anbieten. In vielen Kantonen ist dies datenschutzrechtlich und sogar gesetzlich vorgeschrieben.</p>

<h3>Tools und Kosten</h3>
<p>Für kleinere Gemeinden sind einsteigerfreundliche Lösungen wie <strong>Tidio</strong>, <strong>Botpress</strong> oder spezialisierte Schweizer Anbieter empfehlenswert. Monatliche Kosten beginnen bei ca. CHF 50–200 für einfache Systeme. Wichtig: Die Datenspeicherung sollte in der Schweiz oder der EU erfolgen.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'gm-q7-1',
                question: 'Was ist der Hauptunterschied zwischen regelbasierten und KI-gestützten Chatbots?',
                options: [
                  'Regelbasierte Chatbots sind teurer',
                  'Regelbasierte folgen einem Entscheidungsbaum; KI-Chatbots verstehen natürliche Sprache flexibel',
                  'KI-Chatbots können nur Englisch',
                  'Regelbasierte Chatbots lernen selbständig dazu',
                ],
                correct: 1,
                explanation: 'Regelbasierte Chatbots sind kontrollierter aber starr. KI-Chatbots verstehen natürliche Sprache und sind flexibler, brauchen aber sorgfältigere Konfiguration.',
              },
              {
                id: 'gm-q7-2',
                question: 'Was bedeutet RAG (Retrieval Augmented Generation) bei Chatbots?',
                options: [
                  'Der Chatbot lädt automatisch neue Informationen aus dem Internet',
                  'Der Chatbot beantwortet nur Fragen auf Basis von Dokumenten, die die Gemeinde bereitgestellt hat',
                  'RAG ist ein Datenschutz-Zertifikat für Chatbots',
                  'Der Chatbot wird von einem externen Dienstleister betrieben',
                ],
                correct: 1,
                explanation: 'RAG beschränkt den Chatbot auf vorgegebene Inhalte. Das verhindert, dass er halluziniert oder Informationen ausserhalb des Gemeindebereichs liefert – ideal für kontrollierte Verwaltungsanwendungen.',
              },
              {
                id: 'gm-q7-3',
                question: 'Was muss ein Gemeinde-Chatbot immer bieten?',
                options: [
                  'Einen direkten Zugang zu allen Gemeinderatsentscheiden',
                  'Einen einfachen Weg zu einem menschlichen Ansprechpartner und klare Kennzeichnung als KI',
                  'Die Möglichkeit, Formulare direkt auszufüllen',
                  'Einen 24/7-Telefonservice',
                ],
                correct: 1,
                explanation: 'Transparenz (KI-Kennzeichnung) und der Weg zum Menschen sind in vielen Kantonen rechtlich vorgeschrieben und ethisch geboten. Bürger sollen nie unbemerkt nur mit KI interagieren.',
              },
              {
                id: 'gm-q7-4',
                question: 'Was sollte beim Datenschutz bei Chatbots für Gemeinden beachtet werden?',
                options: [
                  'Datenspeicherort ist irrelevant, da Chatbots keine persönlichen Daten verarbeiten',
                  'Datenspeicherung sollte in der Schweiz oder der EU erfolgen; personenbezogene Daten dürfen nicht verarbeitet werden',
                  'Der Chatbot muss täglich manuell gesichert werden',
                  'Nur zertifizierte Chatbots dürfen personenbezogene Daten speichern',
                ],
                correct: 1,
                explanation: 'Der Datenspeicherort ist ein zentrales Kriterium. Gemeinden sind an nDSG und kantonales Datenschutzrecht gebunden. Chatbots sollten so konfiguriert sein, dass keine personenbezogenen Daten verarbeitet werden.',
              },
            ],
          },
        },
        {
          id: 'gm-praxis',
          slug: 'gm-praxis',
          title: 'Praxisbeispiele aus Schweizer Gemeinden',
          description: 'Konkrete Beispiele, wie Schweizer Gemeinden KI bereits erfolgreich und praxisnah einsetzen.',
          videoId: '',
          content: `
<h2>Was Schweizer Gemeinden heute bereits umsetzen</h2>
<p>Theorie ist gut – Praxisbeispiele sind besser. Dieser Abschnitt zeigt anhand konkreter Beispiele, wie Schweizer Gemeinden KI heute einsetzen, was funktioniert hat und welche Learnings sich daraus ableiten lassen.</p>

<h3>Beispiel 1: Chatbot für Informationsanfragen (Gemeinde ~8'000 Einwohner)</h3>
<p>Eine Gemeinde im Kanton Aargau hat einen KI-Chatbot eingeführt, der auf Basis der Gemeindewebsite und des Reglements-PDF trainiert wurde. In den ersten drei Monaten wurden über 600 Anfragen bearbeitet – etwa 70% konnten vollständig automatisch beantwortet werden. Die restlichen 30% wurden an den Schalter weitergeleitet. Ergebnis: Der Telefoneingang sank messbar, besonders ausserhalb der Öffnungszeiten. Kosten: ca. CHF 150 pro Monat für das Chatbot-Tool.</p>

<h3>Beispiel 2: KI-gestützte Protokollierung (Stadtgemeinde ~25'000 Einwohner)</h3>
<p>Eine mittelgrosse Stadt setzt seit einem Jahr automatische Transkription für Gemeinderatssitzungen ein. Ein Mitarbeitender überarbeitet das KI-Transkript innerhalb von 30 Minuten zum Protokoll – früher dauerte die Protokollerstellung 3–4 Stunden. Das Tool kostet CHF 20 pro Sitzung. Vorteil: Protokolle sind schneller publiziert, Mitarbeitende können sich auf Inhalte konzentrieren statt auf Mitschreiben.</p>

<h3>Beispiel 3: Mehrsprachige Informationsblätter (Gemeinde mit hohem Ausländeranteil)</h3>
<p>Eine Gemeinde im Kanton Zürich nutzt DeepL Pro für die Übersetzung von Informationsblättern in sechs Sprachen (DE, FR, IT, EN, TR, AR). Die Übersetzungen werden von zweisprachigen Mitarbeitenden gegengelesen. Der Aufwand für mehrsprachige Kommunikation sank um rund 60%. Resultat: Bessere Erreichbarkeit der Bevölkerung mit Migrationshintergrund, weniger Anfragen wegen Unklarheiten.</p>

<h3>Beispiel 4: KI-Assistenz bei Baugesuchskorrespondenz</h3>
<p>Ein Planungsamt nutzt ein LLM (Claude, Business-Version), um Standardschreiben bei Baugesuchen schneller zu erstellen: Eingangsbestätigungen, Nachforderungsschreiben, Zwischenbescheide. Die Mitarbeiterin gibt Stichpunkte ein, bekommt einen Entwurf, passt ihn an und versendet ihn. Zeitersparnis: ca. 30 Minuten pro Tag. Das klingt wenig – über ein Jahr summiert sich das auf fast 130 Stunden.</p>

<h3>Learnings aus diesen Beispielen</h3>
<ul>
  <li>Klein anfangen, konkrete Anwendung wählen, Wirkung messen</li>
  <li>Mitarbeitende einbeziehen – die Akzeptanz entscheidet über den Erfolg</li>
  <li>Datenschutzfragen klären, bevor das Tool produktiv geht</li>
  <li>Keinen Perfektionismus: 80% Automatisierung mit menschlicher Kontrolle reichen für den Start</li>
</ul>
          `,
          order: 4,
          quiz: {
            questions: [
              {
                id: 'gm-q8-1',
                question: 'Welchen Anteil der Chatbot-Anfragen konnte die Aargauer Gemeinde vollständig automatisch beantworten?',
                options: [
                  '100% – der Chatbot ersetzte den Schalter vollständig',
                  'Etwa 70% – die restlichen 30% wurden an den Schalter weitergeleitet',
                  'Nur 10% – der Rest brauchte menschliche Bearbeitung',
                  '50% – Chatbots können nie mehr als die Hälfte abdecken',
                ],
                correct: 1,
                explanation: 'Etwa 70% der Anfragen konnten vollständig automatisch beantwortet werden. Die restlichen 30% wurden korrekt an den Schalter weitergeleitet. Das zeigt: KI ergänzt, ersetzt aber nicht vollständig.',
              },
              {
                id: 'gm-q8-2',
                question: 'Wie viel Zeit sparte die automatische Transkription bei der Protokollerstellung?',
                options: [
                  'Keine – Transkription und Protokollerstellung dauern gleich lang',
                  'Statt 3–4 Stunden nur noch 30 Minuten Nachbearbeitung',
                  'Die Protokollerstellung entfiel vollständig',
                  'Eine Stunde weniger pro Protokoll',
                ],
                correct: 1,
                explanation: 'Die automatische Transkription reduzierte die Protokollerstellung von 3–4 Stunden auf 30 Minuten Nachbearbeitung – eine massive Zeitersparnis für ein professionelles Ergebnis.',
              },
              {
                id: 'gm-q8-3',
                question: 'Was ist das wichtigste Learning aus den Praxisbeispielen?',
                options: [
                  'KI funktioniert nur in Gemeinden über 10\'000 Einwohner',
                  'Klein anfangen, konkrete Anwendung wählen, Wirkung messen und Mitarbeitende einbeziehen',
                  'Erst eine vollständige KI-Strategie entwickeln, dann umsetzen',
                  'KI-Projekte erfordern immer externe Berater',
                ],
                correct: 1,
                explanation: 'Der pragmatische Ansatz – konkrete Anwendung, kleine Schritte, messbare Wirkung, Einbezug der Mitarbeitenden – ist der Schlüssel zu erfolgreichen KI-Projekten in Gemeinden.',
              },
              {
                id: 'gm-q8-4',
                question: 'Welche Strategie wird bei der Baugesuchskorrespondenz empfohlen?',
                options: [
                  'KI schreibt und versendet Schreiben vollständig automatisch',
                  'Mitarbeitende geben Stichpunkte ein, KI erstellt Entwurf, Mensch passt an und versendet',
                  'KI ersetzt die Planungsabteilung vollständig',
                  'Schreiben werden zuerst von KI auf Rechtmässigkeit geprüft, dann verschickt',
                ],
                correct: 1,
                explanation: 'Der hybride Ansatz – KI liefert Entwurf, Mensch überprüft und finalisiert – ist die richtige Balance: Effizienzgewinn ohne Qualitäts- und Rechtssicherheitsverlust.',
              },
            ],
          },
        },
      ],
    },

    // ─────────────────────────────────────────
    // MODUL 3 – Datenschutz & Datensicherheit
    // ─────────────────────────────────────────
    {
      id: 'gm-modul-3',
      slug: 'gm-datenschutz',
      title: 'Datenschutz & Datensicherheit',
      description: 'Rechtliche Grundlagen, nDSG, kantonales Datenschutzrecht, Sicherheitsrisiken und Compliance für den KI-Einsatz in Gemeinden.',
      icon: '🔒',
      order: 3,
      lessons: [
        {
          id: 'gm-ds-grundlagen',
          slug: 'gm-ds-grundlagen',
          title: 'Datenschutz in der KI-Ära',
          description: 'Grundprinzipien des Datenschutzes und warum sie im KI-Zeitalter besonders wichtig sind.',
          videoId: '',
          content: `
<h2>Datenschutz im KI-Zeitalter – was sich ändert und was bleibt</h2>
<p>Datenschutz war schon vor KI wichtig. Mit KI-Systemen gewinnt er aber eine neue Dimension: Daten werden in grösserem Umfang verarbeitet, oft durch externe Dienste, und die Verarbeitungswege sind weniger transparent als bei klassischer Software. Für Gemeinden als öffentliche Behörden gelten dabei besonders strenge Anforderungen.</p>

<h3>Die fünf Grundprinzipien des Datenschutzes</h3>
<p>Diese Grundsätze gelten unabhängig davon, ob KI im Spiel ist oder nicht – sie gewinnen aber durch KI neue Relevanz:</p>
<ol>
  <li><strong>Rechtmässigkeit:</strong> Es braucht eine Rechtsgrundlage für jede Datenverarbeitung (Gesetz, Einwilligung oder überwiegendes Interesse).</li>
  <li><strong>Zweckbindung:</strong> Daten dürfen nur für den Zweck verwendet werden, für den sie erhoben wurden.</li>
  <li><strong>Verhältnismässigkeit:</strong> Nur die wirklich notwendigen Daten dürfen erhoben und verarbeitet werden.</li>
  <li><strong>Richtigkeit:</strong> Daten müssen korrekt und aktuell sein.</li>
  <li><strong>Datensicherheit:</strong> Technische und organisatorische Massnahmen zum Schutz vor unbefugtem Zugriff sind Pflicht.</li>
</ol>

<h3>Was KI am Datenschutz verändert</h3>
<p>KI-Systeme konsumieren Daten in grossem Massstab. Wenn eine Mitarbeitende Personendaten in ein externes KI-Tool wie ChatGPT eingibt, verlässt diese Information die Kontrolle der Gemeinde. Das kann gegen Zweckbindung und Datensicherheit verstossen – je nach Tool und Konfiguration. Die entscheidende Frage ist immer: Wer verarbeitet welche Daten, wo, und zu welchem Zweck?</p>

<h3>Anonymisierung als Schlüsselstrategie</h3>
<p>Die einfachste Schutzstrategie ist Anonymisierung: Bevor Daten in ein KI-Tool eingegeben werden, werden alle personenbezogenen Informationen entfernt oder durch Platzhalter ersetzt. «Herr Müller, Einsprache Baugesuch 2025/123» wird zu «Person X, Einsprache Y». Damit bleibt der Nutzen der KI-Unterstützung vollständig erhalten, ohne personenbezogene Daten zu exponieren.</p>

<h3>Besondere Kategorien von Personendaten</h3>
<p>Das nDSG kennt besonders schützenswerte Daten: Gesundheitsdaten, politische Ansichten, religiöse Überzeugungen, biometrische Daten, Daten über Strafverfolgung. Diese Kategorien dürfen unter noch strengeren Bedingungen verarbeitet werden. In der Gemeindeverwaltung begegnen uns solche Daten regelmässig – etwa bei Sozialdiensten, Einbürgerungen oder Bauprojekten mit Personendaten.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'gm-q9-1',
                question: 'Was bedeutet der Grundsatz der Zweckbindung?',
                options: [
                  'Daten dürfen unbegrenzt lange gespeichert werden, solange sie einem Zweck dienen',
                  'Daten dürfen nur für den Zweck verwendet werden, für den sie ursprünglich erhoben wurden',
                  'Jede Datenverarbeitung braucht eine schriftliche Genehmigung',
                  'Zweckbindung gilt nur für digitale Daten, nicht für Papierdokumente',
                ],
                correct: 1,
                explanation: 'Zweckbindung ist ein Kernprinzip: Personendaten, die z.B. für eine Baubewilligung erhoben wurden, dürfen nicht für andere Zwecke – etwa ein KI-Training – verwendet werden.',
              },
              {
                id: 'gm-q9-2',
                question: 'Was ist das Risiko, wenn Personendaten in ein externes KI-Tool wie ChatGPT eingegeben werden?',
                options: [
                  'Es gibt kein Risiko, da KI-Tools Daten automatisch löschen',
                  'Personendaten verlassen die Kontrolle der Gemeinde und können gegen Zweckbindung und Datensicherheit verstossen',
                  'Das Risiko besteht nur bei der Eingabe von Finanzdaten',
                  'Das Risiko ist minimal, da KI-Anbieter alle Daten verschlüsseln',
                ],
                correct: 1,
                explanation: 'Sobald Personendaten in externe Systeme eingehen, verlässt die Gemeinde ihre Kontrollhoheit. Das kann gegen nDSG und kantonales Datenschutzrecht verstossen.',
              },
              {
                id: 'gm-q9-3',
                question: 'Was ist Anonymisierung als Datenschutzstrategie beim KI-Einsatz?',
                options: [
                  'Das vollständige Löschen aller Daten vor der KI-Nutzung',
                  'Das Entfernen oder Ersetzen personenbezogener Informationen durch Platzhalter vor der Eingabe in KI-Tools',
                  'Das Verschlüsseln von Daten im KI-System',
                  'Das Übertragen von Daten auf anonyme Server',
                ],
                correct: 1,
                explanation: 'Anonymisierung ist pragmatisch und effektiv: Personendaten werden vor der KI-Eingabe entfernt oder durch Platzhalter ersetzt. Der KI-Nutzen bleibt erhalten, das Datenschutzrisiko wird eliminiert.',
              },
              {
                id: 'gm-q9-4',
                question: 'Welche Datenkategorie zählt zu den besonders schützenswerten Personendaten im nDSG?',
                options: [
                  'Postleitzahl und Wohnort',
                  'Vor- und Nachname einer Person',
                  'Gesundheitsdaten, politische Ansichten und biometrische Daten',
                  'Die Anzahl der eingereichten Baugesuche',
                ],
                correct: 2,
                explanation: 'Besonders schützenswerte Daten umfassen Gesundheitsdaten, religiöse und politische Ansichten, biometrische Daten und Informationen zu Strafverfolgung. Sie unterstehen strengeren Verarbeitungsbedingungen.',
              },
            ],
          },
        },
        {
          id: 'gm-ndsg',
          slug: 'gm-ndsg',
          title: 'nDSG und kantonales Datenschutzrecht',
          description: 'Das neue Datenschutzgesetz der Schweiz und die kantonalen Datenschutzgesetze im Kontext des KI-Einsatzes.',
          videoId: '',
          content: `
<h2>Das neue Datenschutzgesetz (nDSG) und sein Einfluss auf KI in Gemeinden</h2>
<p>Am 1. September 2023 trat das vollständig revidierte Bundesgesetz über den Datenschutz (nDSG) in Kraft. Für Schweizer Gemeinden bringt es neue Pflichten und schärfere Anforderungen – gerade beim Einsatz moderner KI-Technologien.</p>

<h3>Die wichtigsten Neuerungen des nDSG</h3>
<ul>
  <li><strong>Privacy by Design und Privacy by Default:</strong> Datenschutz muss von Anfang an in Systeme eingebaut werden, nicht nachträglich. Bei der Beschaffung von KI-Tools müssen Datenschutzanforderungen Teil der Spezifikation sein.</li>
  <li><strong>Datenschutz-Folgenabschätzung (DSFA):</strong> Bei Datenverarbeitungen mit hohem Risiko ist eine DSFA zwingend. KI-Systeme, die Personendaten in grossem Umfang verarbeiten, fallen in der Regel darunter.</li>
  <li><strong>Meldepflicht bei Datenverletzungen:</strong> Schwere Datenschutzverletzungen müssen dem Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) gemeldet werden – und zuletzt auch den betroffenen Personen.</li>
  <li><strong>Informationspflichten:</strong> Betroffene müssen informiert werden, wenn ihre Daten bearbeitet werden – auch durch KI-Systeme.</li>
</ul>

<h3>Kantonales Datenschutzrecht: oft strenger als das Bundesrecht</h3>
<p>Gemeinden sind Behörden und unterstehen in vielen Kantonen zusätzlich dem kantonalen Datenschutzgesetz. Diese können strenger sein als das nDSG. Kantone wie Zürich (IDG), Bern (KDSG) oder Genf haben eigene Regelungen, die teils weitreichende Anforderungen an den Einsatz automatisierter Entscheidungssysteme stellen. Im Zweifel gilt immer das strengere Recht.</p>

<h3>Was das konkret für KI-Beschaffung bedeutet</h3>
<p>Bevor eine Gemeinde ein KI-Tool einführt, das Personendaten verarbeitet, sind folgende Schritte erforderlich:</p>
<ol>
  <li>Prüfung, ob eine DSFA erforderlich ist</li>
  <li>Sicherstellung, dass der Anbieter einen Auftragsverarbeitungsvertrag abschliesst</li>
  <li>Klärung des Datenspeicherorts (CH/EU bevorzugt)</li>
  <li>Einbezug des Datenschutzbeauftragten (falls vorhanden)</li>
  <li>Information der betroffenen Personen über die Datenbearbeitung</li>
</ol>

<h3>Automatisierte Einzelentscheide</h3>
<p>Ein besonders sensibler Bereich: Das nDSG schützt Betroffene vor rein automatisierten Entscheiden, die erhebliche rechtliche Auswirkungen haben. Das heisst: Wenn KI einen Entscheid trifft, muss immer eine Möglichkeit bestehen, einen menschlichen Überprüfungsentscheid zu verlangen. Für Gemeinden bedeutet das: KI kann vorbereiten, nicht entscheiden.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'gm-q10-1',
                question: 'Was bedeutet "Privacy by Design" im Kontext des nDSG?',
                options: [
                  'Datenschutz wird nachträglich in fertige Systeme eingebaut',
                  'Datenschutz muss von Anfang an in Systeme integriert sein, auch bei KI-Tools',
                  'Privacy by Design ist eine freiwillige Zertifizierung',
                  'Es bedeutet, dass nur verschlüsselte Daten verarbeitet werden dürfen',
                ],
                correct: 1,
                explanation: 'Privacy by Design verlangt, dass Datenschutz von Beginn an in Systeme eingebaut wird. Bei der KI-Beschaffung müssen Datenschutzanforderungen Teil der Ausschreibung sein.',
              },
              {
                id: 'gm-q10-2',
                question: 'Wann ist eine Datenschutz-Folgenabschätzung (DSFA) nach nDSG zwingend?',
                options: [
                  'Nur bei der Einführung neuer Formulare',
                  'Bei Datenverarbeitungen mit hohem Risiko – KI-Systeme, die Personendaten in grossem Umfang verarbeiten, fallen in der Regel darunter',
                  'Eine DSFA ist immer freiwillig',
                  'Nur bei Datenverarbeitungen über CHF 100\'000 Jahresbudget',
                ],
                correct: 1,
                explanation: 'Das nDSG schreibt eine DSFA bei hohem Risiko vor. KI-Systeme mit umfangreicher Personendatenverarbeitung fallen typischerweise darunter – also muss eine DSFA durchgeführt werden.',
              },
              {
                id: 'gm-q10-3',
                question: 'Was gilt, wenn kantonales Datenschutzrecht strenger ist als das nDSG?',
                options: [
                  'Das Bundesrecht hat immer Vorrang',
                  'Im Zweifel gilt das strengere Recht – für Gemeinden gilt das kantonale Datenschutzrecht zusätzlich',
                  'Gemeinden können wählen, welches Recht sie anwenden',
                  'Das kantonale Recht gilt nur für kantonale Behörden, nicht für Gemeinden',
                ],
                correct: 1,
                explanation: 'Gemeinden sind kantonale Behörden und unterstehen dem kantonalen Datenschutzrecht. Dieses kann strenger sein als das nDSG – dann gilt das strengere kantonale Recht.',
              },
              {
                id: 'gm-q10-4',
                question: 'Was verlangt das nDSG bei automatisierten Einzelentscheiden mit erheblichen rechtlichen Auswirkungen?',
                options: [
                  'Diese sind in der Verwaltung vollständig verboten',
                  'Betroffene müssen die Möglichkeit haben, eine menschliche Überprüfung zu verlangen',
                  'Automatisierte Entscheide sind ohne Einschränkung erlaubt',
                  'Sie müssen vom Gemeindepräsidenten persönlich unterzeichnet werden',
                ],
                correct: 1,
                explanation: 'Das nDSG schützt Personen vor rein automatisierten Entscheiden. Es muss immer eine Möglichkeit zur menschlichen Überprüfung bestehen. KI kann vorbereiten, aber nicht rechtsgültig entscheiden.',
              },
            ],
          },
        },
        {
          id: 'gm-sicherheit',
          slug: 'gm-sicherheit',
          title: 'Sicherheit und Risikomanagement',
          description: 'Cyber-Sicherheitsrisiken beim KI-Einsatz und wie Gemeinden sich wirksam schützen.',
          videoId: '',
          content: `
<h2>Cybersicherheit und Risikomanagement beim KI-Einsatz</h2>
<p>KI-Systeme erweitern die Angriffsfläche für Cyberangriffe. Gleichzeitig entstehen durch den Einsatz externer KI-Dienste neue Abhängigkeiten und Risiken, die Gemeinden kennen und managen müssen. Dieser Abschnitt gibt einen praxisorientierten Überblick über die wichtigsten Bedrohungen und Gegenmassnahmen.</p>

<h3>KI als Angriffsziel</h3>
<p>KI-Systeme können gezielt angegriffen werden. Bekannte Angriffsvektoren sind:</p>
<ul>
  <li><strong>Prompt Injection:</strong> Angreifer manipulieren einen Chatbot durch geschickt formulierte Eingaben, um unerwünschtes Verhalten auszulösen oder vertrauliche Informationen zu extrahieren.</li>
  <li><strong>Datenexfiltration:</strong> Wenn ein KI-System Zugriff auf Gemeindedaten hat, kann ein kompromittiertes System diese abfliessen lassen.</li>
  <li><strong>Model Inversion:</strong> Angreifer versuchen, aus KI-Outputs Rückschlüsse auf Trainingsdaten zu ziehen.</li>
</ul>

<h3>KI als Angriffswerkzeug gegen Gemeinden</h3>
<p>KI macht auch Angreifer effizienter. Social-Engineering-Angriffe (Phishing, CEO-Fraud) werden mit KI immer überzeugender. Personalisierte, fehlerfreie Phishing-E-Mails in perfektem Schweizerdeutsch sind heute für Angreifer kein Problem mehr. Auch Deepfakes – täuschend echte Audio- oder Videofälschungen – werden als Angriffsmittel eingesetzt. Mitarbeitende müssen für diese Risiken sensibilisiert sein.</p>

<h3>Praktische Schutzmassnahmen</h3>
<ul>
  <li><strong>Minimalprinzip:</strong> KI-Systemen nur die Datenzugriffsrechte geben, die sie wirklich brauchen.</li>
  <li><strong>Audit-Trails:</strong> Alle KI-generierten Ausgaben und Entscheide protokollieren.</li>
  <li><strong>Regelmässige Reviews:</strong> KI-Systeme und ihre Zugriffsrechte periodisch überprüfen.</li>
  <li><strong>Mitarbeiterschulung:</strong> Alle Mitarbeitenden müssen KI-gestützte Phishing-Angriffe erkennen können.</li>
  <li><strong>Incident-Response-Plan:</strong> Was tun, wenn ein KI-System kompromittiert wird? Plan erstellen und üben.</li>
</ul>

<h3>Vertrauenswürdige Anbieter wählen</h3>
<p>Nicht jeder KI-Dienst ist für den Gemeindekontext geeignet. Checkliste für die Anbieterevaluation aus Sicherheitssicht: ISO 27001-Zertifizierung oder vergleichbar, klare Aussagen zur Datenverschlüsselung (in Transit und at Rest), transparente Subunternehmer-Kette, regelmässige Penetrationstests, klarer Prozess für die Meldung von Sicherheitsvorfällen. Anbieter, die diese Fragen nicht klar beantworten können, sollten nicht eingesetzt werden.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'gm-q11-1',
                question: 'Was ist ein Prompt-Injection-Angriff?',
                options: [
                  'Ein Virus, der sich in Druckertreiber einschleust',
                  'Manipulation eines KI-Chatbots durch geschickt formulierte Eingaben, um unerwünschtes Verhalten auszulösen',
                  'Ein Angriff auf die Stromversorgung eines Rechenzentrums',
                  'Das massenhafte Einreichen von falschen Baugesuchen',
                ],
                correct: 1,
                explanation: 'Prompt Injection ist ein KI-spezifischer Angriff: Durch manipulierte Eingaben wird ein KI-System dazu gebracht, sich ausserhalb seiner vorgesehenen Parameter zu verhalten – z.B. vertrauliche Informationen preiszugeben.',
              },
              {
                id: 'gm-q11-2',
                question: 'Wie verändert KI die Bedrohungslage durch Phishing-Angriffe?',
                options: [
                  'KI macht Phishing schwieriger, da E-Mails besser gefiltert werden',
                  'KI ermöglicht personalisierte, fehlerfreie Phishing-E-Mails in perfektem Schweizerdeutsch',
                  'Phishing ist veraltet und wird durch KI abgelöst',
                  'KI hat keine Auswirkungen auf Phishing-Angriffe',
                ],
                correct: 1,
                explanation: 'KI macht Angreifer effizienter. Phishing-E-Mails sind heute sprachlich perfekt, personalisiert und schwerer zu erkennen. Mitarbeitende müssen regelmässig geschult werden.',
              },
              {
                id: 'gm-q11-3',
                question: 'Was bedeutet das Minimalprinzip beim KI-Einsatz?',
                options: [
                  'Gemeinden sollen möglichst wenig KI einsetzen',
                  'KI-Systeme sollen nur die Datenzugriffsrechte erhalten, die sie wirklich benötigen',
                  'KI-Budgets sollen minimal gehalten werden',
                  'Nur die kleinsten verfügbaren KI-Modelle dürfen eingesetzt werden',
                ],
                correct: 1,
                explanation: 'Das Minimalprinzip begrenzt das Risiko: Wenn ein KI-System nur auf die Daten zugreifen kann, die es wirklich braucht, ist der Schaden bei einem Angriff oder Fehler minimal.',
              },
              {
                id: 'gm-q11-4',
                question: 'Welches Sicherheitszertifikat ist ein wichtiges Kriterium bei der KI-Anbieterevaluation?',
                options: [
                  'ISO 9001 (Qualitätsmanagement)',
                  'ISO 27001 oder vergleichbare Informationssicherheitszertifizierung',
                  'ISO 14001 (Umweltmanagement)',
                  'Eine Zertifizierung durch den Bundesrat',
                ],
                correct: 1,
                explanation: 'ISO 27001 ist der internationale Standard für Informationssicherheitsmanagement. Anbieter mit dieser Zertifizierung haben nachgewiesene Sicherheitsprozesse – ein wichtiges Auswahlkriterium.',
              },
            ],
          },
        },
        {
          id: 'gm-compliance',
          slug: 'gm-compliance',
          title: 'Compliance-Checkliste für Gemeinden',
          description: 'Eine praxisnahe Checkliste für datenschutz- und rechtskonforme KI-Einführung in der Gemeindeverwaltung.',
          videoId: '',
          content: `
<h2>Compliance beim KI-Einsatz – eine Checkliste für Gemeinden</h2>
<p>Bevor ein KI-System in einer Gemeindeverwaltung produktiv geht, müssen eine Reihe von rechtlichen und organisatorischen Fragen geklärt sein. Diese Checkliste gibt eine strukturierte Übersicht – sie ersetzt keine rechtliche Beratung, schafft aber eine solide Ausgangslage.</p>

<h3>1. Grundlagenprüfung</h3>
<ul>
  <li>Gibt es eine Rechtsgrundlage für die Datenverarbeitung durch das KI-System?</li>
  <li>Welche Personendaten werden verarbeitet? Gibt es besonders schützenswerte Kategorien?</li>
  <li>Ist der Einsatz im Einklang mit kantonalem Datenschutzrecht?</li>
  <li>Wurde der Datenschutzbeauftragte (falls vorhanden) einbezogen?</li>
</ul>

<h3>2. Anbieterpflichten</h3>
<ul>
  <li>Wurde ein Auftragsverarbeitungsvertrag (AVV) mit dem KI-Anbieter abgeschlossen?</li>
  <li>Ist der Datenspeicherort in der Schweiz oder der EU?</li>
  <li>Hat der Anbieter eine ISO 27001-Zertifizierung oder vergleichbar?</li>
  <li>Sind Lösch- und Datenportabilitätsmöglichkeiten vertraglich geregelt?</li>
</ul>

<h3>3. Datenschutz-Folgenabschätzung</h3>
<ul>
  <li>Ist eine DSFA erforderlich (hohes Risiko, besondere Kategorien, umfangreiche Verarbeitung)?</li>
  <li>Wenn ja: Wurde eine DSFA durchgeführt und dokumentiert?</li>
  <li>Wurden identifizierte Risiken mit Massnahmen adressiert?</li>
</ul>

<h3>4. Transparenz und Information</h3>
<ul>
  <li>Werden betroffene Personen über die KI-gestützte Datenverarbeitung informiert?</li>
  <li>Ist klar kommuniziert, wann Bürger mit einem KI-System interagieren?</li>
  <li>Gibt es einen Weg, menschliche Überprüfung zu verlangen (bei automatisierten Entscheiden)?</li>
</ul>

<h3>5. Organisatorische Massnahmen</h3>
<ul>
  <li>Sind klare Verantwortlichkeiten für den KI-Einsatz definiert?</li>
  <li>Sind Mitarbeitende geschult im Umgang mit dem KI-Tool und seinen Grenzen?</li>
  <li>Gibt es einen Prozess für die Qualitätskontrolle von KI-Outputs?</li>
  <li>Ist ein Incident-Response-Prozess für KI-bezogene Vorfälle vorhanden?</li>
</ul>

<h3>6. Laufende Überwachung</h3>
<p>Compliance ist kein einmaliges Ereignis, sondern ein Prozess. KI-Systeme und ihre Rahmenbedingungen verändern sich. Regelmässige Reviews (mindestens jährlich) sind empfehlenswert: Hat sich die Rechtslage verändert? Verarbeitet das System mehr Daten als geplant? Wurden neue Risiken identifiziert?</p>
          `,
          order: 4,
          quiz: {
            questions: [
              {
                id: 'gm-q12-1',
                question: 'Was ist ein Auftragsverarbeitungsvertrag (AVV)?',
                options: [
                  'Ein Vertrag für den Kauf von KI-Software',
                  'Ein Vertrag, der regelt, wie ein externer Anbieter Personendaten im Auftrag der Gemeinde verarbeitet',
                  'Eine Genehmigung des kantonalen Datenschutzbeauftragten',
                  'Ein internes Reglement für KI-Nutzung',
                ],
                correct: 1,
                explanation: 'Der AVV ist ein zwingendes Vertragsinstrument bei der Auslagerung von Datenverarbeitung an externe Anbieter. Er regelt Pflichten, Rechte und Sicherheitsanforderungen.',
              },
              {
                id: 'gm-q12-2',
                question: 'Wann ist eine Datenschutz-Folgenabschätzung (DSFA) erforderlich?',
                options: [
                  'Immer, bei jeder neuen Software',
                  'Bei Datenverarbeitungen mit hohem Risiko, besonders schützenswerten Kategorien oder umfangreicher Verarbeitung',
                  'Nur wenn der Kanton es anordnet',
                  'Nur bei der Einführung neuer Datenbanken',
                ],
                correct: 1,
                explanation: 'Die DSFA ist bei hohem Risiko zwingend. KI-Systeme, die umfangreich Personendaten verarbeiten oder besonders schützenswerte Kategorien betreffen, lösen diese Anforderung typischerweise aus.',
              },
              {
                id: 'gm-q12-3',
                question: 'Was ist bei automatisierten Entscheiden in Bezug auf Bürgerrechte zu beachten?',
                options: [
                  'Automatisierte Entscheide sind in der Verwaltung grundsätzlich verboten',
                  'Betroffene müssen die Möglichkeit haben, eine menschliche Überprüfung des Entscheids zu verlangen',
                  'Automatisierte Entscheide sind ohne Einschränkung erlaubt, wenn das System zertifiziert ist',
                  'Nur der Gemeinderat kann automatisierte Entscheide genehmigen',
                ],
                correct: 1,
                explanation: 'Das nDSG schützt Personen vor rein automatisierten Entscheiden mit erheblichen Auswirkungen. Ein Weg zur menschlichen Überprüfung muss immer offenstehen.',
              },
              {
                id: 'gm-q12-4',
                question: 'Wie oft sollten KI-Compliance-Reviews durchgeführt werden?',
                options: [
                  'Einmalig bei der Einführung des Systems genügt',
                  'Mindestens jährlich, da sich Rechtslage, Systeme und Risiken verändern können',
                  'Nur wenn eine Datenverletzung aufgetreten ist',
                  'Nur bei einem Anbieterwechsel',
                ],
                correct: 1,
                explanation: 'Compliance ist ein laufender Prozess. Rechtslage, Technologie und Risiken ändern sich. Mindestens jährliche Reviews stellen sicher, dass der KI-Einsatz dauerhaft konform bleibt.',
              },
            ],
          },
        },
      ],
    },

    // ─────────────────────────────────────────
    // MODUL 4 – KI für Verwaltungseffizienz
    // ─────────────────────────────────────────
    {
      id: 'gm-modul-4',
      slug: 'gm-effizienz',
      title: 'KI für Verwaltungseffizienz',
      description: 'Prozessautomatisierung, intelligente Dokumentenverwaltung, KI im Baugesuchsprozess und Kosten-Nutzen-Analyse.',
      icon: '⚡',
      order: 4,
      lessons: [
        {
          id: 'gm-automatisierung',
          slug: 'gm-automatisierung',
          title: 'Prozessautomatisierung',
          description: 'Wie KI Routineprozesse in der Gemeindeverwaltung automatisiert und wertvolle Arbeitszeit freisetzt.',
          videoId: '',
          content: `
<h2>Prozessautomatisierung in der Gemeindeverwaltung</h2>
<p>Ein erheblicher Teil des Verwaltungsalltags besteht aus strukturierten, wiederkehrenden Prozessen: Dokumente empfangen, prüfen, klassifizieren, weiterleiten, bestätigen, ablegen. Diese Prozesse folgen klaren Regeln – und wo Regeln klar sind, kann KI automatisieren. Das Potenzial ist erheblich.</p>

<h3>Was sich automatisieren lässt</h3>
<p>Typische Kandidaten für Prozessautomatisierung in Gemeinden:</p>
<ul>
  <li><strong>Eingangspost-Routing:</strong> Eingescannte Post wird automatisch klassifiziert und an die zuständige Stelle weitergeleitet.</li>
  <li><strong>Formularverarbeitung:</strong> Ausgefüllte Formulare werden automatisch ausgelesen, Daten extrahiert und in Fachanwendungen übertragen.</li>
  <li><strong>Bestätigungs- und Zwischenbescheide:</strong> Standardschreiben wie Eingangsbestätigungen, Nachforderungen oder Fristverlängerungen werden automatisch generiert.</li>
  <li><strong>Terminerinnerungen:</strong> Ablaufende Fristen (intern und extern) werden automatisch erkannt und Erinnerungen verschickt.</li>
  <li><strong>Datenabgleich:</strong> Einwohnerdaten werden automatisch zwischen verschiedenen Systemen synchronisiert.</li>
</ul>

<h3>RPA und KI: der Unterschied</h3>
<p>Robotic Process Automation (RPA) automatisiert regelbasierte Prozesse ohne KI. Wenn Regeln klar und unveränderlich sind, genügt RPA. KI wird dann eingesetzt, wenn Variabilität ins Spiel kommt: unterschiedliche Dokumentformate, natürlichsprachliche Eingaben, Klassifizierungen. Die Kombination beider Ansätze – KI für die intelligente Verarbeitung, RPA für die nachgelagerte Ausführung – ist oft die wirkungsvollste Lösung.</p>

<h3>Wo man beginnen sollte</h3>
<p>Nicht jeder Prozess lohnt die Automatisierung. Drei Kriterien helfen bei der Auswahl: <strong>Häufigkeit</strong> (wird dieser Prozess oft ausgeführt?), <strong>Standardisierbarkeit</strong> (folgt er klaren Regeln?) und <strong>Fehleranfälligkeit</strong> (passieren hier oft Fehler durch manuellen Aufwand?). Prozesse, die alle drei Kriterien erfüllen, sind ideale Automatisierungskandidaten.</p>

<h3>Pilotprojekt: Eingangspost-Automatisierung</h3>
<p>Ein einfaches, sehr wirkungsvolles Pilotprojekt: Die Eingangspost wird gescannt, von KI klassifiziert (Baugesuch, Einsprache, Allgemeine Anfrage, Rechnung etc.) und automatisch an die richtige Abteilung weitergeleitet. Eine Eingangsbestätigung geht automatisch an den Absender. Umsetzungszeit: ca. 2–4 Wochen. Zeitersparnis: mehrere Stunden pro Woche in grösseren Gemeinden.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'gm-q13-1',
                question: 'Welche drei Kriterien helfen bei der Auswahl von Automatisierungskandidaten?',
                options: [
                  'Kosten, Schönheit der Benutzeroberfläche, Bekanntheit des Anbieters',
                  'Häufigkeit, Standardisierbarkeit und Fehleranfälligkeit',
                  'Anzahl der beteiligten Abteilungen, Sprachkenntnisse, Dokumentgrösse',
                  'Alter des Prozesses, Anzahl der zuständigen Personen, Digitalisierungsgrad',
                ],
                correct: 1,
                explanation: 'Ein guter Automatisierungskandidat wird häufig ausgeführt, folgt klaren Regeln und ist fehleranfällig bei manueller Bearbeitung. Diese drei Kriterien maximieren den Nutzen der Automatisierung.',
              },
              {
                id: 'gm-q13-2',
                question: 'Wann wird KI zusätzlich zu RPA eingesetzt?',
                options: [
                  'Immer – KI ist immer besser als RPA',
                  'Wenn Variabilität ins Spiel kommt: unterschiedliche Formate, natürliche Sprache, Klassifizierungen',
                  'KI und RPA schliessen sich gegenseitig aus',
                  'Nur bei sehr grossen Gemeinden mit IT-Abteilung',
                ],
                correct: 1,
                explanation: 'RPA genügt für regelbasierte, gleichförmige Prozesse. KI wird zusätzlich gebraucht, wenn Inhalte variieren: unterschiedliche Dokumentformate, natürlichsprachliche Texte, intelligente Klassifizierungen.',
              },
              {
                id: 'gm-q13-3',
                question: 'Was leistet ein automatisiertes Eingangspost-System?',
                options: [
                  'Es beantwortet alle Anfragen vollständig ohne menschliches Zutun',
                  'Es scannt, klassifiziert und leitet Post automatisch weiter und sendet Eingangsbestätigungen',
                  'Es druckt und frankiert ausgehende Post automatisch',
                  'Es archiviert nur digitale Dokumente, nicht eingescannte',
                ],
                correct: 1,
                explanation: 'Ein automatisiertes Eingangspost-System scannt Dokumente, klassifiziert sie per KI, leitet sie an die richtige Stelle weiter und versendet automatische Eingangsbestätigungen – ohne manuellen Aufwand.',
              },
              {
                id: 'gm-q13-4',
                question: 'Welche Aufgaben eignen sich NICHT für Prozessautomatisierung?',
                options: [
                  'Wiederkehrende Terminbestätigungen per E-Mail',
                  'Automatische Eingangsbestätigungen für Formulare',
                  'Ermessensentscheide mit Grundrechtsrelevanz und persönliche Beratungsgespräche',
                  'Klassifizierung von eingehenden Dokumenttypen',
                ],
                correct: 2,
                explanation: 'Ermessensentscheide und persönliche Beratung erfordern menschliches Urteilsvermögen, Empathie und demokratische Legitimität. Diese Bereiche sind für KI-Automatisierung nicht geeignet.',
              },
            ],
          },
        },
        {
          id: 'gm-dokumente',
          slug: 'gm-dokumente',
          title: 'Intelligente Dokumentenverwaltung',
          description: 'Wie KI die Suche, Klassifizierung und Erschliessung von Gemeindedokumenten revolutioniert.',
          videoId: '',
          content: `
<h2>Intelligente Dokumentenverwaltung mit KI</h2>
<p>Gemeinden produzieren und verwalten riesige Mengen an Dokumenten: Beschlüsse, Protokolle, Pläne, Baugesuche, Verträge, Korrespondenz. Die Suche nach dem richtigen Dokument kostet täglich wertvolle Zeit. KI kann die Dokumentenverwaltung grundlegend effizienter machen – ohne das bestehende System über den Haufen zu werfen.</p>

<h3>Semantische Suche statt Stichwortsuche</h3>
<p>Klassische Dokumentensuche funktioniert über Stichworte: Man muss wissen, wie ein Dokument benannt oder beschlagwortet wurde. KI-gestützte semantische Suche versteht den <em>Inhalt</em> und findet Dokumente, die inhaltlich zum Suchbegriff passen – auch wenn die genauen Wörter nicht vorkommen. Eine Suche nach «Einsprache Bauprojekt Hauptstrasse» findet auch Dokumente, die nur «Rekurs Baugesuch Kantonsstrasse 14» enthalten. Das reduziert Suchzeiten dramatisch.</p>

<h3>Automatische Klassifizierung und Verschlagwortung</h3>
<p>Neue Dokumente können von KI automatisch klassifiziert und mit Metadaten versehen werden: Dokumenttyp, Datum, betroffene Liegenschaft, zuständige Abteilung, Dringlichkeit. Das standardisiert die Ablage und macht spätere Suche einfacher. In grösseren Gemeinden, die täglich hunderte Dokumente verarbeiten, ist das ein erheblicher Effizienzgewinn.</p>

<h3>Zusammenfassungen auf Abruf</h3>
<p>KI kann lange Dokumente auf Knopfdruck zusammenfassen: Ein 200-seitiger Bericht auf eine Seite, ein Gesuchsdossier auf die wichtigsten drei Punkte, eine Einsprache auf den Kern der Rüge. Das spart Lesezeit und beschleunigt die Entscheidungsvorbereitung erheblich.</p>

<h3>Bestehende Systeme nutzen</h3>
<p>Viele Gemeinden haben bereits ein Dokumentenmanagementsystem (DMS). Moderne DMS-Lösungen wie <strong>SharePoint (Microsoft)</strong>, <strong>Fabasoft</strong> oder spezialisierte Schweizer Anbieter integrieren zunehmend KI-Funktionen. Oft lohnt es sich, zuerst die bereits vorhandenen KI-Funktionen des bestehenden Systems zu aktivieren, bevor ein neues Tool eingeführt wird. Der einfachste Schritt ist häufig der wirkungsvollste.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'gm-q14-1',
                question: 'Was ist der Vorteil von semantischer Suche gegenüber klassischer Stichwortsuche?',
                options: [
                  'Semantische Suche ist schneller, weil sie weniger Daten durchsucht',
                  'Semantische Suche versteht Inhalte und findet Dokumente auch ohne genaue Stichworte',
                  'Semantische Suche funktioniert nur bei digitalisierten Dokumenten',
                  'Semantische Suche ist billiger in der Lizenzierung',
                ],
                correct: 1,
                explanation: 'Semantische Suche versteht den Inhalt und findet Dokumente, die thematisch passen – auch wenn die genauen Suchbegriffe nicht vorkommen. Das ist ein riesiger Vorteil gegenüber starrer Stichwortsuche.',
              },
              {
                id: 'gm-q14-2',
                question: 'Was leistet automatische Klassifizierung bei der Dokumentenverwaltung?',
                options: [
                  'Sie sortiert Dokumente nach Alphabetischer Reihenfolge',
                  'Sie versieht neue Dokumente automatisch mit Metadaten: Typ, Datum, Zuständigkeit, Dringlichkeit',
                  'Sie löscht veraltete Dokumente automatisch',
                  'Sie übersetzt Dokumente in andere Sprachen',
                ],
                correct: 1,
                explanation: 'Automatische Klassifizierung versieht Dokumente mit standardisierten Metadaten. Das erleichtert spätere Suche, Filterung und Weiterverarbeitung erheblich.',
              },
              {
                id: 'gm-q14-3',
                question: 'Was ist der empfehlenswerte erste Schritt beim Einführen von KI in die Dokumentenverwaltung?',
                options: [
                  'Sofort ein neues, KI-natives System beschaffen',
                  'Zuerst die bereits vorhandenen KI-Funktionen im bestehenden DMS aktivieren und nutzen',
                  'Alle Dokumente ausdrucken und manuell neu einzuscannen',
                  'Eine externe KI-Firma mit der vollständigen Dokumentenverwaltung beauftragen',
                ],
                correct: 1,
                explanation: 'Viele bestehende DMS-Lösungen haben bereits KI-Funktionen. Diese zu aktivieren ist schneller, günstiger und risikoärmer als ein neues System einzuführen.',
              },
              {
                id: 'gm-q14-4',
                question: 'Wie hilft KI bei der Entscheidungsvorbereitung in der Verwaltung?',
                options: [
                  'KI trifft Vorentscheide automatisch',
                  'KI erstellt Zusammenfassungen langer Dokumente, spart Lesezeit und beschleunigt die Vorbereitung',
                  'KI prüft die Rechtmässigkeit von Entscheidungsvorlagen',
                  'KI ersetzt Sitzungen durch automatisierte Abstimmungen',
                ],
                correct: 1,
                explanation: 'KI-Zusammenfassungen reduzieren langen Lesestoff auf das Wesentliche. Das beschleunigt die Entscheidungsvorbereitung, ohne auf vollständige Information zu verzichten.',
              },
            ],
          },
        },
        {
          id: 'gm-baugesuch',
          slug: 'gm-baugesuch',
          title: 'KI im Baugesuchsprozess',
          description: 'Wie KI den Baugesuchsprozess effizienter macht – von der Vollständigkeitsprüfung bis zur Berichterstattung.',
          videoId: '',
          content: `
<h2>KI im Baugesuchsprozess – Effizienz ohne Qualitätsverlust</h2>
<p>Der Baugesuchsprozess ist in vielen Schweizer Gemeinden ein zeitintensives, fehleranfälliges und personalintensives Verfahren. Mehrere Stellen sind involviert, viele Dokumente müssen geprüft werden, Fristen sind einzuhalten. KI bietet in verschiedenen Phasen dieses Prozesses echte Entlastung.</p>

<h3>Phase 1: Einreichung und Vollständigkeitsprüfung</h3>
<p>Das Baugesuch kommt ein – digital oder eingescannt. KI prüft automatisch:</p>
<ul>
  <li>Sind alle Pflichtformulare ausgefüllt?</li>
  <li>Sind alle erforderlichen Pläne vorhanden (Situationsplan, Grundrisse, Schnitte, Ansichten)?</li>
  <li>Sind Formulare vollständig und lesbar?</li>
</ul>
<p>Unvollständige Gesuche werden automatisch mit präzisen Hinweisen zur Nachbesserung zurückgeschickt. Vollständige Gesuche erhalten eine automatische Eingangsbestätigung mit Dossier-Nummer.</p>

<h3>Phase 2: Klassifizierung und Routing</h3>
<p>KI klassifiziert das Gesuch automatisch: Ist es ein Neubau, Umbau, Anbau, Abbruch? Handelt es sich um ein vereinfachtes oder ordentliches Verfahren? Liegt das Grundstück in einer Schutzzone oder einem Gefahrengebiet? Auf Basis dieser Klassifizierung wird das Gesuch automatisch an die richtigen Stellen zur Vernehmlassung weitergeleitet.</p>

<h3>Phase 3: Unterstützung bei Berichten und Verfügungen</h3>
<p>Planungsmitarbeitende können KI für die Erstellung von Standardpassagen in Berichten und Verfügungen nutzen: Beschreibung der Ausgangslage, rechtliche Grundlagen, Standardauflagen. Was früher stundenlang dauerte, wird in Minuten skizziert. Die fachliche und rechtliche Würdigung bleibt selbstverständlich beim Menschen.</p>

<h3>Was KI im Baugesuchsprozess nicht kann</h3>
<p>Klare Grenzen: KI kann keine baurechtliche Beurteilung vornehmen, keine Interessenabwägung leisten und keine Baubewilligung erteilen oder verweigern. Diese Kernaufgaben erfordern fachliche Expertise, lokales Wissen und rechtliche Verantwortungsübernahme durch ausgebildetes Personal. KI beschleunigt die Verfahren – sie ersetzt keine Baurechtsexpertise.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'gm-q15-1',
                question: 'Was kann KI bei der Vollständigkeitsprüfung von Baugesuchen leisten?',
                options: [
                  'KI prüft die architektonische Qualität der Pläne',
                  'KI prüft automatisch, ob alle Pflichtformulare und Pläne vorhanden und vollständig sind',
                  'KI beurteilt, ob das Baugesuch mit dem kantonalen Richtplan vereinbar ist',
                  'KI erstellt die Baupläne auf Basis der Beschreibung des Gesuchstellers',
                ],
                correct: 1,
                explanation: 'Vollständigkeitsprüfung ist eine strukturierte, regelbasierte Aufgabe – ideal für KI. Ob alle Pflichtdokumente vorhanden sind, lässt sich automatisch prüfen.',
              },
              {
                id: 'gm-q15-2',
                question: 'Wie hilft KI bei der Klassifizierung von Baugesuchen?',
                options: [
                  'KI legt die Zonenkonformität eines Projekts fest',
                  'KI klassifiziert automatisch nach Gesuchstyp und leitet an die richtigen Stellen weiter',
                  'KI bestimmt die Ausnutzungsziffer eines Grundstücks',
                  'KI prüft die Einhaltung von Abstandsvorschriften anhand der Pläne',
                ],
                correct: 1,
                explanation: 'Automatische Klassifizierung (Neubau/Umbau, vereinfachtes/ordentliches Verfahren, Schutzzone etc.) und das daraus folgende Routing an die richtigen Stellen spart viel manuelle Arbeit.',
              },
              {
                id: 'gm-q15-3',
                question: 'Bei welcher Aufgabe im Baugesuchsprozess kann KI Planungsmitarbeitende konkret unterstützen?',
                options: [
                  'Bei der Interessenabwägung zwischen privaten und öffentlichen Interessen',
                  'Beim Verfassen von Standardpassagen in Berichten und Verfügungen',
                  'Bei der baurechtlichen Beurteilung des Projekts',
                  'Bei der Erteilung oder Verweigerung der Baubewilligung',
                ],
                correct: 1,
                explanation: 'Standardpassagen (Ausgangslage, rechtliche Grundlagen, Standardauflagen) lassen sich mit KI schnell skizzieren. Die fachliche Würdigung und der Entscheid bleiben beim Menschen.',
              },
              {
                id: 'gm-q15-4',
                question: 'Was kann KI im Baugesuchsprozess grundsätzlich NICHT übernehmen?',
                options: [
                  'Das automatische Versenden von Eingangsbestätigungen',
                  'Die Klassifizierung des Gesuchstyps',
                  'Die baurechtliche Beurteilung, Interessenabwägung und Erteilung der Baubewilligung',
                  'Die Prüfung auf Vollständigkeit der Planunterlagen',
                ],
                correct: 2,
                explanation: 'Baurechtliche Beurteilung, Interessenabwägung und der eigentliche Bewilligungsentscheid erfordern Fachexpertise, lokales Wissen und rechtliche Verantwortungsübernahme. Das ist Menschenarbeit.',
              },
            ],
          },
        },
        {
          id: 'gm-kosten-nutzen',
          slug: 'gm-kosten-nutzen',
          title: 'Kosten-Nutzen-Analyse von KI-Projekten',
          description: 'Wie Gemeinden den Nutzen von KI-Investitionen realistisch bewerten und rechtfertigen.',
          videoId: '',
          content: `
<h2>Kosten-Nutzen-Analyse von KI-Projekten in der Gemeinde</h2>
<p>KI-Projekte brauchen eine sachliche wirtschaftliche Begründung – insbesondere bei öffentlichen Mitteln. Eine realistische Kosten-Nutzen-Analyse schützt vor Enttäuschungen und hilft, Prioritäten richtig zu setzen. Sie muss nicht kompliziert sein, aber sie muss ehrlich sein.</p>

<h3>Nutzendimensionen erfassen</h3>
<p>Der Nutzen von KI-Projekten lässt sich in mehreren Dimensionen messen:</p>
<ul>
  <li><strong>Direkte Zeitersparnis:</strong> Wie viele Stunden spart das System pro Woche? Multipliziert mit dem Stundenansatz ergibt das einen monetären Wert.</li>
  <li><strong>Qualitätsverbesserung:</strong> Weniger Fehler, konsistentere Outputs – schwieriger zu monetarisieren, aber real.</li>
  <li><strong>Erreichbarkeit:</strong> 24/7-Verfügbarkeit bedeutet besseren Service für die Bevölkerung.</li>
  <li><strong>Entlastungseffekt:</strong> Mitarbeitende können sich auf höherwertige Aufgaben konzentrieren – mittelfristig produktivitätssteigernd.</li>
</ul>

<h3>Kostenerfassung</h3>
<p>Auf der Kostenseite sind alle einmaligen und laufenden Kosten zu erfassen:</p>
<ul>
  <li>Lizenzkosten des KI-Tools (monatlich/jährlich)</li>
  <li>Einführungskosten (Konfiguration, Datenmigration, Schulung)</li>
  <li>Laufende Wartungs- und Administrationskosten</li>
  <li>Zeitaufwand der Mitarbeitenden für Qualitätskontrolle</li>
  <li>Kosten externer Beratung oder Implementierung</li>
</ul>

<h3>Einfaches Rechenbeispiel</h3>
<p>Annahme: Protokollerstellung durch KI-Transkription. Vorher: 4 Stunden pro Sitzung × 12 Sitzungen/Jahr = 48 Stunden/Jahr. Nachher: 30 Minuten Nachbearbeitung × 12 = 6 Stunden/Jahr. Ersparnis: 42 Stunden/Jahr × CHF 80/Stunde = CHF 3'360/Jahr. Kosten des Tools: CHF 240/Jahr. ROI innerhalb von 3 Wochen nach Einführung.</p>

<h3>Vorsicht vor falschen Erwartungen</h3>
<p>Nicht alle eingesparten Stunden werden direkt in andere Projekte reinvestiert. Reale Effizienzgewinne sind oft kleiner als prognostiziert, weil KI-Qualitätskontrolle Zeit braucht, Einführungswiderstände auftreten und Anfangsinvestitionen unterschätzt werden. Ein konservativer Ansatz bei der Nutzenberechnung führt zu realistischeren Erwartungen und grösserem Vertrauen, wenn die Zahlen stimmen.</p>
          `,
          order: 4,
          quiz: {
            questions: [
              {
                id: 'gm-q16-1',
                question: 'Wie berechnet man den monetären Wert der Zeitersparnis durch KI?',
                options: [
                  'Einsparte Stunden × Lizenzkosten des KI-Tools',
                  'Eingesparte Stunden pro Woche × 52 × Stundenansatz der Mitarbeitenden',
                  'Anzahl der automatisierten Dokumente × Durchschnittspreis',
                  'Gesamtbudget der Gemeinde × KI-Anteil',
                ],
                correct: 1,
                explanation: 'Der monetäre Nutzen der Zeitersparnis ergibt sich aus eingesparten Stunden multipliziert mit dem Stundenansatz. Das ermöglicht einen direkten Vergleich mit den Kosten des KI-Tools.',
              },
              {
                id: 'gm-q16-2',
                question: 'Was sind laufende Kosten eines KI-Projekts, die oft unterschätzt werden?',
                options: [
                  'Nur die Lizenzkosten sind relevant',
                  'Lizenzkosten, Wartung, Administration und der Zeitaufwand für Qualitätskontrolle durch Mitarbeitende',
                  'Nur externe Beratungskosten sind zu berücksichtigen',
                  'Laufende Kosten fallen bei KI-Tools nicht an',
                ],
                correct: 1,
                explanation: 'Lizenzkosten sind nur ein Teil. Wartung, Administration und vor allem der Zeitaufwand der Mitarbeitenden für Qualitätskontrolle werden oft unterschätzt.',
              },
              {
                id: 'gm-q16-3',
                question: 'Warum empfiehlt sich ein konservativer Ansatz bei der Nutzenberechnung?',
                options: [
                  'Um den Gemeinderat zu enttäuschen',
                  'Weil realistische Erwartungen zu grösserem Vertrauen führen, wenn die Zahlen tatsächlich stimmen',
                  'Weil KI nie den erwarteten Nutzen bringt',
                  'Weil kantonale Revision zu tiefe Nutzenzahlen bevorzugt',
                ],
                correct: 1,
                explanation: 'Übertriebener Optimismus führt zu Enttäuschungen. Wer konservativ rechnet, übertrifft Erwartungen statt sie zu verfehlen – das stärkt das Vertrauen in KI-Projekte intern und gegenüber dem Rat.',
              },
              {
                id: 'gm-q16-4',
                question: 'Im genannten Rechenbeispiel zur Protokollerstellung: Wie hoch ist die jährliche Zeitersparnis?',
                options: [
                  '12 Stunden pro Jahr',
                  '48 Stunden pro Jahr',
                  '42 Stunden pro Jahr',
                  '6 Stunden pro Jahr',
                ],
                correct: 2,
                explanation: 'Von 48 Stunden (4 Stunden × 12 Sitzungen) auf 6 Stunden (30 Minuten × 12) ergibt eine Ersparnis von 42 Stunden pro Jahr – bei CHF 80/Stunde sind das CHF 3\'360 Nutzen.',
              },
            ],
          },
        },
      ],
    },

    // ─────────────────────────────────────────
    // MODUL 5 – Zukunft der KI in Gemeinden
    // ─────────────────────────────────────────
    {
      id: 'gm-modul-5',
      slug: 'gm-zukunft',
      title: 'Zukunft der KI in Gemeinden',
      description: 'Trends, Smart City, KI-Strategie und Change Management für die Gemeinde von morgen.',
      icon: '🔭',
      order: 5,
      lessons: [
        {
          id: 'gm-trends',
          slug: 'gm-trends',
          title: 'Trends: Wo geht die Reise hin?',
          description: 'Die wichtigsten KI-Trends, die Gemeinden in den nächsten Jahren beeinflussen werden.',
          videoId: '',
          content: `
<h2>KI-Trends, die Gemeinden in den nächsten Jahren prägen</h2>
<p>Die KI-Entwicklung schreitet rasant voran. Was heute noch Zukunftsmusik ist, wird morgen Standard. Für Gemeinden ist es wichtig, die relevanten Trends zu kennen – nicht um auf jeden Zug aufzuspringen, sondern um informierte Entscheidungen zu treffen und sich rechtzeitig vorzubereiten.</p>

<h3>Trend 1: Multimodale KI</h3>
<p>Aktuelle KI-Systeme können nicht nur Texte, sondern auch Bilder, Audio und Video verarbeiten. Für Gemeinden bedeutet das: Eingescannte handschriftliche Notizen aus Gemeinderatssitzungen werden direkt verarbeitet, Bilder von Baustellen werden automatisch auf Verstösse geprüft, Sprachaufnahmen von Beratungsgesprächen werden zusammengefasst. Multimodalität macht KI in deutlich mehr Kontexten nützlich.</p>

<h3>Trend 2: Kleine, spezialisierte Modelle</h3>
<p>Nicht alle KI braucht die Cloud. Immer leistungsfähigere kleine Sprachmodelle (SLMs) können auf lokaler Hardware laufen – auch auf einem gewöhnlichen Verwaltungsrechner. Das ermöglicht datenschutzkonforme KI-Nutzung ohne externe Datenübertragung: ideal für Gemeinden, die ihre Daten nicht in die Cloud geben möchten oder können.</p>

<h3>Trend 3: Agentenbasierte KI</h3>
<p>KI-Agenten können komplexere Aufgaben selbständig ausführen: eine Recherche durchführen, ein Formular ausfüllen, eine E-Mail schreiben und eine Terminanfrage stellen – alles in einem Schritt. Für die Verwaltung bedeutet das mittelfristig eine weitere Automatisierungsstufe. Gleichzeitig entstehen neue Fragen zu Kontrolle, Haftung und Nachvollziehbarkeit.</p>

<h3>Trend 4: KI-Regulierung in der Schweiz und der EU</h3>
<p>Der EU AI Act ist seit 2024 in Kraft und hat Auswirkungen auch auf Schweizer Gemeinden, die EU-Bürger betreffen oder EU-Anbieter nutzen. Hochrisiko-KI-Systeme in der öffentlichen Verwaltung unterliegen besonderen Anforderungen. Die Schweiz arbeitet an eigenen Regulierungsansätzen. Gemeinden sollten diese Entwicklungen verfolgen und sich frühzeitig auf neue Anforderungen einstellen.</p>

<h3>Trend 5: KI-gestützte Beteiligung</h3>
<p>KI ermöglicht neue Formen der Bürgerbeteiligung: automatische Auswertung von Vernehmlassungsantworten, KI-gestützte Zusammenfassung von Bürgeranliegen aus Konsultationen, mehrsprachige Beteiligungsportale. Das könnte die demokratische Partizipation auf lokaler Ebene erheblich stärken.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'gm-q17-1',
                question: 'Was bedeutet "multimodale KI" für Gemeinden?',
                options: [
                  'KI, die mehrere Verwaltungsaufgaben gleichzeitig erledigt',
                  'KI, die Text, Bilder, Audio und Video verarbeiten kann – nützlich für viele Verwaltungskontexte',
                  'KI, die in mehreren Gemeinden gleichzeitig betrieben wird',
                  'KI mit mehreren Benutzeroberflächen für verschiedene Abteilungen',
                ],
                correct: 1,
                explanation: 'Multimodale KI verarbeitet verschiedene Medientypen: Texte, Bilder, Audio. Das macht sie in deutlich mehr Verwaltungskontexten nutzbar – von handschriftlichen Notizen bis zu Baustellen-Fotos.',
              },
              {
                id: 'gm-q17-2',
                question: 'Warum sind kleine, lokale KI-Modelle für Gemeinden interessant?',
                options: [
                  'Sie sind billiger als grosse Cloud-Modelle',
                  'Sie können datenschutzkonform ohne externe Datenübertragung auf lokaler Hardware laufen',
                  'Sie sind leistungsfähiger als Cloud-basierte Systeme',
                  'Sie brauchen keine Schulung der Mitarbeitenden',
                ],
                correct: 1,
                explanation: 'Kleine Modelle auf lokaler Hardware ermöglichen KI-Nutzung ohne Cloud – ideal für datenschutzsensible Daten, die die Gemeinde nicht extern übertragen möchte.',
              },
              {
                id: 'gm-q17-3',
                question: 'Was sind KI-Agenten?',
                options: [
                  'Mitarbeitende, die KI-Systeme bedienen',
                  'KI-Systeme, die komplexere mehrstufige Aufgaben selbständig ausführen können',
                  'Externe Berater für KI-Einführungsprojekte',
                  'Chatbots auf Gemeindewebsites',
                ],
                correct: 1,
                explanation: 'KI-Agenten können mehrere Schritte einer Aufgabe selbständig planen und ausführen. Das ist eine neue Automatisierungsstufe – bringt aber auch neue Fragen zu Kontrolle und Haftung.',
              },
              {
                id: 'gm-q17-4',
                question: 'Was regelt der EU AI Act für die öffentliche Verwaltung?',
                options: [
                  'Er verbietet KI in der öffentlichen Verwaltung vollständig',
                  'Hochrisiko-KI in der öffentlichen Verwaltung unterliegt besonderen Anforderungen',
                  'Er gilt ausschliesslich für private Unternehmen',
                  'Er hat keine Auswirkungen auf die Schweiz',
                ],
                correct: 1,
                explanation: 'Der EU AI Act stuft KI in der öffentlichen Verwaltung als Hochrisiko ein und stellt besondere Anforderungen. Auch Schweizer Gemeinden können betroffen sein, wenn sie EU-Bürger betreffen oder EU-Anbieter nutzen.',
              },
            ],
          },
        },
        {
          id: 'gm-smart-city',
          slug: 'gm-smart-city',
          title: 'Smart City und digitale Transformation',
          description: 'Wie KI Teil einer grösseren digitalen Transformation von Gemeinden ist und was Smart City konkret bedeutet.',
          videoId: '',
          content: `
<h2>Smart City und digitale Transformation – was bedeutet das für Gemeinden?</h2>
<p>«Smart City» ist ein Begriff, der viel versprochen und manchmal wenig gehalten hat. Hinter den Hochglanz-Visionen steckt aber ein realer Wandel: Städte und Gemeinden nutzen Daten und digitale Technologien – darunter KI – um Dienstleistungen zu verbessern, Ressourcen effizienter einzusetzen und die Lebensqualität zu erhöhen. Das ist auch für kleinere Gemeinden relevant.</p>

<h3>Was Smart City konkret bedeutet</h3>
<p>Smart City ist kein Produkt, das man kaufen kann. Es ist eine Haltung: Entscheidungen werden datenbasiert getroffen, Infrastruktur wird vernetzt und optimiert, Bürgerinnen und Bürger werden aktiv in die Gestaltung einbezogen. KI ist dabei ein Werkzeug unter mehreren – aber ein mächtiges.</p>

<h3>Praxisnahe Smart-City-Anwendungen für kleinere Gemeinden</h3>
<ul>
  <li><strong>Intelligente Strassenbeleuchtung:</strong> Sensorgesteuerte, KI-optimierte Beleuchtung spart Energie und Kosten.</li>
  <li><strong>Parkraummanagement:</strong> Sensoren und KI-Auswertung optimieren Parkplatznutzung und reduzieren Suchverkehr.</li>
  <li><strong>Abfallwirtschaft:</strong> Füllstandssensoren in Containern und KI-optimierte Sammelrouten reduzieren Leerfahrten.</li>
  <li><strong>Bürgerbeteiligungsplattformen:</strong> Digitale Plattformen für Vernehmlassungen, Quartieranliegen und Mitwirkung.</li>
  <li><strong>Energie-Monitoring:</strong> KI-gestützte Auswertung des Energieverbrauchs kommunaler Liegenschaften.</li>
</ul>

<h3>Digitale Transformation als Prozess</h3>
<p>Digitale Transformation ist kein Projekt, das beginnt und endet. Es ist ein fortlaufender Prozess der Anpassung, des Lernens und der Verbesserung. Erfolgreiche Gemeinden starten mit konkreten, wirkungsvollen Projekten, lernen aus den Erfahrungen und bauen darauf auf. Das erfordert keine milliardenschwere Smart-City-Infrastruktur – oft reichen einfache, pragmatische erste Schritte.</p>

<h3>Interoperabilität und offene Standards</h3>
<p>Ein häufiger Fehler bei Smart-City-Projekten: Inselösungen, die nicht miteinander kommunizieren. Von Anfang an auf offene Standards und Interoperabilität zu setzen – also die Fähigkeit verschiedener Systeme, Daten auszutauschen – verhindert kostspielige Nacharbeiten und Lock-in-Effekte bei einzelnen Anbietern.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'gm-q18-1',
                question: 'Was ist der Kern des Smart-City-Konzepts?',
                options: [
                  'Eine teure, hochmoderne digitale Infrastruktur für Grossstädte',
                  'Eine Haltung: datenbasierte Entscheide, vernetzte Infrastruktur und aktive Bürgerbeteiligung',
                  'Ein Softwareprodukt, das bei einem Anbieter gekauft werden kann',
                  'Das vollständige Ersetzen menschlicher Mitarbeitender durch Roboter',
                ],
                correct: 1,
                explanation: 'Smart City ist kein Produkt, sondern eine Haltung und ein Prozess. Datenbasierte Entscheide, Vernetzung und Bürgerbeteiligung sind die Kernelemente – auch für kleinere Gemeinden umsetzbar.',
              },
              {
                id: 'gm-q18-2',
                question: 'Welche Smart-City-Anwendung ist auch für kleinere Gemeinden praktikabel?',
                options: [
                  'Autonome U-Bahn-Systeme',
                  'KI-optimierte Abfallsammlung mit Füllstandssensoren und optimierten Routen',
                  'Vollständig autonome Steuerverwaltung',
                  'Gesichtserkennung im öffentlichen Raum',
                ],
                correct: 1,
                explanation: 'Füllstandssensoren in Containern und KI-optimierte Sammelrouten sind auch für kleinere Gemeinden umsetzbar und haben messbare Kosten- und Umweltvorteile.',
              },
              {
                id: 'gm-q18-3',
                question: 'Was sind Inselösungen und warum sind sie problematisch?',
                options: [
                  'Lösungen für Inseln und Küstengemeinden',
                  'Digitale Systeme, die nicht mit anderen Systemen kommunizieren und Daten nicht austauschen können',
                  'Kleinere KI-Modelle für den lokalen Einsatz',
                  'Systeme, die nur intern und nicht bürgerseitig genutzt werden',
                ],
                correct: 1,
                explanation: 'Inselösungen kommunizieren nicht miteinander. Das führt zu doppelter Dateneingabe, verpassten Synergien und kostspieligem Umbau. Offene Standards verhindern dieses Problem.',
              },
              {
                id: 'gm-q18-4',
                question: 'Wie sollte eine Gemeinde die digitale Transformation angehen?',
                options: [
                  'Mit einem grossen, umfassenden Transformationsprojekt, das alle Bereiche auf einmal digitalisiert',
                  'Mit konkreten, wirkungsvollen Einzelprojekten, aus denen gelernt wird, und darauf aufbauen',
                  'Abwarten, bis die grossen Städte alle Fehler gemacht haben',
                  'Digitale Transformation ist nur mit einer dedizierten IT-Abteilung möglich',
                ],
                correct: 1,
                explanation: 'Pragmatische Einzelprojekte, die Erfahrung und Vertrauen aufbauen, sind der beste Einstieg. Digitale Transformation ist ein Prozess, kein einmaliges Projekt.',
              },
            ],
          },
        },
        {
          id: 'gm-strategie',
          slug: 'gm-strategie',
          title: 'KI-Strategie entwickeln',
          description: 'Ein praxisnahes Framework für die Entwicklung einer KI-Strategie, die zu einer Gemeinde passt.',
          videoId: '',
          content: `
<h2>KI-Strategie für Gemeinden – pragmatisch und wirkungsorientiert</h2>
<p>Eine KI-Strategie muss nicht ein langes, kompliziertes Dokument sein. Für die meisten Gemeinden genügt ein klares, strukturiertes Papier, das Prioritäten setzt, Verantwortlichkeiten klärt und einen realistischen Zeithorizont definiert. Dieser Abschnitt gibt ein einfaches Framework.</p>

<h3>Baustein 1: Leitbild</h3>
<p>Warum setzt die Gemeinde KI ein? Was soll erreicht werden – besserer Service für die Bevölkerung? Entlastung der Mitarbeitenden? Kosteneinsparung? Ein klares Leitbild verhindert, dass KI-Projekte sinnlos aneinandergereiht werden. Es muss nicht mehr als 3–5 Sätze umfassen, aber es sollte vom Gemeinderat breit getragen werden.</p>

<h3>Baustein 2: Bestandsaufnahme und Potenzialscreening</h3>
<p>Wo gibt es heute den grössten Handlungsbedarf? Welche Prozesse sind zeitintensiv, fehleranfällig oder personalintensiv? Ein halbtägiger Workshop mit Abteilungsleitenden genügt für eine erste Bestandsaufnahme. Die identifizierten Potenziale werden nach Wirkung und Aufwand priorisiert – schnell umsetzbare «Quick Wins» zuerst.</p>

<h3>Baustein 3: Governance-Regeln</h3>
<p>Welche Tools dürfen verwendet werden? Welche Daten dürfen in externe Systeme? Wer ist verantwortlich für KI-Outputs? Klare, einfache Leitlinien für Mitarbeitende schaffen Sicherheit und verhindern, dass jeder nach eigenem Gutdünken handelt. Eine A4-Seite reicht für den Anfang.</p>

<h3>Baustein 4: Pilotprojekte und Evaluation</h3>
<p>Statt auf eine vollständige Strategie zu warten: Drei konkrete Pilotprojekte starten, nach 3–6 Monaten evaluieren und auf Basis der Erfahrungen die Strategie aktualisieren. Learning by doing ist bei KI-Projekten oft wirksamer als umfangreiche Vorabplanung.</p>

<h3>Baustein 5: Fortbildung und Kulturwandel</h3>
<p>Die beste Technologie bringt nichts, wenn das Personal sie nicht nutzt oder nicht versteht. KI-Strategie ist auch Personalstrategie: Regelmässige Weiterbildung, offene Kommunikation über Chancen und Risiken, und eine Fehlerkultur, die Experimente erlaubt, sind entscheidend. Mitarbeitende, die sich eingebunden fühlen, werden zu den grössten Förderern von KI-Projekten.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'gm-q19-1',
                question: 'Was ist der erste Baustein einer KI-Strategie für Gemeinden?',
                options: [
                  'Die Beschaffung von KI-Tools',
                  'Ein Leitbild, das erklärt warum die Gemeinde KI einsetzt und was damit erreicht werden soll',
                  'Die Schulung aller Mitarbeitenden',
                  'Die Einstellung eines KI-Beauftragten',
                ],
                correct: 1,
                explanation: 'Ein klares Leitbild ist das Fundament. Es verhindert, dass KI-Projekte sinnlos aneinandergereiht werden, und schafft gemeinsames Verständnis. Es muss vom Gemeinderat getragen werden.',
              },
              {
                id: 'gm-q19-2',
                question: 'Was sind "Quick Wins" im Rahmen eines KI-Potenzialscreenings?',
                options: [
                  'KI-Projekte mit grossem Wirkungspotenzial und hohem Umsetzungsaufwand',
                  'KI-Projekte mit hohem Wirkungspotenzial und niedrigem Umsetzungsaufwand',
                  'Projekte, die andere Gemeinden bereits umgesetzt haben',
                  'Projekte, die Bundesförderung erhalten',
                ],
                correct: 1,
                explanation: 'Quick Wins haben hohen Nutzen und niedrigen Aufwand. Sie sind ideal für den Einstieg: schnelle Ergebnisse, die das Vertrauen in KI-Projekte stärken.',
              },
              {
                id: 'gm-q19-3',
                question: 'Warum sind einfache Governance-Regeln wichtig für den KI-Einsatz?',
                options: [
                  'Sie verhindern, dass Mitarbeitende überhaupt KI nutzen',
                  'Sie schaffen Sicherheit und verhindern, dass jeder nach eigenem Gutdünken handelt',
                  'Sie ersetzen die Datenschutzgesetzgebung',
                  'Sie sind nur für grosse Gemeindeverwaltungen relevant',
                ],
                correct: 1,
                explanation: 'Klare, einfache Leitlinien (erlaubte Tools, Datenschutzgrenzen, Verantwortlichkeiten) schaffen Sicherheit. Ohne Governance entsteht ein unkontrolliertes Wildwuchs.',
              },
              {
                id: 'gm-q19-4',
                question: 'Warum ist KI-Strategie auch Personalstrategie?',
                options: [
                  'Weil KI das Personal vollständig ersetzt',
                  'Weil Technologie nur wirkt, wenn Personal sie versteht, nutzt und mitgestalten kann',
                  'Weil Personal für KI-Systeme haftet',
                  'Weil Personalkosten durch KI vollständig entfallen',
                ],
                correct: 1,
                explanation: 'Die beste KI bringt nichts, wenn sie nicht genutzt wird. Weiterbildung, offene Kommunikation und eine Fehlerkultur, die Experimente erlaubt, sind entscheidend für den Erfolg.',
              },
            ],
          },
        },
        {
          id: 'gm-change',
          slug: 'gm-change',
          title: 'Change Management und Personalentwicklung',
          description: 'Wie Gemeinden Mitarbeitende durch den KI-Wandel begleiten und nachhaltige Kompetenz aufbauen.',
          videoId: '',
          content: `
<h2>Change Management beim KI-Einsatz in der Gemeinde</h2>
<p>Technologie ist nur so gut wie die Menschen, die sie nutzen. Die grösste Herausforderung bei der KI-Einführung in Gemeinden ist oft nicht technisch, sondern menschlich: Unsicherheit, Widerstände, Überforderung oder schlicht mangelndes Wissen. Gutes Change Management entscheidet über Erfolg oder Misserfolg.</p>

<h3>Typische Reaktionen auf KI-Einführungen</h3>
<p>Mitarbeitende reagieren auf KI-Veränderungen unterschiedlich. Häufige Reaktionen:</p>
<ul>
  <li><strong>Skepsis:</strong> «Das funktioniert bei uns nicht» oder «Das haben wir immer anders gemacht».</li>
  <li><strong>Angst:</strong> «Werde ich durch KI ersetzt?» – eine berechtigte Sorge, die ernst genommen werden muss.</li>
  <li><strong>Überforderung:</strong> «Schon wieder ein neues Tool – ich lerne das nie».</li>
  <li><strong>Begeisterung:</strong> «Endlich! Das erleichtert so vieles» – oft bei jüngeren oder technikaffinen Mitarbeitenden.</li>
</ul>
<p>Alle diese Reaktionen sind normal und verständlich. Change Management bedeutet, sie zu erkennen, ernst zu nehmen und zu begleiten.</p>

<h3>Erfolgsfaktoren für KI-Einführungen</h3>
<ul>
  <li><strong>Früher Einbezug:</strong> Mitarbeitende von Beginn an einbinden – nicht als Empfänger einer fertigen Lösung, sondern als Mitgestaltende.</li>
  <li><strong>Transparenz:</strong> Ehrlich kommunizieren, was KI leisten soll, was es nicht leisten kann, und was es für das Personal bedeutet.</li>
  <li><strong>Piloten mit Freiwilligen starten:</strong> Enthusiasten als erste Nutzer einsetzen und ihre Erfahrungen sichtbar machen.</li>
  <li><strong>Schulung und Support:</strong> Nicht nur einmalig schulen, sondern kontinuierlich begleiten und eine Anlaufstelle für Fragen schaffen.</li>
  <li><strong>Erfolge feiern:</strong> Konkrete Verbesserungen sichtbar machen – das motiviert und überzeugt Skeptiker.</li>
</ul>

<h3>Personalentwicklung für das KI-Zeitalter</h3>
<p>Neue Kompetenzen, die heute in Gemeindeverwaltungen aufgebaut werden sollten:</p>
<ul>
  <li><strong>Prompt-Kompetenz:</strong> KI-Systeme präzise anweisen und gute Ergebnisse erzielen.</li>
  <li><strong>Kritisches Evaluieren:</strong> KI-Outputs auf Richtigkeit und Angemessenheit prüfen.</li>
  <li><strong>Datenbewusstsein:</strong> Verstehen, welche Daten sicher in KI-Tools eingegeben werden dürfen.</li>
  <li><strong>Lernbereitschaft:</strong> KI entwickelt sich schnell – eine Grundhaltung der kontinuierlichen Weiterbildung ist entscheidend.</li>
</ul>
          `,
          order: 4,
          quiz: {
            questions: [
              {
                id: 'gm-q20-1',
                question: 'Was ist die häufigste Herausforderung bei der KI-Einführung in Gemeinden?',
                options: [
                  'Technische Probleme bei der Installation',
                  'Menschliche Faktoren: Unsicherheit, Widerstände und mangelndes Wissen',
                  'Zu hohe Kosten der KI-Tools',
                  'Fehlende gesetzliche Grundlagen',
                ],
                correct: 1,
                explanation: 'Die grösste Hürde ist selten technisch. Unsicherheit, Widerstände und Überforderung bei Mitarbeitenden entscheiden oft mehr über Erfolg oder Misserfolg als die Technologie selbst.',
              },
              {
                id: 'gm-q20-2',
                question: 'Wie sollte mit der Angst von Mitarbeitenden vor Jobverlust durch KI umgegangen werden?',
                options: [
                  'Diese Sorge ist unberechtigt und sollte ignoriert werden',
                  'Die Sorge ist ernst zu nehmen und durch transparente Kommunikation und klare Aussagen zur Personalentwicklung zu begegnen',
                  'Mitarbeitende mit solchen Ängsten sind für den KI-Einsatz ungeeignet',
                  'KI sollte deshalb gar nicht eingeführt werden',
                ],
                correct: 1,
                explanation: 'Die Angst vor Jobverlust ist eine berechtigte Sorge. Transparente Kommunikation, Weiterbildungsangebote und klare Aussagen zur Entwicklung schaffen Vertrauen.',
              },
              {
                id: 'gm-q20-3',
                question: 'Warum sollten Pilotprojekte mit Freiwilligen gestartet werden?',
                options: [
                  'Um die Kosten tief zu halten',
                  'Enthusiasten erzielen bessere Ergebnisse, die als positive Beispiele für Skeptiker wirken',
                  'Um rechtliche Risiken auf einzelne Mitarbeitende zu übertragen',
                  'Weil KI-Tools nur für bestimmte Personen zugänglich sind',
                ],
                correct: 1,
                explanation: 'Freiwillige Enthusiasten erzeugen positive Erfahrungen und Berichte. Das ist der effektivste Weg, Skeptiker zu überzeugen – nicht durch Argumente, sondern durch Beispiele.',
              },
              {
                id: 'gm-q20-4',
                question: 'Was ist Prompt-Kompetenz?',
                options: [
                  'Die Fähigkeit, KI-Software zu programmieren',
                  'Die Fähigkeit, KI-Systeme präzise anzuweisen, um gute Ergebnisse zu erzielen',
                  'Das Wissen über KI-Hardware und Infrastruktur',
                  'Die rechtliche Verantwortung für KI-Entscheide zu übernehmen',
                ],
                correct: 1,
                explanation: 'Prompt-Kompetenz ist die Fähigkeit, KI-Systeme gut anzuweisen. Wer präzise Prompts formuliert, erhält bessere Ergebnisse – eine lernbare Schlüsselkompetenz für alle Verwaltungsmitarbeitenden.',
              },
            ],
          },
        },
      ],
    },

    // ─────────────────────────────────────────
    // MODUL 6 – Zukunftssicherheit mit KI
    // ─────────────────────────────────────────
    {
      id: 'gm-modul-6',
      slug: 'gm-zukunftssicherheit',
      title: 'Zukunftssicherheit mit KI',
      description: 'Ethik, Beschaffung, interkommunale Zusammenarbeit und langfristige Planung für nachhaltigen KI-Einsatz in Gemeinden.',
      icon: '🏅',
      order: 6,
      lessons: [
        {
          id: 'gm-ethik',
          slug: 'gm-ethik',
          title: 'Ethische KI in der öffentlichen Verwaltung',
          description: 'Verantwortungsvoller KI-Einsatz: Fairness, Transparenz, Nachvollziehbarkeit und demokratische Werte.',
          videoId: '',
          content: `
<h2>Ethische KI in der öffentlichen Verwaltung</h2>
<p>Öffentliche Verwaltungen tragen eine besondere Verantwortung gegenüber der Bevölkerung: Neutralität, Gleichbehandlung, Rechtsstaatlichkeit. Diese Werte müssen auch beim KI-Einsatz gewahrt bleiben – sie dürfen durch Technologie nicht untergraben werden. Ethische KI ist in der öffentlichen Verwaltung keine Kür, sondern Pflicht.</p>

<h3>Fairness und Diskriminierungsfreiheit</h3>
<p>KI-Systeme können bestehende gesellschaftliche Ungleichheiten reproduzieren oder verstärken, wenn sie auf verzerrten Daten trainiert wurden. Ein Beispiel: Ein System, das Kreditanträge bewertet und mit historischen Daten trainiert wurde, könnte Gruppen benachteiligen, die auch in der Vergangenheit benachteiligt wurden. Für Gemeinden bedeutet das: KI-Systeme, die in der Verwaltung eingesetzt werden, müssen auf Fairness geprüft werden – besonders wenn sie Menschen betreffen.</p>

<h3>Transparenz und Nachvollziehbarkeit</h3>
<p>Bürgerinnen und Bürger haben ein Recht zu wissen, wenn KI bei Entscheiden, die sie betreffen, eine Rolle spielt. Das schafft Vertrauen und ermöglicht die Überprüfung von Entscheiden. Transparenz bedeutet nicht, dass jeder Algorithmus öffentlich zugänglich sein muss – aber es bedeutet, dass die Grundlogik eines Systems erklärt werden kann.</p>

<h3>Menschliche Kontrolle</h3>
<p>«Human in the loop» ist nicht nur ein technisches Konzept, sondern ein ethisches Gebot in der öffentlichen Verwaltung. Insbesondere bei Entscheiden, die Grundrechte berühren oder erhebliche Auswirkungen auf Einzelpersonen haben, muss ein Mensch im Entscheidungsprozess bleiben. KI kann vorbereiten, empfehlen, beschleunigen – entscheiden tut der Mensch.</p>

<h3>Rechenschaftspflicht</h3>
<p>Wenn etwas schiefgeht, muss klar sein, wer verantwortlich ist. Bei KI-Systemen ist das eine nicht-triviale Frage: Haftet der Anbieter? Die Gemeinde? Die Mitarbeiterin, die das Tool benutzt hat? Klare Verantwortlichkeitsregeln – intern und vertraglich mit Anbietern – sind ein wesentlicher Bestandteil ethischen KI-Einsatzes.</p>

<h3>Ethik als Wettbewerbsvorteil</h3>
<p>Gemeinden, die KI verantwortungsvoll und transparent einsetzen, stärken das Vertrauen der Bevölkerung. In einer Zeit, in der viele Menschen KI skeptisch gegenüberstehen, ist ethischer KI-Einsatz auch ein Signal: Die Gemeinde nimmt ihre Verantwortung ernst – und das verdient Vertrauen.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'gm-q21-1',
                question: 'Warum können KI-Systeme bestehende Ungleichheiten reproduzieren?',
                options: [
                  'Weil KI bewusst diskriminiert',
                  'Weil KI auf historischen Daten trainiert wird, die gesellschaftliche Ungleichheiten widerspiegeln können',
                  'Weil KI-Anbieter Diskriminierung absichtlich einbauen',
                  'Weil KI nur für privilegierte Bevölkerungsgruppen zugänglich ist',
                ],
                correct: 1,
                explanation: 'KI lernt aus Daten. Wenn Trainingsdaten vergangene Ungleichheiten widerspiegeln, reproduziert das Modell diese. Deswegen müssen KI-Systeme aktiv auf Fairness geprüft werden.',
              },
              {
                id: 'gm-q21-2',
                question: 'Was bedeutet Transparenz bei KI-Systemen in der Verwaltung?',
                options: [
                  'Alle KI-Algorithmen müssen öffentlich zugänglich sein',
                  'Bürger haben das Recht zu wissen, wenn KI bei sie betreffenden Entscheiden eine Rolle spielt',
                  'KI-Systeme müssen in Echtzeit überwacht werden',
                  'Transparenz ist optional und nur bei Klagen relevant',
                ],
                correct: 1,
                explanation: 'Transparenz bedeutet: Bürger wissen, wenn KI involviert ist, und die Grundlogik eines Systems kann erklärt werden. Das ist ein Grundrecht und Vertrauensfundament.',
              },
              {
                id: 'gm-q21-3',
                question: 'Was bedeutet "Human in the loop" in der Verwaltungspraxis?',
                options: [
                  'Mitarbeitende bedienen KI-Systeme physisch',
                  'Bei Entscheiden, die Grundrechte oder Menschen erheblich betreffen, bleibt ein Mensch im Entscheidungsprozess',
                  'KI-Systeme müssen von menschlichen Beobachtern überwacht werden',
                  'Jede KI-Ausgabe muss ausgedruckt und manuell abgelegt werden',
                ],
                correct: 1,
                explanation: '«Human in the loop» ist ein ethisches Gebot: Wo Grundrechte oder erhebliche Auswirkungen im Spiel sind, entscheidet der Mensch. KI kann vorbereiten und empfehlen, nicht autonom entscheiden.',
              },
              {
                id: 'gm-q21-4',
                question: 'Warum ist ethischer KI-Einsatz auch ein Vertrauensvorteil für Gemeinden?',
                options: [
                  'Weil er günstiger ist als unethischer KI-Einsatz',
                  'Weil er das Vertrauen der Bevölkerung stärkt und zeigt, dass die Gemeinde ihre Verantwortung ernst nimmt',
                  'Weil er gesetzlich vorgeschrieben ist und Bussen vermeidet',
                  'Weil ethische KI-Systeme technisch leistungsfähiger sind',
                ],
                correct: 1,
                explanation: 'Vertrauen ist das wichtigste Kapital der öffentlichen Verwaltung. Transparenter, verantwortungsvoller KI-Einsatz signalisiert: Die Gemeinde handelt im Interesse ihrer Bevölkerung.',
              },
            ],
          },
        },
        {
          id: 'gm-beschaffung',
          slug: 'gm-beschaffung',
          title: 'Beschaffung von KI-Lösungen',
          description: 'Öffentliches Beschaffungsrecht, Evaluationskriterien und praktischer Leitfaden für den Einkauf von KI.',
          videoId: '',
          content: `
<h2>KI-Beschaffung für Gemeinden – rechtssicher und klug</h2>
<p>Die Beschaffung von KI-Lösungen ist für Gemeinden kein gewöhnlicher Einkauf. Neben dem Preis spielen rechtliche, datenschutzrechtliche, sicherheitstechnische und strategische Faktoren eine wichtige Rolle. Wer jetzt die richtigen Fragen stellt, vermeidet teure Fehler später.</p>

<h3>Wann gilt das öffentliche Beschaffungsrecht?</h3>
<p>Die Schwellenwerte des Submissionsrechts variieren je nach Kanton. Als Faustregel gilt:</p>
<ul>
  <li>Bis ca. CHF 100'000: Freihändige Vergabe oder Einladungsverfahren möglich</li>
  <li>Ab ca. CHF 100'000–250'000: Offenes oder selektives Verfahren je nach Kanton</li>
  <li>Ab GATT/WTO-Schwellenwert (ca. CHF 230'000 für Dienstleistungen): Internationales Verfahren</li>
</ul>
<p>KI-Lösungen gelten als IT-Dienstleistungen. Bei Cloud-Abonnements ist die Berechnung des Auftragswerts über die gesamte Vertragslaufzeit massgebend. Im Zweifel immer den Rechtsdienst oder die kantonale Beschaffungsstelle konsultieren.</p>

<h3>Evaluationskriterien für KI-Lösungen</h3>
<p>Neben Preis und Funktionsumfang sollten folgende Kriterien in der Ausschreibung enthalten sein:</p>
<ul>
  <li><strong>Datenspeicherort:</strong> Schweiz oder EU bevorzugt; keine Übertragung in Drittstaaten</li>
  <li><strong>Datenschutzzertifizierungen:</strong> ISO 27001, SOC 2 oder vergleichbar</li>
  <li><strong>Auftragsverarbeitungsvertrag:</strong> Muss abgeschlossen werden können</li>
  <li><strong>Transparenz:</strong> Wie erklärt der Anbieter, wie seine KI Entscheide trifft?</li>
  <li><strong>Datenportabilität:</strong> Können Daten beim Vertragsende exportiert werden?</li>
  <li><strong>Referenzen:</strong> Erfahrung mit Schweizer Gemeindeverwaltungen vorhanden?</li>
  <li><strong>Support und Schulung:</strong> Werden Mitarbeitende eingeführt und begleitet?</li>
</ul>

<h3>Vertragliche Absicherung</h3>
<p>Entscheidende Vertragsklauseln: klare Regelung zur Dateneigentümerschaft (die Gemeinde bleibt Eigentümerin ihrer Daten), Ausstiegsklauseln mit angemessener Frist, Verbot des Weitergebens von Gemeindedaten an Dritte, Pflicht zur Meldung von Sicherheitsvorfällen innerhalb von 24 Stunden.</p>

<h3>Lock-in vermeiden</h3>
<p>Bei KI-Tools entsteht schnell Abhängigkeit, wenn Daten, Konfigurationen und Integrationen nur mit einem Anbieter funktionieren. Offene Standards, standardisierte Datenformate (z.B. JSON, CSV-Export) und klare Ausstiegsklauseln im Vertrag reduzieren diese Abhängigkeit. Eine «Exit-Strategie» sollte bereits beim Vertragsabschluss mitgedacht werden.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'gm-q22-1',
                question: 'Wie wird der Auftragswert bei Cloud-KI-Abonnements für das Submissionsrecht berechnet?',
                options: [
                  'Nur der Jahrespreis ist massgebend',
                  'Der Auftragswert ergibt sich über die gesamte Vertragslaufzeit',
                  'Cloud-Abonnements sind vom Submissionsrecht ausgenommen',
                  'Nur die Einführungskosten sind massgebend',
                ],
                correct: 1,
                explanation: 'Der Auftragswert berechnet sich über die gesamte Vertragslaufzeit – nicht nur den Jahrespreis. Das kann schnell über die Schwellenwerte führen und eine Ausschreibung auslösen.',
              },
              {
                id: 'gm-q22-2',
                question: 'Welches Kriterium muss bei der KI-Beschaffung bezüglich Datenspeicherung geprüft werden?',
                options: [
                  'Die Serverfarbe oder Marke des Anbieters',
                  'Datenspeicherung in der Schweiz oder EU; keine Übertragung in Drittstaaten',
                  'Die Anzahl der Server des Anbieters',
                  'Datenspeicherung ist bei KI-Tools nicht relevant',
                ],
                correct: 1,
                explanation: 'Gemeinden sind an nDSG und kantonales Recht gebunden. Daten in Drittstaaten zu übertragen ist rechtlich problematisch – Schweiz oder EU sind zu bevorzugen.',
              },
              {
                id: 'gm-q22-3',
                question: 'Was ist eine Exit-Strategie bei der KI-Beschaffung?',
                options: [
                  'Ein Notfallplan für den Fall eines Cyberangriffs',
                  'Die Planung, wie die Gemeinde das System verlassen kann, inklusive Datenexport und Ausstiegsklauseln',
                  'Die Möglichkeit, das System schnell abzuschalten',
                  'Ein Plan für den Fall, dass der Anbieter Konkurs geht',
                ],
                correct: 1,
                explanation: 'Eine Exit-Strategie stellt sicher, dass die Gemeinde das System jederzeit verlassen kann, ohne Daten zu verlieren. Sie muss bereits beim Vertragsabschluss mitgedacht werden.',
              },
              {
                id: 'gm-q22-4',
                question: 'Wem gehören die Daten, die in einem KI-System verarbeitet werden?',
                options: [
                  'Dem KI-Anbieter, da er die Infrastruktur stellt',
                  'Der Gemeinde – das muss vertraglich explizit geregelt werden',
                  'Dem Kanton, der die Gemeinde beaufsichtigt',
                  'Den Bürgerinnen und Bürgern, deren Daten es sind',
                ],
                correct: 1,
                explanation: 'Die Gemeinde bleibt Dateneigentümerin. Das muss vertraglich explizit festgehalten werden. Ohne diese Regelung riskiert die Gemeinde, ihre Daten faktisch an den Anbieter zu verlieren.',
              },
            ],
          },
        },
        {
          id: 'gm-kooperation',
          slug: 'gm-kooperation',
          title: 'Zusammenarbeit mit Nachbargemeinden',
          description: 'Warum interkommunale KI-Kooperation Sinn macht und wie sie praktisch umgesetzt werden kann.',
          videoId: '',
          content: `
<h2>Interkommunale KI-Kooperation – gemeinsam stärker</h2>
<p>Viele Schweizer Gemeinden sind klein. Eigenständige KI-Projekte stossen schnell an Ressourcengrenzen: zu wenig Budget für gute Lösungen, zu wenig IT-Kompetenz für die Umsetzung, zu wenig Transaktionsvolumen für den Return on Investment. Die Antwort liegt oft in der Zusammenarbeit mit Nachbargemeinden – ein erprobtes Modell in der Schweizer Gemeindewelt.</p>

<h3>Was sich gemeinsam nutzen lässt</h3>
<ul>
  <li><strong>Gemeinsame KI-Tools:</strong> Ein KI-Chatbot, der auf kantonales Recht und gemeinsame kommunale Inhalte trainiert ist, lässt sich auf mehrere Gemeinden skalieren.</li>
  <li><strong>Geteilte Beschaffung:</strong> Gemeinsam ausgeschriebene Lösungen haben mehr Verhandlungsmacht und niedrigere Stückkosten.</li>
  <li><strong>Wissensaustausch:</strong> Gemeinden teilen Erfahrungen, Fehler und Good Practices – das verhindert paralleles Erfinden des Rades.</li>
  <li><strong>Gemeinsame Schulungen:</strong> Weiterbildungen für Mitarbeitende mehrerer Gemeinden sind effizienter und günstiger.</li>
  <li><strong>Interkommunale KI-Fachstelle:</strong> Ein geteilter KI-Beauftragter für mehrere kleine Gemeinden ist eine kosteneffiziente Lösung.</li>
</ul>

<h3>Modelle interkommunaler Zusammenarbeit</h3>
<p>Verschiedene rechtliche und organisatorische Modelle stehen zur Verfügung:</p>
<ul>
  <li><strong>Informelle Vernetzung:</strong> Regelmässiger Erfahrungsaustausch, keine formale Struktur – der einfachste Einstieg.</li>
  <li><strong>Gemeinsame Beschaffung:</strong> Formalisiertes Konsortialprojekt für Ausschreibung und Beschaffung.</li>
  <li><strong>Zweckverband:</strong> Für dauerhafte, umfangreichere Kooperationen mit eigener Rechtspersönlichkeit.</li>
  <li><strong>Kantonale Koordination:</strong> Einige Kantone bieten Rahmen für gemeinsame Digitalisierungsprojekte an.</li>
</ul>

<h3>Beispiel: Gemeinsamer Chatbot für Gemeindeverband</h3>
<p>Mehrere Gemeinden im gleichen Kanton schliessen sich zusammen, um gemeinsam einen KI-Chatbot zu beschaffen und zu betreiben. Der Chatbot ist auf kantonales Recht und allgemeine Verwaltungsinformationen trainiert; jede Gemeinde fügt ihre spezifischen Inhalte (Kontakte, Öffnungszeiten, lokale Reglemente) hinzu. Die Kosten werden aufgeteilt, die Erfahrungen geteilt. Alle profitieren von einer Lösung, die keine einzelne Gemeinde allein finanzieren könnte.</p>

<h3>Wo anfangen?</h3>
<p>Ein guter erster Schritt: Die Gemeindeschreiberinnen und -schreiber der Nachbargemeinden zum Austausch einladen. Was machen andere? Was funktioniert? Was wurde ausprobiert und gescheitert? Dieser informelle Wissensaustausch ist oft der Beginn einer fruchtbaren, formalisierteren Kooperation.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'gm-q23-1',
                question: 'Warum ist interkommunale KI-Kooperation besonders für kleine Gemeinden sinnvoll?',
                options: [
                  'Weil grosse Gemeinden das nicht dürfen',
                  'Weil kleine Gemeinden allein zu wenig Budget, Kompetenz und Transaktionsvolumen für rentable KI-Projekte haben',
                  'Weil der Bund Kooperationen finanziell fördert',
                  'Weil KI nur funktioniert, wenn mehrere Gemeinden zusammenarbeiten',
                ],
                correct: 1,
                explanation: 'Kleine Gemeinden stossen bei eigenständigen KI-Projekten schnell an Ressourcengrenzen. Gemeinsam haben sie mehr Verhandlungsmacht, geteilte Kosten und gebündeltes Wissen.',
              },
              {
                id: 'gm-q23-2',
                question: 'Was ist der einfachste Einstieg in interkommunale KI-Kooperation?',
                options: [
                  'Sofortiger Aufbau eines gemeinsamen Zweckverbands',
                  'Informeller Erfahrungsaustausch zwischen Gemeinden ohne formale Struktur',
                  'Gemeinsame Ausschreibung eines umfassenden KI-Systems',
                  'Antrag an den Kanton für ein Förderprogramm',
                ],
                correct: 1,
                explanation: 'Informeller Austausch – welche Erfahrungen haben andere gemacht? – ist schnell, kostenlos und oft der Beginn einer fruchtbareren Zusammenarbeit.',
              },
              {
                id: 'gm-q23-3',
                question: 'Wie funktioniert ein gemeinsamer Chatbot für mehrere Gemeinden?',
                options: [
                  'Alle Gemeinden nutzen exakt dasselbe System ohne Anpassungen',
                  'Der Chatbot ist auf gemeinsame kantonale Inhalte trainiert; jede Gemeinde fügt spezifische lokale Inhalte hinzu',
                  'Nur die grösste Gemeinde pflegt den Chatbot für alle',
                  'Der Chatbot beantwortet nur Fragen, die alle Gemeinden betreffen',
                ],
                correct: 1,
                explanation: 'Ein gemeinsamer Chatbot nutzt eine geteilte Basis (kantonales Recht, allgemeine Infos) und wird von jeder Gemeinde mit ihren spezifischen Inhalten ergänzt. Kosten werden geteilt, Nutzen vervielfacht.',
              },
              {
                id: 'gm-q23-4',
                question: 'Was ist eine interkommunale KI-Fachstelle?',
                options: [
                  'Eine staatliche Behörde für KI-Regulierung',
                  'Ein geteilter KI-Beauftragter, der mehrere kleine Gemeinden kostengünstig betreut',
                  'Eine Beratungsfirma für KI-Einführung in Gemeinden',
                  'Ein kantonales KI-Kompetenzzentrum',
                ],
                correct: 1,
                explanation: 'Eine geteilte Fachstelle – ein KI-Beauftragter für mehrere Gemeinden – ist kosteneffizient. Kleingemeinden können sich so KI-Kompetenz leisten, die sie allein nicht finanzieren könnten.',
              },
            ],
          },
        },
        {
          id: 'gm-langfrist',
          slug: 'gm-langfrist',
          title: 'Langfristiger KI-Einsatz planen',
          description: 'Wie Gemeinden KI nachhaltig, adaptiv und zukunftssicher in ihre Verwaltung integrieren.',
          videoId: '',
          content: `
<h2>Langfristiger KI-Einsatz – nachhaltig und zukunftssicher</h2>
<p>KI einzuführen ist der erste Schritt. Den Einsatz dauerhaft zu verankern, anzupassen und weiterzuentwickeln ist die eigentliche Herausforderung. Gemeinden, die KI langfristig erfolgreich nutzen wollen, brauchen mehr als gute Tools: Sie brauchen eine lernende Organisation.</p>

<h3>Kontinuierliches Lernen und Anpassen</h3>
<p>KI-Technologie entwickelt sich schnell. Ein Tool, das heute State of the Art ist, kann in zwei Jahren veraltet sein. Gemeinden müssen sich regelmässig fragen: Nutzen wir das Tool noch optimal? Gibt es bessere Alternativen? Hat sich der rechtliche Rahmen verändert? Das erfordert keine grossen Ressourcen – aber eine institutionalisierte Routine des Überprüfens und Anpassens.</p>

<h3>KI-Portfolio-Management</h3>
<p>Mit der Zeit akkumulieren Gemeinden mehrere KI-Systeme: ein Chatbot, ein Transkriptions-Tool, ein Dokumentenverwaltungssystem mit KI-Funktionen, ein Automatisierungstool. Diese «KI-Portfolio» braucht aktives Management: Welche Systeme liefern noch Wert? Welche können konsolidiert werden? Gibt es gefährliche Abhängigkeiten von einzelnen Anbietern? Ein jährliches Portfolio-Review lohnt sich.</p>

<h3>Wissensmanagement und Dokumentation</h3>
<p>Erfahrungswissen über KI-Systeme (was funktioniert, welche Prompts sind gut, welche Fehler sind bekannt) darf nicht in den Köpfen einzelner Mitarbeitender gespeichert bleiben. Systematische Dokumentation – einfache interne Wikis oder Handbücher – macht dieses Wissen transferierbar und resilient gegenüber Personalwechseln.</p>

<h3>Resilienz und Notfallplanung</h3>
<p>Was passiert, wenn ein zentrales KI-System ausfällt? Wenn der Anbieter Konkurs geht oder den Service einstellt? Gemeinden sollten für kritische Prozesse immer eine analoge Backup-Lösung haben. Abhängigkeit von einzelnen digitalen Diensten ist ein Risiko, das beherrschbar ist – wenn man es frühzeitig mitdenkt.</p>

<h3>Vision: Die KI-kompetente Gemeinde</h3>
<p>Das Ziel ist keine vollautomatisierte Gemeinde, sondern eine <strong>KI-kompetente Gemeinde</strong>: eine Verwaltung, in der alle Mitarbeitenden KI als selbstverständliches Werkzeug kennen und nutzen, die Technologie im Dienst der Bevölkerung einsetzt, ethische Grundsätze in der DNA verankert hat und sich kontinuierlich weiterentwickelt. Das ist kein Endzustand – sondern ein Prozess, der heute beginnt.</p>

<blockquote>«Eine gute Gemeinde ist nicht die, die die neueste KI hat. Es ist die, die KI weise einsetzt – für ihre Menschen, mit Verantwortung und Augenmass.»</blockquote>
          `,
          order: 4,
          quiz: {
            questions: [
              {
                id: 'gm-q24-1',
                question: 'Was ist KI-Portfolio-Management in einer Gemeinde?',
                options: [
                  'Die Verwaltung der Aktienportfolios der Gemeindefinanzen',
                  'Das aktive Überprüfen und Steuern aller eingesetzten KI-Systeme: Wert, Abhängigkeiten, Konsolidierung',
                  'Das Sammeln von KI-Produktkatalogen verschiedener Anbieter',
                  'Die Budgetplanung für KI-Investitionen',
                ],
                correct: 1,
                explanation: 'KI-Portfolio-Management stellt sicher, dass die Gemeinde einen Überblick über alle KI-Systeme hat, deren Wert regelmässig prüft und Abhängigkeiten und Konsolidierungspotenziale erkennt.',
              },
              {
                id: 'gm-q24-2',
                question: 'Warum ist Wissensmanagement bei KI-Systemen wichtig?',
                options: [
                  'KI-Systeme sind zu komplex für interne Dokumentation',
                  'Erfahrungswissen soll nicht an einzelne Mitarbeitende gebunden bleiben, sondern dokumentiert und transferierbar sein',
                  'Wissensmanagement ist nur bei grossen KI-Projekten relevant',
                  'Externe Anbieter übernehmen das Wissensmanagement',
                ],
                correct: 1,
                explanation: 'Wenn Wissen über KI-Systeme nur in einzelnen Köpfen steckt, ist die Gemeinde verletzlich bei Personalwechseln. Einfache Dokumentation macht Wissen resilient und teilbar.',
              },
              {
                id: 'gm-q24-3',
                question: 'Was ist wichtig bei der Notfallplanung für KI-abhängige Prozesse?',
                options: [
                  'Alle Prozesse sofort auf KI umstellen, damit kein Notfall entstehen kann',
                  'Für kritische Prozesse eine analoge Backup-Lösung bereithalten',
                  'Notfallplanung ist nur bei Naturkatastrophen relevant',
                  'KI-Anbieter haften für Ausfälle und übernehmen den Notfallbetrieb',
                ],
                correct: 1,
                explanation: 'Abhängigkeit von digitalen KI-Diensten ist ein reales Risiko. Für kritische Prozesse braucht es analoge Rückfalllösungen – Anbieter können ausfallen oder den Betrieb einstellen.',
              },
              {
                id: 'gm-q24-4',
                question: 'Was ist das Ziel einer "KI-kompetenten Gemeinde"?',
                options: [
                  'Die vollständige Automatisierung aller Verwaltungsaufgaben',
                  'Eine Verwaltung, in der alle Mitarbeitenden KI als Werkzeug kennen, die es weise im Dienst der Bevölkerung einsetzt, mit ethischen Grundsätzen verankert',
                  'Die Gemeinde mit den meisten KI-Tools in der Region',
                  'Eine Verwaltung ohne menschliche Mitarbeitende',
                ],
                correct: 1,
                explanation: 'Das Ziel ist Kompetenz und Weisheit im KI-Einsatz – nicht maximale Automatisierung. Eine KI-kompetente Gemeinde setzt Technologie gezielt, ethisch und verantwortungsvoll für die Bevölkerung ein.',
              },
            ],
          },
        },
      ],
    },
  ],
};
