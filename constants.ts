
import { ContentData } from './types';

export const CONTENT: ContentData = {
  nav: [
    { id: 'features', label: "Imkoniyatlar" },
    { id: 'crm-demo', label: "Klinika Tizimi" },
    { id: 'booking-demo', label: "Navbat Olish" },
    { id: 'why-us', label: "Nega Biz?" },
  ],
  hero: {
    title: "Qog‘ozbozlik Tugadi. Klinikangiz Endi Raqamli.",
    subtitle: "Bemor kartalari, qabul ma’lumotlari va shifokor ishlari — barchasi tartibli, xavfsiz va onlayn. Navbat AI klinikadagi jarayonlarni soddalashtiradi, bemor ma’lumotlarini yo‘qolmasdan saqlaydi va shifokorlarga tezroq hamda xatosiz ishlash imkonini beradi. Endi qog‘ozlar, adashgan kartalar va tartibsizliklarga chek qo‘yiladi.",
    ctaPrimary: "Tizimni Ko‘rish",
    ctaSecondary: "Bemor Ilovasini Ko'rish",
  },
  features: {
    title: "Klinika Uchun Raqamli Yechimlar",
    subtitle: "Shifokorlar va ma'muriyat ishini yengillashtiruvchi zamonaviy vositalar.",
    items: [
      {
        title: "Elektron Bemor Kartasi",
        description: "Barcha tashriflar tarixi, tashxislar va tayinlovlar yagona xavfsiz bazada saqlanadi. Qog'oz kartalarga hojat yo'q.",
        icon: "database"
      },
      {
        title: "Klinika Boshqaruvi (CRM)",
        description: "Shifokorlar yuklamasini nazorat qilish, moliyaviy hisobotlar va xodimlar faoliyatini kuzatish imkoniyati.",
        icon: "monitor"
      },
      {
        title: "Avtomatik Eslatmalar",
        description: "Bemorlarga qabul vaqti haqida SMS eslatmalar yuborish orqali kelmay qolish holatlarini kamaytirish.",
        icon: "bell"
      },
      {
        title: "Onlayn Navbat",
        description: "Bemorlar uchun masofadan navbat olish va qabulga yozilish tizimi — navbat kutish zalidagi tartibsizlikka yechim.",
        icon: "smartphone"
      }
    ]
  },
  bookingDemo: {
    title: "Bemorlar Uchun Ilova",
    subtitle: "Bemorlaringiz uydan chiqmasdan shifokor qabuliga yozilishi mumkin. Bu navbat kutish zalidagi tirbandlikni oldini oladi.",
    departments: [
      { id: 'therapy', name: 'Terapiya', icon: 'stethoscope' },
      { id: 'dentist', name: 'Stomatologiya', icon: 'tooth' },
      { id: 'cardio', name: 'Kardiologiya', icon: 'heart' },
      { id: 'pediatric', name: 'Pediatriya', icon: 'baby' },
    ],
    doctors: {
      therapy: [
        { id: 'd1', name: 'Dr. Azimov', specialty: 'Terapevt Oliy Toifa', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=d1' },
        { id: 'd2', name: 'Dr. Karimova', specialty: 'Umumiy Amaliyot', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=d2' },
      ],
      dentist: [
        { id: 'd3', name: 'Dr. Sobirov', specialty: 'Stomatolog-Xirurg', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=d3' },
      ],
      cardio: [
        { id: 'd4', name: 'Dr. Ismoilov', specialty: 'Kardiolog', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=d4' },
      ],
      pediatric: [
        { id: 'd5', name: 'Dr. Tursunova', specialty: 'Pediatr', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=d5' },
      ]
    }
  },
  crmDemo: {
    title: "Klinika Boshqaruv Tizimi",
    subtitle: "Klinika rahbarlari va shifokorlar uchun yagona nazorat markazi. Barcha jarayonlarni oson boshqaring.",
    stats: [
      { label: "Bugungi tashriflar", value: "42", change: "+12%", isPositive: true, icon: "users" },
      { label: "Elektron kartalar", value: "1,240", change: "+85", isPositive: true, icon: "database" },
      { label: "O'rtacha qabul", value: "15 daq", change: "-5%", isPositive: true, icon: "clock" },
      { label: "Samaradorlik", value: "98%", change: "A'lo", isPositive: true, icon: "check" },
    ],
    patients: [
      { id: "P-001", name: "Sardor Rahimov", time: "09:30", status: "in-progress", department: "Terapiya", doctor: "Dr. Azimov" },
      { id: "P-002", name: "Malika Aliyeva", time: "10:00", status: "waiting", department: "Kardiologiya", doctor: "Dr. Ismoilov" },
      { id: "P-003", name: "Jasur Bek", time: "10:15", status: "waiting", department: "Stomatologiya", doctor: "Dr. Sobirov" },
      { id: "P-004", name: "Dilnoza K.", time: "11:00", status: "cancelled", department: "Terapiya", doctor: "Dr. Azimov" },
      { id: "P-005", name: "Aziz T.", time: "09:00", status: "completed", department: "Pediatriya", doctor: "Dr. Tursunova" },
    ]
  },
  whyUs: {
    title: "Nima uchun klinikalar bizni tanlaydi?",
    items: [
      { title: "Ish jarayonlari soddalashadi", description: "Qog'ozbozlik va tartibsiz navbatlar yo'qoladi. Barcha ma'lumotlar raqamlashtirilgan." },
      { title: "Bemorlar kam kutadi", description: "Aniq vaqtga belgilangan qabullar orqali kutish zallaridagi tirbandlik 40% ga kamayadi." },
      { title: "Klinikaga bo‘lgan ishonch ortadi", description: "Zamonaviy xizmat ko'rsatish tizimi mijozlarning sodiqligini va klinika nufuzini oshiradi." }
    ]
  },
  testimonials: {
    title: "",
    items: []
  }
};
