'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import WhatIsGitHub from '@/components/WhatIsGitHub'
import EngineerUsage from '@/components/EngineerUsage'
import NonEngineerUsage from '@/components/NonEngineerUsage'
import InteractiveDemo from '@/components/InteractiveDemo'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('intro')

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      
      <div className="container mx-auto px-4 py-8 space-y-16">
        <section id="what-is-github">
          <WhatIsGitHub />
        </section>

        <section id="engineer-usage">
          <EngineerUsage />
        </section>

        <section id="non-engineer-usage">
          <NonEngineerUsage />
        </section>

        <section id="interactive-demo">
          <InteractiveDemo />
        </section>
      </div>

      <Footer />
    </main>
  )
}