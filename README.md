# randomroom.eu

Landingpage von Random Room. Astro, statisch, gehostet auf Netlify.

## Lokal starten
```
npm install
npm run dev      # http://localhost:4321
npm run build    # Ergebnis in dist/
```

## Platzhalter vor dem Livegang
In `src/config/site.ts`:
- `PLACEHOLDER_ANSCHRIFT`, `PLACEHOLDER_PLZ` – Geschäftsanschrift (Impressum)
- `PLACEHOLDER_EMAIL`, `PLACEHOLDER_TELEFON` – Kontakt (Impressum)
- `PLACEHOLDER_GEWERBE`, `PLACEHOLDER_GISA-ZAHL`, `PLACEHOLDER_BEHÖRDE`, `PLACEHOLDER_FACHGRUPPE` – laut GISA-Auszug
- `PLACEHOLDER_UID` / `PLACEHOLDER_UST-HINWEIS` – UID-Nummer oder Kleinunternehmer-Hinweis
- Hosting-Angabe `PLACEHOLDER_PRÜFEN`, `PLACEHOLDER_FRIST` (Speicherdauer der Anfragen), `PLACEHOLDER_DATUM` – Datenschutzerklärung

In `src/components/UeberMich.astro`:
- `PLACEHOLDER_FOTO` – Porträt 4:5 in `public/` ablegen und einsetzen

## Deployment (Netlify)
1. Netlify → „Add new site“ → „Import from GitHub“ → Repository `consaltus/seo`, Branch `main`.
2. Build-Einstellungen kommen aus `netlify.toml` (`npm run build`, Ordner `dist`).
3. Forms → Formular `anfrage` → Benachrichtigung per E-Mail einrichten.
4. Domain `randomroom.eu` hinzufügen, DNS-Einträge bei World4You setzen, HTTPS aktivieren.

Die frühere Version der Website liegt im Branch `claude/confident-feynman-hwd3qp`.
