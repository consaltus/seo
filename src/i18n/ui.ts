// Alle UI-Strings und die Routenkarte für übersetzte Slugs.

export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

// Routenkarte: interner Schlüssel → Pfad je Sprache (ohne Sprachpräfix, ohne Slash am Ende).
export const routes = {
  home: { de: '', en: '' },
  impressum: { de: 'impressum', en: 'imprint' },
  datenschutz: { de: 'datenschutz', en: 'privacy' },
  danke: { de: 'danke', en: 'thank-you' },
} as const;
export type RouteKey = keyof typeof routes;

export const ui = {
  de: {
    'site.name': 'PLACEHOLDER_MARKENNAME',
    'nav.cta': 'Termin vereinbaren',
    'nav.skip': 'Zum Inhalt springen',
    'nav.langSwitch': 'English',
    'footer.impressum': 'Impressum',
    'footer.datenschutz': 'Datenschutz',
    'footer.lang': 'Sprache',
    'home.title': 'Mehr Direktbuchungen am Wörthersee',
    'home.description':
      'Optimierung der Sichtbarkeit von Hotels am Wörthersee in Google, Google Maps und KI-Assistenten. Prüfung, Umsetzung und laufende Betreuung.',
  },
  en: {
    'site.name': 'PLACEHOLDER_BRAND_NAME',
    'nav.cta': 'Book a call',
    'nav.skip': 'Skip to content',
    'nav.langSwitch': 'Deutsch',
    'footer.impressum': 'Imprint',
    'footer.datenschutz': 'Privacy',
    'footer.lang': 'Language',
    'home.title': 'More direct bookings on Lake Wörthersee',
    'home.description':
      'Visibility optimisation for hotels on Lake Wörthersee in Google, Google Maps and AI assistants. Audit, implementation and ongoing support.',
  },
} as const;

export type UIKey = keyof (typeof ui)['de'];
