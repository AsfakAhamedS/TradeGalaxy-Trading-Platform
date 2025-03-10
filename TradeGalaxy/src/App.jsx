import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './component/LandingPage'
import Header from './component/Header'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<Header/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
