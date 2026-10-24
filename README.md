# Sam-Rash Website

Die Website von Sam-Rash basiert auf React, TypeScript, Vite und Tailwind CSS.

## Lokal starten

Voraussetzung: Node.js und npm. Die aktuelle Einrichtung wurde mit Node.js 22 und npm 10 geprüft.

```sh
npm ci
npm run dev
```

Die Vorschau läuft unter [http://localhost:8080](http://localhost:8080). Änderungen im Quellcode erscheinen automatisch im Browser.

## Sprachen

Deutsch ist die Standardsprache unter `/`, Englisch liegt unter `/en/`. Artist Profile, EPK, Impressum und Datenschutz sind ebenfalls unter beiden Sprachpfaden erreichbar. Die DE/EN-Umschaltung bleibt auf derselben Seite und übernimmt auf der Startseite den gewählten Abschnitt. Texte liegen direkt in den jeweiligen React-Komponenten; die Routen- und Sprachlogik liegt in `src/lib/locale.ts`. Der Build erzeugt für jede Unterseite eine eigene HTML-Datei mit passender Sprache und Seitenbeschreibung.

Die Booking-Adresse (`bookingEmail`) und die allgemeine Kontaktadresse (`email`) sind in `src/lib/site.ts` hinterlegt. Booking-Buttons öffnen das E-Mail-Programm mit einer vorausgefüllten Betreffzeile.

## Artist Profile und Pressekit pflegen

Das Profil liegt unter `/artist-profile` und `/en/artist-profile`. Biografie-Absätze, Steckbrief und weitere Texte stehen für beide Sprachen zentral in `src/lib/artist-profile.ts`. Weitere Absätze können im Feld `biography` ergänzt werden.

Den Freigabelink zum Google-Drive-Pressekit in `src/lib/site.ts` unter `pressKitUrl` eintragen. Derselbe Link wird auf der Profilseite und im Footer verwendet. Solange das Feld leer ist, bleiben die Pressekit-Buttons mit dem Hinweis „Link folgt“ deaktiviert. Der Ordner sollte für die gewünschte Zielgruppe lesbar freigegeben sein.

## Prüfen

```sh
npm run build
npm run lint
npx tsc -b
```

Der Build liegt anschließend im Ordner `dist/`. Die Lint-Prüfung hat derzeit nur Warnungen aus den vorhandenen UI-Komponenten.

## Wichtige Dateien

- `src/pages/Index.tsx`: Startseite
- `src/pages/ArtistProfile.tsx`: Artist Profile
- `src/lib/artist-profile.ts`: bearbeitbare Profiltexte in DE und EN
- `src/pages/EPK.tsx`: Electronic Press Kit
- `src/components/`: Bereiche und gemeinsame UI-Komponenten
- `src/assets/` und `public/`: Bilder und öffentliche Dateien
- `src/index.css`: globale Gestaltung

Das Git-Remote `origin` zeigt auf [samrash-hamburg/sam-rash.com](https://github.com/samrash-hamburg/sam-rash.com). Ein Push auf `main` startet den bestehenden GitHub-Pages-Workflow in `.github/workflows/deploy.yml`.
