import EnergyProductionCard from "./EnergyProductionCard";

const EnergyProductionCards = (props) => {
  if (props.energyProductionData.length === 0) {
    return (
      <div className="mt-4 h-32 py-4">
        <p className="text-gray-600">No Anomalies Found</p>
      </div>
    );
  }
  return (
    <div className=" grid grid-cols-7 mt-6 ">
      {props.energyProductionData.map((el) => {
        return (
          <EnergyProductionCard
            key={el.date}
            day={el.day}
            date={el.date}
            production={el.production}
            hasAnomaly={el.hasAnomaly}
          />
        );
      })}
    </div>
  );
};
export default EnergyProductionCards;
