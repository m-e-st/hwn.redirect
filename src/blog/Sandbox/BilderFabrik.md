
### internes Bild

> [!warning] Achtung
> Damit dies auch für Obsidian funktioniert und die Bilder sowohl korrekt in Obsidian als auf der Webseite angezeigt werden, sollte eingestellt sein, dass die Attachments im selben Ordner wie der Text, also die `*.md`-Datei, liegen.
> 
> ![screenshot](screenshot-obsidian-settings-2.png)
>
> Grundsätzlich lassen sich auch Pfade angeben, wobei absolute Pfade immer mit `/blog` beginnen. Elemente der Benutzerführung lassen sich mit dem Pfad `/static/img` ansprechen, falls erforderlich.

Hier wird ein internes Bild eingebunden:

![.CHERRY BLOSSOM](cherry-blossom-japan.png)

> [!hint] In Markdown immer "`![alt](url)`" für Bilder verwenden!
> Der Bildname bestimmt das `alt`-Attribut des `<img>`-Tags und darf deshalb nie leer sein (sonst beschwert sich Eleventy, auch wenn es in Obsidian gut aussieht). Die eckige Klammer darf also niemals leer sein. Übrigens: sogenannte Wikilinks ("`![[url]]`") funktionieren nur in Obsidian aber nicht in Eleventy.

### externes Bild

 Dieses Bild wird über LoremPicsum geladen:  
 ![forest](https://picsum.photos/id/28/600/400)
 
 Dieses Bild wird direkt aus dem Internet geladen:  
 ![cherry blooming](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/%E4%B8%80%E7%9B%AE%E5%8D%83%E6%9C%AC%E6%A1%9C_%28Cherry_blooming_view_from_Yoshimizu_Shrine%29_12_Apr%2C_2014_-_panoramio.jpg/1920px-%E4%B8%80%E7%9B%AE%E5%8D%83%E6%9C%AC%E6%A1%9C_%28Cherry_blooming_view_from_Yoshimizu_Shrine%29_12_Apr%2C_2014_-_panoramio.jpg)
Um die Größe beeinflussen zu können, muss statt der Markdown-Konstrukt ein HTML-`<img>`-Tag verwendet werden. **Das `alt`-Atrribut muss immer angegeben werden!** Sonst wirft Eleventy einen Fehler

<img alt="cherry blooming" width="400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/%E4%B8%80%E7%9B%AE%E5%8D%83%E6%9C%AC%E6%A1%9C_%28Cherry_blooming_view_from_Yoshimizu_Shrine%29_12_Apr%2C_2014_-_panoramio.jpg/1920px-%E4%B8%80%E7%9B%AE%E5%8D%83%E6%9C%AC%E6%A1%9C_%28Cherry_blooming_view_from_Yoshimizu_Shrine%29_12_Apr%2C_2014_-_panoramio.jpg">

