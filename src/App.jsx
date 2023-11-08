import { useState } from "react";
import "./App.css";
import Hero4 from "./hero-section4/hero-sect4";
import Footer from './Footer/Footer'
function App() {
  const [count, setCount] = useState(0);
  
  return(
    <div>
      <Hero4 />
      <Footer />
    </div>
  )
}

export default App;