import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Team />
        <Works />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} NovaBrand Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#works" className="hover:text-gray-900">Portfolio</a>
            <a href="#team" className="hover:text-gray-900">Team</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
