export interface Service {
  id: string
  title: string
  description: string
  techniques?: string[]
  slug: string
  images?: string[]
  featuredImage?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface ClinicLocation {
  city: string
  address?: string
}

export const services: Service[] = [
  {
    id: 'hair-transplant',
    title: 'Hair Transplant',
    description: 'Pioneer of Unshaved Hair Transplant using advanced techniques including FUE, DHI, and Micro Sapphire FUE. Our unshaved technique allows for a more natural appearance during and after the procedure.',
    techniques: ['FUE (Follicular Unit Extraction)', 'DHI (Direct Hair Implantation)', 'Micro Sapphire FUE', 'Unshaved Technique'],
    slug: 'hair-transplant',
    featuredImage: '/images/Hair trans.jpg',
    images: ['/images/Hair trans.jpg', '/images/hair trans2.jpg', '/images/hair trans 3.jpg'],
  },
  {
    id: 'rhinoplasty',
    title: 'Rhinoplasty',
    description: 'Expert nose reshaping procedures for natural-looking, harmonious facial balance. Our rhinoplasty techniques focus on achieving results that complement your natural features.',
    slug: 'rhinoplasty',
    featuredImage: '/images/Rhinoplasty.jpg',
    images: ['/images/Rhinoplasty.jpg', '/images/Rhino plasty 2.webp', '/images/Rhinoplasty3.jpg'],
  },
  {
    id: 'body-contouring',
    title: 'Body Contouring',
    description: 'Dr Salman\'s signature body contouring procedures for sculpted, natural-looking results. Customized treatment plans tailored to each patient\'s unique goals.',
    slug: 'body-contouring',
  },
  {
    id: 'facelift',
    title: 'Facelift',
    description: 'Advanced facelift techniques for natural, long-lasting rejuvenation. Our procedures focus on restoring a youthful appearance while maintaining natural facial expressions.',
    slug: 'facelift',
    featuredImage: '/images/facelift1.jpg',
    images: ['/images/facelift1.jpg', '/images/facelift 2.jpg', '/images/facelift3.jpg'],
  },
  {
    id: 'blepharoplasty',
    title: 'Blepharoplasty',
    description: 'Eyelid surgery for refreshed, youthful appearance with precision and care. Both upper and lower eyelid procedures available to address various concerns.',
    slug: 'blepharoplasty',
    featuredImage: '/images/Blepharoplasty1.jpg',
    images: ['/images/Blepharoplasty1.jpg', '/images/Blepharoplasty2.jpg', '/images/Blepharoplasty3.jpg'],
  },
  {
    id: 'breast-augmentation',
    title: 'Breast Augmentation',
    description: 'Professional breast enhancement procedures with personalized care and attention. We work closely with patients to achieve their desired results while maintaining natural proportions.',
    slug: 'breast-augmentation',
  },
  {
    id: 'non-invasive',
    title: 'Non-Invasive Procedures',
    description: 'Thread lifts and other non-invasive aesthetic procedures for those seeking subtle enhancements without surgery. Minimally invasive options with shorter recovery times.',
    slug: 'non-invasive',
  },
]

export const faqs: FAQ[] = [
  {
    question: 'Who is a good candidate for hair transplant?',
    answer: 'Ideal candidates for a hair transplant are those who have sufficient donor hair to cover the balding areas. Factors like the density of hair at the donor site, hair color, skin type, and the extent of hair loss are considered. People with certain medical conditions or thinning due to medication may not be suitable candidates. A consultation will help determine your candidacy.',
  },
  {
    question: 'How long does the procedure take?',
    answer: 'It varies but typically lasts between 4 to 8 hours, depending on the extent of the transplant. The duration depends on the number of grafts needed and the specific technique used. We ensure you are comfortable throughout the procedure.',
  },
  {
    question: 'What is the recovery process like?',
    answer: 'The initial recovery phase of a hair transplant, lasting about 1 to 2 weeks, involves scabbing, mild swelling, and potential discomfort. Most patients can return to light activities within a few days. We provide detailed aftercare instructions and are available for any questions during your recovery.',
  },
  {
    question: 'How long does it take to see the results?',
    answer: 'It can take several months to a year to see the full results of a hair transplant. Initially, the transplanted hair will fall out (a normal part of the process), and new growth will start after a few months. The full effect of the transplant is usually visible after 9 to 12 months. Patience is important as hair growth is a gradual process.',
  },
  {
    question: 'Is hair transplant surgery painful?',
    answer: 'Most patients experience minimal pain during the surgery, as local anesthesia is used. Post-operative pain is usually manageable with prescribed painkillers. Any discomfort during recovery is typically mild and temporary. We ensure your comfort throughout the entire process.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Consultation',
    description: 'Your journey begins with a comprehensive consultation, either in-person or virtual. We discuss your goals, assess your suitability for the procedure, and create a personalized treatment plan. For virtual consultations, we request 5 pictures: 2 from sides, 1 front, 1 top, and 1 back of the head (for hair transplant consultations).',
  },
  {
    title: 'Procedure',
    description: 'Procedures are performed using advanced techniques in our state-of-the-art facilities. Most procedures take between 4 to 8 hours, depending on the extent of treatment. Local anesthesia is used to ensure minimal discomfort during the procedure.',
  },
  {
    title: 'Recovery',
    description: 'The initial recovery phase typically lasts 1 to 2 weeks and may involve scabbing, mild swelling, and some discomfort. Post-operative pain is usually manageable with prescribed painkillers. Our team provides detailed aftercare instructions and ongoing support throughout your recovery.',
  },
  {
    title: 'Results',
    description: 'While initial healing occurs within weeks, full results develop over time. For hair transplants, the transplanted hair may initially fall out (a normal part of the process), with new growth beginning after a few months. The full effect is usually visible after 9 to 12 months. We maintain follow-up care to ensure optimal outcomes.',
  },
]

export const clinicLocations: ClinicLocation[] = [
  { city: 'Peshawar' },
  { city: 'Islamabad' },
  { city: 'Gulberg' },
]

export const contactInfo = {
  phone: '0311 8151985',
  email: 'enquiries@drsalmanaesthetics.com',
  locations: clinicLocations,
}

export const credentials = {
  title: 'Top Rated Plastic and Cosmetic Surgeon in Pakistan',
  pioneer: 'Pioneer of Unshaved Hair Transplant technique',
  certified: 'Internationally trained with advanced certification',
  image: '/images/Dr Salman.jpg',
}

export const trustStats = {
  reviews: '1,300+',
  reviewsText: 'Trustpilot Reviews',
  description: 'Our commitment to patient satisfaction is reflected in over 1,300 reviews on Trustpilot, demonstrating our dedication to excellence and patient care.',
}


