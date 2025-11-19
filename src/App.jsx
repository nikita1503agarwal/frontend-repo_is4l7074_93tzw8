import { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Contact from './components/Contact'

function App() {
  const ctaRef = useRef(null)
  const scrollToCTA = () => ctaRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/60">
        <div className="container mx-auto px-6 max-w-7xl h-16 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">SaaSify</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="hover:text-white">Status</a>
            <a href="#" className="rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/20">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero onCTAClick={scrollToCTA} />
        <div id="features"><Features /></div>
        <div ref={ctaRef}><CTA /></div>
        <Pricing />
        <div id="contact"><Contact /></div>
      </main>

      <footer className="py-10 border-t border-white/10 bg-slate-950/80">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} SaaSify, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
