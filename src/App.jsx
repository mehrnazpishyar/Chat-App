import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/chat.svg')] bg-contain">
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  )
}

export default App