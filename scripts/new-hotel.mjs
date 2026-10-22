// Legt einen neuen Eintrag für eine persönliche Hotelseite an.
// Aufruf: npm run new-hotel -- "Hotel Seeblick" [de|en]
import { randomBytes } from 'node:crypto';
import { existsSync, writeFileSync } from 'node:fs';

const [name, lang = 'de'] = process.argv.slice(2);
if (!name) {
  console.error('Bitte Hotelnamen angeben: npm run new-hotel -- "Hotel Seeblick"');
  process.exit(1);
}

const base = name
  .toLowerCase()
  .normalize('NFD')
  .replace(/[̀-ͯ]/g, '')
  .replace(/ß/g, 'ss')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');
const alphabet = 'abcdefghijkmnpqrstuvwxyz23456789';
const random = [...randomBytes(12)].map((b) => alphabet[b % alphabet.length]).join('');
const slug = `${base}-${random}`;
const file = `src/content/hotels/${base}.md`;
if (existsSync(file)) {
  console.error(`${file} existiert bereits.`);
  process.exit(1);
}

const issue = (n) => `  - title: PLACEHOLDER_TITEL_${n}
    where: PLACEHOLDER_ORT_${n}
    text: PLACEHOLDER_TEXT_${n}
    # screenshot: ../../assets/hotels/${base}-${n}.png
    screenshotAlt: PLACEHOLDER_SCREENSHOT_${n}`;

writeFileSync(
  file,
  `---
slug: ${slug}
hotel: ${name}
lang: ${lang}
demo: false
checkedAt: PLACEHOLDER_DATUM_PRUEFUNG
issues:
${[1, 2, 3].map(issue).join('\n')}
---

PLACEHOLDER_EINLEITUNG
`,
);
console.log(`Angelegt: ${file}\nURL: /h/${slug}/`);
