import EnergyProductionCard from "@/components/EnergyProductionCard"

const SolarEnergyProduction = () => {
  return (
    <section className="px-6 font-[Inter] py-0.5">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Solar Energy Production </h2>
        <p className="text-gray-600">Dily output for tha past 7 days</p>
      </div>
      <div className=" grid grid-cols-7 ">
        <EnergyProductionCard />
      </div>
    </section>
  );
};
export default SolarEnergyProduction;
