// Wichtige Seiten auf Deutsch. Der Rechtstext sollte vom Betreiber der Website geprüft werden.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('de-DE',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'Über uns | '+N,
 desc:'Erfahre, wer pngtosvgconverter.com betreibt, warum es existiert, wie der kostenlose PNG-zu-SVG-Konverter im Browser funktioniert und welche Prinzipien dahinterstehen.',
 h1:'Über '+N,
 lead:'Ein kostenloses, privates Werkzeugset, das Bilder in saubere, skalierbare SVGs umwandelt und vollständig in deinem Browser läuft.',
 crumb:'Über uns',
 body:`<h2>Wer diese Website betreibt</h2>
<p>${N} ist ein unabhängiges Webtool-Projekt, das vom Team von ${N} betreut wird. Wir entwickeln kleine, gezielte Grafikwerkzeuge für Designer, Entwickler, Macher und alle, die eine Vektorversion eines Bildes brauchen, ohne Software zu installieren.</p>
<h2>Warum es existiert</h2>
<p>Ein Pixelbild in einen Vektor zu verwandeln bedeutet meist, für Desktop-Software zu zahlen oder private Arbeiten auf den Server eines Fremden hochzuladen. Wir wollten es besser machen: ein kostenloser, schneller Konverter, der das Ergebnis beim Einstellen zeigt und deine Dateien nie erhält.</p>
<h2>Was du hier tun kannst</h2>
<ul>
<li><strong>Bild zu SVG:</strong> PNG, JPG, WebP, GIF, BMP, AVIF und mehr in skalierbare Vektoren umwandeln, mit Voreinstellungen für Logos, Icons, Strichzeichnungen, Unterschriften, Scans, Clipart und Pixel Art.</li>
<li><strong>SVG zu Bild:</strong> ein SVG als PNG, JPG, WebP, PDF oder ICO mit mehreren Größen exportieren.</li>
<li><strong>SVG-Werkzeuge:</strong> SVG-Code komprimieren, optimieren, skalieren, zuschneiden, umfärben, validieren, formatieren, minifizieren und untersuchen.</li>
</ul>
<p>Jedes Werkzeug hat eine eigene Seite, aufgeführt in der <a href="../sitemap/">Sitemap</a> und auf der <a href="../#all">Startseite</a>.</p>
<h2>Wie die Technik funktioniert</h2>
<p>Der PNG-zu-SVG-Konverter nutzt gut dokumentierte Verfahren statt einer Blackbox. Farben werden mit einer Median-Cut-Palette reduziert und per k-means verfeinert. Jede Farbe wird zu einer gestapelten Ebene, deren Umriss mit „Marching Squares“ subpixelgenau gefunden und mit kubischen Bézierkurven angepasst wird. Alles geschieht in deinem Browser.</p>
<h2>Unsere Prinzipien</h2>
<ul>
<li><strong>Datenschutz zuerst.</strong> Die Umwandlung erfolgt auf deinem Gerät. Deine Bilder und SVG-Dateien werden nie hochgeladen. Siehe unsere <a href="../privacy/">Datenschutzerklärung</a>.</li>
<li><strong>Ehrliche Ergebnisse.</strong> Vektoren eignen sich am besten für Logos, Icons, Illustrationen und Strichzeichnungen. Wir sagen klar, dass Fotos zu stilisierter, posterisierter Kunst werden, und zeigen die Dateigröße, damit du das Ergebnis selbst beurteilen kannst.</li>
<li><strong>Kostenlos und einfach.</strong> Kein Konto, kein Wasserzeichen, keine Tageslimits.</li>
<li><strong>Barrierearm und schnell.</strong> Die Seiten sind leicht, funktionieren auf Smartphones und per Tastatur und nutzen offene Standardformate.</li>
</ul>
<h2>Qualität und Aktualisierungen</h2>
<p>Wir testen den Konverter mit einer Bibliothek eingebauter Beispiele (Logos, Icons, Illustrationen, gescannte Seiten, Unterschriften, Pixel Art) und verbessern laufend die Tracing-Engine und die Hinweise auf jeder Seite. Wenn mit deiner Datei etwas nicht stimmt, sag uns Bescheid.</p>
<h2>Kontakt</h2>
<p>Fragen, Fehlermeldungen oder Ideen für ein neues Werkzeug? Nutze die <a href="../contact-us/">Kontaktseite</a> oder schreibe an ${mail}.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'Kontakt | '+N,
 desc:'Kontaktiere pngtosvgconverter.com bei Fragen, Fehlern, Ideen oder Datenschutzanfragen. Sende eine Nachricht über das Formular oder schreibe uns direkt.',
 h1:'Kontakt',
 lead:'Fragen, Fehlermeldungen oder Ideen für ein neues Werkzeug? Schreib uns, wir melden uns.',
 crumb:'Kontakt',
 body:`<p>Am schnellsten können wir ein Problem beheben, wenn du die verwendete Seite, deinen Browser und dein Gerät sowie das erwartete Verhalten angibst. Löst eine bestimmte Datei das Problem aus, beschreibe sie oder nenne Typ und Größe. Bitte sende keine vertraulichen Dateien.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Nachricht wird gesendet …" data-success="Danke. Deine Nachricht wurde gesendet." data-success-mailto="Deine E-Mail-App sollte sich mit der fertigen Nachricht öffnen. Falls nicht, schreibe uns direkt an ${S.EMAIL}." data-error="Leider konnte die Nachricht nicht gesendet werden. Bitte schreibe uns direkt an ${S.EMAIL}." data-invalid="Bitte gib deinen Namen, eine gültige E-Mail-Adresse und eine Nachricht ein." novalidate>
<div class="field"><label for="cf-name">Name</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">E-Mail</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Nachricht</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Dieses Feld leer lassen<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Nachricht senden</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>Lieber per E-Mail?</h2>
<p>Schreibe uns direkt an ${mail}. Bei Datenschutzanfragen setze „Datenschutzanfrage“ in die Betreffzeile.</p>
<p>Wir antworten in der Regel innerhalb weniger Werktage.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Nutzungsbedingungen | '+N,
 desc:'Die Nutzungsbedingungen von pngtosvgconverter.com: zulässige Nutzung, deine Dateien und Inhalte, Haftungsausschlüsse, Haftungsbeschränkung und Änderungen.',
 h1:'Nutzungsbedingungen',
 lead:`Zuletzt aktualisiert: ${UPDATED}`,
 crumb:'Nutzungsbedingungen',
 body:`<p>Diese Nutzungsbedingungen („Bedingungen“) regeln die Nutzung von ${N} und seinen Werkzeugen (der „Dienst“). Mit der Nutzung des Dienstes stimmst du diesen Bedingungen zu. Wenn du nicht einverstanden bist, nutze den Dienst bitte nicht.</p>
<h2>1. Der Dienst</h2>
<p>Der Dienst bietet kostenlose Online-Werkzeuge zum Umwandeln und Bearbeiten von Bildern und SVG-Dateien. Die Werkzeuge laufen in deinem Webbrowser. Wir können Funktionen jederzeit hinzufügen, ändern oder entfernen.</p>
<h2>2. Deine Dateien und Inhalte</h2>
<p>Du behältst alle Rechte an den Dateien, die du verarbeitest. Dateien, die du in den Werkzeugen öffnest, werden lokal auf deinem Gerät verarbeitet und nicht auf unsere Server hochgeladen. Du bist dafür verantwortlich, dass du die gewählten Dateien nutzen und umwandeln darfst, einschließlich möglicher Urheber- und Markenrechte.</p>
<h2>3. Zulässige Nutzung</h2>
<p>Du verpflichtest dich, den Dienst nicht zu nutzen, um Rechte anderer zu verletzen, gegen Gesetze zu verstoßen, den Dienst zu stören oder zu überlasten, seine Sicherheit zu testen oder zu umgehen oder ihn in einem Umfang auszulesen, der andere Nutzer beeinträchtigt.</p>
<h2>4. Ergebnisse und Genauigkeit</h2>
<p>Die Umwandlung eines Rasterbildes in einen Vektor ist eine Annäherung. Die Ergebnisse hängen von deinem Ausgangsbild und den gewählten Einstellungen ab und können vom Original abweichen. Prüfe das Ergebnis, bevor du dich darauf verlässt, besonders für Druck, Produktion oder rechtliche Zwecke.</p>
<h2>5. Geistiges Eigentum</h2>
<p>Der Dienst, einschließlich Design, Code, Texten und Illustrationen, gehört ${N} oder seinen Lizenzgebern und ist durch geltendes Recht geschützt. Du darfst den Dienst selbst nicht ohne Erlaubnis kopieren oder weiterverkaufen. Nichts in diesen Bedingungen überträgt das Eigentum an deinen Dateien auf uns oder das am Dienst auf dich.</p>
<h2>6. Gewährleistungsausschluss</h2>
<p>Der Dienst wird „wie besehen“ und „wie verfügbar“ ohne jede ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, insbesondere hinsichtlich Eignung für einen bestimmten Zweck, Genauigkeit, Verfügbarkeit oder Nichtverletzung von Rechten. Wir garantieren nicht, dass der Dienst unterbrechungs- oder fehlerfrei läuft.</p>
<h2>7. Haftungsbeschränkung</h2>
<p>Soweit gesetzlich zulässig, haften ${N} und seine Betreuer nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder für Daten-, Gewinn- oder Geschäftsverluste aus der Nutzung oder Nichtnutzbarkeit des Dienstes.</p>
<h2>8. Links und Dienste Dritter</h2>
<p>Der Dienst kann auf Websites Dritter verweisen. Wir kontrollieren diese nicht und sind für deren Inhalte und Praktiken nicht verantwortlich.</p>
<h2>9. Änderungen dieser Bedingungen</h2>
<p>Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Das Datum „Zuletzt aktualisiert“ zeigt die neueste Fassung. Die weitere Nutzung des Dienstes nach einer Änderung gilt als Zustimmung zu den aktualisierten Bedingungen.</p>
<h2>10. Anwendbares Recht</h2>
<p>Diese Bedingungen unterliegen dem Recht der Rechtsordnung, in der der Betreiber des Dienstes ansässig ist, ohne Rücksicht auf Kollisionsnormen. Zwingende Verbraucherrechte nach dem Recht deines Landes bleiben unberührt.</p>
<h2>11. Kontakt</h2>
<p>Fragen zu diesen Bedingungen? Schreibe an ${mail} oder nutze die <a href="../contact-us/">Kontaktseite</a>. Siehe auch unsere <a href="../privacy/">Datenschutzerklärung</a>.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Datenschutzerklärung | '+N,
 desc:'Wie pngtosvgconverter.com mit Daten umgeht: Dateien werden im Browser verarbeitet und nie hochgeladen. Gespeicherte Daten, Cookies, Dritte und deine Rechte.',
 h1:'Datenschutzerklärung',
 lead:`Zuletzt aktualisiert: ${UPDATED}`,
 crumb:'Datenschutzerklärung',
 body:`<p>Dein Datenschutz ist uns wichtig. Diese Erklärung beschreibt, welche Informationen ${N} („wir“) verarbeitet, wenn du die Website und ihre Werkzeuge nutzt.</p>
<h2>1. Deine Dateien bleiben auf deinem Gerät</h2>
<p>Die Bild- und SVG-Werkzeuge laufen mit JavaScript in deinem Webbrowser. Dateien, die du ablegst, einfügst oder öffnest, werden lokal verarbeitet und <strong>nicht hochgeladen</strong> – weder auf unsere Server noch zu Dritten. Wir können sie nicht sehen.</p>
<h2>2. Informationen, die wir erheben</h2>
<ul>
<li><strong>Auf deinem Gerät gespeicherte Einstellungen.</strong> Wenn du zwischen hellem und dunklem Modus wechselst, wird deine Wahl im lokalen Speicher deines Browsers abgelegt, damit die Seite sie sich merkt. Sie verlässt dein Gerät nie.</li>
<li><strong>Nachrichten, die du uns sendest.</strong> Wenn du das Kontaktformular nutzt oder uns schreibst, erhalten wir Name, E-Mail-Adresse und Nachricht und verwenden sie nur, um zu antworten und den Dienst zu verbessern.</li>
<li><strong>Technische Protokolle.</strong> Wie die meisten Websites kann unser Hosting-Anbieter übliche Server-Logs (z. B. IP-Adresse, Browsertyp, angeforderte Seite, Zeit) aus Sicherheits- und Zuverlässigkeitsgründen speichern.</li>
</ul>
<h2>3. Cookies und Analyse</h2>
<p>Wir setzen keine Werbe- oder Tracking-Cookies. Derzeit nutzen wir keine Analyse- oder Werbeskripte von Drittanbietern. Falls wir künftig datenschutzfreundliche Analysen oder Cookies einführen, aktualisieren wir diese Seite und holen bei Bedarf deine Einwilligung ein.</p>
<h2>4. Dritte</h2>
<p>Die Website wird von einem Hosting- und Content-Delivery-Anbieter ausgeliefert, der technische Anfragedaten in unserem Auftrag verarbeitet. Wird das Kontaktformular mit einem externen Formulardienst betrieben, verarbeitet dieser deine Nachricht, um sie uns zuzustellen. Wir verkaufen deine personenbezogenen Daten nicht.</p>
<h2>5. Wie wir Informationen verwenden</h2>
<p>Wir nutzen die beschriebenen begrenzten Informationen, um die Website zu betreiben und zu sichern, Nachrichten zu beantworten und die Werkzeuge zu verbessern. Nachrichten bewahren wir nur so lange auf, wie es für die Bearbeitung deiner Anfrage und eine angemessene Dokumentation nötig ist.</p>
<h2>6. Deine Rechte</h2>
<p>Je nach Wohnort (z. B. nach der DSGVO oder ähnlichen Gesetzen) hast du möglicherweise das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung deiner personenbezogenen Daten, ein Widerspruchsrecht und das Recht, dich bei deiner Datenschutzaufsichtsbehörde zu beschweren. Da wir sehr wenige personenbezogene Daten speichern, sind die meisten Anfragen leicht zu erfüllen.</p>
<h2>7. Kinder</h2>
<p>Der Dienst richtet sich nicht an Kinder unter 13 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von ihnen.</p>
<h2>8. Sicherheit</h2>
<p>Die Website wird über HTTPS ausgeliefert. Da deine Dateien nie hochgeladen werden, sind sie auf unserer Seite keinen Übertragungs- oder Speicherrisiken ausgesetzt.</p>
<h2>9. Änderungen dieser Erklärung</h2>
<p>Wir können diese Erklärung aktualisieren. Das Datum „Zuletzt aktualisiert“ zeigt die neueste Fassung.</p>
<h2>10. Kontakt für Datenschutzanfragen</h2>
<p>Bei Fragen oder Anfragen zum Datenschutz schreibe an ${mail} mit „Datenschutzanfrage“ im Betreff oder nutze die <a href="../contact-us/">Kontaktseite</a>. Siehe auch unsere <a href="../terms/">Nutzungsbedingungen</a>.</p>`};

const notFound={
 title:'Seite nicht gefunden | '+N,
 desc:'Die gesuchte Seite wurde nicht gefunden. Gehe zurück zum PNG-zu-SVG-Konverter oder entdecke unsere weiteren kostenlosen Konverter und SVG-Werkzeuge.',
 h1:'Seite nicht gefunden',
 lead:'Die aufgerufene Seite existiert nicht oder wurde verschoben. Hier geht es weiter.',
 body:`<ul class="nf-links">
<li><a href="/de/">PNG-zu-SVG-Konverter (Startseite)</a></li>
<li><a href="/de/jpg-to-svg-converter/">JPG-zu-SVG-Konverter</a></li>
<li><a href="/de/svg-to-png-converter/">SVG-zu-PNG-Konverter</a></li>
<li><a href="/de/svg-optimizer/">SVG-Optimierer</a></li>
<li><a href="/de/sitemap/">Sitemap: alle Konverter und Werkzeuge</a></li>
<li><a href="/de/contact-us/">Kontakt</a></li>
</ul>`};

const sitemap={title:'Sitemap | '+N,desc:'Alle Seiten von pngtosvgconverter.com: kostenlose Bild-zu-SVG-Konverter, SVG-zu-Bild-Konverter, SVG-Werkzeuge und die Startseite in 18 Sprachen.',h1:'Sitemap',lead:'Alle Seiten von pngtosvgconverter.com an einem Ort.',crumb:'Sitemap',
 main:'Hauptseiten',home:'Startseite: PNG-zu-SVG-Konverter',about:'Über uns',contact:'Kontakt',terms:'Nutzungsbedingungen',privacy:'Datenschutzerklärung',sitemap:'Sitemap',
 gRaster:'Bild-zu-SVG-Konverter',gExport:'SVG-zu-Bild-Konverter',gUtil:'SVG-Werkzeuge',gLang:'Startseite in anderen Sprachen'};
return {about,contact,terms,privacy,notFound,sitemap};
};
