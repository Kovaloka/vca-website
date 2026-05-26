import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import EBoard from './components/EBoard'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SideNav from './components/SideNav'

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <SideNav />
      <main>
        <Hero />
        <About />
        <Events />
        <EBoard />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
