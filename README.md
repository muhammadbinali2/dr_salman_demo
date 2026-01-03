# Dr Salman Aesthetics - Premium Medical Website

A premium, dynamic medical authority website built with Next.js, Tailwind CSS, and Framer Motion. Designed with an editorial, calm aesthetic inspired by TalentGuy.io while maintaining the credibility and professionalism of a high-end medical practice.

## Technology Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** (Custom design system)
- **Framer Motion** (Animations & interactions)

## Features

### Design
- Editorial, text-first design philosophy
- Single accent color used sparingly
- Generous white space and clear typography hierarchy
- Depth and layering (shadows, borders, elevation)
- Premium, professional aesthetic

### Components
- **HeroAuthoritySection** - Large headline with entrance animations
- **CredentialsBlock** - Doctor credentials with animated cards
- **ServicesGrid** - Card-based service layout with hover effects
- **ProcessTimeline** - 4-step patient journey with animated progression
- **TrustSection** - Statistics and reviews with soft emphasis
- **FAQAccordion** - Expand/collapse with smooth animations
- **CTAHighlightPanel** - High-contrast call-to-action section
- **ContactLocationsSection** - Multiple clinics with contact forms

### Motion & Interactions
- Scroll-triggered animations (fade-in, slide-up)
- Staggered children animations
- Hover micro-interactions
- Smooth transitions
- Mobile-responsive interactions

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
/app
  layout.tsx              # Root layout
  page.tsx                # Homepage
  /services
    page.tsx              # Services overview
    /[slug]
      page.tsx            # Individual service pages
/components
  /ui                     # UI components
  /layout                 # Layout components
/lib
  animations.ts           # Framer Motion variants
  content.ts              # Content data
  constants.ts            # Constants
```

## Content

All content has been preserved from drsalmanaesthetics.com, rewritten only for clarity and flow while maintaining medical accuracy.

## Design System

### Colors
- **Primary**: #2563eb (Blue)
- **Text Primary**: #1a1a1a
- **Text Secondary**: #6b6b6b
- **Background**: #ffffff, #fafafa
- **Borders**: #e5e5e5

### Typography
- **Headings**: Bold, expressive (text-4xl to text-7xl)
- **Body**: Calm, readable (1.125rem, line-height 1.8)

### Spacing
- Generous white space (py-20 to py-32)
- Consistent spacing scale

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Dr MSK. All rights reserved.
