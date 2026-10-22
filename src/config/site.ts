// Zentrale Konfiguration. Alle Werte mit PLACEHOLDER sind vor dem Livegang zu ersetzen (siehe README).

// PLACEHOLDER_DOMAIN: echte Domain eintragen, ohne Slash am Ende.
export const SITE_URL = 'https://placeholder-domain.example';

export const owner = {
  name: 'PLACEHOLDER_NAME',
  businessName: 'PLACEHOLDER_FIRMENWORTLAUT',
  street: 'PLACEHOLDER_STRASSE',
  postalCode: 'PLACEHOLDER_PLZ',
  city: 'PLACEHOLDER_ORT',
  region: 'Kärnten',
  country: 'AT',
  email: 'PLACEHOLDER_EMAIL',
  phone: 'PLACEHOLDER_TELEFON',
  gewerbe: 'PLACEHOLDER_GEWERBEWORTLAUT',
  gewerbebehoerde: 'PLACEHOLDER_GEWERBEBEHOERDE',
  kammer: 'PLACEHOLDER_KAMMER',
  uid: 'PLACEHOLDER_UID', // leer lassen ('') wenn keine UID vorhanden
};

// Preise: showPrices schaltet den Preisblock ein und aus.
// Werte als Text, z. B. 'ab 490 €' oder 'auf Anfrage'.
export const pricing = {
  showPrices: false,
  services: {
    check: { de: 'PLACEHOLDER_PREIS', en: 'PLACEHOLDER_PRICE' },
    basis: { de: 'PLACEHOLDER_PREIS', en: 'PLACEHOLDER_PRICE' },
    betreuung: { de: 'PLACEHOLDER_PREIS', en: 'PLACEHOLDER_PRICE' },
  },
};

// Analytics: standardmäßig keine. Falls später gewünscht, nur cookieless.
export const analytics = {
  enabled: false,
};
