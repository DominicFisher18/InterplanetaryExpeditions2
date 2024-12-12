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
import Footer from './Footer'
import { Routes } from "react-router"
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
      <BrowserRouter>
        <Header/>
        <Home/>
        <About/>
        <Crew/>
        <Newsletter/>
        <Pricing/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
      
  )
}

export default App
