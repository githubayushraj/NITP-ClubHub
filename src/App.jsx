import "./App.css";
import { useState } from "react";
import Hero4 from "./hero-section4/hero-sect4";
import Hero2 from "./hero2/hero2.jsx";
import Hero5 from "./Hero5.jsx";
import HomePage from "./pages/homePage.jsx";
import Navbar from "./Navbar.jsx";
function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
    <Navbar/>
    <HomePage/>
      <Hero2 />
       <Hero4 />;
       <Hero5/>

    </>
  )
}

export default App;