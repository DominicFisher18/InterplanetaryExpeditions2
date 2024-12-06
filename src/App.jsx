import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import Crew from './Crew'
import Newsletter from './Newsletter'
import Pricing from './Pricing'
import Contact from './Contact'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Crew/>
      <Newsletter/>
      <Pricing/>
      <Contact/>
    </>
  )
}

export default App
