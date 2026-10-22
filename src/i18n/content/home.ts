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

export const home: Partial<Record<Lang, HomeContent>> = { de };
