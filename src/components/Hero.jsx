import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
              >
                Branding that moves people
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-lg text-gray-700 max-w-2xl"
              >
                We craft modern identities, expressive websites, and vivid campaigns for ambitious brands.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-8 flex items-center gap-3"
              >
                <a href="#works" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 font-medium shadow-lg shadow-gray-900/10 hover:-translate-y-0.5 transition-transform">
                  See our work
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 font-medium hover:bg-gray-50">
                  Start a project
                </a>
              </motion.div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-10 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white pointer-events-none" />
    </section>
  )
}
