import { useState } from 'react'
import Navigation from "./components/Navigation/Navigation"
import HeroSection from './components/HeroSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <HeroSection/>
    
    </>
  )
}

export default App
