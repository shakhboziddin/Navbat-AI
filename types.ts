
export interface NavItem {
  id: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

// Booking Demo Types
export interface Department {
  id: string;
  name: string;
  icon: string;
}

export interface BookingDoctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

// CRM Types
export interface CRMStat {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export interface CRMPatient {
  id: string;
  name: string;
  time: string;
  status: 'waiting' | 'in-progress' | 'completed' | 'cancelled';
  department: string;
  doctor: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface ContentData {
  nav: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Feature[];
  };
  bookingDemo: {
    title: string;
    subtitle: string;
    departments: Department[];
    doctors: Record<string, BookingDoctor[]>;
  };
  crmDemo: {
    title: string;
    subtitle: string;
    stats: CRMStat[];
    patients: CRMPatient[];
  };
  whyUs: {
    title: string;
    items: { title: string; description: string }[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
}
