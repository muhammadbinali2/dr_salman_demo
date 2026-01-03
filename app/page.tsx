import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroAuthoritySection from '@/components/ui/HeroAuthoritySection'
import CredentialsBlock from '@/components/ui/CredentialsBlock'
import ServicesGrid from '@/components/ui/ServicesGrid'
import ProcessTimeline from '@/components/ui/ProcessTimeline'
import TrustSection from '@/components/ui/TrustSection'
import ResultsGallery from '@/components/ui/ResultsGallery'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CTAHighlightPanel from '@/components/ui/CTAHighlightPanel'
import ContactLocationsSection from '@/components/ui/ContactLocationsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroAuthoritySection />
      <CredentialsBlock />
      <ServicesGrid />
      <ProcessTimeline />
      <TrustSection />
      <ResultsGallery />
      <CTAHighlightPanel />
      <FAQAccordion />
      <ContactLocationsSection />
      <Footer />
    </main>
  )
}


