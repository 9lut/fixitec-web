import { SITE_URL } from '../config/site';
import { serviceHref, type Service } from '../data/services';

const abs = (href: string) => new URL(href, SITE_URL).toString();

export interface Crumb {
  name: string;
  href: string;
}

/** BreadcrumbList JSON-LD node (first crumb = home) */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

/** FAQPage JSON-LD node */
export function faqSchema(items: { q: string; a: string }[], pageHref: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(pageHref)}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Single Service node for a detail page */
export function serviceSchema(s: Service) {
  return {
    '@type': 'Service',
    '@id': `${abs(serviceHref(s.slug))}#service`,
    name: s.title,
    description: s.seoDesc,
    url: abs(serviceHref(s.slug)),
    serviceType: 'IT Support',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'Thailand' },
  };
}

/** OfferCatalog of every service, provided by the organization */
export function serviceCatalogSchema(name: string, services: Service[]) {
  return {
    '@type': 'OfferCatalog',
    '@id': `${SITE_URL}/#services`,
    name,
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.summary,
        url: abs(serviceHref(s.slug)),
        provider: { '@id': `${SITE_URL}/#organization` },
      },
    })),
  };
}
