import type { Course } from '@/types';

export const COURSE_UVP: Course = {
  title: 'UVP mit KI',
  slug: 'ki-uvp',
  description: 'Einführung in die Umweltverträglichkeitsprüfung (UVP) nach Schweizer Recht – von der UVP-Pflicht über Schutzgüter bis zum Pflichtenheft. Mit Einführung in das KI-Tool uvp.interessenabwaegung.ch.',
  modules: [
    {
      id: 'uvp-modul-1',
      slug: 'uvp-grundlagen',
      title: 'Grundlagen und Rechtlicher Rahmen',
      description: 'Was die UVP ist, welche Rechtsgrundlagen gelten, welche Anlagen UVP-pflichtig sind und welche Schutzgüter geprüft werden.',
      icon: '📋',
      order: 1,
      lessons: [
        {
          id: 'uvp-was-ist',
          slug: 'uvp-was-ist',
          title: 'Was ist die UVP?',
          description: 'Zweck, Geschichte (seit 1988/USG), Einbettung ins Bewilligungsverfahren, kein eigenständiges Verfahren, Präventionsprinzip.',
          videoId: '',
          content: `
<h2>Die Umweltverträglichkeitsprüfung: Präventiver Umweltschutz</h2>
<p>Die Umweltverträglichkeitsprüfung (UVP) ist ein <strong>präventives Instrument des Schweizer Umweltrechts</strong>. Sie stellt sicher, dass Anlagen und Vorhaben, die erhebliche Auswirkungen auf die Umwelt haben können, vor ihrer Bewilligung auf ihre Umweltverträglichkeit hin untersucht werden. Ziel ist es, Umweltschäden zu verhindern, bevor sie entstehen – nicht erst nachträglich zu sanieren.</p>

<h3>Geschichte: Von 1988 bis heute</h3>
<p>Die UVP-Pflicht in der Schweiz wurde mit dem <strong>Bundesgesetz über den Umweltschutz (USG)</strong> eingeführt. Massgebende Meilensteine:</p>
<ul>
  <li><strong>1983:</strong> Inkrafttreten des USG (Bundesgesetz über den Umweltschutz, SR 814.01)</li>
  <li><strong>1988:</strong> Inkrafttreten der Umweltverträglichkeitsprüfungs-Verordnung (UVPV, SR 814.011) – damit wird die UVP-Pflicht für eine definierte Anlagenliste verbindlich</li>
  <li><strong>1990er–2000er:</strong> Schrittweise Erweiterung des Anhangs mit neuen Anlagentypen</li>
  <li><strong>Heute:</strong> Über 70 Anlagentypen im Anhang der UVPV; regelmässige Aktualisierung durch den Bundesrat</li>
</ul>
<p>Die Schweiz folgte damit der damaligen EG-Richtlinie (85/337/EWG) – jedoch mit einem eigenständigen, stärker auf kantonale Zuständigkeiten ausgerichteten System.</p>

<h3>Einbettung ins Bewilligungsverfahren</h3>
<p>Die UVP ist <strong>kein eigenständiges Verfahren</strong> – das ist ein häufiges Missverständnis. Sie ist in das ordentliche Bewilligungsverfahren integriert:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #e8f5e9;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Was die UVP ist</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Was die UVP nicht ist</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Teil des Baubewilligungs- oder Konzessionsverfahrens</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Ein separates, eigenständiges Verfahren mit eigener Behörde</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Beurteilungsgrundlage für die zuständige Behörde</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Eine Entscheidung über das Vorhaben selbst</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Verpflichtung zur umfassenden Umweltprüfung vor Baubeginn</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Ein Ablehnungsautomatismus bei Umweltauswirkungen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Basis für Auflagen und Bedingungen im Bewilligungsentscheid</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Ersatz für die fachliche Beurteilung durch die Behörde</td>
    </tr>
  </tbody>
</table>

<h3>Das Präventionsprinzip als Kern der UVP</h3>
<p>Das Präventionsprinzip ist in Art. 1 USG verankert: Umweltbeeinträchtigungen, die schädlich oder lästig werden könnten, sollen frühzeitig begrenzt werden. Für die UVP bedeutet das:</p>
<ol>
  <li><strong>Frühzeitige Prüfung:</strong> Noch vor der Bewilligung, nicht nach dem Bau</li>
  <li><strong>Vollständige Erfassung:</strong> Alle erheblichen Umweltauswirkungen müssen untersucht werden</li>
  <li><strong>Alternativen prüfen:</strong> Gibt es umweltverträglichere Standorte oder Ausführungsvarianten?</li>
  <li><strong>Massnahmen vorschreiben:</strong> Die Bewilligung enthält Auflagen, die Umweltschäden verhindern oder minimieren</li>
</ol>

<blockquote>Die UVP ist kein Hindernis für Projekte – sie ist ein Qualitätssicherungsinstrument. Ein gut durchgeführter UVP-Prozess macht Projekte rechtssicherer, verhindert kostspielige Nachbesserungen und stärkt das Vertrauen der Öffentlichkeit.</blockquote>

<h3>Abgrenzung zur Strategischen Umweltprüfung (SUP)</h3>
<p>Neben der projektbezogenen UVP gibt es die <strong>Strategische Umweltprüfung (SUP)</strong>, die auf Pläne und Programme angewandt wird. Während die UVP ein konkretes Bauprojekt begleitet, prüft die SUP zum Beispiel kantonale Richtpläne oder Nutzungspläne auf ihre Umweltauswirkungen. In der Schweiz ist die SUP weniger formalisiert als die UVP.</p>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'uvp-q1-1',
                question: 'Wann trat die UVPV (Umweltverträglichkeitsprüfungs-Verordnung) in der Schweiz in Kraft?',
                options: [
                  '1975, zusammen mit dem Raumplanungsgesetz (RPG)',
                  '1983, zusammen mit dem Umweltschutzgesetz (USG)',
                  '1988, als eigenständige Verordnung zum USG',
                  '2000, nach einer Volksinitiative für mehr Umweltschutz',
                ],
                correct: 2,
                explanation: 'Die UVPV (SR 814.011) trat 1988 in Kraft, fünf Jahre nach dem USG (1983). Damit wurde die UVP-Pflicht für eine definierte Liste von Anlagentypen verbindlich. Das USG selbst enthält die Rechtsgrundlage (Art. 10a–10d), die UVPV regelt die Details.',
              },
              {
                id: 'uvp-q1-2',
                question: 'Was ist charakteristisch für die UVP im Schweizer Recht?',
                options: [
                  'Die UVP ist ein eigenständiges Verfahren mit einer separaten Umweltbehörde als Entscheidungsinstanz',
                  'Die UVP ist in das ordentliche Bewilligungsverfahren integriert und kein separates Verfahren',
                  'Die UVP führt bei erheblichen Umweltauswirkungen automatisch zur Ablehnung des Projekts',
                  'Die UVP ist freiwillig und wird nur auf Antrag der Bauherrschaft durchgeführt',
                ],
                correct: 1,
                explanation: 'Die UVP ist kein eigenständiges Verfahren, sondern in das bestehende Bewilligungsverfahren integriert. Die zuständige Bewilligungsbehörde beurteilt die Umweltverträglichkeit als Teil ihrer normalen Tätigkeit – unterstützt durch die Umweltfachstelle.',
              },
              {
                id: 'uvp-q1-3',
                question: 'Was verlangt das Präventionsprinzip (Art. 1 USG) für die UVP?',
                options: [
                  'Umweltschäden sollen erst nach dem Bau saniert werden, wenn sie sich zeigen',
                  'Umweltbeeinträchtigungen sollen frühzeitig begrenzt werden – vor der Bewilligung, nicht nach dem Bau',
                  'Alle Projekte sollen verboten werden, die irgendwelche Umweltauswirkungen haben',
                  'Die Umweltprüfung soll nur bei Projekten mit internationalem Einfluss durchgeführt werden',
                ],
                correct: 1,
                explanation: 'Das Präventionsprinzip (Art. 1 USG) verlangt eine frühzeitige Begrenzung von Umweltbeeinträchtigungen. Die UVP setzt dies um, indem Umweltauswirkungen vor der Bewilligung geprüft werden – nicht erst nachdem ein Schaden entstanden ist.',
              },
            ],
          },
        },
        {
          id: 'uvp-rechtsgrundlagen',
          slug: 'uvp-rechtsgrundlagen',
          title: 'USG und UVPV: Die Rechtsgrundlagen',
          description: 'Art. 10a–10d USG, UVPV SR 814.011, BAFU-Handbuch, kantonale UVPV, Zuständigkeit Bund vs. Kanton.',
          videoId: '',
          content: `
<h2>Die Rechtsgrundlagen der UVP im Überblick</h2>
<p>Die UVP in der Schweiz stützt sich auf ein mehrschichtiges Rechtssystem: Bundesgesetz, Bundesverordnung, BAFU-Vollzugshilfen und kantonale Ausführungsbestimmungen. Wer die Rechtsgrundlagen kennt, kann den UVP-Prozess gezielt steuern und vermeidet formelle Fehler.</p>

<h3>Art. 10a–10d USG: Die gesetzliche Grundlage</h3>
<p>Das Bundesgesetz über den Umweltschutz (USG, SR 814.01) enthält in den Artikeln 10a bis 10d die gesetzliche Grundlage der UVP:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #e8f5e9;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Artikel</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Inhalt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;"><strong>Art. 10a USG</strong></td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Grundsatz der UVP-Pflicht: Wer Anlagen errichten oder ändern will, die erhebliche Auswirkungen auf die Umwelt haben können, muss eine Umweltverträglichkeitsprüfung durchführen lassen (Delegationsnorm an den Bundesrat für die Anlagenliste)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;"><strong>Art. 10b USG</strong></td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Pflicht zur Erstellung des Umweltverträglichkeitsberichts (UVB): Inhalt, Anforderungen an den Bericht, Pflicht zur Voruntersuchung und Pflichtenheft-Erstellung</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;"><strong>Art. 10c USG</strong></td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Behördenbeurteilung: Die Umweltfachstelle beurteilt den UVB und gibt eine Stellungnahme zuhanden der Bewilligungsbehörde ab. Die Bewilligungsbehörde berücksichtigt diese Stellungnahme bei ihrem Entscheid</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;"><strong>Art. 10d USG</strong></td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Mitwirkung der Bevölkerung: Öffentliche Auflage des UVB im Rahmen des ordentlichen Bewilligungsverfahrens; Einsprache- und Beschwerderechte</td>
    </tr>
  </tbody>
</table>

<h3>UVPV SR 814.011: Die Verordnung</h3>
<p>Die Umweltverträglichkeitsprüfungs-Verordnung (UVPV, SR 814.011) konkretisiert die gesetzlichen Anforderungen und enthält:</p>
<ul>
  <li><strong>Art. 1–9 UVPV:</strong> Anwendungsbereich, Pflicht zur Voruntersuchung und Pflichtenheft-Erstellung, Anforderungen an den UVB</li>
  <li><strong>Art. 10–15 UVPV:</strong> Behördenbeurteilung, Koordination mit anderen Verfahren, Öffentlichkeitsbeteiligung</li>
  <li><strong>Art. 16–22 UVPV:</strong> Erfolgskontrolle, Umweltbaubegleitung (UBB), Berichterstattung</li>
  <li><strong>Anhang UVPV:</strong> Die Liste der UVP-pflichtigen Anlagentypen mit Schwellenwerten (derzeit über 70 Typen)</li>
</ul>

<h3>BAFU-Handbuch: Die Vollzugshilfe</h3>
<p>Das Bundesamt für Umwelt (BAFU) hat ein detailliertes Handbuch zur UVP veröffentlicht. Es ist keine Rechtsquelle, aber eine massgebliche <strong>Vollzugshilfe</strong>, die in der Praxis wie eine verbindliche Weisung behandelt wird. Das Handbuch enthält:</p>
<ul>
  <li>Methodische Anleitungen für die Schutzgut-Analyse</li>
  <li>Mustervorlagen für Pflichtenheft und UVB</li>
  <li>Beurteilungsmassstäbe für die einzelnen Schutzgüter</li>
  <li>Hinweise auf anwendbare Fachgesetze (Gewässerschutzgesetz, Lärmschutzverordnung, etc.)</li>
</ul>

<h3>Kantonale UVPV und Zuständigkeitsabgrenzung</h3>
<p>Die UVP-Zuständigkeit ist zwischen Bund und Kantonen aufgeteilt:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #e8f5e9;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Kategorie</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Zuständige Umweltfachstelle</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Beispiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;"><strong>Bundesanlagen (Anhang Spalte 1)</strong></td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">BAFU</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Nationalstrassen, Eisenbahnlinien, Militäranlagen, Kernanlagen</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;"><strong>Kantonsanlagen (Anhang Spalte 2)</strong></td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kantonale Umweltschutzfachstelle</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Parkhäuser, Kiesgruben, Deponien, Windparks, Industriebauten</td>
    </tr>
  </tbody>
</table>
<p>Viele Kantone haben eigene kantonale Ausführungsverordnungen zur UVPV, die für bestimmte Anlagentypen tiefere Schwellenwerte oder zusätzliche Anforderungen festlegen. Für die Praxis ist daher immer auch das kantonale Recht zu prüfen.</p>

<blockquote>Der häufigste Fehler beim Einstieg in die UVP: Nur die UVPV konsultieren und das BAFU-Handbuch und kantonale Ausführungsbestimmungen vergessen. Alle drei Ebenen sind für einen vollständigen UVP-Prozess relevant.</blockquote>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'uvp-q2-1',
                question: 'Welcher Artikel des USG verpflichtet die Bauherrschaft zur Erstellung eines Umweltverträglichkeitsberichts (UVB)?',
                options: [
                  'Art. 10a USG (Grundsatz der UVP-Pflicht)',
                  'Art. 10b USG (Pflicht zur Erstellung des UVB)',
                  'Art. 10c USG (Behördenbeurteilung)',
                  'Art. 10d USG (Mitwirkung der Bevölkerung)',
                ],
                correct: 1,
                explanation: 'Art. 10b USG regelt die Pflicht zur Erstellung des Umweltverträglichkeitsberichts (UVB): Inhalt, Anforderungen und die Voruntersuchungspflicht mit Pflichtenheft. Art. 10a enthält nur den Grundsatz der UVP-Pflicht.',
              },
              {
                id: 'uvp-q2-2',
                question: 'Welche Rolle hat das BAFU-Handbuch zur UVP?',
                options: [
                  'Es ist eine verbindliche Bundesverordnung mit Gesetzeskraft',
                  'Es ist eine Vollzugshilfe ohne Rechtswirkung, die in der Praxis aber wie eine massgebliche Weisung behandelt wird',
                  'Es ersetzt die UVPV für kantonale Projekte',
                  'Es ist ein freiwilliges Hilfsmittel, das in der Praxis kaum verwendet wird',
                ],
                correct: 1,
                explanation: 'Das BAFU-Handbuch ist eine Vollzugshilfe, keine Rechtsquelle. In der Praxis wird es aber wie eine massgebliche Weisung behandelt, weil es die anerkannte Methodik für die Schutzgut-Analyse und den UVP-Prozess enthält.',
              },
              {
                id: 'uvp-q2-3',
                question: 'Wer ist die zuständige Umweltfachstelle für einen geplanten Windpark?',
                options: [
                  'Das BAFU als Bundesbehörde',
                  'Das ARE (Bundesamt für Raumentwicklung)',
                  'Die kantonale Umweltschutzfachstelle',
                  'Die Gemeinde als Bewilligungsbehörde',
                ],
                correct: 2,
                explanation: 'Windparks fallen in der Regel unter die kantonalen Anlagen (Anhang Spalte 2 UVPV). Zuständige Umweltfachstelle ist damit die kantonale Umweltschutzfachstelle. Das BAFU ist zuständig für Bundesanlagen wie Nationalstrassen oder Kernanlagen.',
              },
            ],
          },
        },
        {
          id: 'uvp-pflicht',
          slug: 'uvp-pflicht',
          title: 'UVP-Pflicht: Welche Anlagen?',
          description: 'UVPV Anhang mit 70+ Anlagentypen, Schwellenwerte, Änderung bestehender Anlagen.',
          videoId: '',
          content: `
<h2>UVP-Pflicht: Der Anhang der UVPV</h2>
<p>Nicht jedes Bauvorhaben ist UVP-pflichtig. Die UVP-Pflicht tritt nur ein, wenn ein Vorhaben in den Anhang der UVPV fällt – und die dort definierten Schwellenwerte erreicht oder überschreitet. Wer die Liste und die Schwellenwerte kennt, kann frühzeitig klären, ob eine UVP erforderlich ist.</p>

<h3>Der Anhang der UVPV: 70+ Anlagentypen</h3>
<p>Der Anhang der UVPV listet alle UVP-pflichtigen Anlagentypen auf. Er ist in zwei Spalten gegliedert:</p>
<ul>
  <li><strong>Spalte 1 (Bundesanlagen):</strong> Bundesbehörde als Bewilligungsbehörde, BAFU als Umweltfachstelle</li>
  <li><strong>Spalte 2 (Kantonsanlagen):</strong> Kantonale Behörde, kantonale Umweltfachstelle</li>
</ul>
<p>Aktuell umfasst der Anhang über 70 verschiedene Anlagentypen, gegliedert nach Kategorien.</p>

<h3>Wichtige Schwellenwerte (Auswahl)</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #e8f5e9;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Anlagentyp</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Schwellenwert (UVP-Pflicht ab)</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Zuständigkeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Parkhaus / Parkanlage</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">mehr als 500 Motorfahrzeugabstellplätze</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kanton</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kies- und Sandgrube</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">mehr als 300'000 m³ Aushub- oder Abtragvolumen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kanton</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Deponie (unverschmutztes Aushubmaterial)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">mehr als 1'000'000 m³ Ablagerungsvolumen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kanton</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Windpark</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">5 oder mehr Windenergieanlagen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kanton</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Nationalstrasse (Neubau)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">alle Projekte (kein Schwellenwert)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Bund (BAFU)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Eisenbahnlinie (Neubau)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">alle Projekte (kein Schwellenwert)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Bund (BAFU)</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Einkaufszentrum</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">mehr als 10'000 m² Verkaufsfläche</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kanton</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kehrichtverwertungsanlage (KVA)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">alle Projekte (kein Schwellenwert)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kanton</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Schiessanlage (grosse Anlage)</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">mehr als 50 Scheibenstände oder mit überregionaler Bedeutung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Kanton</td>
    </tr>
  </tbody>
</table>

<h3>Änderung bestehender Anlagen</h3>
<p>Auch <strong>wesentliche Änderungen</strong> bestehender Anlagen können UVP-pflichtig sein – auch wenn die ursprüngliche Anlage bereits ohne UVP bewilligt wurde. Eine wesentliche Änderung liegt vor, wenn:</p>
<ul>
  <li>Die Kapazität oder Leistung der Anlage erheblich erweitert wird</li>
  <li>Neue, erhebliche Umweltauswirkungen entstehen</li>
  <li>Der Änderungsumfang einem Neubau gleichkommt</li>
</ul>
<p>Die Beurteilung, ob eine Änderung wesentlich ist, obliegt der Bewilligungsbehörde. Im Zweifelsfall empfiehlt sich eine frühzeitige Abklärung mit der zuständigen Umweltfachstelle.</p>

<h3>Keine automatische UVP-Freiheit unterhalb des Schwellenwerts</h3>
<p>Wichtig: Auch Projekte unterhalb der Schwellenwerte können, wenn auch selten, umfangreiche Umweltprüfungen erfordern – über andere Rechtsgrundlagen (z.B. kantonales Umweltschutzrecht, Gewässerschutz, Naturschutz). Der Anhang der UVPV definiert nur die formelle UVP-Pflicht nach USG/UVPV, nicht das gesamte Umweltrecht.</p>

<blockquote>Praxistipp: Die erste Frage bei jedem grossen Infrastrukturprojekt sollte sein: Fällt das Vorhaben unter den Anhang der UVPV? Eine falsche Einschätzung kann zu aufwändigen Nachkorrekturen oder zur Aufhebung der Bewilligung führen.</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'uvp-q3-1',
                question: 'Ab wie vielen Motorfahrzeugabstellplätzen ist ein Parkhaus UVP-pflichtig?',
                options: [
                  'Ab 100 Abstellplätzen',
                  'Ab 300 Abstellplätzen',
                  'Ab 500 Abstellplätzen',
                  'Ab 1000 Abstellplätzen',
                ],
                correct: 2,
                explanation: 'Gemäss Anhang UVPV ist ein Parkhaus ab mehr als 500 Motorfahrzeugabstellplätzen UVP-pflichtig. Zuständig ist die kantonale Umweltfachstelle.',
              },
              {
                id: 'uvp-q3-2',
                question: 'Wann kann auch eine Änderung einer bestehenden Anlage UVP-pflichtig sein?',
                options: [
                  'Jede bauliche Veränderung ist UVP-pflichtig, auch kleinste Reparaturen',
                  'Nur wenn die Anlage vollständig abgerissen und neu gebaut wird',
                  'Wenn die Änderung wesentlich ist – z.B. erhebliche Kapazitätserweiterung, neue Umweltauswirkungen oder Neubau-ähnlicher Umfang',
                  'Nur wenn die Änderung vom Bundesrat genehmigt werden muss',
                ],
                correct: 2,
                explanation: 'Wesentliche Änderungen bestehender Anlagen können UVP-pflichtig sein, auch wenn die ursprüngliche Anlage ohne UVP bewilligt wurde. Wesentlich ist eine Änderung, wenn erhebliche Kapazitätserweiterungen erfolgen, neue Umweltauswirkungen entstehen oder der Umfang einem Neubau gleichkommt.',
              },
              {
                id: 'uvp-q3-3',
                question: 'Ab wie vielen Windenergieanlagen ist ein Windpark UVP-pflichtig?',
                options: [
                  'Ab 1 Windenergieanlage',
                  'Ab 3 Windenergieanlagen',
                  'Ab 5 Windenergieanlagen',
                  'Ab 10 Windenergieanlagen',
                ],
                correct: 2,
                explanation: 'Gemäss Anhang UVPV ist ein Windpark ab 5 oder mehr Windenergieanlagen UVP-pflichtig. Zuständig ist die kantonale Umweltfachstelle.',
              },
            ],
          },
        },
        {
          id: 'uvp-schutzgueter',
          slug: 'uvp-schutzgueter',
          title: 'Die neun Schutzgüter',
          description: 'Boden, Luft, Wasser, Lärm, Licht & Strahlung, Landschaft, Kulturdenkmäler, Tiere & Pflanzen, Wechselwirkungen.',
          videoId: '',
          content: `
<h2>Die neun Schutzgüter der UVP</h2>
<p>Der Umweltverträglichkeitsbericht (UVB) muss die Auswirkungen des Vorhabens auf alle relevanten Schutzgüter untersuchen. Das BAFU-Handbuch definiert neun Schutzgüter, die systematisch geprüft werden müssen. Eine vollständige Schutzgut-Analyse ist die Grundlage für eine rechtssichere UVP.</p>

<h3>Die neun Schutzgüter im Überblick</h3>

<div style="background: #e8f5e9; border-left: 4px solid #1b5e20; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>1. Boden</strong><br/>
  Schutz vor Bodenverdichtung, Bodenversiegelung, Schadstoffeinträgen, Erosion. Besonderes Augenmerk auf Fruchtfolgeflächen (FFF), die bei UVP-pflichtigen Projekten besonders berücksichtigt werden müssen (Kompensationspflicht nach RPV). Massgebliche Normen: Bodenverordnung (VBBo, SR 814.12).
</div>

<div style="background: #e8f5e9; border-left: 4px solid #1b5e20; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>2. Luft</strong><br/>
  Schutz vor Luftschadstoffen: Emissionen durch Bautätigkeit (Staub, Dieselabgase), Betrieb (Verkehr, Abgase, Gerüche), Kumulationswirkungen bei Vorbelastung. Massgebliche Norm: Luftreinhalte-Verordnung (LRV, SR 814.318.142.1) mit Immissionsgrenzwerten.
</div>

<div style="background: #e8f5e9; border-left: 4px solid #1b5e20; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>3. Wasser</strong><br/>
  Schutz des Grund- und Oberflächenwassers vor Verschmutzung, Quantitätsveränderungen, Gewässerraum-Einengungen. Besonderheit: Gewässerräume nach Gewässerschutzgesetz (GSchG, SR 814.20) und Gewässerschutzverordnung (GSchV, SR 814.201) sind einzuhalten.
</div>

<div style="background: #e8f5e9; border-left: 4px solid #1b5e20; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>4. Lärm und Erschütterungen</strong><br/>
  Schutz vor Bau- und Betriebslärm, Erschütterungen durch Sprengungen oder schwere Maschinen. Massgebliche Normen: Lärmschutz-Verordnung (LSV, SR 814.41) mit Belastungsgrenzwerten nach Empfindlichkeitsstufe; Baulärm-Richtlinie BAFU.
</div>

<div style="background: #e8f5e9; border-left: 4px solid #1b5e20; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>5. Licht, Strahlung und nichtionisierende Strahlung (NIS)</strong><br/>
  Schutz vor Lichtemissionen (Blendung, Lichtverschmutzung), elektromagnetischen Feldern (Mobilfunkantennen, Hochspannungsleitungen) und ionisierender Strahlung (bei Kernanlagen). Massgebliche Norm: Verordnung über den Schutz vor nichtionisierender Strahlung (NISV, SR 814.710).
</div>

<div style="background: #e8f5e9; border-left: 4px solid #1b5e20; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>6. Landschaft und Ortsbild</strong><br/>
  Schutz von Landschaft, Ortsbildern und Naturdenkmälern. Besonderes Augenmerk auf Bundesinventare BLN (Bundesinventar der Landschaften und Naturdenkmäler) und ISOS (Inventar schützenswerter Ortsbilder). Massgebliche Normen: Natur- und Heimatschutzgesetz (NHG, SR 451).
</div>

<div style="background: #e8f5e9; border-left: 4px solid #1b5e20; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>7. Kulturdenkmäler</strong><br/>
  Schutz archäologischer Fundstätten, historischer Bauten und Kulturgüter. Koordination mit der kantonalen Denkmalpflege; bei Eingriffen in archäologisch sensible Gebiete sind Voruntersuchungen (Sondierbohrungen) erforderlich. Massgebliche Norm: NHG (SR 451).
</div>

<div style="background: #e8f5e9; border-left: 4px solid #1b5e20; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong>8. Tiere und Pflanzen (Flora und Fauna)</strong><br/>
  Schutz von Lebensräumen, Biotopen, Waldgebieten, geschützten Arten. Besonderes Augenmerk auf Bundesinventare (Hoch- und Flachmoore, Amphibienlaichgebiete, Auengebiete). Massgebliche Normen: NHG (SR 451), Bundesgesetz über den Wald (WaG, SR 921.0), Jagdgesetz (JSG, SR 922.0).
</div>

<h3>9. Wechselwirkungen zwischen den Schutzgütern</h3>
<p>Das neunte «Schutzgut» ist eigentlich ein Querschnittsthema: die Wechselwirkungen zwischen den Schutzgütern. Eine vollständige UVP analysiert nicht nur jedes Schutzgut isoliert, sondern auch deren gegenseitige Beeinflussungen:</p>
<ul>
  <li>Bodenanteile führen zu Wasserveränderungen (z.B. Drainage beeinflusst Grundwasser)</li>
  <li>Lärmschutzwände beeinflussen Landschaft und Ortsbild</li>
  <li>Lichtemissionen beeinflussen Flora und Fauna (Nachtaktive Tiere)</li>
  <li>Kumulationswirkungen: Mehrere Projekte zusammen überschreiten Grenzwerte, die jedes einzeln unterschreiten würde</li>
</ul>

<h3>Erheblichkeitsschwelle: Nicht jede Auswirkung ist prüfpflichtig</h3>
<p>Der UVB muss nicht jede marginale Auswirkung untersuchen. Das BAFU-Handbuch definiert eine <strong>Erheblichkeitsschwelle</strong>: Nur Auswirkungen, die erheblich sind, müssen vertieft geprüft werden. Nicht erhebliche Auswirkungen werden kurz begründet und abgehakt. Diese Selektion muss aber nachvollziehbar begründet werden.</p>

<blockquote>Eine häufige Schwäche in der Praxis: Die Wechselwirkungen zwischen Schutzgütern werden vernachlässigt oder ganz weggelassen. Das Bundesgericht hat in mehreren Entscheiden festgehalten, dass die Schutzgut-Analyse auch Kumulationseffekte und Wechselwirkungen erfassen muss.</blockquote>
          `,
          order: 4,
          quiz: {
            questions: [
              {
                id: 'uvp-q4-1',
                question: 'Welches Bundesinventar ist bei der Prüfung des Schutzguts «Tiere und Pflanzen» besonders relevant?',
                options: [
                  'BLN – Bundesinventar der Landschaften und Naturdenkmäler',
                  'ISOS – Inventar schützenswerter Ortsbilder',
                  'IVS – Inventar historischer Verkehrswege',
                  'Die Moore, Auengebiete und Amphibienlaichgebiete (Biotopinventare nach NHG)',
                ],
                correct: 3,
                explanation: 'Für das Schutzgut «Tiere und Pflanzen» sind die Biotopinventare nach NHG massgebend: Hoch- und Flachmoore, Amphibienlaichgebiete und Auengebiete. Das BLN ist eher für Landschaft, das ISOS für Ortsbilder relevant.',
              },
              {
                id: 'uvp-q4-2',
                question: 'Was ist mit «Wechselwirkungen» als neuntem Querschnittsthema der UVP gemeint?',
                options: [
                  'Die Abstimmung zwischen kantonalem und bundesem Recht',
                  'Die gegenseitige Beeinflussung der Schutzgüter untereinander und Kumulationseffekte',
                  'Die Koordination zwischen Bauherrschaft und Umweltbüro',
                  'Die Abstimmung der UVP mit dem Bewilligungsverfahren',
                ],
                correct: 1,
                explanation: 'Wechselwirkungen meinen die gegenseitige Beeinflussung der Schutzgüter (z.B. Lärm beeinflusst Fauna) und Kumulationseffekte (mehrere Projekte zusammen überschreiten Grenzwerte, die jedes einzeln unterschreiten würde). Diese müssen explizit analysiert werden.',
              },
              {
                id: 'uvp-q4-3',
                question: 'Welche Norm ist massgebend für den Schutz vor elektromagnetischen Feldern von Mobilfunkantennen?',
                options: [
                  'Lärmschutz-Verordnung (LSV)',
                  'Bodenverordnung (VBBo)',
                  'Luftreinhalte-Verordnung (LRV)',
                  'Verordnung über den Schutz vor nichtionisierender Strahlung (NISV)',
                ],
                correct: 3,
                explanation: 'Mobilfunkantennen und Hochspannungsleitungen erzeugen nichtionisierende Strahlung (NIS). Die massgebliche Norm ist die NISV (SR 814.710), die Anlagegrenzwerte für elektromagnetische Felder festlegt.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'uvp-modul-2',
      slug: 'uvp-verfahren',
      title: 'Verfahren, Akteure und KI-Tool',
      description: 'Phasen der UVP, Rollen der Beteiligten, häufige Fehler und Einführung in das KI-Tool uvp.interessenabwaegung.ch.',
      icon: '🛠️',
      order: 2,
      lessons: [
        {
          id: 'uvp-phasen',
          slug: 'uvp-phasen',
          title: 'Phasen der UVP',
          description: 'Voruntersuchung mit Pflichtenheft, Hauptuntersuchung mit UVB, Behördenbeurteilung, Auflagen, Umweltbaubegleitung, Erfolgskontrolle.',
          videoId: '',
          content: `
<h2>Die sechs Phasen der UVP</h2>
<p>Die UVP ist kein einmaliger Akt, sondern ein <strong>mehrstufiger Prozess</strong>, der das gesamte Bewilligungs- und Bauverfahren begleitet. Das BAFU-Handbuch und die UVPV definieren sechs aufeinanderfolgende Phasen, die jeweils klare Pflichten und Ergebnisse vorsehen.</p>

<h3>Phase 1: Voruntersuchung und Pflichtenheft (Art. 8 UVPV)</h3>
<p>Die Voruntersuchung ist die erste formelle Phase der UVP. Die Bauherrschaft erarbeitet zusammen mit dem Umweltbüro das <strong>Pflichtenheft</strong>:</p>
<ul>
  <li><strong>Inhalt des Pflichtenhefts:</strong> Welche Schutzgüter müssen geprüft werden? Mit welcher Methodik? Welche Fachgutachten sind notwendig? Welche Untersuchungsstufe (Grundlagendaten, Felduntersuchungen, Modellierungen)?</li>
  <li><strong>Zweck:</strong> Frühzeitige Abgrenzung des Untersuchungsrahmens – damit keine wichtigen Aspekte vergessen und keine unnötigen Untersuchungen durchgeführt werden</li>
  <li><strong>Beteiligte:</strong> Bauherrschaft, Umweltbüro, Umweltfachstelle prüft und genehmigt das Pflichtenheft</li>
  <li><strong>Zeitpunkt:</strong> Muss vor Beginn der Hauptuntersuchung genehmigt sein</li>
</ul>

<div style="background: #f1f8e9; border: 1px solid #c5e1a5; border-radius: 10px; padding: 16px 20px; margin: 16px 0;">
  <strong>Tipp Pflichtenheft:</strong> Ein gut strukturiertes Pflichtenheft spart in der Hauptuntersuchung erheblichen Aufwand. Fehlende Schutzgüter im Pflichtenheft führen oft zu kostspieligen Nachforderungen der Umweltfachstelle.
</div>

<h3>Phase 2: Hauptuntersuchung und Umweltverträglichkeitsbericht (UVB)</h3>
<p>Die Hauptphase der UVP. Die Bauherrschaft erstellt – in der Regel durch ein beauftragtes Umweltbüro – den <strong>Umweltverträglichkeitsbericht (UVB)</strong>:</p>
<ul>
  <li><strong>Inhalt des UVB:</strong> Systematische Analyse aller im Pflichtenheft definierten Schutzgüter; Beschreibung des Ist-Zustands, der Auswirkungen (Bau- und Betriebsphase) und der vorgesehenen Massnahmen</li>
  <li><strong>Varianten:</strong> Der UVB muss Standort- oder Ausführungsvarianten prüfen, wenn erhebliche Umweltauswirkungen zu erwarten sind</li>
  <li><strong>Massnahmen:</strong> Für jede erhebliche Auswirkung werden Vermeidungs-, Minimierungs- oder Kompensationsmassnahmen definiert</li>
  <li><strong>Fachgutachten:</strong> Spezialthemen (Lärm, Luft, Ökologie) werden durch Fachgutachten untermauert</li>
</ul>

<h3>Phase 3: Behördenbeurteilung (Umweltfachstelle)</h3>
<p>Die zuständige Umweltfachstelle (BAFU oder kantonal) beurteilt den UVB:</p>
<ul>
  <li>Vollständigkeitsprüfung: Wurden alle Schutzgüter gemäss Pflichtenheft geprüft?</li>
  <li>Qualitätsprüfung: Sind die Analysen fachlich korrekt und nachvollziehbar?</li>
  <li>Massnahmenbeurteilung: Sind die vorgesehenen Massnahmen ausreichend?</li>
  <li>Ergebnis: Stellungnahme mit Empfehlungen und allfälligen Auflagen zuhanden der Bewilligungsbehörde</li>
</ul>
<p>Die Bewilligungsbehörde ist rechtlich verpflichtet, die Stellungnahme der Umweltfachstelle zu berücksichtigen (Art. 10c USG).</p>

<h3>Phase 4: Auflagen im Bewilligungsentscheid</h3>
<p>Die Bewilligungsbehörde integriert die UVP-Ergebnisse in den Bewilligungsentscheid:</p>
<ul>
  <li>Auflagen und Bedingungen für Bau und Betrieb</li>
  <li>Umweltschutzmassnahmen als verbindliche Teile der Baubewilligung</li>
  <li>Verweigerung der Bewilligung, wenn keine ausreichenden Massnahmen vorgesehen sind</li>
</ul>

<h3>Phase 5: Umweltbaubegleitung (UBB)</h3>
<p>Die UBB ist die Qualitätssicherung während der Bauphase:</p>
<ul>
  <li>Eine unabhängige Fachperson (Umweltbaubegleitung) überwacht die Einhaltung der UVP-Auflagen auf der Baustelle</li>
  <li>Bei Abweichungen werden Sofortmassnahmen angeordnet</li>
  <li>Die UBB erstellt regelmässige Berichte an die Bewilligungsbehörde</li>
  <li>Pflicht: Für alle UVP-pflichtigen Anlagen vorgeschrieben, wenn erhebliche Baumassnahmen im Bereich sensibler Schutzgüter stattfinden</li>
</ul>

<h3>Phase 6: Erfolgskontrolle</h3>
<p>Nach Inbetriebnahme der Anlage prüft die Erfolgskontrolle, ob die vorgesehenen Massnahmen wirksam sind:</p>
<ul>
  <li>Monitoring der Umweltauswirkungen (z.B. Lärmmessungen, Luftqualität, Grundwasserbeobachtung)</li>
  <li>Bei Abweichungen: Nachbesserungspflicht der Bauherrschaft</li>
  <li>Berichterstattung an die Umweltfachstelle</li>
</ul>

<blockquote>Die Phasen der UVP sind nicht starr – sie können je nach Projektgrösse und -komplexität variieren. Bei einfacheren Projekten können Voruntersuchung und Hauptuntersuchung zusammengefasst werden. Bei Grossprojekten kann die Erfolgskontrolle über viele Jahre laufen.</blockquote>
          `,
          order: 1,
          quiz: {
            questions: [
              {
                id: 'uvp-q5-1',
                question: 'Was ist der Zweck des Pflichtenhefts in der Voruntersuchungsphase?',
                options: [
                  'Es ersetzt den UVB bei einfachen Projekten',
                  'Es legt fest, welche Schutzgüter geprüft werden, mit welcher Methodik und welche Fachgutachten notwendig sind',
                  'Es ist ein öffentliches Dokument, das Einsprachen ermöglicht',
                  'Es ist ein Formular für die Meldung der UVP-Pflicht ans BAFU',
                ],
                correct: 1,
                explanation: 'Das Pflichtenheft (Art. 8 UVPV) legt den Untersuchungsrahmen fest: Welche Schutzgüter, welche Methodik, welche Fachgutachten. Es muss von der Umweltfachstelle genehmigt werden, bevor die Hauptuntersuchung beginnen kann.',
              },
              {
                id: 'uvp-q5-2',
                question: 'Was ist die Umweltbaubegleitung (UBB)?',
                options: [
                  'Ein anderer Begriff für den Umweltverträglichkeitsbericht (UVB)',
                  'Eine unabhängige Fachperson, die während der Bauphase die Einhaltung der UVP-Auflagen überwacht',
                  'Die Beurteilung des UVB durch die Umweltfachstelle',
                  'Ein freiwilliges Qualitätslabel für besonders umweltfreundliche Baustellen',
                ],
                correct: 1,
                explanation: 'Die Umweltbaubegleitung (UBB) ist die Qualitätssicherung während der Bauphase. Eine unabhängige Fachperson überwacht die Einhaltung der UVP-Auflagen auf der Baustelle und berichtet regelmässig an die Bewilligungsbehörde.',
              },
              {
                id: 'uvp-q5-3',
                question: 'Welche rechtliche Verpflichtung hat die Bewilligungsbehörde gegenüber der Stellungnahme der Umweltfachstelle?',
                options: [
                  'Die Stellungnahme ist unverbindlich und kann vollständig ignoriert werden',
                  'Die Stellungnahme muss vollständig umgesetzt werden, sonst ist die Bewilligung nichtig',
                  'Die Bewilligungsbehörde muss die Stellungnahme berücksichtigen (Art. 10c USG), kann aber im begründeten Einzelfall abweichen',
                  'Die Stellungnahme gilt nur als Empfehlung für Projekte unter CHF 1 Mio.',
                ],
                correct: 2,
                explanation: 'Art. 10c USG verpflichtet die Bewilligungsbehörde, die Stellungnahme der Umweltfachstelle zu berücksichtigen. Eine Abweichung ist möglich, muss aber begründet werden. Die Stellungnahme ist keine blosse Empfehlung, aber auch keine vollständige Bindung.',
              },
            ],
          },
        },
        {
          id: 'uvp-akteure',
          slug: 'uvp-akteure',
          title: 'Akteure und Rollen',
          description: 'Bauherrschaft, Umweltbüro/Fachplaner, federführende Behörde, Umweltfachstelle (BAFU oder Kanton), Öffentlichkeit.',
          videoId: '',
          content: `
<h2>Wer macht was in der UVP?</h2>
<p>Die UVP ist ein Gemeinschaftswerk – verschiedene Akteure haben klar definierte Rollen und Verantwortlichkeiten. Wer die Rollenverteilung kennt, kann den UVP-Prozess effizienter steuern und Reibungsverluste vermeiden.</p>

<h3>Akteur 1: Bauherrschaft</h3>
<p>Die Bauherrschaft ist die treibende Kraft und trägt die Gesamtverantwortung:</p>
<ul>
  <li><strong>Pflicht:</strong> Erstellung des UVB (in eigener Regie oder durch beauftragte Fachpersonen)</li>
  <li><strong>Kosten:</strong> Alle UVP-Kosten trägt die Bauherrschaft (Fachgutachten, UBB, Monitoring)</li>
  <li><strong>Einreichung:</strong> Einreichen des UVB zusammen mit dem Baugesuch</li>
  <li><strong>Massnahmen:</strong> Umsetzung aller im Bewilligungsentscheid festgelegten Auflagen</li>
  <li><strong>Haftung:</strong> Rechtliche Verantwortung für die Richtigkeit des UVB</li>
</ul>

<h3>Akteur 2: Umweltbüro und Fachplaner</h3>
<p>In der Praxis erstellen spezialisierte Umweltbüros den UVB im Auftrag der Bauherrschaft:</p>
<ul>
  <li><strong>Aufgaben:</strong> Schutzgut-Analysen, Felderhebungen, Koordination der Fachgutachten, Erstellung des UVB-Dokuments</li>
  <li><strong>Qualifikation:</strong> Spezialisierung auf Umwelttechnik, Ökologie, Lärm, Luft oder andere Fachgebiete</li>
  <li><strong>Unabhängigkeit:</strong> Obwohl im Auftrag der Bauherrschaft, müssen Umweltbüros fachlich unabhängig sein – gefällige Gutachten gefährden die Rechtssicherheit der Bewilligung</li>
  <li><strong>Schnittstelle:</strong> Direkter Kontakt zur Umweltfachstelle für fachliche Abklärungen</li>
</ul>

<h3>Akteur 3: Federführende Behörde</h3>
<p>Bei UVP-pflichtigen Anlagen gibt es oft mehrere zuständige Behörden. Die <strong>federführende Behörde</strong> koordiniert das Gesamtverfahren:</p>
<ul>
  <li>Koordination aller Fachberichte und -stellungnahmen (Umwelt, Verkehr, Denkmalpflege etc.)</li>
  <li>Sicherstellung, dass alle relevanten Aspekte geprüft werden</li>
  <li>Erlass des Bewilligungsentscheids inkl. UVP-Auflagen</li>
  <li>In vielen Kantonen: Baupolizeibehörde oder kantonales Departement</li>
</ul>

<h3>Akteur 4: Umweltfachstelle</h3>
<p>Die Umweltfachstelle ist das Herzstück der behördlichen UVP-Kontrolle:</p>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #e8f5e9;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Aufgabe</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Pflichtenheft-Genehmigung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Prüft, ob der Untersuchungsrahmen vollständig ist</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">UVB-Beurteilung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Vollständigkeits- und Qualitätsprüfung des Berichts</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Stellungnahme</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Empfehlungen und Auflagen zuhanden der Bewilligungsbehörde</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Nachkontrolle</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Überwachung der UBB und Erfolgskontrolle</td>
    </tr>
  </tbody>
</table>
<p><strong>Für Bundesanlagen:</strong> BAFU (Bundesamt für Umwelt)<br/>
<strong>Für Kantonsanlagen:</strong> Kantonale Umweltschutzfachstelle (z.B. AWEL im Kanton Zürich, AWA im Kanton Bern)</p>

<h3>Akteur 5: Öffentlichkeit</h3>
<p>Die Bevölkerung hat in der UVP klare Mitwirkungsrechte:</p>
<ul>
  <li><strong>Öffentliche Auflage:</strong> Der UVB wird zusammen mit dem Baugesuch öffentlich aufgelegt</li>
  <li><strong>Einspracherecht:</strong> Betroffene Personen und Umweltschutzorganisationen können Einsprache erheben</li>
  <li><strong>Beschwerde:</strong> Bei Ablehnung der Einsprache ist der Rechtsweg offen (Verwaltungsgericht, Bundesgericht)</li>
  <li><strong>Legitimation:</strong> Umweltschutzorganisationen (z.B. Pro Natura, WWF, VCS) haben bei bestimmten Anlagentypen ein gesetzliches Beschwerderecht (Art. 55 USG)</li>
</ul>

<blockquote>Ein häufiger Fehler in der Praxis: Die Umweltfachstelle wird erst konsultiert, wenn der UVB fertig ist. Frühzeitige informelle Vorabklärungen mit der Umweltfachstelle sparen Zeit und verhindern teure Überarbeitungen des Berichts.</blockquote>
          `,
          order: 2,
          quiz: {
            questions: [
              {
                id: 'uvp-q6-1',
                question: 'Wer trägt die Kosten für den UVB, Fachgutachten und die Umweltbaubegleitung?',
                options: [
                  'Der Kanton als Bewilligungsbehörde',
                  'Das BAFU aus Bundessteuermitteln',
                  'Die Bauherrschaft',
                  'Die Gemeinde als örtliche Bewilligungsbehörde',
                ],
                correct: 2,
                explanation: 'Alle UVP-Kosten – UVB-Erstellung, Fachgutachten, Umweltbaubegleitung (UBB) und Monitoring – trägt die Bauherrschaft. Das entspricht dem Verursacherprinzip im Schweizer Umweltrecht.',
              },
              {
                id: 'uvp-q6-2',
                question: 'Welche Umweltschutzorganisationen haben bei bestimmten UVP-pflichtigen Anlagen ein gesetzliches Beschwerderecht?',
                options: [
                  'Nur die Gemeinden als örtliche Träger',
                  'Keine – das Beschwerderecht steht nur Einzelpersonen zu',
                  'Umweltschutzorganisationen wie Pro Natura, WWF oder VCS (Art. 55 USG)',
                  'Nur das BAFU als Bundesbehörde',
                ],
                correct: 2,
                explanation: 'Art. 55 USG gibt anerkannten Umweltschutzorganisationen (wie Pro Natura, WWF, VCS) bei bestimmten Anlagentypen ein gesetzliches Beschwerderecht. Diese Organisationsbeschwerde ist ein wichtiges Instrument der Umweltrechtspflege.',
              },
              {
                id: 'uvp-q6-3',
                question: 'Wann sollte die Umweltfachstelle idealerweise erstmals konsultiert werden?',
                options: [
                  'Erst nach Einreichung des vollständigen UVB beim Baugesuch',
                  'Erst nach der Baubewilligung, für die Planung der Umweltbaubegleitung',
                  'Frühzeitig und informell, bereits bei der Planung des Pflichtenhefts',
                  'Nur wenn die Bauherrschaft ernsthaft Einsprachen erwartet',
                ],
                correct: 2,
                explanation: 'Frühzeitige informelle Vorabklärungen mit der Umweltfachstelle sparen Zeit und verhindern teure Überarbeitungen. Eine spät konsultierte Umweltfachstelle kann nachträgliche Auflagen verlangen, die den Projekterfolg gefährden.',
              },
            ],
          },
        },
        {
          id: 'uvp-fehler',
          slug: 'uvp-fehler',
          title: 'Häufige Fehler und Gerichtspraxis',
          description: 'Fehleinschätzung UVP-Pflicht, unvollständige Schutzgut-Analyse, fehlende Alternativen-Prüfung, Bundesgerichtspraxis mit konkreten Beispielen.',
          videoId: '',
          content: `
<h2>Was in der UVP-Praxis schiefläuft – und wie Gerichte urteilen</h2>
<p>Fehler in der UVP können teuer werden: Sie führen zu Aufhebungen von Bewilligungen, aufwändigen Nachbesserungen oder jahrelangen Gerichtsverfahren. Wer die häufigsten Fehler und die Gerichtspraxis kennt, kann sie vermeiden.</p>

<h3>Fehler 1: Fehleinschätzung der UVP-Pflicht</h3>
<p>Der schwerwiegendste Fehler: Das Projekt wäre UVP-pflichtig, aber die Bewilligungsbehörde oder Bauherrschaft erkennt dies nicht. Typische Konstellationen:</p>
<ul>
  <li>Projekt liegt knapp über dem Schwellenwert, wird aber als «unter der Schwelle» eingestuft</li>
  <li>Wesentliche Änderung einer bestehenden Anlage wird fälschlicherweise als «unwesentlich» qualifiziert</li>
  <li>Zusammenrechnung von Etappen: Mehrere zeitlich versetzte Erweiterungen werden als Gesamtprojekt betrachtet und überschreiten gemeinsam den Schwellenwert</li>
</ul>
<p><strong>Gerichtspraxis:</strong> Das Bundesgericht hat mehrfach festgehalten, dass eine nachträgliche UVP nach Baubeginn nicht möglich ist. Fehlt die UVP, ist die Bewilligung nichtig und das Bauwerk muss im Extremfall rückgebaut werden.</p>

<h3>Fehler 2: Unvollständige Schutzgut-Analyse</h3>
<p>Nicht alle neun Schutzgüter werden geprüft oder einzelne Schutzgüter werden nur oberflächlich behandelt:</p>
<ul>
  <li>Wechselwirkungen zwischen Schutzgütern werden vernachlässigt</li>
  <li>Kumulationseffekte mit benachbarten Projekten werden nicht berücksichtigt</li>
  <li>Bau- und Betriebsphase werden nicht klar getrennt analysiert</li>
  <li>Ausserordentliche Ereignisse (Störfälle, Extremwetter) werden nicht einbezogen</li>
</ul>
<p><strong>Gerichtspraxis:</strong> Das Bundesgericht (BGer 1C_345/2019) hob eine Deponiebewilligung auf, weil die Wechselwirkungen zwischen Grundwasserveränderungen und einem nahegelegenen Naturschutzgebiet nicht analysiert worden waren.</p>

<h3>Fehler 3: Mangelhafte Kumulation und Interaktionen</h3>
<p>Bei der UVP grosser Infrastrukturprojekte werden Projekte in der Umgebung nicht berücksichtigt:</p>
<ul>
  <li>Lärmbelastung durch das neue Projekt addiert sich zu bestehender Vorbelastung und überschreitet Grenzwerte</li>
  <li>Mehrere Windparkprojekte in derselben Region werden einzeln beurteilt, obwohl die Gesamtwirkung erheblich ist</li>
  <li>Verkehrserzeugung durch mehrere gleichzeitige Projekte wird nicht summiert</li>
</ul>

<h3>Fehler 4: Fehlende Alternativen-Prüfung</h3>
<p>Bei erheblichen Umweltauswirkungen verlangt die UVPV eine Prüfung von Alternativen:</p>
<ul>
  <li>Standortalternativen: Gibt es einen weniger konfliktreichen Standort?</li>
  <li>Ausführungsvarianten: Kann das Projekt anders gestaltet werden, um Umweltauswirkungen zu minimieren?</li>
  <li>Nullvariante: Was passiert, wenn das Projekt nicht realisiert wird?</li>
</ul>
<p><strong>Gerichtspraxis:</strong> Das Bundesgericht hat wiederholt betont, dass die Alternativen-Prüfung keine Formalität ist. Werden offensichtliche Alternativen nicht geprüft, ist der UVB mangelhaft – selbst wenn das «Siegerprojekt» umweltverträglich wäre.</p>

<h3>Fehler 5: Unzureichende Massnahmen im UVB</h3>
<p>Die vorgesehenen Umweltschutzmassnahmen sind nicht konkret, nicht umsetzbar oder nicht ausreichend:</p>
<ul>
  <li>Allgemeine Formulierungen («Lärm wird durch geeignete Massnahmen gemindert») ohne konkrete Spezifikation</li>
  <li>Massnahmen, die technisch nicht umsetzbar oder unverhältnismässig teuer sind</li>
  <li>Fehlende Massnahmenpläne für die Bauphase (besonders wichtig für Lärm, Staubemissionen)</li>
</ul>

<h3>Fehler 6: Verfahrensfehler</h3>
<p>Formelle Fehler im UVP-Verfahren, die zur Aufhebung führen können:</p>
<ul>
  <li>Kein oder unvollständiges Pflichtenheft vor der Hauptuntersuchung</li>
  <li>UVB wurde nicht öffentlich aufgelegt (Verletzung Art. 10d USG)</li>
  <li>Stellungnahme der Umweltfachstelle wurde nicht berücksichtigt, ohne Begründung</li>
  <li>Koordination mit anderen Verfahren (Baubewilligung, Konzession) fehlt</li>
</ul>

<h3>Bundesgerichtspraxis: Die massgeblichen Anforderungen</h3>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #e8f5e9;">
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Bundesgericht-Anforderung</th>
      <th style="padding: 10px 12px; text-align: left; border: 1px solid #d2d2d7;">Praxisbedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Vollständigkeit der Schutzgüter</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Alle neun Schutzgüter müssen mindestens auf Relevanz geprüft werden</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Substantiierung der Analysen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Pauschale Aussagen ohne Belege genügen nicht; Fachgutachten und Messungen sind erforderlich</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Alternativen-Prüfung</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Keine Formalität – offensichtliche Alternativen müssen ernsthaft geprüft werden</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Umsetzbarkeit der Massnahmen</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Massnahmen müssen konkret, realistisch und ausreichend sein</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Berücksichtigung der Stellungnahme</td>
      <td style="padding: 10px 12px; border: 1px solid #d2d2d7;">Abweichungen von der Umweltfachstelle müssen explizit begründet werden</td>
    </tr>
  </tbody>
</table>

<blockquote>Das Bundesgericht formulierte in mehreren Entscheiden: Die UVP ist kein formales Verfahren, das man mit einem Bericht «abhaken» kann. Sie muss die tatsächlichen Umweltauswirkungen erfassen und die Behörde in die Lage versetzen, informierte Entscheide zu treffen. Ein oberflächlicher UVB erfüllt diesen Zweck nicht.</blockquote>
          `,
          order: 3,
          quiz: {
            questions: [
              {
                id: 'uvp-q7-1',
                question: 'Was passiert gemäss Bundesgerichtspraxis, wenn eine UVP-pflichtige Anlage ohne UVP bewilligt und gebaut wird?',
                options: [
                  'Eine nachträgliche UVP kann das Problem heilen und die Bewilligung wird rückwirkend gültig',
                  'Die Bewilligung ist nichtig; im Extremfall muss das Bauwerk rückgebaut werden',
                  'Der Bauherr muss eine Busse bezahlen, darf die Anlage aber behalten',
                  'Das BAFU kann eine nachträgliche Genehmigung aussprechen',
                ],
                correct: 1,
                explanation: 'Das Bundesgericht hat mehrfach festgehalten, dass eine nachträgliche UVP nach Baubeginn nicht möglich ist. Fehlt die UVP, ist die Bewilligung nichtig – mit allen Konsequenzen für die bereits gebaute Anlage bis hin zum Rückbau.',
              },
              {
                id: 'uvp-q7-2',
                question: 'Warum ist die Alternativen-Prüfung im UVB keine blosse Formalität?',
                options: [
                  'Weil sie gesetzlich vorgeschrieben ist und eine Verletzung die Bewilligung automatisch nichtig macht',
                  'Weil das Bundesgericht fordert, dass offensichtliche Alternativen ernsthaft geprüft werden – ein UVB ohne ernsthafte Alternativen-Prüfung ist mangelhaft',
                  'Weil Umweltschutzorganisationen bei fehlender Alternativen-Prüfung immer eine Beschwerde einreichen',
                  'Weil Varianten immer billiger sind als das ursprünglich geplante Projekt',
                ],
                correct: 1,
                explanation: 'Das Bundesgericht betont, dass die Alternativen-Prüfung keine Formalität ist. Offensichtliche Standortalternativen oder Ausführungsvarianten müssen ernsthaft geprüft werden. Ein UVB, der dies nicht tut, ist mangelhaft – selbst wenn das gewählte Projekt an sich umweltverträglich wäre.',
              },
              {
                id: 'uvp-q7-3',
                question: 'Was ist mit «Kumulation» bei der Schutzgut-Analyse gemeint?',
                options: [
                  'Die Summierung aller Kosten für die UVP-Erstellung',
                  'Die Addition der Umweltauswirkungen mehrerer Projekte oder die Summierung mit bestehender Vorbelastung',
                  'Die Zusammenfassung mehrerer Schutzgüter in einem einzigen Gutachten',
                  'Das Zusammenrechnen der Bewilligungsgebühren',
                ],
                correct: 1,
                explanation: 'Kumulation meint die Addition von Umweltauswirkungen: Das neue Projekt allein unterschreitet vielleicht Grenzwerte, aber zusammen mit bestehender Vorbelastung oder mit anderen gleichzeitigen Projekten werden Grenzwerte überschritten. Diese Kumulationseffekte müssen im UVB analysiert werden.',
              },
            ],
          },
        },
      ],
    },
  ],
};
