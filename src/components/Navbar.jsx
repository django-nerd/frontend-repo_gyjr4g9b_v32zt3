import { useState, useEffect } from 'react'
import { Menu, X, Rocket, User, FolderOpen, Mail } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home', icon: Rocket },
  { href: '#team', label: 'Team', icon: User },
  { href: '#works', label: 'Works', icon: FolderOpen },
  { href: '#contact', label: 'Contact', icon: Mail },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500" />
          <span className="font-semibold text-lg">NovaBrand</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur">
          <div className="px-4 py-2 space-y-1">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <Icon size={18} /> {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
