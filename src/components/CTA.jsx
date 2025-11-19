import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'landing' })
      })
      if (!res.ok) throw new Error('Failed to subscribe')
      setStatus('Thanks! Please check your inbox.')
      setEmail('')
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-16 bg-slate-950/70 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Join the waitlist</h3>
        <p className="mt-2 text-blue-100/80">Get early access and product updates.</p>
        <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl bg-white/10 text-white placeholder:text-white/50 px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button type="submit" className="rounded-xl bg-sky-500 px-6 py-3 text-white font-semibold hover:bg-sky-400">Notify me</button>
        </form>
        {status && <p className="mt-3 text-sm text-blue-100">{status}</p>}
      </div>
    </section>
  )
}
