import { ContentData, Language } from './types';

export const CONTENT: Record<Language, ContentData> = {
  en: {
    nav: {
      problem: "Problem & Solution",
      process: "Patient Flow",
      team: "Team",
      whyUs: "Why Us",
      roadmap: "Roadmap",
      how: "Tech Stack",
      cta: "Get Started",
    },
    hero: {
      title: "NAVBAT AI",
      subtitle: "AI-Powered Queue & Appointment System for Uzbekistan's Polyclinics. Solving the waiting crisis with Voice AI and Smart Queues.",
      cta: "View Demo Process",
    },
    problemSolution: {
      title: "The Reality of Healthcare Access",
      problemTitle: "The Problem",
      problemDesc: "Millions of patients face exhausting wait times and chaotic queues every day.",
      problemPoints: [
        "Extremely long waiting times (1–3 hours)",
        "Patients must stay inside or lose their turn",
        "High risk of infection in crowded rooms",
        "Parents struggle with children",
        "People often visit the wrong doctor",
        "Receptionists overloaded with manual tasks",
        "No data on patient flow"
      ],
      solutionTitle: "The NAVBAT AI Solution",
      solutionItems: [
        "AI Symptom Checker: Talk to AI to find the right doctor",
        "Real-time Queue Tracking: Know exactly when to arrive",
        "Instant Booking: No more manual tickets",
        "Call Center Integration: AI handles phone bookings",
        "Smart Reminders: SMS/Telegram/Voice calls",
        "Load Balancing: Evenly distributes patient load",
        "Reduced Crowding: Wait from home or car"
      ],
    },
    processFlow: {
      title: "How It Works: Patient Journey",
      steps: [
        { title: "Symptom Reporting", desc: "Patient describes symptoms to AI via app or phone call.", icon: "mic" },
        { title: "Doctor Recommendation", desc: "AI identifies the correct specialist instantly.", icon: "stethoscope" },
        { title: "Booking", desc: "Patient selects a time slot via app or AI call center.", icon: "calendar" },
        { title: "Queue Management", desc: "Real-time tracking allows waiting anywhere.", icon: "users" },
        { title: "Reminders", desc: "AI sends SMS/Call reminders to prevent no-shows.", icon: "bell" },
        { title: "Clinic Dashboard", desc: "Admin tracks flow; AI optimizes doctor workload.", icon: "bar-chart" },
      ]
    },
    team: {
      title: "The Developer",
      roleLabel: "Role",
      members: [
        {
          name: "Shakhboz",
          role: "Team Lead / Full-Stack Developer",
          skills: [
            "Next.js + TSX",
            "Node.js + Express",
            "n8n Automation",
            "OpenAI API",
            "ElevenLabs Voice AI",
            "UI/UX Design",
            "System Architecture"
          ],
          links: [{ label: "GitHub", url: "#" }, { label: "LinkedIn", url: "#" }]
        }
      ],
    },
    whyUs: {
      title: "Why This Solution Works",
      points: [
        "Deep understanding of Uzbek clinic pain points",
        "Experience with Voice AI (ElevenLabs) for call centers",
        "Strong Full-Stack & Automation (n8n) skills",
        "UX designed specifically for parents and seniors",
        "Real, practical solution for a national urgency"
      ],
    },
    roadmap: {
      title: "Project Roadmap",
      stages: [
        { phase: "Idea", title: "Concept & Research", description: "Analyze clinic pain points, design workflows, study patient behavior." },
        { phase: "Prototype", title: "Core AI Development", description: "AI symptom checker (Voice/Text), queue logic, demo call center." },
        { phase: "MVP", title: "System Build", description: "Full web/mobile app, Admin Dashboard, ElevenLabs integration, SMS notifications." },
        { phase: "Launch", title: "Pilot & Scale", description: "Test in 1–2 polyclinics, gather feedback, optimize load balancing algorithms." },
      ],
    },
    methodology: {
      title: "Tech Stack & Architecture",
      techStackTitle: "Technologies",
      techItems: [
        { label: "Frontend", value: "Next.js + TypeScript" },
        { label: "Backend", value: "Node.js + Express" },
        { label: "Database", value: "MongoDB / Supabase" },
        { label: "AI Brain", value: "OpenAI (Triage, Chat)" },
        { label: "Voice AI", value: "ElevenLabs (Call Center)" },
        { label: "Automation", value: "n8n (Workflows)" },
      ],
    },
  },
  uz: {
    nav: {
      problem: "Muammo va Yechim",
      process: "Jarayon",
      team: "Muallif",
      whyUs: "Nega Biz",
      roadmap: "Yo‘l Xaritasi",
      how: "Texnologiyalar",
      cta: "Boshlash",
    },
    hero: {
      title: "NAVBAT AI",
      subtitle: "O‘zbekiston poliklinikalari uchun AI asosidagi navbat va qabul tizimi. Ovozli AI va aqlli navbat orqali kutish vaqtini qisqartiramiz.",
      cta: "Jarayonni Ko‘rish",
    },
    problemSolution: {
      title: "Tibbiy Xizmatdagi Haqiqat",
      problemTitle: "Muammo",
      problemDesc: "Millionlab bemorlar har kuni uzun navbatlar va tartibsizlikdan aziyat chekmoqda.",
      problemPoints: [
        "Juda uzun kutish vaqti (1–3 soat)",
        "Navbatni yo‘qotmaslik uchun poliklinikada o‘tirish shart",
        "Yuqumli kasalliklar xavfi yuqori",
        "Yosh bolali ota-onalar uchun qiyinchilik",
        "Bemorlar ko‘pincha noto‘g‘ri shifokorga kiradi",
        "Reception xodimlari haddan tashqari yuklangan",
        "Bemorlar oqimi haqida ma'lumot yo‘q"
      ],
      solutionTitle: "NAVBAT AI Yechimi",
      solutionItems: [
        "AI Symptom Checker: AI bilan gaplashib to‘g‘ri shifokorni toping",
        "Real vaqtda kuzatuv: Qachon kelishni aniq bilasiz",
        "Tezkor bron qilish: Qog‘oz talonlarga hojat yo‘q",
        "Call Center Integratsiyasi: AI telefon qo‘ng‘iroqlarini qabul qiladi",
        "Aqlli Eslatmalar: SMS/Telegram/Ovozli qo‘ng‘iroq",
        "Yuklamani Taqsimlash: Bemorlarni shifokorlar orasida teng bo‘ladi",
        "Kamroq Tirbandlik: Uydan yoki mashinadan turib navbat kuting"
      ],
    },
    processFlow: {
      title: "Ishlash Jarayoni",
      steps: [
        { title: "Simptomlarni Aytish", desc: "Bemor ilova yoki tel orqali AIga shikoyatini aytadi.", icon: "mic" },
        { title: "Shifokor Tavsiyasi", desc: "AI kerakli mutaxassisni aniqlaydi.", icon: "stethoscope" },
        { title: "Qabulga Yozilish", desc: "Ilova yoki AI operator orqali vaqt tanlanadi.", icon: "calendar" },
        { title: "Navbatni Boshqarish", desc: "Navbatni onlayn kuzatib, istalgan joyda kuting.", icon: "users" },
        { title: "Eslatmalar", desc: "AI kelish vaqtidan oldin SMS yoki qo‘ng‘iroq qiladi.", icon: "bell" },
        { title: "Klinika Paneli", desc: "Admin oqimni nazorat qiladi; AI ishni optimallashtiradi.", icon: "bar-chart" },
      ]
    },
    team: {
      title: "Loyiha Muallifi",
      roleLabel: "Rol",
      members: [
        {
          name: "Shakhboz",
          role: "Team Lead / Full-Stack Developer",
          skills: [
            "Next.js + TSX",
            "Node.js + Express",
            "n8n Automation",
            "OpenAI API",
            "ElevenLabs Voice AI",
            "UI/UX Design"
          ],
          links: [{ label: "GitHub", url: "#" }, { label: "LinkedIn", url: "#" }]
        }
      ],
    },
    whyUs: {
      title: "Nega Bu Yechim Ishlaydi",
      points: [
        "O‘zbekiston poliklinika tizimi muammolarini chuqur tushunish",
        "Ovozli AI (ElevenLabs) va Call Center tajribasi",
        "Kuchli Full-Stack va Avtomatlashtirish (n8n) ko‘nikmalari",
        "Ota-onalar va keksalar uchun maxsus UX dizayn",
        "Milliy muammo uchun real va amaliy yechim"
      ],
    },
    roadmap: {
      title: "Loyihani Rivojlantirish",
      stages: [
        { phase: "G‘oya", title: "Konseptsiya va Tahlil", description: "Muammolarni o‘rganish, jarayonlarni loyihalash, bemorlarni tahlil qilish." },
        { phase: "Prototip", title: "Asosiy AI Ishlanmasi", description: "AI simptom tekshiruvi (Ovoz/Matn), navbat logikasi, demo call center." },
        { phase: "MVP", title: "Tizimni Qurish", description: "Veb/Mobil ilova, Admin panel, ElevenLabs integratsiyasi, SMS xabarlar." },
        { phase: "Launch", title: "Sinov va Kengaytirish", description: "1–2 poliklinikada sinov, fikrlar yig‘ish, algoritmni optimallashtirish." },
      ],
    },
    methodology: {
      title: "Texnologik Arxitektura",
      techStackTitle: "Texnologiyalar",
      techItems: [
        { label: "Frontend", value: "Next.js + TypeScript" },
        { label: "Backend", value: "Node.js + Express" },
        { label: "Ma'lumotlar bazasi", value: "MongoDB / Supabase" },
        { label: "AI Miya", value: "OpenAI (Triage, Chat)" },
        { label: "Ovozli AI", value: "ElevenLabs (Call Center)" },
        { label: "Avtomatlashtirish", value: "n8n (Jarayonlar)" },
      ],
    },
  },
  ru: {
    nav: {
      problem: "Проблема и Решение",
      process: "Процесс",
      team: "Автор",
      whyUs: "Почему Мы",
      roadmap: "Дорожная Карта",
      how: "Технологии",
      cta: "Начать",
    },
    hero: {
      title: "NAVBAT AI",
      subtitle: "Система управления очередями и записью с ИИ для поликлиник Узбекистана. Решаем проблему очередей с помощью голосового ИИ.",
      cta: "Смотреть Процесс",
    },
    problemSolution: {
      title: "Реальность Доступа к Медицине",
      problemTitle: "Проблема",
      problemDesc: "Миллионы пациентов ежедневно сталкиваются с изнурительными очередями и хаосом.",
      problemPoints: [
        "Чрезвычайно долгое ожидание (1–3 часа)",
        "Нужно сидеть в клинике, чтобы не пропустить очередь",
        "Высокий риск инфекции в толпе",
        "Родителям сложно с детьми",
        "Люди часто идут не к тому врачу",
        "Регистратура перегружена рутиной",
        "Нет данных о потоке пациентов"
      ],
      solutionTitle: "Решение NAVBAT AI",
      solutionItems: [
        "AI Symptom Checker: Говорите с ИИ, чтобы найти врача",
        "Отслеживание очереди: Знайте точно, когда прийти",
        "Мгновенная запись: Никаких бумажных талонов",
        "Интеграция Call-центра: ИИ принимает звонки",
        "Умные напоминания: SMS/Telegram/Голосовые звонки",
        "Балансировка нагрузки: Равномерное распределение пациентов",
        "Меньше толпы: Ждите дома или в машине"
      ],
    },
    processFlow: {
      title: "Как Это Работает: Путь Пациента",
      steps: [
        { title: "Симптомы", desc: "Пациент описывает симптомы ИИ через приложение или по телефону.", icon: "mic" },
        { title: "Рекомендация Врача", desc: "ИИ мгновенно определяет нужного специалиста.", icon: "stethoscope" },
        { title: "Запись", desc: "Выбор времени через приложение или голосового ИИ-агента.", icon: "calendar" },
        { title: "Управление Очередью", desc: "Отслеживание в реальном времени, ожидание в любом месте.", icon: "users" },
        { title: "Напоминания", desc: "ИИ отправляет SMS/звонок, чтобы избежать неявок.", icon: "bell" },
        { title: "Дашборд Клиники", desc: "Админ видит поток; ИИ оптимизирует нагрузку врачей.", icon: "bar-chart" },
      ]
    },
    team: {
      title: "Автор Проекта",
      roleLabel: "Роль",
      members: [
        {
          name: "Shakhboz",
          role: "Team Lead / Full-Stack Developer",
          skills: [
            "Next.js + TSX",
            "Node.js + Express",
            "n8n Automation",
            "OpenAI API",
            "ElevenLabs Voice AI",
            "UI/UX Design"
          ],
          links: [{ label: "GitHub", url: "#" }, { label: "LinkedIn", url: "#" }]
        }
      ],
    },
    whyUs: {
      title: "Почему Это Решение Работает",
      points: [
        "Глубокое понимание проблем поликлиник Узбекистана",
        "Опыт работы с Голосовым ИИ (ElevenLabs) для колл-центров",
        "Сильные навыки Full-Stack и Автоматизации (n8n)",
        "UX, разработанный специально для родителей и пожилых",
        "Реальное, практичное решение национальной проблемы"
      ],
    },
    roadmap: {
      title: "Дорожная Карта",
      stages: [
        { phase: "Идея", title: "Концепция и Анализ", description: "Изучение проблем, проектирование процессов, анализ поведения пациентов." },
        { phase: "Прототип", title: "Разработка Ядра ИИ", description: "ИИ проверка симптомов (Голос/Текст), логика очереди, демо колл-центра." },
        { phase: "MVP", title: "Создание Системы", description: "Веб/Моб приложение, Админ-панель, интеграция ElevenLabs, SMS уведомления." },
        { phase: "Запуск", title: "Пилот и Масштабирование", description: "Тест в 1–2 поликлиниках, сбор отзывов, оптимизация алгоритмов." },
      ],
    },
    methodology: {
      title: "Технологический Стек",
      techStackTitle: "Технологии",
      techItems: [
        { label: "Frontend", value: "Next.js + TypeScript" },
        { label: "Backend", value: "Node.js + Express" },
        { label: "База данных", value: "MongoDB / Supabase" },
        { label: "ИИ Мозг", value: "OpenAI (Триаж, Чат)" },
        { label: "Голосовой ИИ", value: "ElevenLabs (Call Center)" },
        { label: "Автоматизация", value: "n8n (Воркфлоу)" },
      ],
    },
  },
};