import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[10%] bg-[radial-gradient(125%_125%_at_50%_10%,#0ea5e9_10%,#1e293b_60%,#0b1020_100%)] opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center/cover opacity-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Launch your SaaS faster with an AI‑built site
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-prose"
            >
              A modern marketing site with lead capture, pricing, FAQs, and contact — ready today and easy to extend tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button onClick={onCTAClick} className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors">
                Get Started Free
              </button>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-white/90 font-semibold hover:bg-white/10 transition-colors">
                View Pricing
              </a>
            </motion.div>

            <div className="mt-6 text-sm text-blue-100/80">No credit card required • Cancel anytime</div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4"
          >
            <img src="/dashboard-preview.png" alt="Product preview" className="rounded-xl w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
