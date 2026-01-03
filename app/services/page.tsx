import { services } from '@/lib/content'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Our Services
            </h1>
            <p className="text-lg text-text-secondary mb-12">
              Advanced techniques for natural, guaranteed results
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="bg-bg border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all"
                >
                  <h2 className="text-xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-text-secondary text-sm mb-4">
                    {service.description}
                  </p>
                  <span className="text-primary font-medium text-sm">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  )
}


