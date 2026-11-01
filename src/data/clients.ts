// ลูกค้าที่ใช้บริการ — ส่วน "ลูกค้าที่ไว้วางใจ FIXITEC" (หน้าแรก + เกี่ยวกับเรา)
//
// 📁 โลโก้: วางไฟล์ที่ public/images/clients/ (.svg / .webp / .png / .jpg)
//    ทุกไฟล์ในโฟลเดอร์จะแสดงอัตโนมัติตอน build (เรียงตามรายการ clients ก่อน ที่เหลือเรียงตามชื่อไฟล์)
//    แนะนำ: พื้นโปร่งใส สูงประมาณ 120px
//
// ⚠️ ต้องได้รับอนุญาตจากลูกค้าก่อนแสดงโลโก้ / คำรีวิว บนเว็บไซต์
import type { FxIconName } from '../icons/fx';

export interface ClientMeta {
  /** ชื่อไฟล์ใน public/images/clients/ เช่น 'abc-company.png' */
  file: string;
  /** ชื่อลูกค้า (ใช้เป็น alt สำหรับ SEO / ผู้พิการทางสายตา) */
  name: string;
}

export const clients: ClientMeta[] = [
  // { file: 'abc-company.png', name: 'บริษัท เอบีซี จำกัด' },
];

/** ระหว่างยังไม่มีโลโก้จริง แสดงช่องโลโก้ตัวอย่าง — ปิดเองอัตโนมัติเมื่อมีไฟล์ในโฟลเดอร์ */
export const logoPreview = { enabled: true, count: 10 };

export interface Testimonial {
  quote: string;
  /** ชื่อผู้ให้รีวิว หรือ ตำแหน่ง (ถ้าไม่ต้องการเปิดเผยชื่อ) */
  author: string;
  company: string;
  industry: string;
  /** บริการที่ใช้ (แสดงเป็นไอคอน) */
  services: FxIconName[];
  /** true = ข้อความตัวอย่าง จะแสดงป้าย "ตัวอย่าง" — เปลี่ยนเป็นรีวิวจริงแล้วลบ field นี้ออก */
  sample?: boolean;
}

// TODO: แทนที่ด้วยรีวิวจริงจากลูกค้า (ได้รับอนุญาตแล้ว)
export const testimonials: Testimonial[] = [
  {
    quote: 'ก่อนหน้านี้เน็ตหลุดเกือบทุกวัน ต้องโทรตามช่างเอง ตอนนี้แจ้งทาง LINE แล้วทีมรีโมตเข้ามาแก้ได้ทันที ทุกเดือนมีรายงานสรุปให้ผู้บริหารดู',
    author: 'ผู้จัดการสำนักงาน',
    company: 'สำนักงานบัญชี',
    industry: 'สำนักงาน · 18 เครื่อง',
    services: ['network-wifi', 'remote-support', 'monthly-report'],
    sample: true,
  },
  {
    quote: 'ข้อมูลคนไข้สำคัญมาก FIXITEC ตั้งระบบ Backup และสิทธิ์การเข้าถึงให้ใหม่ทั้งหมด มีการทดสอบกู้คืนข้อมูลให้เห็นจริง ทำให้มั่นใจขึ้นเยอะ',
    author: 'ผู้อำนวยการคลินิก',
    company: 'คลินิกเอกชน',
    industry: 'คลินิก · 2 สาขา',
    services: ['server', 'it-security', 'cctv'],
    sample: true,
  },
  {
    quote: 'คุ้มกว่าจ้างพนักงาน IT ประจำ เพราะได้ทีมที่ดูแลทั้งคอมพิวเตอร์ กล้อง และเครือข่าย มีทะเบียนอุปกรณ์ครบ รู้ว่าเครื่องไหนควรเปลี่ยนเมื่อไร',
    author: 'ฝ่ายบริหาร',
    company: 'โรงงานผลิต',
    industry: 'โรงงาน · 35 เครื่อง',
    services: ['computer', 'onsite-service', 'it-care-portal'],
    sample: true,
  },
];

/** ประเภทธุรกิจที่เหมาะกับบริการ */
export const industries = [
  { icon: 'mdi:office-building-outline', label: 'สำนักงาน / บริษัท' },
  { icon: 'mdi:hospital-box-outline', label: 'คลินิก / โรงพยาบาล' },
  { icon: 'mdi:school-outline', label: 'โรงเรียน / สถาบัน' },
  { icon: 'mdi:factory', label: 'โรงงาน / คลังสินค้า' },
  { icon: 'mdi:storefront-outline', label: 'ร้านค้า / หลายสาขา' },
  { icon: 'mdi:bed-outline', label: 'โรงแรม / ที่พัก' },
];
