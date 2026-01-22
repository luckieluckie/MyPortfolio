import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import ErrorBoundary from './components/ErrorBoundary'


const App = () => {
  return (
    <ErrorBoundary>
      <main className='max-w-7xl mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <Experience />
        <Contact />
        <Footer />

      </main>
    </ErrorBoundary>
  )
}

export default App