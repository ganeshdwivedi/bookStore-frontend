import react from 'react'
import './App.css'
import Footer from './components/Footer'
import Ebook from './components/Ebook'
import GetOver from './components/GetOver'
import Hero from './components/Hero'
import LatestArticle from './components/LatestArticle'
import ComingSoon from './components/ComingSoon'
import BirdsGonnaBeHappy from './components/BirdsGonnaBeHappy'
import { StillNotSure } from './components/StillNotSure'
import Navbar from './components/Navbar'
import ClientDemo from './components/ClientDemo'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <ComingSoon />
      <GetOver />
      <BirdsGonnaBeHappy />
      <StillNotSure />
      <Ebook />
      <LatestArticle />
      <Footer />
    </>
  )
}

export default App
