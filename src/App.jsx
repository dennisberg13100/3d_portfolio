import { useState, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works} from './components'
import TechMobile from "./components/TechMobile";

const App  = () => {
  const [ isMobile, setIsMobile ] = useState(true);

  useEffect(()=> {
    setIsMobile(window.innerWidth <= 500)
  }, [])
  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {isMobile ? <TechMobile /> : <Tech /> }
      <Works />
      <Feedbacks />
      <div className="realtive z-0">
        <Contact />
        <StarsCanvas /> 
      </div>

    </div>
   </BrowserRouter>
  )
}

export default App
