---
layout: markdown.njk
permalink: "{{ page.filePathStem }}.html"
menuitem: über
loginonly: false
backgroundimage: tree-large-green.png
backgroundposition: bottommiddle
---

<img src="/static/img/author-face.png" height=200 style="margin:0 16px 8px 24px;float:left;" alt="author's portrait" onclick="alert('me');">
<img src="/static/img/gemini-old-computers.png" height=200 style="margin:0 16px 8px 24px;float:right;" alt="alte Computer";">
Dies ist der Blog von Michael Stumpp aus Oranienburg.
Ich war jahrelang in der IT-Branche tätig und interessiere mich auch heute noch für die aktuellen Entwicklungen.
Das Entwickeln von einfachen Webseiten ohne große Frameworks ist für mich zum Hobby geworden.
Dabei ist es nicht mein Ziel, professionelle Webanwendungen zu bauen.
Da ich weder in Design noch in Web-Technologie allzu bewandert bin, sind hier keine Wunderwerke zu erwarten.
Aber ich habe jede Menge Freude am Bauen der Websites.

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

hallo

{% endcrypt %}
