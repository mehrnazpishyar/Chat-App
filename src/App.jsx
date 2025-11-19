import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className="bg-[#01062f] bg-contain">
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  )
}

export default App