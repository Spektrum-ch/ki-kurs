import type { Course } from '@/types';

export const COURSE_BUERO: Course = {
  title: 'KI im Büroalltag',
  slug: 'ki-buroalltag',
  description: 'Der praktische Einstiegskurs für alle, die KI-Tools im Büro sinnvoll einsetzen wollen – von Texten über Meetings bis zu Datenanalyse.',
  modules: [
    {
      id: 'bo-modul-1',
      slug: 'bo-tools',
      title: 'KI-Tools kennenlernen',
      description: 'Welche Tools es gibt, was sie können – und wie man mit Texten, Recherche und Wissensarbeit sofort loslegen kann.',
      icon: '🛠️',
      order: 1,
      lessons: [
        {
          id: 'bo-tools-ueberblick',
          slug: 'bo-tools-ueberblick',
          title: 'ChatGPT & Co. im Überblick',
          description: 'Welche KI-Tools existieren, was sie können und welches für welchen Zweck am besten geeignet ist.',
          videoId: '',
          content: `
<h2>Der KI-Tool-Markt – ein Überblick</h2>
<p>Der Markt für KI-Tools hat sich in den letzten Jahren explosionsartig entwickelt. Es gibt heute für fast jeden Bedarf spezialisierte Werkzeuge. Der Einstieg ist leichter als gedacht – man muss aber wissen, wo man anfangen soll, damit man sich nicht im Angebot verliert.</p>

<h3>Die wichtigsten Kategorien</h3>
<ul>
  <li><strong>Textgenerierung und -verarbeitung:</strong> ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google) – die vielseitigsten Tools für den Büroalltag.</li>
  <li><strong>Bildgenerierung:</strong> Midjourney, DALL-E, Adobe Firefly – erstellen professionelle Bilder aus Textbeschreibungen.</li>
  <li><strong>Recherche und Wissensarbeit:</strong> Perplexity AI, NotebookLM (Google) – KI-gestützte Suche mit Quellenangaben.</li>
  <li><strong>Präsentationen:</strong> Gamma, Tome – erstellen Präsentationsvorlagen automatisch aus Texteingaben.</li>
  <li><strong>Audio und Video:</strong> Otter.ai, Fireflies – transkribieren Meetings und erstellen Zusammenfassungen.</li>
</ul>

<h3>ChatGPT vs. Claude – der Direktvergleich</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Eigenschaft</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">ChatGPT</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Claude</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Stärke</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Vielseitigkeit, Bildgenerierung (DALL-E)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Lange Dokumente, präzises Schreiben</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kostenlos</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Ja (mit Einschränkungen)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Ja (mit Einschränkungen)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Empfehlung für</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Allgemeine Aufgaben, Bilder, Code</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Lange Texte, Analyse, Berichte</td>
    </tr>
  </tbody>
</table>

<blockquote>Empfehlung für Einsteiger: Starte mit ChatGPT oder Claude. Beide sind kostenlos nutzbar und decken 80% aller Büroaufgaben ab. Erst wenn du weisst, was du brauchst, lohnt sich die bezahlte Version.</blockquote>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'bo-q1-1',
                question: 'Welches Tool ist am besten für KI-gestützte Recherche mit Quellenangaben geeignet?',
                options: [
                  'Midjourney',
                  'Perplexity AI',
                  'DALL-E',
                  'ElevenLabs',
                ],
                correct: 1,
                explanation: 'Perplexity AI ist eine KI-Suchmaschine, die transparent Quellen ausweist. Ideal für Recherchen, bei denen die Herkunft von Informationen wichtig ist.',
              },
              {
                id: 'bo-q1-2',
                question: 'Was ist laut Vergleich die Stärke von Claude gegenüber ChatGPT?',
                options: [
                  'Bessere Bildgenerierung',
                  'Günstigerer Preis',
                  'Besonders stark bei langen Dokumenten und präzisem Schreiben',
                  'Direktintegration in Microsoft Office',
                ],
                correct: 2,
                explanation: 'Claude ist besonders gut bei langen Dokumenten und präzisem, nuanciertem Schreiben. ChatGPT punktet mehr durch Vielseitigkeit und Bildgenerierung via DALL-E.',
              },
              {
                id: 'bo-q1-3',
                question: 'Mit welchem Tool sollte ein Einsteiger im Büro beginnen?',
                options: [
                  'Sofort mit allen Tools gleichzeitig starten',
                  'Mit Midjourney für professionelle Bilder beginnen',
                  'Mit ChatGPT oder Claude – beide kostenlos nutzbar und vielseitig',
                  'Erst alle Tools kaufen, dann entscheiden',
                ],
                correct: 2,
                explanation: 'ChatGPT und Claude sind kostenlos, vielseitig und decken die meisten Büroaufgaben ab. Sie sind der ideale Einstiegspunkt, ohne finanzielle Verpflichtung.',
              },
            ],
          },
        },
        {
          id: 'bo-texte',
          slug: 'bo-texte',
          title: 'Texte schreiben mit KI',
          description: 'E-Mails, Berichte und Zusammenfassungen effizient mit KI-Unterstützung erstellen.',
          videoId: '',
          content: `
<h2>Texte schreiben mit KI – schneller und besser</h2>
<p>Texte schreiben gehört zu den häufigsten Aufgaben im Büroalltag. E-Mails, Berichte, Zusammenfassungen, Protokolle, Präsentationstexte – all das nimmt Zeit in Anspruch, die oft an anderer Stelle fehlt. KI ist hier ein echter Produktivitätsbooster: Sie erstellt in Sekunden einen ersten Entwurf, den du dann verfeinern kannst.</p>

<h3>E-Mails: Der erste Entwurf in 30 Sekunden</h3>
<p>Statt vor einem leeren Textfeld zu sitzen, beschreibst du ChatGPT oder Claude kurz, was du kommunizieren willst. Das KI-Tool liefert einen vollständigen Entwurf, den du lesen, anpassen und versenden kannst. Beispiel-Prompt:</p>
<p><em>«Schreibe eine höfliche Absage an einen Lieferanten. Wir haben uns für einen anderen Anbieter entschieden, möchten aber die Zusammenarbeit in Zukunft nicht ausschliessen. Ton: professionell und wertschätzend. Länge: ca. 5 Sätze.»</em></p>

<h3>Berichte und Zusammenfassungen</h3>
<p>Für längere Texte lieferst du der KI deine Stichpunkte oder rohen Notizen, und sie formuliert daraus einen strukturierten Text. Besonders nützlich ist die Möglichkeit, Ton und Länge zu steuern: «Schreibe einen formellen Bericht für den Gemeinderat» klingt anders als «Schreibe eine informelle Zusammenfassung für das Team».</p>

<h3>Texte verbessern und anpassen</h3>
<p>KI kann auch bestehende Texte überarbeiten. Nützliche Aufgaben:</p>
<ul>
  <li>«Kürze diesen Text auf die Hälfte ohne wichtige Informationen zu verlieren»</li>
  <li>«Mache diesen Text verständlicher für Nicht-Fachleute»</li>
  <li>«Übersetze diesen Text ins Englische – professioneller Ton»</li>
  <li>«Prüfe diesen Text auf Klarheit und formuliere unklare Stellen besser»</li>
</ul>

<h3>Wichtiger Hinweis</h3>
<p>KI-generierte Texte sind Entwürfe, keine Endprodukte. Lies immer Korrektur, stelle sicher dass Fakten stimmen und passe den Text deiner eigenen Stimme an. Besonders bei offiziellen oder sensiblen Kommunikationen ist Vorsicht geboten.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'bo-q2-1',
                question: 'Wie solltest du KI am effektivsten für das Schreiben von E-Mails nutzen?',
                options: [
                  'KI schreibt und versendet E-Mails vollständig autonom',
                  'KI erstellt einen Entwurf basierend auf deiner kurzen Beschreibung – du liest und passt an',
                  'Nur für E-Mails auf Englisch',
                  'Nur für kurze E-Mails unter 3 Sätzen',
                ],
                correct: 1,
                explanation: 'Der effektivste Workflow: du beschreibst kurz den Inhalt, KI liefert den Entwurf, du überarbeitest. Das spart die meiste Zeit bei gleichbleibend guter Qualität.',
              },
              {
                id: 'bo-q2-2',
                question: 'Welche Aufgabe ist ein gutes Beispiel für die Verbesserung von Texten mit KI?',
                options: [
                  'KI unterschreibt Dokumente digital',
                  'KI kürzt einen bestehenden Text auf die Hälfte ohne wichtige Inhalte zu verlieren',
                  'KI druckt Texte aus',
                  'KI speichert Texte automatisch',
                ],
                correct: 1,
                explanation: 'Texte kürzen, vereinfachen, umformulieren oder übersetzen – das sind ideale Aufgaben für KI. Sie kann Bestehendes schnell in die gewünschte Form bringen.',
              },
              {
                id: 'bo-q2-3',
                question: 'Warum solltest du KI-generierte Texte immer selbst lesen und anpassen?',
                options: [
                  'Weil KI nur auf Englisch schreibt',
                  'Weil KI-Texte manchmal sachlich falsch sind und die persönliche Stimme fehlt',
                  'Weil das gesetzlich vorgeschrieben ist',
                  'Weil KI-Texte immer zu lang sind',
                ],
                correct: 1,
                explanation: 'KI kann halluzinieren (Fakten erfinden) und kennt deinen individuellen Stil nicht. Nur du kannst sicherstellen, dass der Text korrekt, angemessen und authentisch ist.',
              },
            ],
          },
        },
        {
          id: 'bo-recherche',
          slug: 'bo-recherche',
          title: 'Recherche & Wissensarbeit',
          description: 'KI für die Informationssuche nutzen, Dokumente zusammenfassen und Wissen effizient verarbeiten.',
          videoId: '',
          content: `
<h2>KI als Rechercheassistent</h2>
<p>Wissensarbeit – Informationen suchen, bewerten, zusammenfassen und weiterverarbeiten – ist ein Kernbestandteil vieler Bürotätigkeiten. KI kann diesen Prozess erheblich beschleunigen. Der Schlüssel liegt darin, die richtigen Tools für den richtigen Zweck zu nutzen.</p>

<h3>Perplexity AI: Recherche mit Quellennachweis</h3>
<p>Perplexity AI ist eine KI-Suchmaschine, die Antworten nicht einfach generiert, sondern aktiv im Web sucht und Quellen transparent ausweist. Das macht sie ideal für:</p>
<ul>
  <li>Aktuelle Informationen zu Themen, die sich schnell ändern</li>
  <li>Recherchen, bei denen die Quelle wichtig ist</li>
  <li>Schnellen Überblick über ein neues Thema mit verlässlichen Quellenangaben</li>
</ul>

<h3>Dokumente zusammenfassen mit Claude oder ChatGPT</h3>
<p>Lade ein PDF oder füge einen langen Text ein und stelle gezielte Fragen: «Was sind die drei wichtigsten Punkte?» oder «Gibt es in diesem Dokument Risiken oder offene Fragen?». Das funktioniert besonders gut mit Claude, das auch sehr lange Dokumente verarbeiten kann. <strong>NotebookLM</strong> von Google ist speziell dafür entwickelt: Du lädst mehrere Quellen hoch und kannst gezielt fragen.</p>

<h3>Wissen aus Gesprächen und Notizen destillieren</h3>
<p>Hast du nach einem langen Meeting viele unstrukturierte Notizen? Kopiere sie in ChatGPT und bitte darum: «Destilliere die wichtigsten Erkenntnisse und nächsten Schritte aus diesen Notizen». In wenigen Sekunden entsteht eine klare Zusammenfassung.</p>

<h3>Wichtig: Kritisches Lesen bleibt Pflicht</h3>
<p>KI-gestützte Recherche beschleunigt den Prozess enorm – aber sie ersetzt nicht das kritische Lesen und Einordnen. Fakten, die für Entscheide relevant sind, solltest du immer in der Originalquelle nachprüfen. Besonders bei rechtlichen, finanziellen oder medizinischen Informationen ist Eigenverantwortung unerlässlich.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'bo-q3-1',
                question: 'Was ist der Hauptvorteil von Perplexity AI gegenüber ChatGPT für Recherchen?',
                options: [
                  'Perplexity ist günstiger',
                  'Perplexity sucht aktiv im Web und weist Quellen transparent aus',
                  'Perplexity kann Bilder erstellen',
                  'Perplexity funktioniert offline',
                ],
                correct: 1,
                explanation: 'Perplexity AI kombiniert KI mit aktueller Websuche und zeigt Quellen transparent. Das macht es ideal für Recherchen, bei denen Aktualität und Quellennachweis wichtig sind.',
              },
              {
                id: 'bo-q3-2',
                question: 'Welches Tool ist besonders gut dafür geeignet, mehrere Dokumente gleichzeitig zu analysieren?',
                options: [
                  'Midjourney',
                  'ElevenLabs',
                  'NotebookLM von Google',
                  'Adobe Premiere',
                ],
                correct: 2,
                explanation: 'NotebookLM ist speziell dafür entwickelt, mehrere eigene Dokumente zu analysieren und gezielt Fragen dazu zu beantworten. Ideal für intensive Dokumentenarbeit.',
              },
              {
                id: 'bo-q3-3',
                question: 'Wann ist Eigenverantwortung bei KI-gestützter Recherche besonders wichtig?',
                options: [
                  'Nur bei Freizeitrecherchen',
                  'Nie – KI-Recherchen sind immer zuverlässig',
                  'Bei rechtlichen, finanziellen oder medizinischen Informationen, die für Entscheide relevant sind',
                  'Nur wenn man Perplexity AI nicht nutzt',
                ],
                correct: 2,
                explanation: 'Bei Informationen, die für wichtige Entscheide genutzt werden, muss die Originalquelle geprüft werden. KI beschleunigt den Prozess, ersetzt aber nicht das kritische Einordnen.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'bo-modul-2',
      slug: 'bo-alltag',
      title: 'KI im Arbeitsalltag',
      description: 'Meetings, E-Mails und Präsentationen – konkrete KI-Anwendungen für die häufigsten Büroaufgaben.',
      icon: '💼',
      order: 2,
      lessons: [
        {
          id: 'bo-meetings',
          slug: 'bo-meetings',
          title: 'Meetings & Protokolle',
          description: 'KI-Tools für Meeting-Notizen, automatische Protokolle und Zusammenfassungen von Besprechungen.',
          videoId: '',
          content: `
<h2>Meetings effizienter machen mit KI</h2>
<p>Meetings sind ein zentraler Teil des Arbeitsalltags – aber auch eine häufige Zeitfalle. Das Protokollieren kostet Zeit, wichtige Punkte gehen verloren, und die Nachbereitung zieht sich. KI-Tools können hier massgeblich helfen: von der automatischen Transkription bis zur Aktionspunkte-Liste.</p>

<h3>Automatische Meeting-Transkription</h3>
<p>Tools wie <strong>Otter.ai</strong>, <strong>Fireflies</strong> oder <strong>Microsoft Copilot</strong> (in Teams) zeichnen Meetings auf, transkribieren sie in Echtzeit und erstellen automatisch eine Zusammenfassung. Das bedeutet: Du kannst dich voll aufs Gespräch konzentrieren, statt gleichzeitig Notizen zu machen.</p>

<h3>KI-gestützte Protokollierung ohne Aufnahme</h3>
<p>Nicht immer ist eine Aufnahme möglich oder erwünscht. In diesem Fall hilft ein einfacherer Workflow: Mache während des Meetings kurze Stichpunkte – Namen, Themen, Entscheide, offene Punkte. Nach dem Meeting kopierst du diese in ChatGPT oder Claude und gibst folgenden Prompt ein:</p>
<p><em>«Erstelle aus diesen Notizen ein strukturiertes Sitzungsprotokoll mit den Abschnitten: Teilnehmende, Traktanden, Beschlüsse, Offene Punkte / nächste Schritte.»</em></p>

<h3>Action Items herausfiltern</h3>
<p>Nach langen Meetings ist oft unklar, wer was bis wann erledigen soll. KI hilft: Kopiere Notizen oder Transkript und frage: «Filtere alle konkreten Aufgaben und Verantwortlichkeiten aus diesem Text heraus – als nummerierte Liste.» Das spart mühsames Durchsuchen langer Protokolle.</p>

<h3>Datenschutz bei Meeting-Transkription</h3>
<p>Wer Meetings aufzeichnet und transkribiert, muss alle Teilnehmenden informieren. Persönliche oder vertrauliche Inhalte sollten nicht ohne klare Einwilligung in externe KI-Dienste hochgeladen werden. Im Zweifelsfall: KI nur für die Nachbearbeitung eigener Notizen nutzen – ohne vollständige Aufnahme.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'bo-q4-1',
                question: 'Was ist der Vorteil von automatischer Meeting-Transkription mit Tools wie Otter.ai?',
                options: [
                  'Das Meeting dauert kürzer',
                  'Man kann sich voll aufs Gespräch konzentrieren, statt gleichzeitig Notizen zu machen',
                  'Das Tool ersetzt die Moderation des Meetings',
                  'Man braucht keine Agenda mehr vorzubereiten',
                ],
                correct: 1,
                explanation: 'Automatische Transkription ermöglicht volle Konzentration auf das Gespräch. Notizen entstehen automatisch und können nachher durch KI weiterverarbeitet werden.',
              },
              {
                id: 'bo-q4-2',
                question: 'Wie kann KI ein Protokoll aus handschriftlichen Notizen erstellen?',
                options: [
                  'KI liest die Handschrift vom Papier',
                  'Man gibt Stichpunkte in ChatGPT/Claude ein und bittet darum, ein strukturiertes Protokoll zu erstellen',
                  'KI braucht immer eine Audioaufnahme',
                  'Das ist mit KI nicht möglich',
                ],
                correct: 1,
                explanation: 'Stichpunkte in ChatGPT oder Claude eingeben und um ein strukturiertes Protokoll bitten – das ist ein einfacher, effektiver Workflow ohne Aufnahmen.',
              },
              {
                id: 'bo-q4-3',
                question: 'Was muss beim Einsatz von KI-Transkription unbedingt beachtet werden?',
                options: [
                  'Das Mikrofon muss immer auf Maximum gestellt sein',
                  'Alle Teilnehmenden müssen über die Aufzeichnung informiert werden; vertrauliche Inhalte nicht unkontrolliert hochladen',
                  'Es braucht immer eine Genehmigung vom Bundesrat',
                  'Transkription ist nur auf Englisch zuverlässig',
                ],
                correct: 1,
                explanation: 'Aufzeichnungen erfordern Einwilligung aller Teilnehmenden. Vertrauliche Inhalte dürfen nicht ohne Weiteres in externe Dienste hochgeladen werden.',
              },
            ],
          },
        },
        {
          id: 'bo-kommunikation',
          slug: 'bo-kommunikation',
          title: 'E-Mails & Kommunikation',
          description: 'E-Mails effizienter schreiben, beantworten und verwalten mit KI-Unterstützung.',
          videoId: '',
          content: `
<h2>E-Mail-Effizienz mit KI</h2>
<p>E-Mails sind für viele Büromitarbeitende einer der grössten Zeitfresser. Durchschnittlich verbringen Bürokräfte 2-3 Stunden täglich in der Inbox. KI kann dabei helfen, sowohl das Schreiben als auch das Verarbeiten von E-Mails zu beschleunigen.</p>

<h3>E-Mails schneller schreiben</h3>
<p>Der einfachste Einstieg: Beschreibe in 2-3 Sätzen, was du kommunizieren möchtest, und lass KI den vollständigen Entwurf schreiben. Das funktioniert besonders gut bei:</p>
<ul>
  <li>Höflichen Absagen oder Verzögerungsmitteilungen</li>
  <li>Angeboten und Auftragsbestätigungen</li>
  <li>Internen Informationsmails an das Team</li>
  <li>Follow-up-Mails nach Meetings oder Gesprächen</li>
</ul>

<h3>Ton und Stil anpassen</h3>
<p>KI ist sehr flexibel beim Anpassen von Ton und Stil. Nützliche Prompts:</p>
<ul>
  <li>«Mache diese E-Mail formeller / freundlicher / kürzer»</li>
  <li>«Schreibe dieselbe Nachricht auf Englisch – professioneller Ton»</li>
  <li>«Kürze diese E-Mail auf maximal 3 Sätze»</li>
  <li>«Formuliere die Kritik in diesem Text konstruktiver»</li>
</ul>

<h3>Eingehende E-Mails verarbeiten</h3>
<p>Bei langen E-Mail-Threads oder komplexen Nachrichten hilft KI beim Verstehen: Kopiere die E-Mail und frage «Was wird in dieser E-Mail von mir erwartet?» oder «Fasse die wichtigsten Punkte in 3 Stichpunkten zusammen». Das spart das mehrfache Lesen langer Nachrichten.</p>

<h3>Integrationsmöglichkeiten</h3>
<p>Viele E-Mail-Clients bieten inzwischen KI-Integration: <strong>Microsoft Copilot</strong> direkt in Outlook, <strong>Google Gemini</strong> in Gmail. Diese Integrationen ermöglichen das Schreiben und Zusammenfassen von E-Mails ohne das Tool-Wechseln. Wer keine Integration hat, nutzt einfach ein separates Browser-Tab mit ChatGPT oder Claude.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'bo-q5-1',
                question: 'Welche Art von E-Mails eignet sich besonders gut für KI-Unterstützung?',
                options: [
                  'Nur private E-Mails',
                  'Höfliche Absagen, Angebote, Follow-ups und interne Informationsmails',
                  'Nur E-Mails auf Englisch',
                  'Nur sehr kurze E-Mails',
                ],
                correct: 1,
                explanation: 'Strukturierte, wiederkehrende E-Mail-Typen wie Absagen, Angebote und Follow-ups eignen sich ideal. KI erstellt einen guten Entwurf, den man schnell anpassen kann.',
              },
              {
                id: 'bo-q5-2',
                question: 'Wie kann KI bei der Verarbeitung eingehender E-Mails helfen?',
                options: [
                  'KI antwortet automatisch auf alle E-Mails ohne menschliche Kontrolle',
                  'KI löscht unerwünschte E-Mails automatisch',
                  'KI fasst lange E-Mails zusammen und filtert heraus, was von dir erwartet wird',
                  'KI kann nur ausgehende E-Mails unterstützen',
                ],
                correct: 2,
                explanation: 'Bei langen oder komplexen E-Mails kann KI schnell zusammenfassen, was der Kerninhalt ist und was als nächstes erwartet wird. Das spart mehrfaches Lesen.',
              },
              {
                id: 'bo-q5-3',
                question: 'Welche KI-Integration ermöglicht das Schreiben von E-Mails direkt in Outlook?',
                options: [
                  'Midjourney für Outlook',
                  'Microsoft Copilot',
                  'Perplexity für Office',
                  'NotebookMail',
                ],
                correct: 1,
                explanation: 'Microsoft Copilot ist direkt in Outlook integriert und ermöglicht KI-unterstütztes Schreiben und Zusammenfassen ohne Tool-Wechsel.',
              },
            ],
          },
        },
        {
          id: 'bo-praesentationen',
          slug: 'bo-praesentationen',
          title: 'Präsentationen erstellen',
          description: 'KI-gestützte Präsentationen: von der Struktur über den Inhalt bis zur visuellen Gestaltung.',
          videoId: '',
          content: `
<h2>Präsentationen schneller erstellen mit KI</h2>
<p>Eine gute Präsentation zu erstellen kostet Zeit: Struktur entwickeln, Inhalte aufbereiten, Texte schreiben, Slides gestalten. KI kann alle diese Schritte unterstützen – und bei manchen sogar komplett übernehmen.</p>

<h3>Struktur und Gliederung mit KI entwickeln</h3>
<p>Bevor du eine Slide-Deck-Datei öffnest, lohnt es sich, die Struktur mit KI zu entwickeln. Prompt-Beispiel:</p>
<p><em>«Ich halte eine 15-minütige Präsentation über KI-Einsatz in kleinen Büros für Nicht-Fachleute. Erstelle eine sinnvolle Gliederung mit 6-8 Slides inkl. kurzem Beschrieb des Inhalts pro Slide.»</em></p>
<p>KI liefert eine durchdachte Gliederung, die du direkt übernehmen oder anpassen kannst.</p>

<h3>Slide-Texte formulieren</h3>
<p>Mit der Gliederung als Grundlage lässt sich jede Slide schnell befüllen. Sage KI einfach: «Schreibe den Bullet-Point-Text für Slide 3 zum Thema X. Maximal 4 Punkte, jeder nicht länger als 10 Wörter.» Das KI-Tool liefert prägnante Texte im gewünschten Format.</p>

<h3>Spezialisierte Präsentations-Tools</h3>
<p>Für alle, die komplett neue Präsentationen erstellen wollen, bieten spezialisierte Tools eine schnelle Lösung:</p>
<ul>
  <li><strong>Gamma:</strong> Erstellt vollständige, designte Präsentationen aus einer Texteingabe. Sehr schnell, gutes Design.</li>
  <li><strong>Tome:</strong> Ähnlich wie Gamma, mit Fokus auf visuelle Storytelling-Präsentationen.</li>
  <li><strong>Beautiful.ai:</strong> KI-gestützte Slide-Erstellung mit automatischer Layoutoptimierung.</li>
</ul>

<h3>Sprechernotizen und Vorbereitung</h3>
<p>KI kann auch Sprechernotizen für jede Slide erstellen: «Schreibe für diese Slide Sprechernotizen für 2 Minuten Sprechzeit». Oder lass KI mögliche Fragen antizipieren: «Welche Fragen könnte das Publikum nach dieser Präsentation stellen?» – Perfekte Vorbereitung für Q&A-Runden.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'bo-q6-1',
                question: 'Was ist ein sinnvoller erster Schritt beim Erstellen einer Präsentation mit KI?',
                options: [
                  'Sofort alle Slides mit KI füllen lassen',
                  'Zuerst die Gliederung und Struktur mit KI entwickeln, bevor man Inhalte schreibt',
                  'Nur das Design von KI erstellen lassen',
                  'KI kann keine Präsentationen unterstützen',
                ],
                correct: 1,
                explanation: 'Eine durchdachte Struktur ist die Grundlage jeder guten Präsentation. KI kann in Minuten eine sinnvolle Gliederung vorschlagen, die dann angepasst wird.',
              },
              {
                id: 'bo-q6-2',
                question: 'Welches Tool erstellt vollständige, designte Präsentationen aus einer einfachen Texteingabe?',
                options: [
                  'Microsoft Paint',
                  'Perplexity AI',
                  'Gamma',
                  'NotebookLM',
                ],
                correct: 2,
                explanation: 'Gamma ist speziell dafür entwickelt, vollständige Präsentationen mit Design aus einer einfachen Inhaltsbeschreibung zu erstellen. Sehr schnell und mit gutem Standarddesign.',
              },
              {
                id: 'bo-q6-3',
                question: 'Wie kann KI bei der Vorbereitung auf Q&A-Runden nach einer Präsentation helfen?',
                options: [
                  'KI beantwortet die Fragen des Publikums live',
                  'KI antizipiert mögliche Publikumsfragen, auf die man sich vorbereiten kann',
                  'KI entscheidet, welche Fragen erlaubt sind',
                  'KI moderiert die Q&A-Runde',
                ],
                correct: 1,
                explanation: 'Lass KI mögliche Fragen antizipieren: «Welche Fragen könnte das Publikum stellen?» – So kannst du gezielt vorbereiten und Überraschungen minimieren.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'bo-modul-3',
      slug: 'bo-produktivitaet',
      title: 'Produktivität steigern',
      description: 'Workflows automatisieren, Daten auswerten und KI nachhaltig und verantwortungsvoll in den Arbeitsalltag integrieren.',
      icon: '📈',
      order: 3,
      lessons: [
        {
          id: 'bo-workflows',
          slug: 'bo-workflows',
          title: 'Workflows automatisieren',
          description: 'Einfache KI-gestützte Workflows aufbauen, die wiederkehrende Aufgaben automatisch erledigen.',
          videoId: '',
          content: `
<h2>Workflows automatisieren – mehr schaffen in weniger Zeit</h2>
<p>Ein Workflow ist eine Abfolge von Schritten, die immer wieder gleich ausgeführt werden. Wer KI in seine Workflows integriert, kann erheblich Zeit sparen – ohne tiefe technische Kenntnisse. Der Schlüssel liegt darin, wiederkehrende Muster zu erkennen und gezielt zu automatisieren.</p>

<h3>Schritt 1: Wiederkehrende Aufgaben identifizieren</h3>
<p>Welche Aufgaben erledigst du jede Woche mehrfach? Typische Kandidaten im Büroalltag:</p>
<ul>
  <li>Eingehende Anfragen kategorisieren und weiterleiten</li>
  <li>Sitzungsnotizen in Protokolle umwandeln</li>
  <li>Berichte aus standardisierten Datensätzen erstellen</li>
  <li>Statusupdates an verschiedene Stakeholder versenden</li>
  <li>Dokumente auf Vollständigkeit prüfen</li>
</ul>

<h3>Einfache KI-Workflows mit Zapier oder Make</h3>
<p><strong>Zapier</strong> und <strong>Make</strong> (früher Integromat) ermöglichen es, Apps und KI-Tools ohne Programmierung zu verbinden. Beispiel: Neues E-Mail eingeht → Inhalt wird automatisch an ChatGPT gesendet → KI-generierte Zusammenfassung wird in Slack-Kanal gepostet. Solche Workflows lassen sich in 30 Minuten aufbauen.</p>

<h3>Custom GPTs und Assistenten</h3>
<p>ChatGPT bietet die Möglichkeit, eigene «Custom GPTs» zu erstellen – KI-Assistenten, die auf spezifische Aufgaben spezialisiert sind. Ein «Protokoll-Assistent» zum Beispiel ist darauf trainiert, aus Stichpunkten immer im gleichen Format Protokolle zu erstellen. Einmal eingerichtet, reicht es, die Notizen einzufügen.</p>

<h3>Wichtig: Qualitätssicherung im Workflow</h3>
<p>Automatisierte Workflows brauchen regelmässige Überprüfung. Was heute gut funktioniert, kann in drei Monaten Probleme machen – weil sich die KI verändert, die Anforderungen steigen oder Fehler sich unbemerkt einschleichen. Baue von Anfang an eine einfache Qualitätskontrolle ein.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'bo-q7-1',
                question: 'Was ist der erste Schritt beim Aufbau eines KI-gestützten Workflows?',
                options: [
                  'Sofort ein Tool kaufen und einrichten',
                  'Wiederkehrende Aufgaben identifizieren, die sich gut automatisieren lassen',
                  'Alle bisherigen Workflows löschen',
                  'Einen IT-Spezialisten beauftragen',
                ],
                correct: 1,
                explanation: 'Ohne zu wissen, welche Aufgaben sich wiederholen, lässt sich kein sinnvoller Workflow aufbauen. Die Bestandsaufnahme ist die Grundlage.',
              },
              {
                id: 'bo-q7-2',
                question: 'Wozu dienen Tools wie Zapier oder Make im Zusammenhang mit KI?',
                options: [
                  'Sie erstellen KI-Modelle von Grund auf',
                  'Sie verbinden verschiedene Apps und KI-Tools ohne Programmierung zu automatisierten Workflows',
                  'Sie sind Alternativen zu ChatGPT',
                  'Sie dienen ausschliesslich zur Datensicherung',
                ],
                correct: 1,
                explanation: 'Zapier und Make verbinden Apps und KI-Tools zu Automatisierungsworkflows – ohne Programmierkenntnisse. So können einfache aber wirkungsvolle Abläufe aufgebaut werden.',
              },
              {
                id: 'bo-q7-3',
                question: 'Was ist ein "Custom GPT" in ChatGPT?',
                options: [
                  'Ein teures Premium-Abonnement',
                  'Ein eigener KI-Assistent, der auf spezifische Aufgaben spezialisiert und vorkonfiguriert ist',
                  'Eine KI, die nur auf Englisch funktioniert',
                  'Eine Sicherheitskopie des ChatGPT-Kontos',
                ],
                correct: 1,
                explanation: 'Custom GPTs sind vorkonfigurierte KI-Assistenten für spezifische Aufgaben. Einmal eingerichtet, muss man den Kontext nicht mehr jedesmal neu erklären.',
              },
            ],
          },
        },
        {
          id: 'bo-daten',
          slug: 'bo-daten',
          title: 'Daten auswerten',
          description: 'KI für die Datenanalyse in Excel und Tabellen nutzen – ohne Programmierkenntnisse.',
          videoId: '',
          content: `
<h2>Daten auswerten mit KI – auch ohne Programmierkenntnisse</h2>
<p>Datenanalyse war lange eine Domäne von Spezialisten mit Excel-Expertenkenntnissen oder Programmierfähigkeiten. KI ändert das grundlegend: Heute kannst du einer KI in natürlicher Sprache beschreiben, was du wissen möchtest – und sie erledigt die technische Arbeit.</p>

<h3>ChatGPT Code Interpreter (Advanced Data Analysis)</h3>
<p>Die «Advanced Data Analysis»-Funktion in ChatGPT ermöglicht es, CSV- oder Excel-Dateien hochzuladen und direkt Fragen zu stellen: «Welche Produkte haben sich im letzten Quartal am besten verkauft?» oder «Zeige mir die monatliche Entwicklung der Kosten als Diagramm». ChatGPT schreibt den notwendigen Code selbst und liefert direkt das Ergebnis.</p>

<h3>Excel-Formeln mit KI verstehen und erstellen</h3>
<p>Auch ohne Daten hochzuladen hilft KI bei Excel-Problemen. Beschreibe, was du berechnen willst, und KI liefert die Formel:</p>
<ul>
  <li>«Ich möchte in Excel die Summe aller Werte in Spalte B berechnen, bei denen Spalte A "Zürich" enthält. Welche Formel brauche ich?»</li>
  <li>«Erkläre mir, wie diese Excel-Formel funktioniert: =SUMIF(A:A,"Zürich",B:B)»</li>
</ul>

<h3>Daten bereinigen und strukturieren</h3>
<p>Unstrukturierte oder fehlerhafte Daten sind ein häufiges Problem. KI kann helfen:</p>
<ul>
  <li>Doppelte Einträge identifizieren</li>
  <li>Inkonsistente Schreibweisen vereinheitlichen</li>
  <li>Texte aus Zellen in strukturierte Spalten aufteilen</li>
  <li>Fehlende Werte durch sinnvolle Werte ersetzen</li>
</ul>

<h3>Grenzen der KI-Datenanalyse</h3>
<p>KI kann Muster erkennen und Berechnungen durchführen, aber sie versteht den Kontext deiner Daten nicht automatisch. Interpretationen und Schlussfolgerungen brauchen immer dein Fachwissen. Ausserdem sollten vertrauliche Datensätze nicht ohne weiteres in externe KI-Dienste hochgeladen werden.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'bo-q8-1',
                question: 'Was ermöglicht die "Advanced Data Analysis"-Funktion in ChatGPT?',
                options: [
                  'Nur das Erstellen von PowerPoint-Diagrammen',
                  'Das Hochladen von Datendateien und das Stellen von Fragen in natürlicher Sprache zur Analyse',
                  'Das automatische Bestellen von Büromaterial',
                  'Die Verbindung mit der Unternehmensdatenbank',
                ],
                correct: 1,
                explanation: 'Advanced Data Analysis erlaubt das Hochladen von CSV/Excel-Dateien und die direkte Analyse durch natürlichsprachige Fragen – ohne Programmierkenntnisse.',
              },
              {
                id: 'bo-q8-2',
                question: 'Wie kann KI bei Excel-Formeln helfen, ohne dass Daten hochgeladen werden?',
                options: [
                  'KI hat keinen Nutzen ohne Daten',
                  'Man beschreibt das gewünschte Berechnungsziel und KI liefert die passende Formel oder erklärt bestehende',
                  'KI erstellt automatisch die Excel-Datei',
                  'KI verbindet sich direkt mit Microsoft Excel',
                ],
                correct: 1,
                explanation: 'Beschreibe in normaler Sprache, was du berechnen willst – KI liefert die Formel. Oder kopiere eine unbekannte Formel und lass sie erklären. Das funktioniert ohne Datei-Upload.',
              },
              {
                id: 'bo-q8-3',
                question: 'Was bleibt auch bei der KI-gestützten Datenanalyse immer Aufgabe des Menschen?',
                options: [
                  'Das Eintippen der Zahlen in die Tabelle',
                  'Die inhaltliche Interpretation und fachliche Einordnung der Analyseergebnisse',
                  'Das Erstellen von Achsenbeschriftungen',
                  'Das Speichern der Datei nach der Analyse',
                ],
                correct: 1,
                explanation: 'KI kann Muster erkennen und Berechnungen durchführen. Aber was die Ergebnisse für dein Unternehmen oder deine Situation bedeuten, erfordert Fachwissen und Urteilsvermögen.',
              },
            ],
          },
        },
        {
          id: 'bo-nachhaltig',
          slug: 'bo-nachhaltig',
          title: 'KI nachhaltig einsetzen',
          description: 'Gute Gewohnheiten im Umgang mit KI, die wichtigsten Grenzen und wie man auf dem neusten Stand bleibt.',
          videoId: '',
          content: `
<h2>KI nachhaltig und verantwortungsvoll einsetzen</h2>
<p>KI-Tools bieten enormes Potenzial – aber nur, wenn man sie mit dem richtigen Mindset einsetzt. Wer langfristig profitieren will, braucht gute Gewohnheiten, eine realistische Einschätzung der Grenzen und einen Plan, wie man am Ball bleibt.</p>

<h3>Gute Gewohnheiten für den KI-Alltag</h3>
<ul>
  <li><strong>Kritisch lesen:</strong> KI-Outputs immer lesen, nie blind übernehmen. Fakten prüfen.</li>
  <li><strong>Datensparsamkeit:</strong> Keine vertraulichen oder personenbezogenen Daten in externe KI-Tools eingeben.</li>
  <li><strong>Verantwortung behalten:</strong> KI ist Werkzeug, nicht Entscheider. Du trägst die Verantwortung für das Ergebnis.</li>
  <li><strong>Dokumentieren:</strong> Welche Prompts funktionieren besonders gut? Speichere bewährte Prompts für wiederkehrende Aufgaben.</li>
  <li><strong>Iterieren:</strong> Erste Antwort nicht perfekt? Verfeinere den Prompt, statt aufzugeben.</li>
</ul>

<h3>Die wichtigsten Grenzen im Bewusstsein behalten</h3>
<p>Auch fortgeschrittene Nutzerinnen und Nutzer tendieren dazu, KI-Grenzen zu vergessen, wenn sie gut funktioniert. Diese Grenzen bleiben wichtig:</p>
<ul>
  <li>KI halluziniert – sie erfindet plausibel klingende Fakten</li>
  <li>KI hat keinen Wissens-Cutoff (für aktuelle Infos: Tools mit Websuche nutzen)</li>
  <li>KI versteht deinen spezifischen Kontext nicht automatisch</li>
  <li>KI ist nicht neutral – sie spiegelt die Daten und Biases, auf denen sie trainiert wurde</li>
</ul>

<h3>Auf dem neusten Stand bleiben</h3>
<p>Die KI-Landschaft verändert sich schnell. Neue Modelle, neue Funktionen, neue Tools erscheinen monatlich. Statt alles zu verfolgen, empfiehlt sich ein selektiver Ansatz:</p>
<ul>
  <li>1-2 verlässliche Newsletter oder Blogs abonnieren (z.B. The Rundown AI, TLDR AI)</li>
  <li>Einmal pro Quartal die Tools, die du nutzt, auf neue Funktionen prüfen</li>
  <li>Mit Kolleginnen und Kollegen Erfahrungen austauschen – Lerngemeinschaft aufbauen</li>
</ul>

<h3>Der nachhaltige Vorteil: Kompetenzaufbau</h3>
<p>Wer heute bewusst mit KI-Tools arbeitet, baut Kompetenzen auf, die morgen entscheidend sein werden. Es geht nicht darum, möglichst viele Tools zu kennen – sondern darum, <strong>wenige Tools wirklich gut zu nutzen</strong> und kontinuierlich besser zu werden. Das ist der nachhaltige Vorteil.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'bo-q9-1',
                question: 'Was ist eine der wichtigsten guten Gewohnheiten im Umgang mit KI?',
                options: [
                  'KI-Outputs immer direkt und unverändert übernehmen',
                  'KI-Outputs kritisch lesen, Fakten prüfen und nie blind übernehmen',
                  'Möglichst viele verschiedene Tools täglich ausprobieren',
                  'Nur Premium-Tools verwenden',
                ],
                correct: 1,
                explanation: 'Kritisches Lesen und Faktenprüfung sind grundlegend. KI kann halluzinieren – wer das vergisst, riskiert Fehler, die im schlimmsten Fall das Vertrauen der Empfänger schädigen.',
              },
              {
                id: 'bo-q9-2',
                question: 'Welche Strategie empfiehlt sich, um über die schnellen Veränderungen in der KI-Welt informiert zu bleiben?',
                options: [
                  'Täglich alle verfügbaren KI-Nachrichten lesen',
                  'Gar nicht mehr – der Markt ist zu unübersichtlich',
                  '1-2 verlässliche Newsletter und vierteljährliche Überprüfung der genutzten Tools auf neue Funktionen',
                  'Nur auf Empfehlungen von IT-Abteilungen warten',
                ],
                correct: 2,
                explanation: 'Selektiver Fokus ist klüger als alles verfolgen. 1-2 gute Newsletter plus vierteljährlicher Check der eigenen Tools reichen, um auf dem Laufenden zu bleiben.',
              },
              {
                id: 'bo-q9-3',
                question: 'Was ist laut der Lektion der nachhaltigste KI-Vorteil für Büromitarbeitende?',
                options: [
                  'Möglichst viele verschiedene Tools zu kennen',
                  'Wenige Tools wirklich gut zu nutzen und kontinuierlich besser zu werden',
                  'Nur die aktuellsten Modelle zu verwenden',
                  'KI so selten wie möglich zu verwenden, um Fehler zu vermeiden',
                ],
                correct: 1,
                explanation: 'Tiefe Kompetenz in wenigen, gut gewählten Tools schlägt das oberflächliche Kennen vieler Tools. Kontinuierliches Lernen und Verbessern ist der nachhaltige Vorteil.',
              },
            ],
          },
        },
      ],
    },
  ],
};
