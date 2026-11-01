// SEO กลางของเว็บ — title / description ทุกหน้า + Organization schema
// หน้า /services/<slug>/ ใช้ seoTitle / seoDesc จาก data/services.ts
import { SITE_URL, SITE_NAME, SITE_SLOGAN, contact, company, location } from './site';

export const DEFAULT_OG_IMAGE = '/og/og-default.jpg';

export const pageSeo = {
  home: {
    title: 'IT Support Outsource ดูแลระบบ IT องค์กรรายเดือน | FIXITEC',
    description:
      'FIXITEC บริการ IT Support Outsource ดูแลคอมพิวเตอร์ Server Network Wi-Fi กล้องวงจรปิด และ Software ครบ จบ รายเดือน แทนการจ้างพนักงาน IT ประจำ Remote + On-site หาดใหญ่ สงขลา ปรึกษาฟรี',
  },
  services: {
    title: 'บริการดูแลระบบ IT องค์กร 10 ด้าน | FIXITEC',
    description:
      'รวมบริการ IT Outsource ของ FIXITEC ดูแลคอมพิวเตอร์ Server Network Wi-Fi CCTV Software พร้อม Remote Support, On-site, Security, IT Care Portal และรายงานรายเดือน',
  },
  packages: {
    title: 'แพ็กเกจ IT Outsource รายเดือน ราคาตามจำนวนเครื่อง | FIXITEC',
    description:
      'แพ็กเกจดูแลระบบ IT รายเดือน Basic, Business, Enterprise เทียบฟีเจอร์ชัดเจน คุ้มกว่าจ้างพนักงาน IT ประจำ สัญญา 12 เดือนรับฟรี IT Audit สำรวจระบบและเสนอราคาฟรี',
  },
  howItWorks: {
    title: 'ขั้นตอนการทำงาน และระดับการตอบสนอง | FIXITEC',
    description:
      'เริ่มใช้บริการ FIXITEC ใน 5 ขั้นตอน ตั้งแต่ปรึกษาฟรี สำรวจระบบ จนถึงดูแลรายเดือน พร้อมระดับความเร่งด่วนในการตอบสนอง IT Care Portal และรายงานรายเดือน',
  },
  about: {
    title: 'เกี่ยวกับ FIXITEC ทีม IT Outsource by SUCASOFT',
    description:
      'FIXITEC — We Care Beyond Tech ทีม IT Support Outsource ภายใต้ บริษัท ซูก้าซอฟต์ จำกัด ดูแลระบบ IT องค์กรแบบเชิงป้องกัน โปร่งใส ตรวจสอบได้',
  },
  faq: {
    title: 'คำถามที่พบบ่อย IT Support Outsource | FIXITEC',
    description:
      'รวมคำถามที่พบบ่อยเกี่ยวกับบริการ IT Outsource ของ FIXITEC สัญญา ราคา ค่าอะไหล่ พื้นที่ให้บริการ การแจ้งปัญหาเร่งด่วน และความปลอดภัยของข้อมูล',
  },
  contact: {
    title: 'ติดต่อ FIXITEC ปรึกษาฟรี ขอใบเสนอราคา IT Outsource',
    description:
      'ติดต่อ FIXITEC โทร 093-597-5101 LINE Hadeesoft ปรึกษาและสำรวจระบบ IT ฟรี ขอใบเสนอราคาดูแลระบบ IT องค์กรรายเดือน หาดใหญ่ สงขลา',
  },
  privacy: {
    title: 'นโยบายความเป็นส่วนตัว | FIXITEC',
    description: 'นโยบายความเป็นส่วนตัวของ FIXITEC โดย บริษัท ซูก้าซอฟต์ จำกัด การเก็บ ใช้ และคุ้มครองข้อมูลส่วนบุคคลตาม PDPA',
  },
  cookies: {
    title: 'นโยบายคุกกี้ | FIXITEC',
    description: 'นโยบายการใช้คุกกี้ของเว็บไซต์ FIXITEC ประเภทคุกกี้จากบริการภายนอก เช่น Google Maps และวิธีจัดการคุกกี้ในเบราว์เซอร์',
  },
  terms: {
    title: 'ข้อตกลงการใช้งานเว็บไซต์ | FIXITEC',
    description: 'ข้อตกลงและเงื่อนไขการใช้งานเว็บไซต์ FIXITEC โดย บริษัท ซูก้าซอฟต์ จำกัด',
  },
  notFound: {
    title: 'ไม่พบหน้าที่ค้นหา | FIXITEC',
    description: 'ไม่พบหน้าที่คุณต้องการ กลับไปหน้าแรกของ FIXITEC',
  },
} as const;

export const organizationSchema = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  slogan: SITE_SLOGAN,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-on-light.webp`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  description: pageSeo.home.description,
  telephone: contact.phone.intl,
  email: contact.email.display,
  priceRange: '฿฿',
  address: {
    '@type': 'PostalAddress',
    addressLocality: company.address.locality,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: location.geo.lat, longitude: location.geo.lng },
  hasMap: location.mapUrl,
  areaServed: [
    { '@type': 'City', name: 'Hat Yai' },
    { '@type': 'AdministrativeArea', name: 'Songkhla' },
    { '@type': 'Country', name: 'Thailand' },
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: company.brand,
    legalName: company.en,
    alternateName: company.th,
    url: company.url,
    taxID: company.registration,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contact.phone.intl,
    email: contact.email.display,
    contactType: 'customer service',
    availableLanguage: ['Thai', 'English'],
  },
  knowsAbout: [
    'IT Support Outsourcing',
    'Managed IT Services',
    'Computer Maintenance',
    'Server Administration',
    'Network and Wi-Fi',
    'CCTV',
    'Cybersecurity',
  ],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'th-TH',
};
