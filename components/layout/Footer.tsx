'use client'

import Container from './Container'
import { contactInfo } from '@/lib/content'
import { NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop - 80
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-bg-subtle border-t border-border-accent py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">Dr Salman Aesthetics</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Promoting Medical Tourism in Pakistan with luxury healthcare under one roof.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-text-secondary hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                {contactInfo.locations.map((loc, idx) => (
                  <span key={loc.city}>
                    {loc.city}
                    {idx < contactInfo.locations.length - 1 && ' | '}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-text-secondary">
          <p>&copy; 2025 Dr MSK. All rights reserved.</p>
          <p className="mt-2">All Procedures are completed at the prescribed protocols and customer satisfaction is our faith.</p>
        </div>
      </Container>
    </footer>
  )
}

