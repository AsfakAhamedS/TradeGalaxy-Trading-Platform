import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './component/LandingPage'
import HomePage from './component/HomePage'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
