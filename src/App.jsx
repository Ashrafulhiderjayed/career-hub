import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet />
    </div>
  )
}

export default App
