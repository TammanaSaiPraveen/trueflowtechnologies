import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'

// Components
import Index from './components/Index'
import About from './components/About'
import Services from './components/Services'
import AISolutions from './components/AISolutions'
import Projects from './components/Projects'
import Team from './components/Team'
import Careers from './components/Careers'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App
