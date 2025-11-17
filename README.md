# Redirect für Statichost

Die Webseite liegt in einem PUBLCI Github repository 
und leitet die bisher bei statichost.eu gehosteten
Seiten auf ihre neuen Hosts um.

#### Grund

Ab 1. Dezember 2025 sind Hostings von privaten Repositories
bei statichost.eu kostenpflichtig. Die Repositories der 
gehosteten Seiten können aus verschiedenen Gründen nicht
'public' gestellt werden. Die Kosten für private Repositories
lohnen sich für diesde Hobby-Projekte nicht.

#### Besonderheiten

Das Redirection-Ziel wird aus einer Environment-Variable genommen,
so dass alle Ziele aus demselben (public) Repository erzeugt werden.


#### Softwarebasis

Laufzeit:
- W3.CSS v4  (herausgegeben von https://w3schools.com)

Entwicklung
- eleventy v3.0
- lucide.dev Icon Sammlung v2.1

