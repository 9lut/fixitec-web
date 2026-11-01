// FIXITEC duotone vector icons (48×48). Strokes use currentColor; elements with class="a"
// are filled with --fx-accent (default brand yellow), so one icon works on light and dark backgrounds.
// เพิ่มไอคอนใหม่: เพิ่ม key + markup ด้านล่าง แล้วใช้ <FxIcon name="key" />

export const fxIcons = {
  computer: `
    <rect class="a" x="6" y="8" width="36" height="25" rx="3"/>
    <path d="M6 27h36"/>
    <path d="M14 15l4 4-4 4M22 23h6"/>
    <path d="M20 33l-1.5 6M28 33l1.5 6M14 39h20"/>`,
  server: `
    <rect x="8" y="5" width="32" height="11" rx="2.5"/>
    <rect class="a" x="8" y="18.5" width="32" height="11" rx="2.5"/>
    <rect x="8" y="32" width="32" height="11" rx="2.5"/>
    <path d="M14 10.5h.01M14 24h.01M14 37.5h.01" stroke-width="4"/>
    <path d="M26 10.5h8M26 24h8M26 37.5h8"/>`,
  'network-wifi': `
    <path class="a" stroke="none" d="M24 38 9.5 21.5a21 21 0 0 1 29 0Z"/>
    <path d="M6 18a26 26 0 0 1 36 0"/>
    <path d="M12 24.5a17 17 0 0 1 24 0"/>
    <path d="M18 31a8.5 8.5 0 0 1 12 0"/>
    <circle cx="24" cy="38" r="2.6" fill="currentColor"/>`,
  cctv: `
    <path class="a" d="M7 12.5 33 19l-2.6 10L4.4 22.5Z"/>
    <path d="M33 19l7.5 1.7-2 7.4-8.1-2.1"/>
    <path d="M13 25l-2.5 9H5M5 30v9"/>
    <circle cx="12" cy="17.5" r="1.2" fill="currentColor"/>`,
  software: `
    <rect x="5" y="7" width="38" height="32" rx="3"/>
    <path d="M5 15h38"/>
    <path d="M10.5 11h.01M15 11h.01" stroke-width="3.5"/>
    <circle class="a" cx="24" cy="27" r="6.5"/>
    <circle cx="24" cy="27" r="2"/>
    <path d="M24 17.5v2.5M24 34v2.5M14.5 27H17M31 27h2.5M17.3 20.3l1.8 1.8M28.9 31.9l1.8 1.8M17.3 33.7l1.8-1.8M28.9 22.1l1.8-1.8"/>`,
  'remote-support': `
    <rect class="a" x="9" y="8" width="30" height="21" rx="2.5"/>
    <path d="M4 36h40l-3.5-7h-33Z"/>
    <path d="M20 13.5l9.5 5-4.2 1.4 2.6 4.1-2.1 1.3-2.6-4.1-3.2 2.8Z" fill="currentColor"/>`,
  'onsite-service': `
    <rect class="a" x="5" y="17" width="38" height="24" rx="3"/>
    <path d="M17 17v-4a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 31 13v4"/>
    <path d="M5 27h38"/>
    <rect x="20.5" y="24" width="7" height="6.5" rx="1.2" fill="#fff"/>`,
  'it-security': `
    <path class="a" d="M24 4.5 39 10.5v11c0 10.2-6.4 17.4-15 21-8.6-3.6-15-10.8-15-21v-11Z"/>
    <path d="M16.5 24l5.5 5.5 10-11"/>`,
  'it-care-portal': `
    <rect x="5" y="7" width="38" height="33" rx="3"/>
    <path d="M5 15h38M16 15v25"/>
    <rect class="a" x="21" y="20" width="17" height="8" rx="1.5"/>
    <path d="M21 34h17M9.5 20.5h2.5M9.5 26h2.5M9.5 31.5h2.5"/>`,
  'monthly-report': `
    <path d="M11 4.5h18l9 9v30H11Z"/>
    <path d="M29 4.5v9h9"/>
    <rect class="a" x="16" y="30" width="4.5" height="8.5" rx="1"/>
    <rect class="a" x="22.3" y="23" width="4.5" height="15.5" rx="1"/>
    <rect class="a" x="28.6" y="27" width="4.5" height="11.5" rx="1"/>
    <path d="M16 15h8"/>`,
} as const;

export type FxIconName = keyof typeof fxIcons;
