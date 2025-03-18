import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './component/LandingPage'
import HomePage from './component/HomePage'
import Dashboard from './component/Dashboard'
import ProfilePage from './component/ProfilePage'
import WalletPage from './component/WalletPage'
import StockdetailPage from './component/StockdetailPage'
import CartPage from './component/CartPage'
import CalculatorPage from './component/CalculatorPage'
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
          <Route path="/wallet" element={<WalletPage/>} />
          <Route path="/stock" element={<StockdetailPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/calculator" element={<CalculatorPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
