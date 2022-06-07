import React from 'react'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Category from './pages/Category'
import Recipe from './pages/Recipe'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path='/meal/:id' element={<Recipe />} />
      </Routes>

      <Footer />
    </>
  )
}
