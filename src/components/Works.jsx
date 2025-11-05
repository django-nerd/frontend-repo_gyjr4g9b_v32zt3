import { motion } from 'framer-motion'
import { Image, Palette, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Neon Labs',
    tag: 'Identity & Website',
    img: 'https://images.unsplash.com/photo-1483145735681-6e4f27b6933d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Orbit Coffee',
    tag: 'Packaging & Campaign',
    img: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Velo Studio',
    tag: 'Rebrand & Motion',
    img: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Works() {
  return (
    <section id="works" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Image size={20} />
              </span>
              Selected works
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">A snapshot of recent collaborations across tech, lifestyle and culture.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="text-sm text-gray-500">{p.tag}</div>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Palette, label: 'Identity Systems' },
            { icon: Globe, label: 'Web & Product' },
            { icon: Image, label: 'Campaign & Content' },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Icon size={18} />
              </span>
              <span className="font-medium text-gray-800">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
