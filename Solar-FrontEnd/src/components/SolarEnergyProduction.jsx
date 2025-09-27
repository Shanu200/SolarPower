import EnergyProductionCard from "@/components/EnergyProductionCard";

const SolarEnergyProduction = () => {
  const energyProductionData = [
    { day: "Mon", date: "Sept - 26", production:"34.1" },
    { day: "Tue", date: "Sept - 27", production:"38.3" },
    { day: "Wed", date: "Sept - 28", production:"40.2" },
    { day: "Thu", date: "Sept - 29", production:"36.8" },
    { day: "Fri", date: "Sept - 30", production:"44.4" },
    { day: "Sat", date: "Oct - 1", production:"54.9" },
    { day: "Sun", date: "Oct - 2", production:"14.1" },
  ];
  return (
    <section className="px-6  py-0.5">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Solar Energy Production </h2>
        <p className="text-gray-600">Dily output for tha past 7 days</p>
      </div>
      <div className=" grid grid-cols-7 ">
        {energyProductionData.map((el)=>{
          return(
            <EnergyProductionCard
            key={el.date}
            day={el.day}
            date={el.date}
            production={el.production}
            />

          )
          

        })}
          

          
        
        
      </div>
    </section>
  );
};
export default SolarEnergyProduction;
