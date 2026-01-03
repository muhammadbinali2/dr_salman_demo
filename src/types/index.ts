export interface Service {
  id: string;
  title: string;
  description: string;
  techniques?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ClinicLocation {
  city: string;
  address?: string;
  phone?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  locations: ClinicLocation[];
}

export interface ConsultationFormData {
  procedure: string;
  agreedToTerms: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}


