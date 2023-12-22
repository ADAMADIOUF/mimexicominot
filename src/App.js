import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './components/Home'
import TopNav from './components/TopNav'

import Footer from './components/Footer'
import Contact from './components/Contact'
import Menu from './components/Menu'

const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Navbar />
      <Routes>
        <Route index={true} path='/' element={<Home />} />
        <Route path='/menus' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
