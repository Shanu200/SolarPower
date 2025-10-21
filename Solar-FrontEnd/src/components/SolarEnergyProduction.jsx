import EnergyProductionCards from "./EnergyProductionCards";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SolarEnergyProduction = () => {
  const energyProductionData = [
    { day: "Mon", date: "Sept - 26", production: "34.1", hasAnomaly: false },
    { day: "Tue", date: "Sept - 27", production: "38.3", hasAnomaly: false },
    { day: "Wed", date: "Sept - 28", production: "40.2", hasAnomaly: false },
    { day: "Thu", date: "Sept - 29", production: "36.8", hasAnomaly: false },
    { day: "Fri", date: "Sept - 30", production: "44.4", hasAnomaly: false },
    { day: "Sat", date: "Oct - 1", production: "54.9", hasAnomaly: false },
    { day: "Sun", date: "Oct - 2", production: "14.1", hasAnomaly: false },
  ];

  const tabs = [
    { label: "All", value: "all" },
    { label: "Anomaly", value: "anomaly" },
  ];
  const handleTabClick = (value) => {
    setSelectedTab(value);
  };

  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  const filteredEnergyProductionData = energyProductionData.filter((el) => {
    if (selectedTab === "all") {
      return true;
    } else {
      return el.hasAnomaly;
    }
  });

  return (
    <section className="px-6  py-0.5">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Solar Energy Production </h2>
        <p className="text-gray-600">Dily output for tha past 7 days</p>
      </div>
      <div className="mt-3 flex items-center gap-x-4">
        {tabs.map((tab) => {
          return (
            <Button
              key={tab.value}
              variant={selectedTab === tab.value ? "default" : "outline"}
              onClick={(e) => handleTabClick(tab.value)}
            >
              {tab.label}
            </Button>
          );
        })}
      </div>
      <EnergyProductionCards
        energyProductionData={filteredEnergyProductionData}
      />
    </section>
  );
};
export default SolarEnergyProduction;
