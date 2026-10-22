// JSON-LD für die Startseite. Die @id der Entitäten ist in DE und EN gleich,
// damit Suchmaschinen beide Sprachversionen derselben Organisation zuordnen.

import { SITE_URL, owner, pricing } from '../config/site';
import type { HomeContent } from '../i18n/content/home';
import type { Lang } from '../i18n/ui';
import { absoluteUrl, localizedPath } from '../i18n/utils';

const id = (fragment: string) => `${SITE_URL}/#${fragment}`;
export const ORG_ID = id('organization');
export const PERSON_ID = id('owner');
export const serviceId = (s: string) => id(`service-${s}`);

export function homeSchema(lang: Lang, content: HomeContent, brandName: string) {
  const pageUrl = absoluteUrl(localizedPath('home', lang));
  const inLanguage = lang === 'de' ? 'de-AT' : 'en';

  const organization = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: brandName,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    image: `${SITE_URL}/og-default.png`,
    email: owner.email,
    telephone: owner.phone,
    founder: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: owner.street,
      postalCode: owner.postalCode,
      addressLocality: owner.city,
      addressRegion: owner.region,
      addressCountry: owner.country,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kärnten' },
      { '@type': 'Country', name: 'AT' },
    ],
    ...(owner.uid && { vatID: owner.uid }),
    knowsLanguage: ['de', 'en'],
    makesOffer: content.services.items.map((s) => ({ '@type': 'Offer', itemOffered: { '@id': serviceId(s.id) } })),
  };

  const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: owner.name,
    worksFor: { '@id': ORG_ID },
  };

  const services = content.services.items.map((s) => ({
    '@type': 'Service',
    '@id': serviceId(s.id),
    name: s.name,
    description: `${s.summary} ${s.result}`,
    serviceType: s.name,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'AdministrativeArea', name: 'Kärnten' },
    audience: { '@type': 'BusinessAudience', name: s.audience },
    inLanguage,
    ...(pricing.showPrices && {
      offers: { '@type': 'Offer', description: pricing.services[s.id][lang] },
    }),
  }));

  // FAQ-Inhalt ist sprachabhängig, daher eine @id je Seite.
  const faq = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    inLanguage,
    mainEntity: content.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const webpage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.hero.h1,
    inLanguage,
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, person, ...services, faq, webpage],
  };
}
