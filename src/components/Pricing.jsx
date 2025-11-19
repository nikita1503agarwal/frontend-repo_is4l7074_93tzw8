export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple pricing</h2>
          <p className="mt-3 text-blue-100/80">Start free. Upgrade when you grow. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Free */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-white font-semibold">Free</h3>
            <p className="mt-1 text-4xl font-extrabold text-white">$0<span className="text-base font-normal text-white/80">/mo</span></p>
            <ul className="mt-6 space-y-2 text-blue-100/90 text-sm">
              <li>Up to 100 contacts</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-white/10 text-white py-3 font-semibold hover:bg-white/20">Start free</button>
          </div>

          {/* Pro */}
          <div className="rounded-2xl bg-gradient-to-b from-sky-500 to-sky-600 p-[1px]">
            <div className="rounded-[15px] h-full bg-slate-900 p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-200">Popular</div>
              <h3 className="mt-3 text-white font-semibold">Pro</h3>
              <p className="mt-1 text-4xl font-extrabold text-white">$19<span className="text-base font-normal text-white/80">/mo</span></p>
              <ul className="mt-6 space-y-2 text-blue-100/90 text-sm">
                <li>Up to 10k contacts</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
              </ul>
              <button className="mt-6 w-full rounded-xl bg-sky-500 text-white py-3 font-semibold hover:bg-sky-400">Get Pro</button>
            </div>
          </div>

          {/* Business */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-white font-semibold">Business</h3>
            <p className="mt-1 text-4xl font-extrabold text-white">$49<span className="text-base font-normal text-white/80">/mo</span></p>
            <ul className="mt-6 space-y-2 text-blue-100/90 text-sm">
              <li>Unlimited contacts</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-white/10 text-white py-3 font-semibold hover:bg-white/20">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}
