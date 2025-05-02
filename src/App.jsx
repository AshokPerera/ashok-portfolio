import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './componets/LoadingScreen'
import "./index.css"
import { Navbar } from './componets/Navbar'
import { MobileMenu } from './componets/MobileMenu'
import {Home} from './componets/sections/Home'
import {About} from './componets/sections/About'
import {Projects} from './componets/sections/Projects'
import {Contact} from './componets/sections/Contact'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete = {() => setIsLoaded(true)} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
