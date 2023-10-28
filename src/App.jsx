import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-6xl font-bold text-pink-600 hover:text-sky-600 text-center pt-48'>REACT+TAILWIND SETUP</p>
    </>
  )
}

export default App
