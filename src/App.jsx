import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="bg-[#01062f] bg-contain">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App