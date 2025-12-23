import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./pages/home/components/HeroSection";
import SolarEnergyProduction from "./pages/home/components/SolarEnergyProduction";
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
