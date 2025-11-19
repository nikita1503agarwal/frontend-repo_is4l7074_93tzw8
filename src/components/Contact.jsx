import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus('Message sent! We will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-20 bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h3 className="text-3xl font-bold text-white">Questions? Let’s talk</h3>
            <p className="mt-2 text-blue-100/80">Drop us a note and we’ll respond within 1 business day.</p>
          </div>
          <form onSubmit={submit} className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="grid gap-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                placeholder="Full name"
                required
                className="rounded-xl bg-white/10 text-white placeholder:text-white/50 px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder="you@company.com"
                required
                className="rounded-xl bg-white/10 text-white placeholder:text-white/50 px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we help?"
                required
                rows={5}
                className="rounded-xl bg-white/10 text-white placeholder:text-white/50 px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button type="submit" className="rounded-xl bg-sky-500 px-6 py-3 text-white font-semibold hover:bg-sky-400">Send message</button>
              {status && <p className="text-sm text-blue-100">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
