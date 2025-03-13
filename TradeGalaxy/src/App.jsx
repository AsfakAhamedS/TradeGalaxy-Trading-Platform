import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './component/LandingPage'
import HomePage from './component/HomePage'
import Dashboard from './component/Dashboard'
import ProfilePage from './component/ProfilePage'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
