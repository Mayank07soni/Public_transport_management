import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../components/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>MAyank Soni</p>
  <Routes>
    <Route path="/MainPage" element={<MainPage/>}/>
  </Routes></div>
  )
}

export default App
