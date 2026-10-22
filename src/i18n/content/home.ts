// Seitentexte der Startseite. Entwürfe, vom Inhaber zu prüfen.
// Struktur ist für DE und EN identisch, damit beide Versionen gespiegelt bleiben.

import type { Lang } from '../ui';

export interface Problem {
  where: string;
  title: string;
  text: string;
}
export interface Finding {
  found: string;
  risk: string;
  fix: string;
}
export interface Service {
  id: 'check' | 'basis' | 'betreuung';
  name: string;
  summary: string;
  what: string[];
  result: string;
  audience: string;
  duration: string;
}
export interface Faq {
  q: string;
  a: string;
}

export interface HomeContent {
  hero: { h1: string; sub: string; micro: string };
  problem: {
    h2: string;
    intro: string;
    items: Problem[];
    figureCaption: string;
    figure: { name: string; nameNote: string; priceLabel: string; portals: string[]; priceNote: string; aiLabel: string; aiText: string };
  };
  ctaAfterProblem: string;
  findings: { h2: string; intro: string; labels: { found: string; risk: string; fix: string }; items: Finding[] };
  services: {
    h2: string;
    intro: string;
    labels: { what: string; result: string; audience: string; duration: string };
    items: Service[];
  };
  ctaAfterServices: string;
  pricing: { h2: string; off: string; offNote: string; from: string };
  about: { h2: string; name: string; role: string; bio: string[]; photoAlt: string; photoPlaceholder: string };
  faq: { h2: string; items: Faq[]; reviewNote: string };
  ctaAfterFaq: string;
  contact: { h2: string; intro: string };
}

const de: HomeContent = {
  hero: {
    h1: 'Mehr Direktbuchungen am Wörthersee',
    sub: 'Gäste wählen ihr Hotel nach dem, was sie in Google, Google Maps und KI-Assistenten sehen. Dort stehen bei vielen Häusern alte Namen und falsche Links. Wir prüfen, was Gäste über Ihr Hotel finden, und bringen es in Ordnung.',
    micro: 'Das erste Gespräch verpflichtet Sie zu nichts. PLACEHOLDER_ERSTGESPRAECH (kostenlos oder nicht, Dauer)',
  },
  problem: {
    h2: 'So sieht ein Gast Ihr Hotel, bevor er bucht',
    intro:
      'Ein Gast sucht „Hotel Wörthersee“ oder fragt einen KI-Assistenten nach einem Hotel in Velden. Er sieht ein Google-Profil, einen Preisblock und eine kurze Antwort. Ihre Website sieht er erst danach. Manchmal gar nicht.',
    items: [
      {
        where: 'Google Maps, Google-Profil',
        title: 'Ein veralteter Name',
        text: 'Das Haus heißt seit Jahren anders. In Google Maps steht noch der alte Name oder der Zusatz eines früheren Betreibers. Gäste finden den neuen Namen nicht oder zweifeln, ob sie beim richtigen Hotel sind.',
      },
      {
        where: 'Google-Suche, Preisblock',
        title: 'Keine offizielle Website im Preisblock',
        text: 'Neben dem Hotel zeigt Google Preise von Buchungsportalen. Ihre eigene Website fehlt in dieser Liste. Wer dort klickt, bucht über ein Portal. Sie zahlen Provision.',
      },
      {
        where: 'Google, KI-Assistenten',
        title: 'Keine Hotel-Auszeichnung auf der Website',
        text: 'Die Website sagt Maschinen nicht, dass sie zu einem Hotel gehört. Adresse, Zimmer, Ausstattung und Check-in-Zeiten stehen nur im Fließtext. Suchmaschinen und KI-Assistenten müssen raten.',
      },
      {
        where: 'Google in anderen Sprachen',
        title: 'Fehlende Sprachversionen',
        text: 'Die Website gibt es nur auf Deutsch. Oder die englische Seite ist eine automatische Übersetzung ohne eigene Adresse. Wer auf Englisch oder Italienisch sucht, landet bei Portalen. Die haben jede Sprache.',
      },
    ],
    figureCaption: 'Schematische Darstellung. Kein echtes Hotel.',
    figure: {
      name: 'Hotel Seeblick',
      nameNote: 'alter Name',
      priceLabel: 'Preise',
      portals: ['Buchungsportal A', 'Buchungsportal B', 'Buchungsportal C'],
      priceNote: 'Offizielle Website fehlt',
      aiLabel: 'KI-Assistent',
      aiText: '„Zu diesem Hotel habe ich wenige gesicherte Angaben …“',
    },
  },
  ctaAfterProblem: 'Wie sieht es bei Ihrem Hotel aus? Wir schauen gemeinsam nach.',
  findings: {
    h2: 'Was wir bei anderen Hotels gefunden haben',
    intro: 'Anonymisierte Beispiele. Namen und Orte sind entfernt.',
    labels: { found: 'Gefunden', risk: 'Folge', fix: 'Behebung' },
    items: [
      { found: 'PLACEHOLDER_BEFUND_1', risk: 'PLACEHOLDER_FOLGE_1', fix: 'PLACEHOLDER_BEHEBUNG_1' },
      { found: 'PLACEHOLDER_BEFUND_2', risk: 'PLACEHOLDER_FOLGE_2', fix: 'PLACEHOLDER_BEHEBUNG_2' },
      { found: 'PLACEHOLDER_BEFUND_3', risk: 'PLACEHOLDER_FOLGE_3', fix: 'PLACEHOLDER_BEHEBUNG_3' },
    ],
  },
  services: {
    h2: 'Drei Stufen. Nach jeder entscheiden Sie neu.',
    intro: 'Jede Stufe baut auf der vorigen auf. Nach dem Check wissen Sie, was zu tun ist. Sie können es auch selbst umsetzen.',
    labels: { what: 'Was wir tun', result: 'Was Ihr Hotel bekommt', audience: 'Für wen', duration: 'Dauer' },
    items: [
      {
        id: 'check',
        name: 'Sichtbarkeitscheck',
        summary: 'Prüfung, wie Gäste Ihr Hotel online sehen.',
        what: [
          'Website',
          'Google-Unternehmensprofil',
          'Preisblock in Google',
          'Bewertungen',
          'Antworten von KI-Assistenten über Ihr Haus',
        ],
        result: 'Einen Bericht mit 8 bis 10 Seiten. Jeder Befund hat eine Priorität.',
        audience: 'Hotels, die wissen wollen, wo sie stehen, bevor sie etwas ändern.',
        duration: 'PLACEHOLDER_DAUER_CHECK',
      },
      {
        id: 'basis',
        name: 'Basis-Optimierung',
        summary: 'Umsetzung der Befunde aus dem Check.',
        what: [
          'Google-Profil und Namen korrigieren',
          'Hotel-Auszeichnung (Schema.org) einbauen',
          'Sprachversionen richtig verknüpfen',
          'Links zur Direktbuchung setzen',
          'Technische Fehler beheben, etwa fehlendes HTTPS',
        ],
        result: 'Die gefundenen Fehler sind behoben. Fixpreis, vorab vereinbart.',
        audience: 'Hotels nach dem Sichtbarkeitscheck.',
        duration: '3 bis 6 Wochen',
      },
      {
        id: 'betreuung',
        name: 'Laufende Betreuung',
        summary: 'Pflege, damit der Stand hält.',
        what: [
          'Antworten auf Bewertungen',
          'Inhalte aktuell halten',
          'Monitoring von Profil, Preisblock und KI-Antworten',
        ],
        result: 'Jeden Monat einen Bericht mit 1 bis 2 Seiten. Er vergleicht den Stand mit der ersten Prüfung.',
        audience: 'Hotels, die ihre Sichtbarkeit dauerhaft pflegen wollen, ohne eigene Person dafür.',
        duration: 'Monatlich. PLACEHOLDER_LAUFZEIT',
      },
    ],
  },
  ctaAfterServices: 'Der erste Schritt ist ein kurzes Gespräch über Ihr Haus.',
  pricing: {
    h2: 'Preise',
    off: 'Preise nach kurzem Gespräch',
    offNote: 'Der Aufwand hängt von Ihrem Haus und der Ausgangslage ab. Die Basis-Optimierung hat einen Fixpreis.',
    from: 'Preis',
  },
  about: {
    h2: 'Über mich',
    name: 'PLACEHOLDER_NAME',
    role: 'PLACEHOLDER_ROLLE',
    bio: ['PLACEHOLDER_BIOGRAFIE_ABSATZ_1', 'PLACEHOLDER_BIOGRAFIE_ABSATZ_2'],
    photoAlt: 'PLACEHOLDER_FOTO_ALT',
    photoPlaceholder: 'PLACEHOLDER_FOTO (eigenes Foto, kein Stockbild)',
  },
  faq: {
    h2: 'Häufige Fragen',
    reviewNote: 'PLACEHOLDER_REVIEW',
    items: [
      {
        q: 'Wie viel Zeit kostet das unser Team?',
        a: 'Für den Sichtbarkeitscheck brauchen wir ein Gespräch mit Ihnen. Den Rest erledigen wir. Änderungen bei der Umsetzung stimmen wir vorher mit Ihnen ab. PLACEHOLDER_ZEITAUFWAND',
      },
      {
        q: 'Brauchen Sie Zugang zu unserer Website?',
        a: 'Für den Check nicht. Wir prüfen, was öffentlich sichtbar ist. Für die Umsetzung brauchen wir Zugang zum Redaktionssystem oder zu der Person, die Ihre Website betreut. Beim Google-Profil reicht eine Freigabe als Verwalter. Inhaber bleiben Sie.',
      },
      {
        q: 'Was ist mit unserem PMS und der Booking Engine?',
        a: 'In Ihr PMS greifen wir nicht ein. Bei der Booking Engine prüfen wir, ob Links aus Google und von Ihrer Website richtig ankommen. Änderungen an der Booking Engine selbst macht Ihr Anbieter. Wir liefern ihm eine genaue Beschreibung.',
      },
      {
        q: 'Unsere Website hat eine andere Agentur gebaut. Ist das ein Problem?',
        a: 'Nein. Wir arbeiten mit dem, was da ist. Betreut Ihre Agentur die Website, bekommt sie von uns eine Liste der Änderungen. Oder wir setzen sie nach Absprache selbst um.',
      },
      {
        q: 'Wie messen Sie das Ergebnis?',
        a: 'Im Check halten wir den Ausgangsstand fest: Profil, Preisblock, Auszeichnung, Sprachversionen und Antworten von KI-Assistenten. Danach vergleichen wir jeden Monat mit diesem Stand. Klicks und Anfragen sehen Sie im Google-Profil und in der Google Search Console. Eine bestimmte Zahl an Buchungen versprechen wir nicht.',
      },
      {
        q: 'Was kostet das?',
        a: 'Das hängt von Ihrem Haus und der Ausgangslage ab. Nach einem kurzen Gespräch nennen wir Ihnen den Preis. Die Basis-Optimierung hat einen Fixpreis.',
      },
    ],
  },
  ctaAfterFaq: 'Ihre Frage war nicht dabei? Fragen Sie uns direkt.',
  contact: {
    h2: 'Termin vereinbaren',
    intro: 'Schreiben Sie uns, um welches Hotel es geht. Wir melden uns mit Terminvorschlägen. PLACEHOLDER_ANTWORTZEIT',
  },
};

const en: HomeContent = {
  hero: {
    h1: 'More direct bookings on Lake Wörthersee',
    sub: 'Guests choose their hotel based on what they see in Google, Google Maps and AI assistants. For many hotels, that means old names and wrong links. We check what guests find about your hotel and put it right.',
    micro: 'The first conversation commits you to nothing. PLACEHOLDER_FIRST_CALL (free or not, length)',
  },
  problem: {
    h2: 'How a guest sees your hotel before booking',
    intro:
      'A guest searches for “hotel Wörthersee” or asks an AI assistant for a hotel in Velden. They see a Google profile, a price block and a short answer. Your website comes later. Sometimes not at all.',
    items: [
      {
        where: 'Google Maps, Google profile',
        title: 'An outdated name',
        text: 'The hotel was renamed years ago. Google Maps still shows the old name or a label from a previous operator. Guests cannot find the new name, or wonder if they have the right hotel.',
      },
      {
        where: 'Google search, price block',
        title: 'No official website in the price block',
        text: 'Next to the hotel, Google shows prices from booking portals. Your own website is missing from that list. Whoever clicks there books through a portal. You pay commission.',
      },
      {
        where: 'Google, AI assistants',
        title: 'No hotel markup on the website',
        text: 'The website does not tell machines that it belongs to a hotel. Address, rooms, facilities and check-in times only appear in running text. Search engines and AI assistants have to guess.',
      },
      {
        where: 'Google in other languages',
        title: 'Missing language versions',
        text: 'The website exists only in German. Or the English page is a machine translation without its own address. People searching in English or Italian end up on portals. Portals have every language.',
      },
    ],
    figureCaption: 'Schematic illustration. Not a real hotel.',
    figure: {
      name: 'Hotel Seeblick',
      nameNote: 'old name',
      priceLabel: 'Prices',
      portals: ['Booking portal A', 'Booking portal B', 'Booking portal C'],
      priceNote: 'Official website missing',
      aiLabel: 'AI assistant',
      aiText: '“I have little reliable information about this hotel …”',
    },
  },
  ctaAfterProblem: 'What does your hotel look like? Let us look together.',
  findings: {
    h2: 'What we found at other hotels',
    intro: 'Anonymised examples. Names and places removed.',
    labels: { found: 'Found', risk: 'Consequence', fix: 'Fix' },
    items: [
      { found: 'PLACEHOLDER_FINDING_1', risk: 'PLACEHOLDER_CONSEQUENCE_1', fix: 'PLACEHOLDER_FIX_1' },
      { found: 'PLACEHOLDER_FINDING_2', risk: 'PLACEHOLDER_CONSEQUENCE_2', fix: 'PLACEHOLDER_FIX_2' },
      { found: 'PLACEHOLDER_FINDING_3', risk: 'PLACEHOLDER_CONSEQUENCE_3', fix: 'PLACEHOLDER_FIX_3' },
    ],
  },
  services: {
    h2: 'Three steps. You decide again after each one.',
    intro: 'Each step builds on the one before. After the check you know what needs doing. You can also do it yourself.',
    labels: { what: 'What we do', result: 'What your hotel gets', audience: 'For whom', duration: 'Duration' },
    items: [
      {
        id: 'check',
        name: 'Visibility check',
        summary: 'A review of how guests see your hotel online.',
        what: ['Website', 'Google Business Profile', 'Price block in Google', 'Reviews', 'What AI assistants say about your hotel'],
        result: 'A report of 8 to 10 pages. Every finding has a priority.',
        audience: 'Hotels that want to know where they stand before changing anything.',
        duration: 'PLACEHOLDER_DURATION_CHECK',
      },
      {
        id: 'basis',
        name: 'Basic optimisation',
        summary: 'Implementing the findings from the check.',
        what: [
          'Correct the Google profile and names',
          'Add hotel markup (Schema.org)',
          'Link language versions correctly',
          'Set direct booking links',
          'Fix technical errors such as missing HTTPS',
        ],
        result: 'The errors found are fixed. Fixed price, agreed in advance.',
        audience: 'Hotels after the visibility check.',
        duration: '3 to 6 weeks',
      },
      {
        id: 'betreuung',
        name: 'Ongoing support',
        summary: 'Upkeep so the results last.',
        what: ['Replies to reviews', 'Keeping content current', 'Monitoring profile, price block and AI answers'],
        result: 'A monthly report of 1 to 2 pages. It compares the current state with the first check.',
        audience: 'Hotels that want to maintain their visibility without a dedicated person.',
        duration: 'Monthly. PLACEHOLDER_TERM',
      },
    ],
  },
  ctaAfterServices: 'The first step is a short conversation about your hotel.',
  pricing: {
    h2: 'Prices',
    off: 'Prices after a short conversation',
    offNote: 'The effort depends on your hotel and its starting point. Basic optimisation has a fixed price.',
    from: 'Price',
  },
  about: {
    h2: 'About me',
    name: 'PLACEHOLDER_NAME',
    role: 'PLACEHOLDER_ROLE',
    bio: ['PLACEHOLDER_BIOGRAPHY_PARAGRAPH_1', 'PLACEHOLDER_BIOGRAPHY_PARAGRAPH_2'],
    photoAlt: 'PLACEHOLDER_PHOTO_ALT',
    photoPlaceholder: 'PLACEHOLDER_PHOTO (own photo, no stock image)',
  },
  faq: {
    h2: 'Frequently asked questions',
    reviewNote: 'PLACEHOLDER_REVIEW',
    items: [
      {
        q: 'How much of our team’s time does this take?',
        a: 'For the visibility check we need one conversation with you. We do the rest. During implementation we agree changes with you first. PLACEHOLDER_TIME_EFFORT',
      },
      {
        q: 'Do you need access to our website?',
        a: 'Not for the check. We review what is publicly visible. For implementation we need access to the content management system, or to the person who looks after your website. For the Google profile, manager access is enough. You remain the owner.',
      },
      {
        q: 'What about our PMS and booking engine?',
        a: 'We do not touch your PMS. For the booking engine, we check that links from Google and from your website arrive correctly. Changes to the booking engine itself are made by your provider. We give them a precise description.',
      },
      {
        q: 'Another agency built our website. Is that a problem?',
        a: 'No. We work with what is there. If your agency maintains the website, we send them a list of changes. Or we make the changes ourselves, by agreement.',
      },
      {
        q: 'How do you measure the result?',
        a: 'In the check we record the starting point: profile, price block, markup, language versions and AI assistant answers. Each month we compare against it. You can see clicks and enquiries in your Google profile and in Google Search Console. We do not promise a particular number of bookings.',
      },
      {
        q: 'What does it cost?',
        a: 'That depends on your hotel and its starting point. After a short conversation we tell you the price. Basic optimisation has a fixed price.',
      },
    ],
  },
  ctaAfterFaq: 'Your question was not here? Ask us directly.',
  contact: {
    h2: 'Book a call',
    intro: 'Tell us which hotel it is about. We will reply with suggested times. PLACEHOLDER_RESPONSE_TIME',
  },
};

export const home: Record<Lang, HomeContent> = { de, en };
