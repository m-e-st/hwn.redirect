---
title: Doku zur Content-Pflege
menuitem: Dokumentation
---

# Obsidian-aware Blog

Das Verzeichnis *`/blog`* ist gleichzeitig das Blog-Verzeichnis einer statischen
Webseite, basierend auf [Eleventy](https://11ty.io) als auch ein Vault
des Notizenprogramms [Obsidian](https://obsidian.md/) zur Pflege der 
Inhalte. Damit das Zusammenspiel der beiden Tools reibungslos funktioniert, 
sind ein paar Besonderheiten zu beachten.

## Benutzung

Die Inhaltspflege für den Blog erfolgt lokal. Für die Änderung der 
Texte kann jeder ASCII-Editor verwendet werden. Empfehlenswert ist jedoch
die Verwendung des Tools *Obsidian*. 

> [!warning] Bitte beachten:
> - Es dürfen nur Dateien im Verzeichnis `/blog` und in den Unterverzeichnissen
verändert werden.
> - Die Datei `blog.json` darf **nicht** verändert werden.
> - Alle Inhaltsdateien haben die Dateierweiterung `.md`
> - Eingebundene Dateien, i.d.R. Bilder und Graphiken, liegen im selben 
Verzeichnis wie die `*.md` Datei, welche sie einbindet.
>- Im Verzeichnis `/blog` darf **keine** Datei mit dem Namen `index.md` geben.
>    - In den Unterverzeichnissen ist `index.md` erlaubt und ggf. sogar erwünscht.
>    - Im Hauptverzeichnis `/blog` führen alle Dateien `index.*`zu Störungen.

 So lange diese Vorgaben eingehalten werden, kann der Blog ohne technische Probleme sowohl lokal getestet werden als auch via Github veröffentlicht werden.

Jede Blog-Datei kann mit einem Titel versehen werden. Dieser steht am Anfang der Datei im Datenabschnitt, getrennt durch eine `---`-Zeile vor und nach den Daten. In Obsidian werden diese Daten als *Property* dargestellt. Der Titel wird im Inhaltsverzeichnis anstelle des Dateinamens angezeigt. Im Dokument selbst kann man damit z.B. die Überschrift setzen.


## Technische Einrichtung

- Zur lokalen Ausführung wird benötigt:
	- [Node.js](https://nodejs.org/) ab Version 20
	- [Eleventy](https://11ty.io) ab Version 3.0
	- Mit `npm run dev` wird die lokale Version generiert.
	- Angezeigt wird die lokale Version auf [localhost:8080](http://localhost:8080)
- Die Internet-Version wird von Cloudflare automatisch erstellt, sobald die Inhalte ins Repository gepusht werden. Allerdings sollte die hochgeladene Version möglichst fehlerfrei sein.
	- Zum Prüfen, ob die Änderungen im Blog publikationstauglich sind, wird der Befehl `npm run build` verwendet. 
	- Wirft der Build-Run Fehler aus, dürfen die Änderungen nicht 'commited' und ge'push't werden. Zumindest nicht im Branch `main`.
	- Aus allen anderen Branches als `main` werden von Cloudflare Vorschau-Builds erstellt. Zum Ansehen der Vorschauen benötigt man allerdings den passenden Cloudflare-Zugang.
	- Inhalte des Branches `main` werden (fast) sofort und ohne Rückfrage veröffentlicht. Die Bereitstellungszeit von Cloudflare liegt derzeit unter einer Minute.
