import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx"; 

const App=()=>{
  return (
    <>
     <div className="min-h-screen bg-cover bg-center " style={{ backgroundImage: `url('./images/realpic.png')` }}>
            <Router>
             
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    </>
  )
}

  


export default App
