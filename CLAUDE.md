# CLAUDE.md

Regeln für alle Arbeiten an diesem Repository. Gelten immer, auch bei kleinen Änderungen.

## Projekt
Statischer Astro-Landingpage für unabhängige Hotels am Wörthersee. Deploy auf Netlify Free, Formular über Netlify Forms.
DE im Root, EN unter `/en/`. UI-Strings in `src/i18n/ui.ts`, übersetzte Slugs über die Routenkarte dort.

## Fakten
- Keine Fakten, Zahlen, Kunden, Referenzen oder Bewertungen erfinden.
- Alles Unbekannte als `PLACEHOLDER_…` markieren und in der README-Liste ergänzen.
- Entwurfstexte, die der Inhaber prüfen muss: `PLACEHOLDER_REVIEW`.

## Technik
- Nur statischer Output. Kein JS-Framework im Client, wenn es ohne geht.
- Schriften nur self-hosted über `@fontsource`. Null Anfragen an Google Fonts oder CDNs.
- Null Cookies, null Drittanbieter-Requests. Analytics nur cookieless und nur nach Entscheidung des Inhabers.
- Design-Werte nur über `src/styles/tokens.css`. Keine Farben oder Abstände hart im Komponentencode.

## Wortwahl (rechtlich)
- Verboten: „Beratung“, „Berater“, „Consulting“ (auch EN: „consulting“, „consultant“, „advice“ als Leistung).
- Verboten: Garantien zu Positionen („Platz 1“, „garantiert“, „Top-Ranking“) und prozentuale Versprechen zu Buchungen.
- Erlaubt: „Optimierung“, „Betreuung“, „Sichtbarkeit“, „Prüfung“, „Umsetzung“.

## Anti-Slop
Verboten:
- Farbverläufe im Hero, egal welche Farbe. Gradient-Text.
- Badge oder Eyebrow-Pille über der H1.
- Genau drei gleiche Karten mit Icons. Farbiger Streifen links an Karten.
- Dunkles Theme. Neon-Glow, Schatten-Leuchten.
- Icons statt Inhalt. Vanity-Zahlen ohne Quelle.
- Konstruktionen „nicht nur X, sondern Y“ / „not just X, but Y“.
- Mehr als ein Gedankenstrich pro Absatz.
- Wörter: „nahtlos“, „revolutionär“, „ganzheitlich“, „innovativ“, „maßgeschneidert“, „Lösungen“
  (EN analog: seamless, revolutionary, holistic, innovative, tailor-made, solutions).
- Aufzählungen „immer drei“ ohne Grund.

Stil:
- Kurze Sätze. Konkretes statt Adjektive.
- Österreichisches Deutsch (Jänner, heuer nur wenn passend, „Sie“-Anrede). Keine „du“-Form.
- EN: britische Schreibweise, sachlich.

## Ablauf
- Arbeit in eigenem Branch, ein Commit pro Etappe.
- Vor jedem Commit: `npm run build` muss fehlerfrei laufen (Node >= 22.23.4).
