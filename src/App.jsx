import "./App.css";
import { useState } from "react";
import Hero4 from "./hero-section4/hero-sect4";
import Hero2 from "./hero2/hero2.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Hero2 />
       <Hero4 />;
    </>
  )
}

export default App;