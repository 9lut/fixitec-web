// แพ็กเกจรายเดือน + ตารางเทียบฟีเจอร์ + บริการเสริม — แก้ราคา / ฟีเจอร์ได้ที่นี่
// price: ใส่ตัวเลข (บาท/เดือน) เมื่อมีราคาจริง ถ้าเป็น null จะแสดง "ติดต่อสอบถาม"

export interface Package {
  id: string;
  name: string;
  tagline: string;
  devices: string;
  price: number | null;
  featured?: boolean;
  highlights: string[];
}

export const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic Care',
    tagline: 'สำนักงานขนาดเล็ก',
    devices: 'ไม่เกิน 10 เครื่อง',
    price: null,
    highlights: ['Remote Support ในเวลาทำการ', 'On-site 1 ครั้ง / เดือน', 'คอมพิวเตอร์ Printer Wi-Fi', 'Antivirus และอัปเดตระบบ', 'รายงานรายเดือน'],
  },
  {
    id: 'business',
    name: 'Business Care',
    tagline: 'องค์กรที่ระบบต้องพร้อมทุกวัน',
    devices: '11 – 30 เครื่อง',
    price: null,
    featured: true,
    highlights: ['ทุกอย่างใน Basic Care', 'On-site 2 ครั้ง / เดือน', 'Server / NAS และ Backup', 'กล้องวงจรปิด (CCTV)', 'IT Care Portal', 'ทบทวนแผน IT รายไตรมาส'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Care',
    tagline: 'หลายสาขา / ระบบซับซ้อน',
    devices: '30 เครื่องขึ้นไป',
    price: null,
    highlights: ['ทุกอย่างใน Business Care', 'On-site ตามตกลง / ประจำบางวัน', 'เครือข่ายหลายสาขา + VPN', 'นโยบายความปลอดภัยและสิทธิ์', 'ที่ปรึกษาวางงบ IT ประจำปี'],
  },
];

/** ตารางเทียบฟีเจอร์: true = มี, false = ไม่มี, string = รายละเอียด */
export const featureMatrix: { group: string; rows: { label: string; values: [boolean | string, boolean | string, boolean | string] }[] }[] = [
  {
    group: 'การดูแล',
    rows: [
      { label: 'Remote Support', values: ['เวลาทำการ', 'เวลาทำการ', 'เวลาทำการ + ขยายได้'] },
      { label: 'On-site ตรวจเชิงป้องกัน', values: ['1 ครั้ง / เดือน', '2 ครั้ง / เดือน', 'ตามตกลง'] },
      { label: 'นัดเข้าแก้ไขเร่งด่วน', values: [true, true, true] },
      { label: 'IT Care Portal', values: [false, true, true] },
    ],
  },
  {
    group: 'ระบบที่ครอบคลุม',
    rows: [
      { label: 'คอมพิวเตอร์ / Printer', values: [true, true, true] },
      { label: 'Network / Wi-Fi', values: [true, true, true] },
      { label: 'Software / อีเมล / License', values: [true, true, true] },
      { label: 'Server / NAS / Backup', values: [false, true, true] },
      { label: 'กล้องวงจรปิด (CCTV)', values: [false, true, true] },
      { label: 'เครือข่ายหลายสาขา / VPN', values: [false, false, true] },
    ],
  },
  {
    group: 'รายงานและวางแผน',
    rows: [
      { label: 'ทะเบียนอุปกรณ์', values: [true, true, true] },
      { label: 'รายงานรายเดือน', values: [true, true, true] },
      { label: 'ทบทวนแผน IT', values: [false, 'รายไตรมาส', 'รายเดือน'] },
      { label: 'วางงบประมาณ IT ประจำปี', values: [false, false, true] },
    ],
  },
];

export const addons = [
  { icon: 'mdi:clock-plus-outline', title: 'ดูแลนอกเวลาทำการ', desc: 'ขยายเวลารับเรื่องช่วงเย็นและวันหยุด' },
  { icon: 'mdi:lan', title: 'เดินสายแลน / ติดตั้งระบบใหม่', desc: 'ประเมินและเสนอราคาเป็นโปรเจกต์' },
  { icon: 'mdi:laptop', title: 'จัดหาอุปกรณ์ IT', desc: 'แนะนำสเปกและจัดซื้อให้คุ้มค่า' },
  { icon: 'mdi:code-braces', title: 'พัฒนาซอฟต์แวร์', desc: 'ระบบเฉพาะองค์กรโดยทีม SUCASOFT' },
];

export const packageNote = 'ราคาประเมินจากจำนวนอุปกรณ์และขอบเขตงานจริง สำรวจระบบและเสนอราคาฟรี';

/** เทียบจ้างพนักงาน IT ประจำ vs FIXITEC */
export const inHouseCompare = [
  { topic: 'ค่าใช้จ่าย', inHouse: 'เงินเดือน + สวัสดิการ + ประกันสังคม ทุกเดือน', fixitec: 'ค่าบริการรายเดือนคงที่ คาดการณ์ได้' },
  { topic: 'ความเชี่ยวชาญ', inHouse: 'จำกัดตามความรู้ของคนเดียว', fixitec: 'ทีมหลายด้าน ทั้งคอมฯ Server Network CCTV' },
  { topic: 'ความต่อเนื่อง', inHouse: 'ลาป่วย / ลาออก = ไม่มีคนดูแล', fixitec: 'มีทีมสำรอง ข้อมูลระบบอยู่ในทะเบียน' },
  { topic: 'การติดตามงาน', inHouse: 'ขึ้นกับการรายงานของแต่ละคน', fixitec: 'ทุกเคสอยู่ใน IT Care Portal' },
  { topic: 'การวางแผน', inHouse: 'แก้ปัญหาเฉพาะหน้า', fixitec: 'รายงานรายเดือน + แผนอัปเกรดล่วงหน้า' },
];
