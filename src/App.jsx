import { useState } from "react";
import "./App.css";
import Hero4 from "./hero-section4/hero-sect4";

function App() {
  const [count, setCount] = useState(0);

  return <Hero4 />;
}

export default App;
