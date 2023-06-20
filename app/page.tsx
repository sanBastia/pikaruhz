import { Hero, SaloonServicesSection, SaloonStylistSection } from '@/components'

export default async function Home() {
 
  return (
    <main className="overflow-hidden">
     <Hero />
      <SaloonServicesSection />
      <SaloonStylistSection />
    </main>
  )
}
 