// Alle UI-Strings und die Routenkarte für übersetzte Slugs.
// Längere Seitentexte stehen in src/i18n/content/.

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
    'nav.home': 'Startseite',
    'lang.switch': 'English',
    'lang.switchLabel': 'Diese Seite auf Englisch',
    'footer.impressum': 'Impressum',
    'footer.datenschutz': 'Datenschutz',
    'footer.lang': 'Sprache',
    'home.title': 'Mehr Direktbuchungen am Wörthersee',
    'home.description':
      'Optimierung der Sichtbarkeit von Hotels am Wörthersee in Google, Google Maps und KI-Assistenten. Prüfung, Umsetzung und laufende Betreuung.',
    'form.name': 'Name',
    'form.email': 'E-Mail',
    'form.hotel': 'Hotel',
    'form.website': 'Website des Hotels',
    'form.phone': 'Telefon',
    'form.message': 'Nachricht',
    'form.optional': 'optional',
    'form.submit': 'Termin anfragen',
    'form.honeypot': 'Dieses Feld bitte leer lassen',
    'form.privacy': 'Ihre Angaben verwenden wir nur, um Ihre Anfrage zu beantworten. Details in der',
    'form.privacyLink': 'Datenschutzerklärung',
    'form.err.required': 'Bitte ausfüllen.',
    'form.err.email': 'Bitte eine gültige E-Mail-Adresse eingeben, z. B. name@hotel.at.',
    'form.err.website': 'Bitte die Adresse der Website eingeben, z. B. www.hotel.at.',
    'form.err.summary': 'Bitte prüfen Sie die markierten Felder.',
    'step': 'Stufe',
    'price': 'Preis',
  },
  en: {
    'site.name': 'PLACEHOLDER_BRAND_NAME',
    'nav.cta': 'Book a call',
    'nav.skip': 'Skip to content',
    'nav.home': 'Home',
    'lang.switch': 'Deutsch',
    'lang.switchLabel': 'This page in German',
    'footer.impressum': 'Imprint',
    'footer.datenschutz': 'Privacy',
    'footer.lang': 'Language',
    'home.title': 'More direct bookings on Lake Wörthersee',
    'home.description':
      'Visibility optimisation for hotels on Lake Wörthersee in Google, Google Maps and AI assistants. Audit, implementation and ongoing support.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.hotel': 'Hotel',
    'form.website': 'Hotel website',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.optional': 'optional',
    'form.submit': 'Request a call',
    'form.honeypot': 'Please leave this field empty',
    'form.privacy': 'We only use your details to answer your request. See our',
    'form.privacyLink': 'privacy policy',
    'form.err.required': 'Please fill in this field.',
    'form.err.email': 'Please enter a valid email address, e.g. name@hotel.at.',
    'form.err.website': 'Please enter the website address, e.g. www.hotel.at.',
    'form.err.summary': 'Please check the highlighted fields.',
    'step': 'Step',
    'price': 'Price',
  },
} as const;

export type UIKey = keyof (typeof ui)['de'];
