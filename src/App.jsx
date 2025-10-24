import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Productspage from "./pages/Productspage";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";




function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/product' element={<Productspage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
