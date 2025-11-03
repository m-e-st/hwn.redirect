# WriteFreely

Dokumentation der Konfiguration der Writefreely-Instanz bei [tchncs.de](https://text.tchncs.de).

## Configuration List

Name | Url | Publicity | Format | CSS | Signature | Verification
:----|:----|:----------|:-------|:----|:----------|:------------
Michas Blog        | text.tchncs.de/m-e-st/              | Unlisted | Blog    | Default | CC BY SA   | https://mastodon.social/@M_E_ST
Software-Werkzeuge | text.tchncs.de/software-werkzeuge/  | Public   | Blog    | Default | CC BY SA   | https://mastodon.social/@M_E_ST
Statische Webseiten|                                     | Public   | Blog    | Default | CC BY SA   | https://mastodon.social/@M_E_ST
Guerilla IT        | text.tchncs.de/guerilla-it/         | Password | Novel   | Default | CC BY NC ND| https://mastodon.social/@M_E_ST
Mein privates Notebook | text.tchncs.de/michasnotebook/  | Private  | Notebook| Unlisted| Private    | https://blog.stumpp.name

#### Post Signature
*CC BY SA*
```html
<small class="footer">Michael Stumpp Oranienburg -- Lizenz <a href="https://creativecommons.org/licenses/by-sa/4.0/"><b>CC BY-SA</b></a></small>
```
*CC BY NC ND*
```html
<small class="footer">Michael Stumpp Oranienburg -- Lizenz <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de"><b>CC BY NC ND</b></a></small>
```
*Private*
```html
<small class="footer">Die Nutzung und Verbreitung dieser Inhalte ist untersagt.</small>
```
#### Custom CSS
*Default*

```css
body {
    background-color: silver;
    background-image:linear-gradient(to right, silver, white 10%, white 90%, silver);
}

.footer {
    display:block;
    padding:4px 8px; 
    text-align: center; 
    background:dimgray;color:white;
}
.footer > a {
    color:skyblue;
}
body > footer > hr { display:none; }
body > footer > nav { 
    margin:0 -32px 0 -32px; 
    width:110%; 
    width:calc(100% + 64px);
    padding: 8px 0;
    background:silver;color:gray;
    background-image:linear-gradient(to right, silver, white 10%, silver 50%, white 90%, silver);
}
body > footer > nav > a { color: navy!important; font-weight:700}
body > footer > nav > a:hover { color: blue; }
```
*Unlisted*
```css
body {
    background-color: #FF6347;
    background-image:linear-gradient(to right, #FF6347, white 10%, white 90%, #FF6347);
}

.footer {
    display:block;
    padding:4px 8px; 
    text-align: center; 
    background:#FFC2B8;color:#A31800;
    font-weight:700;
}

body > footer > hr { display:none; }
body > footer > nav { 
    margin:0 -32px 0 -32px; 
    width:110%; 
    width:calc(100% + 64px);
    padding: 8px 0;
    background:#FF6347;color:#FFD7CA;
    background-image:linear-gradient(to right, #FF6347, white 10%, #FF6347 50%, white 90%, #FF6347);
}
body > footer > nav > a { color:darkred!important; font-weight:700}
body > footer > nav > a:hover { color:white!important; }
```
