import { useEffect,useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Particle from './components/Particle'
import Projects from './components/Projects'
import Welcome from './components/Welcome'

function App() {

  useEffect(() => {
    const timer = setTimeout(() => {

      setShowWelcome(false);

    }, 3400);

    return () => clearTimeout(timer);

  }, []);   

  const [showWelcome, setShowWelcome] = useState(true);

  return (

    <>
      {

        showWelcome ? <div><Welcome></Welcome></div> : <div>

        <Particle></Particle>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        {/* <Footer></Footer> */}
  
      </div>

      }
    </>
    
    

  )
}

export default App