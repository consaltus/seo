import { prices } from './site';

export const services = [
  {
    id: 'check',
    num: '01',
    name: 'Sichtbarkeitscheck',
    format: 'Kostenlos · in 5 Werktagen',
    desc: 'Wir prüfen, was Gäste in Google, auf der Karte und in KI-Antworten über Ihr Hotel sehen.',
    price: prices.check,
    free: true,
    listLabel: 'Was wir prüfen',
    list: [
      'Name, Adresse und Link im Google-Profil',
      'Ob Ihre Website im Preisblock erscheint',
      'Hotel-Auszeichnung auf der Website',
      'Sprachversionen',
      'Was ChatGPT, Claude und Gemini über Ihr Hotel sagen',
    ],
    result: 'Einen Kurzbericht mit den wichtigsten Befunden und ein Gespräch von 30 Minuten dazu. Unverbindlich.',
    who: 'Für jedes Hotel, das wissen will, wo es steht.',
    cta: 'Kostenlosen Check anfragen',
  },
  {
    id: 'basis',
    num: '02',
    name: 'Basis-Optimierung',
    format: 'Festpreis nach dem Check · 3 bis 6 Wochen',
    desc: 'Wir beheben, was der Check gefunden hat.',
    price: prices.basis,
    free: false,
    listLabel: 'Was wir umsetzen',
    list: [
      'Google-Profil: Name, Link, Fotos, Angaben',
      'Hotel-Auszeichnung auf der Website',
      'Eigene Seiten auf Englisch und Italienisch',
      'Direktbuchungslinks an den richtigen Stellen',
      'Technische Fehler wie fehlendes HTTPS',
    ],
    result: 'Website und Profile, die Gästen und Suchmaschinen das Richtige zeigen.',
    who: 'Nach dem Check, wenn Sie die Fehler beheben lassen wollen.',
    cta: 'Anfragen',
  },
  {
    id: 'betreuung',
    num: '03',
    name: 'Laufende Betreuung',
    format: 'Monatlich kündbar',
    desc: 'Wir halten alles aktuell und beantworten Bewertungen, damit Sie es nicht am Abend tun müssen.',
    price: prices.betreuung,
    free: false,
    listLabel: 'Was dazugehört',
    list: [
      'Antworten auf Bewertungen',
      'Aktuelle Angaben in Google und auf der Website',
      'Monatlicher Blick auf KI-Antworten',
      'Kurzer Bericht mit Vergleich zum ersten Check',
    ],
    result: 'Ein Thema weniger im Alltag und einen Bericht pro Monat.',
    who: 'Für Hotels, die das Thema abgeben wollen.',
    cta: 'Anfragen',
  },
];

export const faq = [
  {
    icon: 'euro',
    q: 'Was kostet das?',
    a: 'Der Sichtbarkeitscheck ist kostenlos und unverbindlich. Die Basis-Optimierung kostet ab 490 €, den genauen Festpreis nennen wir nach dem Check, bevor Sie etwas beauftragen. Die Betreuung kostet ab 249 € pro Monat und ist monatlich kündbar.',
  },
  {
    icon: 'clock',
    q: 'Wie viel Zeit kostet uns das?',
    a: 'Für den Check brauchen wir etwa 30 Minuten mit Ihnen. Den Rest erledigen wir. Bei der Umsetzung melden wir uns nur, wenn wir eine Entscheidung oder einen Zugang von Ihnen brauchen.',
  },
  {
    icon: 'chart',
    q: 'Garantieren Sie mehr Buchungen?',
    a: 'Nein. Wir sorgen dafür, dass Gäste in Google, auf der Karte und in KI-Antworten korrekte Angaben über Ihr Hotel finden. Erste Veränderungen sehen Sie meist nach zwei bis drei Monaten, im monatlichen Bericht.',
  },
  {
    icon: 'code',
    q: 'Unsere Website hat eine Agentur gebaut. Ist das ein Problem?',
    a: 'Nein. Wir ändern nur, was für Google und KI-Assistenten nötig ist. Wenn Sie möchten, stimmen wir uns direkt mit Ihrer Agentur ab.',
  },
  {
    icon: 'key',
    q: 'Brauchen Sie Zugang zu Website und Google-Profil?',
    a: 'Für den Check nicht, dafür reichen öffentliche Angaben. Für die Umsetzung brauchen wir Zugang zum Google-Profil und zur Website, oder wir arbeiten mit Ihrer Agentur.',
  },
  {
    icon: 'lock',
    q: 'Was passiert mit unseren Daten?',
    a: 'Für den Check nutzen wir nur öffentlich sichtbare Informationen. Zugänge, die Sie uns später geben, verwenden wir nur für die vereinbarte Arbeit.',
  },
];
