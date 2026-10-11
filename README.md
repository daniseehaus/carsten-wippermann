# carsten-wippermann.de

Website von Carsten Wippermann, Objektemacher aus Melle. Statische Seite mit [Astro](https://astro.build), gehostet auf GitHub Pages.

## Lokal starten

```bash
npm install
npm run dev
```

Die Seite läuft dann unter http://localhost:4321.

## Bilder hinzufügen

Die Galerien entstehen automatisch aus den Ordnern unter `src/assets/galerie/`:

| Ordner | Galerie |
| --- | --- |
| `lichtobjekte/` | Lichtobjekte |
| `besteckkunst/` | Besteckkunst |
| `plastiken/` | Plastiken |

Neue Fotos importieren (verkleinert sie automatisch):

```bash
npm run bilder -- "/Pfad/zum/Ordner mit Fotos" lichtobjekte
```

Danach committen und pushen. GitHub baut und veröffentlicht die Seite automatisch.

### Dateinamen = Bildunterschrift

- `Titel   Material   Maße.jpg` (Teile mit mindestens zwei Leerzeichen trennen): Hauptbild eines Werks, Unterschrift „Titel · Material · Maße".
- `Titel 2.jpg`: weitere Ansicht desselben Werks. Sie steht direkt hinter dem Hauptbild.
- `DSC_1234.jpg` und ähnliche Kameranamen: Bild ohne Unterschrift, am Ende der Galerie.

Beispiel: `Zeitbremse   Aluminium   54 x 100 cm.jpg`, `Zeitbremse 1.jpg`, `Zeitbremse 2.jpg`.

## Texte ändern

- Kontaktdaten, Galerie-Texte, Titelbilder und Ausstellungen: `src/data/site.ts`
- Seiten: `src/pages/`

## Veröffentlichung

Jeder Push auf `main` startet `.github/workflows/deploy.yml`. In den Repo-Einstellungen unter **Settings → Pages** muss als Quelle „GitHub Actions" gewählt sein.

Eigene Domain: unter **Settings → Pages → Custom domain** `www.carsten-wippermann.de` eintragen. Beim Domain-Anbieter dann setzen:

| Typ | Name | Wert |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | daniseehaus.github.io |

Die alte Domain `carsten-wippermann.com` leitet per Domain-Weiterleitung bei IONOS auf `www.carsten-wippermann.de` weiter.

Alte Wix-Adressen (`/vita-1`, `/contact-3`, `/lichtobjekte` usw.) leiten auf die neuen Seiten weiter.
