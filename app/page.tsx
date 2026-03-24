import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Treatments from '@/components/Treatments'
import Results from '@/components/Results'
import Booking from '@/components/Booking'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalClinic'],
  name: 'Noor Clinic',
  alternateName: 'Noor Aesthetic Medicine & Wellness',
  description:
    'DHA-licensed precision aesthetic clinic in Business Bay, Dubai. Specialising in Botox & fillers, laser skin resurfacing, IV vitamin drips, PRP hair restoration, body sculpting, and skin brightening treatments.',
  url: 'https://noor-clinic.vercel.app',
  logo: 'https://noor-clinic.vercel.app/favicon.svg',
  image: 'https://noor-clinic.vercel.app/og-image.jpg',
  telephone: '+971-50-123-4567',
  email: 'hello@noorclinic.ae',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'The Binary Tower, Business Bay',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.1863,
    longitude: 55.2645,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '14:00',
      closes: '20:00',
    },
  ],
  priceRange: 'AED 500 – AED 5,000',
  currenciesAccepted: 'AED, USD',
  paymentAccepted: 'Cash, Credit Card',
  areaServed: { '@type': 'City', name: 'Dubai' },
  hasMap: 'https://maps.google.com/?q=Business+Bay,Dubai',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '340',
    bestRating: '5',
    worstRating: '1',
  },
  medicalSpecialty: ['Aesthetic Medicine', 'Dermatology', 'Anti-Aging', 'Hair Restoration'],
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Botox & Fillers' },
    { '@type': 'MedicalProcedure', name: 'Laser Skin Resurfacing' },
    { '@type': 'MedicalProcedure', name: 'IV Vitamin Drips' },
    { '@type': 'MedicalProcedure', name: 'PRP Hair Restoration' },
    { '@type': 'MedicalProcedure', name: 'Body Sculpting (Emsculpt)' },
    { '@type': 'MedicalProcedure', name: 'Skin Brightening Treatments' },
  ],
  sameAs: [
    'https://www.instagram.com/noorclinic.ae',
  ],
}

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-charcoal overflow-x-hidden">
        <Nav />
        <Hero />
        <TrustBar />
        <Treatments />
        <Results />
        <Booking />
        <FAQ />
        <Contact />
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/971501234567?text=Hello%20Noor%20Clinic%2C%20I%27d%20like%20to%20book%20a%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Noor Clinic on WhatsApp"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 9999,
            backgroundColor: '#B5927A',
            borderRadius: '50%',
            width: '58px',
            height: '58px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(181,146,122,0.45)',
            animation: 'waPulse 2.5s ease-in-out infinite',
            transition: 'transform 0.2s ease',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="#FFFFFF"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </main>
    </>
  )
}
