import { services } from '@/lib/content'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Link from 'next/link'
import ImageGallery from '@/components/ui/ImageGallery'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <Link
              href="/#services"
              className="text-primary hover:underline mb-6 inline-block"
            >
              ← Back to Services
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Content Column */}
              <div className="lg:col-span-7">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                  {service.title}
                </h1>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                {service.techniques && (
                  <div className="mb-8 p-6 bg-bg-subtle border border-border rounded-lg">
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">
                      Techniques & Methods
                    </h2>
                    <ul className="space-y-3">
                      {service.techniques.map((technique, index) => (
                        <li key={index} className="text-text-secondary flex items-start">
                          <span className="text-primary mr-3 font-bold">•</span>
                          <span>{technique}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-8">
                  <Link
                    href="/#contact"
                    className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-primary-medium"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
              
              {/* Gallery Column */}
              <div className="lg:col-span-5">
                {service.images && service.images.length > 0 ? (
                  <div className="sticky top-32">
                    <ImageGallery images={service.images} alt={service.title} />
                  </div>
                ) : (
                  <div className="sticky top-32 aspect-[4/3] bg-bg-subtle border-2 border-dashed border-border rounded-lg flex items-center justify-center">
                    <p className="text-text-tertiary">Gallery coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  )
}


