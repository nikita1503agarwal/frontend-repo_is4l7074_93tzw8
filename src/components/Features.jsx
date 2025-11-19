import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    title: 'Lead capture built‑in',
    description: 'Collect emails and messages directly to your database. GDPR-friendly and secure by default.'
  },
  {
    title: 'Fast performance',
    description: 'Vite + React + Tailwind deliver instant loads and snappy interactions.'
  },
  {
    title: 'Modern design',
    description: 'Beautiful gradients, soft shadows, and motion that feels alive.'
  },
  {
    title: 'Easy to extend',
    description: 'Add pricing, auth, blog, and dashboards as you grow using the same foundation.'
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-slate-950/70 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to launch</h2>
          <p className="mt-3 text-blue-100/80">Focus on your product, not plumbing. This site handles the essentials.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <CheckCircle2 className="text-sky-400" />
              <h3 className="mt-3 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
