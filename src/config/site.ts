// ข้อมูลเว็บ + ช่องทางติดต่อ + บริษัท + เมนู — แก้ที่นี่ที่เดียว มีผลทั้งเว็บ (รวม SEO / JSON-LD)

// TODO: ยืนยันโดเมนจริงก่อนขึ้น production (ใช้ทำ canonical, sitemap, og:url)
export const SITE_URL = 'https://fixitec.sucasoft.com';
export const SITE_NAME = 'FIXITEC';
export const SITE_SLOGAN = 'We Care Beyond Tech';

export const contact = {
  phone: {
    display: '093-597-5101',
    href: 'tel:+66935975101',
    intl: '+66-93-597-5101',
  },
  line: {
    id: 'Hadeesoft',
    // TODO: ถ้าเป็น LINE OA ให้เปลี่ยนเป็น https://line.me/R/ti/p/@<id>
    href: 'https://line.me/ti/p/~Hadeesoft',
  },
  email: {
    display: 'hadeesoft@gmail.com',
    href: 'mailto:hadeesoft@gmail.com',
  },
  // TODO: ยืนยันเวลาทำการ
  hours: [
    { days: 'จันทร์ – ศุกร์', time: '08:30 – 17:30 น.' },
    { days: 'เสาร์', time: '09:00 – 12:00 น. (นัดหมายล่วงหน้า)' },
  ],
} as const;

// TODO: ใส่ที่อยู่สำนักงานจริง + พิกัด เพื่อให้แผนที่ปักหมุดถูกจุด
export const location = {
  address: 'อำเภอหาดใหญ่ จังหวัดสงขลา 90110',
  mapQuery: 'Hat Yai, Songkhla, Thailand',
  mapUrl: 'https://maps.google.com/?q=Hat+Yai,+Songkhla',
  geo: { lat: 7.0086, lng: 100.4747 },
  onsiteArea: ['หาดใหญ่', 'เมืองสงขลา', 'พื้นที่ใกล้เคียงในจังหวัดสงขลา'],
  remoteArea: 'ทั่วประเทศ',
} as const;

export const company = {
  th: 'บริษัท ซูก้าซอฟต์ จำกัด',
  en: 'SUCASOFT SOFTWARE CO., LTD.',
  brand: 'SUCASOFT',
  url: 'https://sucasoft.com',
  registration: '0955563000259',
  address: {
    locality: 'Hat Yai',
    region: 'Songkhla',
    postalCode: '90110',
    country: 'TH',
  },
} as const;

/** เมนูหลัก — `services: true` = เปิดเมนูย่อยรายการบริการ */
export const nav = [
  { label: 'บริการ', href: '/services/', services: true },
  { label: 'แพ็กเกจ', href: '/packages/' },
  { label: 'ขั้นตอนการทำงาน', href: '/how-it-works/' },
  { label: 'เกี่ยวกับเรา', href: '/about/' },
  { label: 'คำถามที่พบบ่อย', href: '/faq/' },
  { label: 'ติดต่อ', href: '/contact/' },
] as const;
