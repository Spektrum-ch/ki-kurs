import type { Course } from '@/types';

export const COURSE_STRATEGIE: Course = {
  title: 'KI-Strategie für Gemeinden',
  slug: 'ki-strategie-gemeinden',
  description: 'Der Expertenkurs für Gemeindeverwaltungen und öffentliche Institutionen: KI-Potenziale erkennen, eine Strategie entwickeln und die Einführung rechtssicher und wirkungsvoll gestalten.',
  modules: [
    {
      id: 'st-modul-1',
      slug: 'st-potenziale',
      title: 'KI-Potenziale in der Gemeindeverwaltung',
      description: 'Wo KI echten Mehrwert für Gemeinden schafft – und wo Vorsicht geboten ist.',
      icon: '🔍',
      order: 1,
      lessons: [
        {
          id: 'st-mehrwert',
          slug: 'st-mehrwert',
          title: 'Wo KI echten Mehrwert schafft',
          description: 'Ein realistischer Blick auf KI-Potenziale in Gemeinden – jenseits von Hype und Skepsis.',
          videoId: '',
          content: `
<h2>KI in der Gemeindeverwaltung: Realistisch betrachtet</h2>
<p>Keine Technologie der letzten Jahre hat so viele Erwartungen geweckt – und so viel Verunsicherung ausgelöst – wie Künstliche Intelligenz. Für Gemeinden ist es entscheidend, einen nüchternen, praxisorientierten Blick zu entwickeln: Was kann KI wirklich? Was verspricht sie zu viel? Und wo lohnt sich der Einsatz für eine Gemeindeverwaltung wirklich?</p>

<h3>Was KI heute zuverlässig kann</h3>
<ul>
  <li><strong>Texte verfassen und überarbeiten:</strong> E-Mails, Berichte, Medienmitteilungen, Protokollentwürfe</li>
  <li><strong>Dokumente zusammenfassen:</strong> Lange Berichte, Gutachten oder Beschlüsse auf das Wesentliche reduzieren</li>
  <li><strong>Informationen strukturieren:</strong> Ungeordnete Inputs in klare Strukturen bringen</li>
  <li><strong>Standardanfragen beantworten:</strong> Häufig gestellte Bürgerfragen vorfiltern und beantworten</li>
  <li><strong>Übersetzungen:</strong> Dokumente schnell in andere Sprachen übertragen (mit Qualitätskontrolle)</li>
  <li><strong>Daten auswerten:</strong> Tabellen analysieren, Muster erkennen, Diagramme beschriften</li>
</ul>

<h3>Was KI heute noch nicht zuverlässig kann</h3>
<ul>
  <li>Rechtlich bindende Entscheide fällen (Baubewilligungen, Steuerbescheide)</li>
  <li>Aktuelle lokale Informationen kennen (Wissens-Cutoff)</li>
  <li>Vertrauliche Daten sicher verarbeiten (ohne geeignete lokale Infrastruktur)</li>
  <li>Politische Abwägungen und Ermessensentscheide treffen</li>
  <li>Vollständig autonome Bürgerberatung ohne menschliche Kontrolle</li>
</ul>

<h3>Der realistische Mehrwert für Gemeinden</h3>
<p>Der grösste Mehrwert entsteht nicht durch «KI als Ersatz für Mitarbeitende», sondern durch <strong>KI als Unterstützung für Mitarbeitende</strong>. Die häufigsten Zeitfresser in Gemeindeverwaltungen – Schreiben, Zusammenfassen, Protokollieren – lassen sich mit KI drastisch beschleunigen, ohne die Verantwortung zu übertragen.</p>

<blockquote>Eine Gemeinde, die KI als Arbeitsverstärker einsetzt, kann mit denselben personellen Ressourcen mehr leisten – und die Mitarbeitenden auf anspruchsvollere Aufgaben konzentrieren.</blockquote>

<h3>Die wichtigste Erkenntnis</h3>
<p>KI ist kein Plug-and-Play-System. Jede Anwendung erfordert Anpassung, Qualitätssicherung und klare Zuständigkeiten. Gemeinden, die das verstehen und entsprechend investieren, profitieren langfristig. Gemeinden, die KI ohne Planung «mal ausprobieren», riskieren Frustration und Misserfolg.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'st-q1-1',
                question: 'Welche Aufgabe kann KI in Gemeindeverwaltungen heute zuverlässig unterstützen?',
                options: [
                  'Rechtlich bindende Baubewilligungsentscheide fällen',
                  'Protokollentwürfe aus Stichpunkten erstellen und Dokumente zusammenfassen',
                  'Vollständig autonome Bürgerberatung ohne menschliche Kontrolle',
                  'Aktuelle lokale Informationen ohne Internetzugang liefern',
                ],
                correct: 1,
                explanation: 'Textarbeit – Protokolle, Zusammenfassungen, E-Mails – ist der stärkste heutige Mehrwert von KI für Gemeinden. Rechtliche und politische Entscheide bleiben Menschensache.',
              },
              {
                id: 'st-q1-2',
                question: 'Was ist laut der Lektion die wirksamste Art, KI in Gemeinden einzusetzen?',
                options: [
                  'KI als Ersatz für Mitarbeitende in der Verwaltung',
                  'KI als Unterstützung für Mitarbeitende – als Arbeitsverstärker, nicht als Ersatz',
                  'KI nur für externe Kommunikation nutzen',
                  'KI erst einsetzen, wenn alle rechtlichen Fragen geklärt sind',
                ],
                correct: 1,
                explanation: 'KI als Arbeitsverstärker – nicht als Ersatz – ist der realistischste und wirkungsvollste Ansatz. Mitarbeitende werden unterstützt, die Verantwortung bleibt beim Menschen.',
              },
              {
                id: 'st-q1-3',
                question: 'Was unterscheidet Gemeinden, die langfristig von KI profitieren, von denen, die scheitern?',
                options: [
                  'Budget – mehr Geld führt immer zum Erfolg',
                  'Gemeindegrösse – nur grosse Gemeinden können KI sinnvoll einsetzen',
                  'Planung, Qualitätssicherung und klare Zuständigkeiten statt unvorbereitetes Ausprobieren',
                  'Die neuesten Modelle kaufen',
                ],
                correct: 2,
                explanation: 'KI ist kein Plug-and-Play. Anpassung, Qualitätssicherung und Verantwortlichkeiten brauchen Planung. Gemeinden mit diesem Bewusstsein profitieren; die anderen scheitern oft an Frustration.',
              },
            ],
          },
        },
        {
          id: 'st-anwendungsfaelle',
          slug: 'st-anwendungsfaelle',
          title: 'Konkrete Anwendungsfälle',
          description: 'Von Baubewilligungen bis Bürgeranfragen: Die wichtigsten KI-Anwendungen für Gemeinden im Detail.',
          videoId: '',
          content: `
<h2>KI-Anwendungsfälle in der Gemeindeverwaltung</h2>
<p>Theorie hilft wenig ohne konkrete Beispiele. Hier sind die wichtigsten und praxiserprobten Anwendungsfälle für Schweizer Gemeinden – von kleinen, sofort umsetzbaren Schritten bis zu mittelfristigen Projekten.</p>

<h3>1. Sitzungsprotokolle und Gemeinderatsberichte</h3>
<p>Einer der zeitaufwändigsten Prozesse in jeder Gemeinde. Mit KI lässt sich dieser erheblich beschleunigen:</p>
<ul>
  <li>Stichpunkte oder Transkript eines Gemeinderatsermeetings → strukturiertes Protokoll in 5 Minuten</li>
  <li>Einheitliches Format über alle Sitzungen hinweg</li>
  <li>Automatische Extraktion von Beschlüssen und offenen Punkten</li>
</ul>
<p><strong>Zeitersparnis:</strong> 1-3 Stunden pro Sitzung</p>

<h3>2. Bürgeranfragen vorfiltern und beantworten</h3>
<p>Viele Gemeindeverwaltungen erhalten täglich ähnliche Anfragen zu Öffnungszeiten, Formularen, Zuständigkeiten. Ein KI-Chatbot kann:</p>
<ul>
  <li>Standardanfragen automatisch beantworten (basierend auf Gemeindewebseite)</li>
  <li>Komplexe Anfragen an die zuständige Person weiterleiten</li>
  <li>24/7 verfügbar sein – ohne Personalaufwand ausserhalb der Bürozeiten</li>
</ul>
<p><strong>Voraussetzung:</strong> Gut gepflegte Gemeindewebseite als Wissensbasis; klare Eskalationsregeln</p>

<h3>3. Baubewilligungsverfahren unterstützen</h3>
<p>KI eignet sich für unterstützende, nicht entscheidende Rollen:</p>
<ul>
  <li>Vollständigkeit von Baugesuchen vorprüfen: Sind alle Pflichtdokumente eingereicht?</li>
  <li>Standardkommunikation erstellen: Eingangsbestätigungen, Nachforderungen, Benachrichtigungen</li>
  <li>Ähnliche Präzedenzfälle in der eigenen Datenbank finden</li>
</ul>
<p><strong>Wichtig:</strong> Der Entscheid selbst bleibt beim zuständigen Sachbearbeitenden</p>

<h3>4. Mitwirkungsverfahren und Ortsplanung</h3>
<p>Bei Ortsplanungsrevisionen mit vielen Einwendungen:</p>
<ul>
  <li>Einwendungen kategorisieren (Thema, Betroffenheit, Art der Forderung)</li>
  <li>Häufig genannte Themen und Positionen zusammenfassen</li>
  <li>Abwägungstabellen vorstrukturieren für die fachliche Bearbeitung</li>
</ul>

<h3>5. Medienmitteilungen und Gemeindekommunikation</h3>
<ul>
  <li>Entwürfe für Medienmitteilungen aus Beschlussdaten erstellen</li>
  <li>Gemeindenachrichten in verschiedene Sprachen übersetzen</li>
  <li>Social-Media-Posts aus Gemeindeberichten generieren</li>
</ul>

<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Anwendungsfall</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Zeitersparnis</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Umsetzungsaufwand</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Protokolle</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Hoch (1-3h pro Sitzung)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Niedrig (sofort umsetzbar)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Bürger-Chatbot</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Mittel (20-30% Anfragen)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Mittel (Konfiguration nötig)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Baugesuch-Check</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Mittel (30 Min. pro Gesuch)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Mittel (Checklisten aufbauen)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Einwendungen kategorisieren</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Sehr hoch (Tage → Stunden)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Mittel (einmalig aufbauen)</td>
    </tr>
  </tbody>
</table>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'st-q2-1',
                question: 'Welcher KI-Anwendungsfall in Gemeinden hat den niedrigsten Umsetzungsaufwand und hohe Zeitersparnis?',
                options: [
                  'Vollautonomer Bürger-Chatbot',
                  'KI-gestützte Protokollerstellung aus Stichpunkten oder Transkripten',
                  'Automatische Baubewilligungsentscheide',
                  'KI-Bericht für den Bundesrat',
                ],
                correct: 1,
                explanation: 'Protokollerstellung ist sofort umsetzbar (kein technischer Aufwand) und spart 1-3 Stunden pro Sitzung. Damit ist es der idealste Einstieg für Gemeinden.',
              },
              {
                id: 'st-q2-2',
                question: 'Welche Voraussetzung ist für einen KI-Bürger-Chatbot besonders wichtig?',
                options: [
                  'Eine teure Softwarelizenz',
                  'Eine gut gepflegte Gemeindewebseite als Wissensbasis und klare Eskalationsregeln',
                  'Ein spezialisierter IT-Mitarbeitender',
                  'Mindestens 10.000 Einwohner',
                ],
                correct: 1,
                explanation: 'Ein Chatbot ist nur so gut wie seine Wissensbasis. Ohne gepflegte Inhalte und klare Regeln, wann menschliche Unterstützung greift, entsteht mehr Schaden als Nutzen.',
              },
              {
                id: 'st-q2-3',
                question: 'Für welche Rolle ist KI beim Baubewilligungsverfahren geeignet?',
                options: [
                  'Für die finale Entscheidung, ob eine Baubewilligung erteilt wird',
                  'Für unterstützende Rollen wie Vollständigkeitsprüfung und Standardkommunikation – der Entscheid bleibt beim Menschen',
                  'Für die gesamte rechtliche Beurteilung des Baugesuchs',
                  'KI ist im Baubewilligungsverfahren ungeeignet',
                ],
                correct: 1,
                explanation: 'KI unterstützt – sie entscheidet nicht. Vollständigkeitsprüfung, Standardkommunikation und Präzedenzfall-Recherche sind geeignete KI-Aufgaben. Der rechtliche Entscheid bleibt beim Sachbearbeitenden.',
              },
            ],
          },
        },
        {
          id: 'st-grenzen',
          slug: 'st-grenzen',
          title: 'Grenzen und Risiken kennen',
          description: 'Was KI in Gemeinden nicht kann und welche Risiken besondere Aufmerksamkeit erfordern.',
          videoId: '',
          content: `
<h2>Grenzen und Risiken – nüchtern betrachtet</h2>
<p>Ein erfolgreicher KI-Einsatz in Gemeinden erfordert nicht nur das Wissen über Möglichkeiten – sondern ebenso ein klares Verständnis der Grenzen und Risiken. Wer diese kennt, kann Enttäuschungen vermeiden und verantwortungsvoll handeln.</p>

<h3>Technische Grenzen</h3>
<ul>
  <li><strong>Halluzinationen:</strong> KI-Modelle erfinden plausibel klingende, aber falsche Fakten – besonders bei spezifischen lokalen Informationen oder rechtlichen Details</li>
  <li><strong>Wissens-Cutoff:</strong> Modelle kennen Informationen nur bis zu einem bestimmten Datum; aktuelle Gesetzesänderungen oder neue Richtpläne können unbekannt sein</li>
  <li><strong>Kontextmangel:</strong> KI kennt den lokalen Kontext nicht automatisch – sie weiss nicht, dass Gemeinde X einen besonderen Konflikt mit Gemeinde Y hat</li>
  <li><strong>Inkonsistenz:</strong> Die gleiche Frage kann zu verschiedenen Zeiten verschiedene Antworten liefern</li>
</ul>

<h3>Rechtliche und ethische Risiken</h3>
<ul>
  <li><strong>Datenschutzverletzungen:</strong> Personendaten in externe KI-Tools eingeben ohne rechtliche Grundlage</li>
  <li><strong>Diskriminierung:</strong> KI-Systeme können bestehende Biases verstärken – bei der Vorauswahl von Baugesuchen oder Förderanträgen</li>
  <li><strong>Mangelnde Erklärbarkeit:</strong> KI-Entscheide sind oft schwer nachvollziehbar – problematisch bei rechtsmittelbetroffenen Verwaltungsakten</li>
  <li><strong>Automatisierungsbias:</strong> Mitarbeitende vertrauen KI-Outputs zu sehr und prüfen zu wenig</li>
</ul>

<h3>Organisatorische Risiken</h3>
<ul>
  <li><strong>Kompetenzabbau:</strong> Wenn KI Aufgaben übernimmt, kann fachliches Know-how verloren gehen</li>
  <li><strong>Tool-Abhängigkeit:</strong> Starke Abhängigkeit von einem spezifischen Anbieter (Lock-in)</li>
  <li><strong>Qualitätsverlust:</strong> KI-generierte Texte werden ohne Prüfung verwendet und schaden der Qualität der Verwaltungskommunikation</li>
</ul>

<h3>Risikoampel für Gemeinden</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Anwendung</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Risiko</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Empfehlung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Protokollentwürfe</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #006b5f;">Niedrig</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Review durch Protokollführer</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Bürger-FAQ-Chatbot</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #e65c00;">Mittel</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Klare Eskalation, regelmässige Prüfung</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Rechtliche Beurteilungen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #c0392b;">Hoch</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Nur mit Rechtsberatung, nie autonom</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Ermessensentscheide</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #c0392b;">Sehr hoch</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">KI hier nicht einsetzen</td>
    </tr>
  </tbody>
</table>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'st-q3-1',
                question: 'Was bedeutet «Halluzination» bei KI-Modellen?',
                options: [
                  'Das Modell zeigt Bilder statt Text',
                  'Das Modell erfindet plausibel klingende, aber faktisch falsche Informationen',
                  'Das Modell arbeitet langsamer als erwartet',
                  'Das Modell versteht Schweizerdeutsch nicht',
                ],
                correct: 1,
                explanation: 'Halluzination ist ein bekanntes Problem: KI-Modelle generieren manchmal falsche Fakten, die überzeugend klingen. Besonders bei spezifischen lokalen oder rechtlichen Informationen ist Vorsicht geboten.',
              },
              {
                id: 'st-q3-2',
                question: 'Was ist der «Automatisierungsbias»?',
                options: [
                  'Die Tendenz von KI, automatisch zu antworten',
                  'Die Tendenz von Mitarbeitenden, KI-Outputs zu sehr zu vertrauen und zu wenig kritisch zu prüfen',
                  'Die automatische Vorliebe von KI für bestimmte Themen',
                  'Ein technischer Fehler im Automatisierungssystem',
                ],
                correct: 1,
                explanation: 'Automatisierungsbias ist ein menschliches Phänomen: Sobald eine Maschine etwas vorschlägt, neigen Menschen dazu, es weniger kritisch zu hinterfragen. Das ist ein reales Risiko bei KI-Einsatz in Gemeinden.',
              },
              {
                id: 'st-q3-3',
                question: 'Welche Anwendung hat laut Risikoampel das höchste Risiko und sollte ohne Rechtsberatung nicht eingesetzt werden?',
                options: [
                  'Protokollentwürfe erstellen',
                  'Bürger-FAQ-Chatbot konfigurieren',
                  'Rechtliche Beurteilungen durch KI',
                  'Medienmitteilungen verfassen',
                ],
                correct: 2,
                explanation: 'Rechtliche Beurteilungen sind Hochrisiko-Anwendungen: Fehler können Rechtsmittel-Verfahren auslösen, Gemeindeinteressen schädigen und das Vertrauen in die Verwaltung untergraben. Nie ohne Rechtsberatung und menschliche Kontrolle.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'st-modul-2',
      slug: 'st-strategie',
      title: 'KI-Strategie entwickeln',
      description: 'Vom Ist-Zustand zur Roadmap: Wie Gemeinden eine realistische KI-Strategie erarbeiten und umsetzen.',
      icon: '🗺️',
      order: 2,
      lessons: [
        {
          id: 'st-istanalyse',
          slug: 'st-istanalyse',
          title: 'Ist-Analyse und Bedarfserhebung',
          description: 'Den Ausgangspunkt klären: Welche Prozesse, welche Ressourcen, welche Bereitschaft – ein strukturierter Ansatz.',
          videoId: '',
          content: `
<h2>Der Ausgangspunkt: Wo steht die Gemeinde?</h2>
<p>Bevor eine KI-Strategie entwickelt werden kann, muss der Ist-Zustand klar sein. Viele Gemeinden überspringen diesen Schritt und wählen Tools, die nicht zu ihren tatsächlichen Bedürfnissen passen. Eine strukturierte Ist-Analyse spart später viel Zeit und Geld.</p>

<h3>Dimension 1: Prozesse</h3>
<p>Welche Prozesse in der Gemeindeverwaltung sind zeitaufwändig, repetitiv und potenziell durch KI unterstützbar?</p>
<ul>
  <li>Auflistung aller Kernprozesse (Einwohnerwesen, Bau, Finanzen, Kommunikation, etc.)</li>
  <li>Zeitaufwand pro Prozess schätzen</li>
  <li>Standardisierungsgrad bewerten (immer gleich vs. stark variierend)</li>
  <li>Datenverfügbarkeit prüfen (digitalisiert vs. auf Papier)</li>
</ul>

<h3>Dimension 2: Ressourcen</h3>
<p>Was steht der Gemeinde zur Verfügung?</p>
<ul>
  <li><strong>Budget:</strong> Wie viel kann investiert werden (Tools, Training, Beratung)?</li>
  <li><strong>Personal:</strong> Gibt es KI-affine Mitarbeitende? Wer könnte eine «KI-Koordinatorin» werden?</li>
  <li><strong>IT-Infrastruktur:</strong> Welche Software-Systeme sind im Einsatz? Bestehen API-Schnittstellen?</li>
  <li><strong>Zeit:</strong> Wie viel Kapazität steht für Einführungsprojekte zur Verfügung?</li>
</ul>

<h3>Dimension 3: Bereitschaft</h3>
<p>Wie offen ist das Team für Veränderungen?</p>
<ul>
  <li>Stimmung gegenüber KI im Team erfragen (anonym, ohne Druck)</li>
  <li>Frühere Digitalisierungsprojekte: Wie liefen sie? Was kann man lernen?</li>
  <li>Rückhalt in der Gemeindeführung: Ist der Gemeinderat / die Gemeindepräsidentin involviert?</li>
</ul>

<h3>Das Ergebnis der Ist-Analyse</h3>
<p>Am Ende der Analyse steht ein klares Bild: Welche drei bis fünf Prozesse haben das grösste Potenzial für KI-Unterstützung? Was sind die wichtigsten Ressourcen und Engpässe? Und wie gross ist die Veränderungsbereitschaft im Team? Dieses Bild ist die Grundlage für eine realistische Strategie.</p>

<blockquote>Eine Gemeinde mit 5 Mitarbeitenden und wenig IT-Infrastruktur braucht eine andere Strategie als eine Stadt mit 200 Mitarbeitenden und eigenem IT-Team. Die Ist-Analyse stellt sicher, dass die Strategie zur tatsächlichen Situation passt.</blockquote>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'st-q4-1',
                question: 'Warum ist eine Ist-Analyse vor der KI-Strategie wichtig?',
                options: [
                  'Sie ist gesetzlich vorgeschrieben',
                  'Ohne klaren Ausgangspunkt wählen Gemeinden oft Tools, die nicht zu ihren tatsächlichen Bedürfnissen passen',
                  'Sie muss von externen Beratern durchgeführt werden',
                  'Sie ist nur für grosse Städte relevant',
                ],
                correct: 1,
                explanation: 'Die Ist-Analyse verhindert den häufigsten Fehler: Tools wählen, bevor man die eigenen Bedürfnisse kennt. Ohne Ausgangspunkt ist keine realistische Strategie möglich.',
              },
              {
                id: 'st-q4-2',
                question: 'Welche der drei Dimensionen der Ist-Analyse befasst sich mit der Frage, wie offen das Team für KI ist?',
                options: [
                  'Dimension Prozesse',
                  'Dimension Ressourcen',
                  'Dimension Bereitschaft',
                  'Dimension Technologie',
                ],
                correct: 2,
                explanation: 'Die Bereitschaftsdimension erfasst die menschliche Seite: Stimmung, frühere Digitalisierungserfahrungen und Rückhalt in der Führung. Diese Dimension entscheidet oft mehr über Erfolg oder Misserfolg als die Technologie.',
              },
              {
                id: 'st-q4-3',
                question: 'Was ist das Ziel der Ist-Analyse?',
                options: [
                  'Alle KI-Tools der Gemeinde kaufen',
                  'Ein klares Bild der wichtigsten Prozesse, Ressourcen und Bereitschaft als Basis für eine realistische Strategie',
                  'Eine externe Beratungsfirma beauftragen',
                  'Den Gemeinderat von KI zu überzeugen',
                ],
                correct: 1,
                explanation: 'Die Ist-Analyse liefert die Fakten, auf denen eine realistische Strategie aufgebaut wird: welche Prozesse geeignet sind, welche Ressourcen verfügbar sind, wie bereit das Team ist.',
              },
            ],
          },
        },
        {
          id: 'st-roadmap',
          slug: 'st-roadmap',
          title: 'Roadmap und Pilotprojekte',
          description: 'Wie man aus der Ist-Analyse eine konkrete KI-Roadmap mit realistischen Meilensteinen entwickelt.',
          videoId: '',
          content: `
<h2>Von der Analyse zur Roadmap</h2>
<p>Eine gute KI-Roadmap für Gemeinden ist kein ambitioniertes 5-Jahres-Programm – sie ist ein pragmatischer Plan, der in 12-18 Monaten echte Ergebnisse liefert und dabei lernfähig bleibt. Das Schlüsselwort ist: <strong>iterativ</strong>.</p>

<h3>Der Drei-Phasen-Ansatz</h3>

<p><strong>Phase 1: Schnelle Gewinne (0-3 Monate)</strong></p>
<ul>
  <li>1-2 einfache Anwendungsfälle mit sofortigem Mehrwert einführen (z.B. Protokollerstellung)</li>
  <li>Keine komplexe IT-Integration – bestehende Tools nutzen</li>
  <li>Freiwillige Frühanwender einbeziehen</li>
  <li>Lernbereit bleiben: Was funktioniert? Was nicht?</li>
</ul>

<p><strong>Phase 2: Ausbau und Integration (3-9 Monate)</strong></p>
<ul>
  <li>Erfolgreiche Anwendungsfälle auf das ganze Team ausweiten</li>
  <li>2-3 weitere Anwendungsfälle mittlerer Komplexität angehen</li>
  <li>Erfahrungen aus Phase 1 in die Konfiguration einbauen</li>
  <li>Qualitätssicherungsprozesse formalisieren</li>
</ul>

<p><strong>Phase 3: Vertiefung und Strategie (9-18 Monate)</strong></p>
<ul>
  <li>Komplexere Projekte angehen (z.B. Bürger-Chatbot, Workflow-Automatisierungen)</li>
  <li>Governance und Richtlinien finalisieren</li>
  <li>Evaluation: Was hat die KI-Einführung gebracht? Was wird angepasst?</li>
</ul>

<h3>Das Pilotprojekt: Kriterien für die Auswahl</h3>
<p>Das erste Pilotprojekt ist entscheidend – es prägt die Wahrnehmung von KI in der ganzen Gemeinde. Gute Pilotprojekte haben:</p>
<ul>
  <li><strong>Klaren Mehrwert:</strong> Die Zeitersparnis ist spürbar und messbar</li>
  <li><strong>Niedriges Risiko:</strong> Fehler haben keine rechtlichen oder schwerwiegenden Konsequenzen</li>
  <li><strong>Motivierte Projektleitung:</strong> Jemand im Team trägt das Projekt mit Überzeugung</li>
  <li><strong>Sichtbarkeit:</strong> Das ganze Team kann den Erfolg miterleben</li>
</ul>

<h3>Erfolgsmessung einbauen</h3>
<p>Was nicht gemessen wird, wird nicht verbessert. Definiere vor dem Start:</p>
<ul>
  <li>Wie lange dauert der Prozess heute? (Baseline)</li>
  <li>Wie lange soll er mit KI dauern? (Zielwert)</li>
  <li>Wie wird die Qualität bewertet? (Qualitätsindikatoren)</li>
  <li>Wer reviewt die Ergebnisse? (Verantwortlichkeit)</li>
</ul>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'st-q5-1',
                question: 'Warum sollte man bei der KI-Einführung mit «schnellen Gewinnen» starten?',
                options: [
                  'Weil komplexe Projekte immer scheitern',
                  'Um schnell Erfahrungen zu sammeln, Vertrauen aufzubauen und den Mehrwert für das Team sichtbar zu machen',
                  'Weil die Gemeinde kein Budget für komplexe Projekte hat',
                  'Weil einfache Projekte nie Fehler produzieren',
                ],
                correct: 1,
                explanation: 'Schnelle Gewinne schaffen Vertrauen, liefern Lernerfahrungen und motivieren das Team. Das ist die Grundlage für den Erfolg komplexerer Projekte in Phase 2 und 3.',
              },
              {
                id: 'st-q5-2',
                question: 'Welches Kriterium ist für die Auswahl eines guten Pilotprojekts besonders wichtig?',
                options: [
                  'Der Prozess muss der komplexeste in der Gemeinde sein',
                  'Niedriges Risiko und klarer, messbarer Mehrwert',
                  'Das Projekt muss von externen Beratern entwickelt werden',
                  'Der Prozess muss noch nie digitalisiert worden sein',
                ],
                correct: 1,
                explanation: 'Ein gutes Pilotprojekt hat niedrige Fehlertoleranz und spürbaren Mehrwert. Das prägt die Wahrnehmung von KI positiv und schafft Rückhalt für grössere Projekte.',
              },
              {
                id: 'st-q5-3',
                question: 'Warum ist es wichtig, vor dem Start eines KI-Projekts eine Baseline zu definieren?',
                options: [
                  'Weil das die Gemeindekanzlei verlangt',
                  'Damit man nach dem Projekt messen kann, ob und wie viel Zeit die KI-Lösung tatsächlich spart',
                  'Weil KI-Tools nur mit einer Baseline funktionieren',
                  'Baseline ist nur für grosse Projekte relevant',
                ],
                correct: 1,
                explanation: 'Ohne Baseline weiss man nicht, ob das Projekt erfolgreich war. «Gefühlt schneller» ist kein Argument gegenüber dem Gemeinderat. Messbare Ergebnisse schaffen Vertrauen und rechtfertigen weitere Investitionen.',
              },
            ],
          },
        },
        {
          id: 'st-budget',
          slug: 'st-budget',
          title: 'Budget, Beschaffung und Vergabe',
          description: 'Wie Gemeinden KI-Tools finanzieren, beschaffen und die öffentlichen Vergaberegeln einhalten.',
          videoId: '',
          content: `
<h2>Budget und Beschaffung: Die praktischen Fragen</h2>
<p>KI-Projekte in Gemeinden scheitern oft nicht an der Technologie – sondern an Budgetfragen und Beschaffungshürden. Dieser Abschnitt gibt einen pragmatischen Überblick über die wichtigsten Aspekte.</p>

<h3>Typische Kostenkomponenten</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Kostenkomponente</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Grössenordnung</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Anmerkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">SaaS-Tools (ChatGPT, Claude, etc.)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">CHF 20-50 / Nutzer / Monat</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Oft kein Ausschreibungsverfahren nötig</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Einführungsberatung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">CHF 5'000-20'000</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Je nach Komplexität</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Mitarbeitenden-Schulung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">CHF 500-2'000 / Person</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Intern oder extern möglich</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Spezifische KI-Lösungen (Chatbot, etc.)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">CHF 10'000-100'000+</td>
        <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Ausschreibungspflicht prüfen</td>
    </tr>
  </tbody>
</table>

<h3>Beschaffungsrecht: Was Gemeinden wissen müssen</h3>
<p>Schweizer Gemeinden unterliegen dem öffentlichen Beschaffungsrecht (BGÖB / kantonale IVöB). Die wichtigsten Schwellenwerte (kantonal variierend):</p>
<ul>
  <li><strong>Freihändige Vergabe:</strong> Unter ca. CHF 50'000-150'000 (kantonal verschieden) – direkte Beauftragung möglich</li>
  <li><strong>Einladungsverfahren:</strong> Ab ca. CHF 50'000-150'000 – mindestens 3 Offerten einholen</li>
  <li><strong>Offenes Verfahren:</strong> Ab ca. CHF 250'000+ – öffentliche Ausschreibung</li>
</ul>
<p><strong>Wichtig:</strong> Viele Standard-SaaS-Tools (ChatGPT, Claude) fallen durch ihre niedrigen Abokosten unter den Schwellenwert für eine Ausschreibung. Bei spezifisch entwickelten KI-Lösungen ist das anders.</p>

<h3>Vertragsrechtliche Aspekte</h3>
<ul>
  <li><strong>Datenlokalisierung:</strong> Wo werden die Daten gespeichert? (Schweiz, EU, USA)</li>
  <li><strong>Datensicherheit:</strong> Welche Zertifizierungen hat der Anbieter? (ISO 27001, etc.)</li>
  <li><strong>Nutzung für Training:</strong> Dürfen Gemeindedaten für das Training des Modells verwendet werden? (oft ablehnbar)</li>
  <li><strong>Kündbarkeit:</strong> Wie einfach kann die Gemeinde den Vertrag beenden?</li>
</ul>

<h3>Interkommunale Zusammenarbeit</h3>
<p>Besonders für kleinere Gemeinden lohnt sich die Zusammenarbeit mit Nachbargemeinden: gemeinsame Beschaffung, geteilte Einführungskosten, gemeinsame Governance-Frameworks. Kantonale Verbände (z.B. Gemeindepräsidentenkonferenz) koordinieren solche Zusammenschlüsse.</p>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'st-q6-1',
                question: 'Warum unterliegen Standard-SaaS-KI-Tools wie ChatGPT oder Claude oft keiner Ausschreibungspflicht?',
                options: [
                  'Weil KI vom Beschaffungsrecht ausgenommen ist',
                  'Weil ihre monatlichen Abokosten meist unter dem kantonalen Schwellenwert für eine Ausschreibung liegen',
                  'Weil amerikanische Anbieter keine Ausschreibung brauchen',
                  'Weil sie nur für interne Nutzung gedacht sind',
                ],
                correct: 1,
                explanation: 'SaaS-Abonnements à CHF 20-50 pro Person und Monat summieren sich bei kleinen Teams auf wenige tausend Franken pro Jahr – weit unter den kantonalen Schwellenwerten für ein Einladungs- oder offenes Verfahren.',
              },
              {
                id: 'st-q6-2',
                question: 'Welche vertragliche Frage ist für Gemeinden beim Abschluss eines KI-Tool-Vertrags besonders wichtig?',
                options: [
                  'Ob der Anbieter ein Büro in der Schweiz hat',
                  'Ob die Gemeindedaten für das Training des KI-Modells verwendet werden dürfen',
                  'Ob das Tool auf Schweizerdeutsch verfügbar ist',
                  'Ob der CEO persönlich bekannt ist',
                ],
                correct: 1,
                explanation: 'Viele KI-Anbieter nutzen standardmässig Nutzerdaten für Modell-Training. Für Gemeinden mit vertraulichen Daten muss das explizit abgelehnt oder vertraglich ausgeschlossen werden.',
              },
              {
                id: 'st-q6-3',
                question: 'Welchen Vorteil bietet interkommunale Zusammenarbeit bei der KI-Einführung?',
                options: [
                  'Nur eine Gemeinde profitiert',
                  'Gemeinsame Beschaffung, geteilte Einführungskosten und gemeinsame Governance-Frameworks – besonders für kleine Gemeinden wertvoll',
                  'Grössere Gemeinden übernehmen alle Kosten',
                  'Interkommunale Zusammenarbeit verzögert die Einführung',
                ],
                correct: 1,
                explanation: 'Kleinere Gemeinden haben begrenzte Ressourcen. Interkommunale Zusammenarbeit senkt Kosten, ermöglicht bessere Verhandlungsposition und verhindert, dass jede Gemeinde das Rad neu erfindet.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'st-modul-3',
      slug: 'st-governance',
      title: 'Governance, Recht und Akzeptanz',
      description: 'Rechtliche Grundlagen, Datenschutz und gesellschaftliche Akzeptanz für KI in der öffentlichen Verwaltung.',
      icon: '⚖️',
      order: 3,
      lessons: [
        {
          id: 'st-datenschutz',
          slug: 'st-datenschutz',
          title: 'Datenschutz in der öffentlichen Verwaltung',
          description: 'Das Schweizer Datenschutzgesetz, Amtsgeheimnis und sichere Datenverarbeitung bei KI in Gemeinden.',
          videoId: '',
          content: `
<h2>Datenschutz und KI in Gemeinden</h2>
<p>Datenschutz ist für Gemeinden keine optionale Zusatzfrage – er ist eine gesetzliche Pflicht und eine Frage des Vertrauens der Bürgerinnen und Bürger. Bei KI-Anwendungen gelten dieselben Regeln wie für jede andere Datenverarbeitung, aber die Risiken sind höher und die Transparenzanforderungen strenger.</p>

<h3>Das revidierte Datenschutzgesetz (DSG) seit September 2023</h3>
<p>Das neue DSG bringt für Gemeinden wichtige Anforderungen:</p>
<ul>
  <li><strong>Zweckbindung:</strong> Personendaten dürfen nur für den Zweck bearbeitet werden, für den sie erhoben wurden</li>
  <li><strong>Datensparsamkeit:</strong> Nur so viele Daten wie nötig erheben und verarbeiten</li>
  <li><strong>Bearbeitung durch Dritte (Auftragsbearbeitung):</strong> Wenn ein KI-Anbieter Personendaten verarbeitet, braucht es einen Auftragsbearbeitungsvertrag</li>
  <li><strong>Datenschutz durch Technik (Privacy by Design):</strong> Datenschutz von Anfang an einplanen</li>
  <li><strong>Datenschutz-Folgenabschätzung:</strong> Bei hohem Risiko für Personendaten ist eine Folgenabschätzung Pflicht</li>
</ul>

<h3>Das Amtsgeheimnis</h3>
<p>Gemeindemitarbeitende unterliegen dem Amtsgeheimnis. Das bedeutet: Vertrauliche Informationen aus der Verwaltungsarbeit – Personendaten, laufende Verfahren, interne Beratungen – dürfen nicht an Unbefugte weitergegeben werden. Das gilt auch für KI-Tools:</p>
<ul>
  <li>Vertrauliche Fallakten dürfen nicht in externe KI-Dienste eingegeben werden</li>
  <li>Einzelfallbezogene Personendaten (Name, Adresse, Gesundheitsdaten) sind besonders geschützt</li>
  <li>Sitzungsprotokolle mit nicht-öffentlichen Traktanden erfordern Vorsicht</li>
</ul>

<h3>Praktische Regeln für Gemeinden</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Datentyp</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">In externe KI-Tools?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Öffentliche Dokumente (Richtpläne, Reglemente)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #006b5f;">✓ Ja, unbedenklich</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Anonymisierte Statistiken</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #006b5f;">✓ Ja, nach Prüfung</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Interne Protokolle ohne Personendaten</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #e65c00;">⚠ Mit Vorsicht</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Einzelfallakten mit Personenbezug</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #c0392b;">✗ Nein, ohne rechtl. Grundlage</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Gesundheits-, Sozial- oder Steuerdaten</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #c0392b;">✗ Nein, besonders geschützt</td>
    </tr>
  </tbody>
</table>

<h3>Schweizer Anbieter und lokale Alternativen</h3>
<p>Für sensible Daten gibt es Alternativen zu internationalen KI-Diensten:</p>
<ul>
  <li>Schweizer Cloud-Anbieter mit DSG-konformem Hosting</li>
  <li>EU-konforme Dienste mit Daten-Residency in der EU/Schweiz</li>
  <li>Lokale Modelle (on-premises) – technisch aufwändiger, aber datenschutzrechtlich sicher</li>
</ul>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'st-q7-1',
                question: 'Was erfordert das revidierte DSG, wenn ein KI-Anbieter Personendaten einer Gemeinde verarbeitet?',
                options: [
                  'Nichts Besonderes – der Anbieter ist selbst verantwortlich',
                  'Einen Auftragsbearbeitungsvertrag, der die Rechte und Pflichten regelt',
                  'Eine Genehmigung des Bundesrats',
                  'Eine öffentliche Bekanntmachung',
                ],
                correct: 1,
                explanation: 'Wenn Dritte (wie KI-Anbieter) Personendaten im Auftrag bearbeiten, braucht es einen Auftragsbearbeitungsvertrag. Das ist eine Grundanforderung des revidierten DSG.',
              },
              {
                id: 'st-q7-2',
                question: 'Welcher Datentyp darf ohne weiteres in externe KI-Tools eingegeben werden?',
                options: [
                  'Einzelfallakten mit Personenbezug',
                  'Gesundheits- und Steuerdaten',
                  'Öffentliche Dokumente wie Richtpläne und Reglemente',
                  'Vertrauliche Sitzungsprotokolle',
                ],
                correct: 2,
                explanation: 'Öffentliche Dokumente sind für die Allgemeinheit zugänglich und enthalten keine Personendaten. Sie können in KI-Tools verwendet werden ohne datenschutzrechtliche Bedenken.',
              },
              {
                id: 'st-q7-3',
                question: 'Was bedeutet das Amtsgeheimnis für die KI-Nutzung in Gemeinden?',
                options: [
                  'Alle KI-Tools müssen geheim gehalten werden',
                  'Vertrauliche Informationen aus der Verwaltungsarbeit – auch Personendaten – dürfen nicht unkontrolliert in externe KI-Dienste eingegeben werden',
                  'KI-Tools dürfen in Gemeinden nicht verwendet werden',
                  'Das Amtsgeheimnis gilt nicht für digitale Werkzeuge',
                ],
                correct: 1,
                explanation: 'Das Amtsgeheimnis gilt auch für KI-Tools. Vertrauliche Fallakten, Sitzungsprotokolle mit sensiblen Inhalten und Personendaten sind geschützt – unabhängig davon, ob die Verarbeitung digital oder analog erfolgt.',
              },
            ],
          },
        },
        {
          id: 'st-regulierung',
          slug: 'st-regulierung',
          title: 'KI-Regulierung Schweiz und EU',
          description: 'Der EU AI Act, Schweizer Recht und was das konkret für Gemeinden bedeutet.',
          videoId: '',
          content: `
<h2>KI-Regulierung: Was Gemeinden wissen müssen</h2>
<p>Die KI-Regulierung entwickelt sich rasant. Für Schweizer Gemeinden sind primär zwei Rechtsräume relevant: das Schweizer Recht und die EU-Regulierung, die als indirekter Standard wirkt.</p>

<h3>Der EU AI Act (seit August 2024 in Kraft)</h3>
<p>Der EU AI Act ist das weltweit erste umfassende KI-Gesetz und hat auch für Schweizer Gemeinden Relevanz:</p>
<ul>
  <li><strong>Direkt anwendbar:</strong> Wenn Gemeinden KI-Systeme von EU-Anbietern nutzen, müssen diese den AI Act erfüllen</li>
  <li><strong>Hochrisiko-KI:</strong> KI in Bereichen wie Bildung, Beschäftigung, wesentliche private und öffentliche Dienste ist «Hochrisiko» und unterliegt strengeren Anforderungen</li>
  <li><strong>Verbotene KI:</strong> Social Scoring, manipulative KI, biometrische Massenüberwachung sind verboten – auch für öffentliche Stellen</li>
</ul>

<h3>Risikoklassen des AI Acts</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #f0f7ff;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Risikoklasse</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Beispiele in Gemeinden</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Anforderungen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #c0392b; font-weight: bold;">Verboten</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Social Scoring von Bürgerinnen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Nicht erlaubt</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #e65c00; font-weight: bold;">Hochrisiko</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Automatische Entscheide in Sozialwesen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Strenge Dokumentation, Audit, Transparenz</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #0057a8; font-weight: bold;">Mittleres Risiko</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Bürger-Chatbot</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Transparenzpflicht (KI offenlegen)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7; color: #006b5f; font-weight: bold;">Minimales Risiko</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Protokollerstellung, Textarbeit</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Keine spezifischen Anforderungen</td>
    </tr>
  </tbody>
</table>

<h3>Schweizer Recht</h3>
<p>Die Schweiz hat noch kein spezifisches KI-Gesetz. Relevante bestehende Regelwerke:</p>
<ul>
  <li><strong>DSG:</strong> Datenschutz auch bei KI-Anwendungen</li>
  <li><strong>VwVG / kantonale Verwaltungsverfahrensgesetze:</strong> Anforderungen an Verwaltungsakte (Begründungspflicht, Rechtsmittel)</li>
  <li><strong>Öffentlichkeitsprinzip:</strong> Bürger haben Recht auf Auskunft über behördliche Entscheide – auch wenn KI beteiligt war</li>
</ul>

<h3>Praktische Konsequenz: Transparenz</h3>
<p>Für alle KI-Anwendungen, die Bürgerinnen und Bürger betreffen, gilt das Gebot der Transparenz: Wenn ein Chatbot eine Bürgeranfrage beantwortet, muss erkennbar sein, dass es sich um KI handelt. Wenn KI einen Verwaltungsentscheid unterstützt, muss das offengelegt werden können.</p>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'st-q8-1',
                question: 'Was ist der EU AI Act und warum ist er für Schweizer Gemeinden relevant?',
                options: [
                  'Er gilt nur für EU-Länder und ist für Schweizer Gemeinden irrelevant',
                  'Er ist das erste umfassende KI-Gesetz und wirkt als Standard, da viele KI-Anbieter EU-Firmen sind und den Act erfüllen müssen',
                  'Er verbietet alle KI in öffentlichen Verwaltungen',
                  'Er gilt nur für Grossunternehmen',
                ],
                correct: 1,
                explanation: 'Schweizer Gemeinden nutzen viele KI-Tools von EU-Anbietern, die den AI Act erfüllen müssen. Die Anforderungen des Acts prägen indirekt auch den Schweizer Markt und setzen Standards.',
              },
              {
                id: 'st-q8-2',
                question: 'Welche KI-Anwendung ist laut EU AI Act für öffentliche Stellen verboten?',
                options: [
                  'KI-Chatbots für Bürgerfragen',
                  'KI-Protokollerstellung',
                  'Social Scoring von Bürgerinnen und Bürgern',
                  'KI-Unterstützung bei der Texterstellung',
                ],
                correct: 2,
                explanation: 'Social Scoring – das Bewerten und Klassifizieren von Menschen anhand ihres Verhaltens durch staatliche Stellen – ist im EU AI Act explizit verboten. Das ist ein fundamentaler demokratischer Grundsatz.',
              },
              {
                id: 'st-q8-3',
                question: 'Was fordert das Transparenzgebot bei KI-gestützten Bürgerinteraktionen?',
                options: [
                  'Alle internen KI-Dokumente müssen veröffentlicht werden',
                  'Bürgerinnen und Bürger müssen erkennen können, wenn sie mit KI interagieren oder wenn KI einen Entscheid beeinflusst hat',
                  'Gemeinden müssen alle KI-Ausgaben öffentlich ausschreiben',
                  'Transparenz gilt nur für Hochrisiko-KI',
                ],
                correct: 1,
                explanation: 'Transparenz ist ein Kerngebot: Bürger haben das Recht zu wissen, wenn sie mit KI interagieren. Chatbots müssen sich als KI zu erkennen geben; KI-beeinflusste Entscheide müssen offengelegt werden können.',
              },
            ],
          },
        },
        {
          id: 'st-akzeptanz',
          slug: 'st-akzeptanz',
          title: 'Akzeptanz und Vertrauen schaffen',
          description: 'Wie Gemeinden die Akzeptanz von KI bei Mitarbeitenden, Gemeinderat und Bevölkerung aufbauen.',
          videoId: '',
          content: `
<h2>Vertrauen als Voraussetzung für Wirkung</h2>
<p>KI in der öffentlichen Verwaltung ist nur dann nachhaltig wirksam, wenn drei Gruppen ihr vertrauen: die Mitarbeitenden, die damit arbeiten; der Gemeinderat, der sie genehmigt und finanziert; und die Bevölkerung, die von den Entscheiden betroffen ist. Vertrauen entsteht nicht durch Kommunikation alleine – sondern durch Handeln.</p>

<h3>Akzeptanz bei Mitarbeitenden</h3>
<p>Mitarbeitende wollen keine Angst vor der eigenen Zukunft haben. Konkrete Massnahmen:</p>
<ul>
  <li><strong>Frühzeitig einbeziehen:</strong> Nicht «KI wird eingeführt» ankündigen, sondern gemeinsam entwickeln</li>
  <li><strong>Ausbildung anbieten:</strong> Wer KI beherrscht, hat keine Angst davor</li>
  <li><strong>Mehrwert zeigen, nicht behaupten:</strong> Eigene Erfahrungen der Mitarbeitenden überzeugen mehr als Präsentationen</li>
  <li><strong>Keine Überwachungstechnologie:</strong> KI darf nicht für die Leistungsmessung von Mitarbeitenden verwendet werden</li>
</ul>

<h3>Akzeptanz beim Gemeinderat</h3>
<p>Der Gemeinderat entscheidet über Budgets und trägt die politische Verantwortung. Überzeugend sind:</p>
<ul>
  <li>Konkrete Zahlen: Zeitersparnis, Kostenreduktion, verbesserte Servicequalität</li>
  <li>Klare Governance: Wer trägt die Verantwortung? Was passiert bei Fehlern?</li>
  <li>Vergleich mit anderen Gemeinden: Was machen Vergleichsgemeinden bereits?</li>
  <li>Rechtliche Absicherung: Welche rechtlichen Grundlagen bestehen?</li>
</ul>

<h3>Akzeptanz bei der Bevölkerung</h3>
<p>Bürgerinnen und Bürger müssen auf zwei Fragen vertrauen können:</p>
<ol>
  <li>«Werden meine Daten sicher behandelt?»</li>
  <li>«Treffen am Ende Menschen die Entscheide, die mich betreffen?»</li>
</ol>
<p>Kommunikationsprinzipien:</p>
<ul>
  <li><strong>Aktiv informieren:</strong> Nicht warten bis Fragen kommen – proaktiv kommunizieren, wo KI eingesetzt wird</li>
  <li><strong>Ehrlich über Grenzen sein:</strong> KI macht Fehler – das transparent zu sagen stärkt das Vertrauen</li>
  <li><strong>Menschliche Kontrolle betonen:</strong> «KI hilft uns, aber Menschen entscheiden» – das ist die richtige Botschaft</li>
  <li><strong>Rückmeldungsmöglichkeiten schaffen:</strong> Bürger sollen Probleme mit KI-Interaktionen melden können</li>
</ul>

<h3>Das Vertrauens-Konto</h3>
<p>Vertrauen ist wie ein Bankkonto: Es wird langsam aufgebaut und schnell verbraucht. Jede gute Erfahrung mit KI in der Gemeindeverwaltung – ein schnell beantwortetes Anliegen, ein präzises Protokoll, eine hilfreiche Information – zahlt auf dieses Konto ein. Jede schlechte Erfahrung – ein falscher Chatbot-Output, eine datenschutzrechtliche Panne – belastet es erheblich.</p>

<blockquote>Die nachhaltigsten KI-Einführungen in Gemeinden teilen ein Merkmal: Sie fangen klein an, zeigen Erfolge, und bauen Schritt für Schritt Vertrauen auf – statt grosse Versprechen zu machen, die dann enttäuscht werden.</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'st-q9-1',
                question: 'Welche Massnahme ist am wirkungsvollsten, um Mitarbeitende für KI zu gewinnen?',
                options: [
                  'Eine überzeugende Strategie-Präsentation halten',
                  'Mitarbeitende von Anfang an einbeziehen und ihnen eigene positive Erfahrungen mit KI ermöglichen',
                  'Alle Mitarbeitenden zu einer KI-Zertifizierung verpflichten',
                  'Nur die KI-affinen Mitarbeitenden informieren',
                ],
                correct: 1,
                explanation: 'Eigene Erfahrungen überzeugen mehr als Präsentationen. Wenn jemand selbst erlebt, dass KI ihm 2 Stunden Arbeit abnimmt, ist Überzeugungsarbeit nicht mehr nötig.',
              },
              {
                id: 'st-q9-2',
                question: 'Was ist die wichtigste Botschaft für die Bevölkerung beim KI-Einsatz in Gemeinden?',
                options: [
                  '«KI ersetzt alle Mitarbeitenden für mehr Effizienz»',
                  '«KI hilft uns, aber Menschen treffen die Entscheide» – Kombination aus Effizienz und menschlicher Kontrolle',
                  '«KI macht keine Fehler – sie ist zuverlässiger als Menschen»',
                  '«KI ist zu komplex um erklärt zu werden»',
                ],
                correct: 1,
                explanation: 'Die Bevölkerung will wissen: «Treffen Menschen am Ende die Entscheide?» Die Botschaft «KI hilft, Menschen entscheiden» adressiert genau dieses Bedürfnis und schafft Vertrauen.',
              },
              {
                id: 'st-q9-3',
                question: 'Was versteht man unter dem «Vertrauens-Konto» im Kontext von KI in Gemeinden?',
                options: [
                  'Ein Bankkonto für KI-Investitionen',
                  'Das Vertrauen wird wie ein Konto langsam aufgebaut (durch gute Erfahrungen) und kann schnell verbraucht werden (durch Fehler oder Pannen)',
                  'Ein spezielles Finanzierungsmodell für KI-Projekte',
                  'Das Vertrauen des Gemeinderats in externe Berater',
                ],
                correct: 1,
                explanation: 'Das Vertrauens-Konto ist eine Metapher: Jede positive Erfahrung baut Vertrauen auf; jede negative Erfahrung – falscher Chatbot, Datenpanne – verbraucht es. Nachhaltiger KI-Einsatz investiert bewusst in dieses Konto.',
              },
            ],
          },
        },
      ],
    },
  ],
};
