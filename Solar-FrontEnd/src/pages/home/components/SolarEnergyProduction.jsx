import EnergyProductionCards from "./EnergyProductionCards";
import Tab from "./Tab";
import {useSelector} from "react-redux";
import { getSolarUnitById } from "@/lib/api/solar-unit";
import { Button } from "@/components/ui/button";
import { getEnergyGenerationRecordBySolarUnit } from "@/lib/api/energy-generation-record";
import { useEffect, useState } from "react";
import { data } from "react-router";
import { subDays, toDate, format } from "date-fns";
import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/api";

const SolarEnergyProduction = () => {
  const energyProductionData = [
    { day: "Mon", date: "Sept - 26", production: "34.1", hasAnomaly: false },
    { day: "Tue", date: "Sept - 27", production: "38.3", hasAnomaly: false },
    { day: "Wed", date: "Sept - 28", production: "40.2", hasAnomaly: false },
    { day: "Thu", date: "Sept - 29", production: "36.8", hasAnomaly: false},
    { day: "Fri", date: "Sept - 30", production: "44.4", hasAnomaly: false },
    { day: "Sat", date: "Oct - 1", production: "54.9", hasAnomaly: false },
    { day: "Sun", date: "Oct - 2", production: "14.1", hasAnomaly: false },
  ];

  const tabs = [
    { label: "All", value: "all" },
    { label: "Anomaly", value: "anomaly" },
  ];
  

  const selectedTab = useSelector((state) => state.ui.selectedHomeTab);


  const { data, isLoading, isError, error } =
    useGetEnergyGenerationRecordsBySolarUnitQuery({id:"694d7574c64d3851b7b07b94", groupBy:"date"});
  
  // const handleGetdata = () => {
  //   getEnergyGenerationRecordBySolarUnit("6942501ca44f0ab126007656");
  // }

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!data || isError) {
    return <div>Error: {error.message}</div>;
  }

  const newEnergyProductionData = data.slice(0,7).map((el) =>{
    return {
      day: format(toDate(el._date), "EEE"),
      date: format(toDate(el._date), "MMM d"),
      production: el.totalEnergy,
      hasAnomaly: false,
    };
  });
  console.log(newEnergyProductionData);

  

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
        
        {tabs.map((tab) => (
          <Tab 
          key={tab.value} 
          tab={tab} s
          electedTab={selectedTab} />
        ))}

      </div>
      {/* <div className="mt-4">
        <Button onClick={handleGetdata}>Get Data</Button>
      </div> */}
      <EnergyProductionCards
        energyProductionData={filteredEnergyProductionData}
      />
    </section>
  );
};
export default SolarEnergyProduction;
