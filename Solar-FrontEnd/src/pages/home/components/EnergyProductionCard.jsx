const SolarEnergyProductionCard = (props) =>{
    return (
      <div
        className={`relative border
          ${props.hasAnomaly
            ? "border border-red-600 rounded-lg h-44 w-50"
            : "border border-gray-300 rounded-lg h-44 w-55"}`
        }
      >
        {props.hasAnomaly && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-sm  text-xs ">Anomally</div>
        )}
        <div className="flex flex-col items-center gap-2 p-6 pb-2">
          <span className=" block text-gray-600 text-sm font-medium">
            {props.day}
          </span>
          <span className=" block text-gray-500 text-xs">{props.date}</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-6 pt-2">
          
          <span
            className={
              props.hasAnomaly
                ? " block text-3xl font-bold text-red-600"
                : " block text-3xl font-bold text-blue-600"
            }>           
            {props.production}
          </span>

          <span className=" block text-gray-500 text-sm font-medium">kwh</span>
        </div>
      </div>
    );
}
export default SolarEnergyProductionCard;