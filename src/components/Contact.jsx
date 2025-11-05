import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let's build your brand</h2>
            <p className="mt-4 text-gray-600 max-w-xl">Tell us about your goals and timelines. Well get back within 24 hours to schedule a discovery call.</p>

            <div className="mt-10 grid gap-4">
              <div className="rounded-2xl border border-gray-200 p-6">
                <div className="text-sm text-gray-500">Email</div>
                <div className="mt-1 font-medium text-gray-900">hello@novabrand.studio</div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <div className="text-sm text-gray-500">HQ</div>
                <div className="mt-1 font-medium text-gray-900">Remote-first, operating worldwide</div>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Acme Inc." />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">How can we help?</label>
                <textarea rows={5} className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Tell us about your project..." />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-medium text-white hover:-translate-y-0.5 transition-transform">
              <Send size={18} /> Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
