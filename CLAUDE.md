# Random Room – Regeln für dieses Repository

Landingpage für unabhängige Hotels (20–150 Zimmer, DACH). Ziel: Hypothese testen, Anfragen über das Formular sammeln.

## Technik
- Astro (statisch), Node laut `.nvmrc`, Hosting Netlify, Formular über Netlify Forms (`name="anfrage"`).
- Schriften selbst gehostet (`@fontsource-variable/plus-jakarta-sans` für Überschriften, `@fontsource-variable/figtree` für Text). Keine externen Requests: kein Google Fonts, keine CDNs, kein Tracking.
- Vanilla JS nur in `<script>` der jeweiligen Komponente. Keine Frameworks.
- Vor jedem Commit: `npm run build` muss fehlerfrei laufen.

## Inhalte
- Texte und Preise nur in `src/config/content.ts` und `src/config/site.ts` ändern.
- Sprache: Deutsch, Sie-Form, kurze Sätze. Englisch ist in `astro.config.mjs` vorbereitet, folgt später.
- Verboten: „Beratung“, „Consulting“, Garantien (Buchungen, Rankings, Umsatz), erfundene Zahlen, Kundenstimmen oder Fallstudien.
- Keine Fotos außer dem Porträt in „Über mich“.
- KI-Beispielantworten bleiben als „Beispielhafte Darstellung“ gekennzeichnet.

## Design
- Palette „Espresso“, alle Werte in `src/styles/tokens.css`. Keine Farben direkt in Komponenten.
- Zweifarbige Überschriften: erster Teil `--ink`, zweiter Teil `--ink-muted`.
- Verläufe nur wie festgelegt: Hero + KI-Sektion (`.sky`), weicher Verlauf von „Über mich“ in den Footer (`--night`). Kein schwarzer Footer.
- Bewegung nur dezent, immer mit `prefers-reduced-motion`.

## Platzhalter
Alle `PLACEHOLDER_*` sind in README.md aufgelistet. Vor dem Livegang ersetzen, nichts erfinden.
