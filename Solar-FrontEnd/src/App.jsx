import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection";
import SolarEnergyProduction from "./components/SolarEnergyProduction";
import { Button } from "./components/ui/button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <SolarEnergyProduction />
      </main>
    </>
  );
}

export default App;
