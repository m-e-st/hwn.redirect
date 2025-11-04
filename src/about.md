---
layout: markdown.njk
permalink: "{{ page.filePathStem }}.html"
menuitem: "👨🏻‍🦳"
loginonly: false
backgroundimage: tree-large-green.png
backgroundposition: bottommiddle

localbuttonstyle: "background-color:#d9f99d80; margin:0 2em;border-radius:16px;font: 15px/30px Comic Sans MS;"
---

<img src="/static/img/author-face.png" style="height:200px;margin:0 16px 0px 24px;float:left;" alt="author's portrait">
<img src="/static/img/gemini-old-computers.png" style="height:200px;margin:0 24px 0px 16px;float:right;" alt="alte Computer">
<p style="min-height:180px;">
Dies ist der Blog von Michael Stumpp aus Oranienburg.
Ich war jahrelang in der IT-Branche tätig und interessiere mich auch heute noch für die aktuellen Entwicklungen.
Das Entwickeln von einfachen Webseiten ohne große Frameworks ist für mich zum Hobby geworden.
Dabei ist es nicht mein Ziel, professionelle Webanwendungen zu bauen.
Da ich weder in Design noch in Web-Technologie allzu bewandert bin, sind hier keine Wunderwerke zu erwarten.
Aber ich habe jede Menge Freude am Bauen der Websites.
</p>

#### Angaben zur Webseite

 &nbsp;  | &nbsp; 
 :---------|:-------
 Generator | {{ site.ssg.name }} v{{site.ssg.version }}
 Host      | {{ site.host }}
 Erzeugt   | {{ site.date | Datum }}
 Version   | {{ pkg.version }}

#### Kontakt

- [Impressum](https://web.stumpp.name/impressum)
- [Datenschutz](https://web.stumpp.name/datenschutz) <small style="margin-left:20px">Der Aufruf dieser Links verläßt den Blog!</small>
- [Mastodon](https://mastodon.social/@M_E_ST)

<!-- ab hier verschlüsselte Inhalte | nur HTML kein Markdown -->
{% crypt "0217", "w3-topbar w3-section ms-crypted" %}
<h4>Visitenkarte</h4>

QR-Code

<h4>Fediverse</h4>
Matrix
Mastodon

<h4>Mail | Fax | Internet</h4>
PGP Schlüssel

{% endcrypt %}

---

<div class="w3-padding w3-padding-48 w3-center" style="background:linear-gradient(90deg, #EEE0 20%, #ecfccb80 51%, #EEE0 80%)">
	<a class="w3-btn" style="{{localbuttonstyle}}" href="/aboutframe.html?src=https://web.stumpp.name/frames/impressum.html">Impressum</a>
	<a class="w3-btn" style="{{localbuttonstyle}}" href="/aboutframe.html?src=https://web.stumpp.name/frames/datenschutz.html">Datenschutz</a>
</div>
