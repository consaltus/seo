# Landingpage: Sichtbarkeit für Hotels am Wörthersee

Statische Astro-Site (Astro 7), DE im Root, EN unter `/en/`. Hosting auf Netlify Free.

## Lokal

Voraussetzung: Node **>= 22.23.4** (von Astro 7 verlangt, siehe `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # Ausgabe in dist/
npm run preview
```

Ohne passende Node-Version lokal: `npx -y node@22.23.4 node_modules/astro/bin/astro.mjs build`.

## Deploy auf Netlify (Free)

1. Repository bei GitHub pushen.
2. Netlify → *Add new site* → *Import an existing project* → GitHub → dieses Repository wählen.
3. Build-Einstellungen kommen aus `netlify.toml` (Befehl `npm run build`, Ordner `dist`, `NODE_VERSION`). Nichts manuell eintragen.
4. Netlify → *Site configuration* → *Forms* → *Enable form detection* einschalten. Danach einmal neu deployen, damit Netlify das Formular im HTML erkennt.
5. *Forms* → *Form notifications* → E-Mail-Benachrichtigung an die eigene Adresse einrichten.
6. *Domain management* → eigene Domain verbinden. HTTPS (Let's Encrypt) ist automatisch aktiv.
7. Danach die Domain in `src/config/site.ts` (`SITE_URL`), `astro.config.mjs` (`SITE`) und `public/robots.txt` eintragen und neu deployen.
8. In der Google Search Console die Domain bestätigen und `https://<domain>/sitemap-index.xml` einreichen.

Hinweis Netlify-Analytics: nicht aktivieren, solange in der Datenschutzerklärung keine Statistik beschrieben ist.

## Struktur

| Pfad | Zweck |
| --- | --- |
| `src/config/site.ts` | Domain, Inhaberdaten, `showPrices` und Preistexte, Analytics-Schalter |
| `src/i18n/ui.ts` | Alle UI-Strings DE/EN und die Routenkarte für übersetzte Slugs |
| `src/i18n/utils.ts` | Pfade, absolute URLs, hreflang-Paare |
| `src/components/SEOHead.astro` | title, description, canonical, hreflang (de/en/x-default), OG, Favicon, JSON-LD |
| `src/styles/tokens.css` | Design-Tokens (Farben, Schriften, Radien, Abstände) |
| `CLAUDE.md` | Verbindliche Regeln für Texte und Gestaltung |

## Rechtliches: Prüfliste für das Impressum

Die Texte auf der Site sind Entwürfe. Sie sind nicht juristisch geprüft. Vor dem Livegang von einer fachkundigen Stelle (z. B. WKO-Gründerservice) prüfen lassen.

**§ 5 E-Commerce-Gesetz (ECG), allgemeine Informationspflichten**
- [ ] Name bzw. Firma des Diensteanbieters
- [ ] Geografische Anschrift der Niederlassung
- [ ] Kontaktangaben für rasche, unmittelbare Kommunikation, inkl. E-Mail-Adresse
- [ ] Firmenbuchnummer und Firmenbuchgericht (nur falls eingetragen)
- [ ] Zuständige Aufsichtsbehörde (Gewerbebehörde, z. B. Bezirkshauptmannschaft oder Magistrat)
- [ ] Kammer bzw. Berufsverband (Wirtschaftskammer Kärnten, Fachgruppe), Berufsbezeichnung und Mitgliedstaat der Verleihung
- [ ] Hinweis auf anwendbare gewerbe- oder berufsrechtliche Vorschriften und deren Zugang (z. B. Gewerbeordnung, ris.bka.gv.at)
- [ ] UID-Nummer, falls vorhanden
- [ ] Preise, falls angegeben: klar erkennbar, ob inkl. USt. und Versandkosten (bzw. Hinweis Kleinunternehmerregelung prüfen)

**§ 25 Mediengesetz (MedienG), Offenlegung**
- [ ] Name bzw. Firma des Medieninhabers
- [ ] Unternehmensgegenstand
- [ ] Wohnort bzw. Sitz des Medieninhabers
- [ ] Prüfen, ob die Site als „kleine Website“ (§ 25 Abs. 5 MedienG) gilt. Sonst zusätzlich grundlegende Richtung (Blattlinie)

**Weitere Punkte zur Prüfung**
- [ ] § 63 GewO: Geschäftsbezeichnung und Angaben zum Gewerbe korrekt
- [ ] Datenschutzerklärung (Art. 13 DSGVO): Verantwortlicher, Zwecke, Rechtsgrundlagen, Empfänger (Netlify), Drittlandübermittlung, Speicherdauer, Betroffenenrechte, Beschwerderecht bei der Datenschutzbehörde
- [ ] Auftragsverarbeitungsvertrag (DPA) mit Netlify abgeschlossen bzw. akzeptiert

## Liste aller PLACEHOLDER

Vor dem Livegang ersetzen. `grep -rn PLACEHOLDER src public astro.config.mjs` zeigt alle Stellen.

| Platzhalter | Wo | Was fehlt |
| --- | --- | --- |
| `PLACEHOLDER_DOMAIN` | `src/config/site.ts`, `astro.config.mjs`, `public/robots.txt` | Echte Domain |
| `PLACEHOLDER_MARKENNAME` / `PLACEHOLDER_BRAND_NAME` | `src/i18n/ui.ts` | Name der Marke bzw. des Unternehmens |
| `PLACEHOLDER_NAME` | `src/config/site.ts` | Vor- und Nachname des Inhabers |
| `PLACEHOLDER_FIRMENWORTLAUT` | `src/config/site.ts` | Firmenwortlaut bzw. Geschäftsbezeichnung |
| `PLACEHOLDER_STRASSE`, `PLACEHOLDER_PLZ`, `PLACEHOLDER_ORT` | `src/config/site.ts` | Geschäftsanschrift |
| `PLACEHOLDER_EMAIL`, `PLACEHOLDER_TELEFON` | `src/config/site.ts` | Kontakt |
| `PLACEHOLDER_GEWERBEWORTLAUT` | `src/config/site.ts` | Angemeldetes Gewerbe laut GISA |
| `PLACEHOLDER_GEWERBEBEHOERDE` | `src/config/site.ts` | Zuständige Gewerbebehörde |
| `PLACEHOLDER_KAMMER` | `src/config/site.ts` | Kammer / Fachgruppe |
| `PLACEHOLDER_UID` | `src/config/site.ts` | UID-Nummer, leer lassen falls keine |
| `PLACEHOLDER_PREIS` / `PLACEHOLDER_PRICE` | `src/config/site.ts` | Preistexte (nur sichtbar mit `showPrices: true`) |
| `PLACEHOLDER_OG_BILD` | `public/og-default.png` | Endgültiges Open-Graph-Bild 1200×630 |
| Analytics-Entscheidung | `src/config/site.ts` (`analytics.enabled`) | Standard: keine Statistik |
