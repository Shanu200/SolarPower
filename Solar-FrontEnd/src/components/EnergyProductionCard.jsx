const SolarEnergyProductionCard = () =>{
    return (
      <div className="border border-gray-300 rounded-lg h-44 w-50">
        <div className="flex flex-col items-center gap-2 p-6 pb-2">
          <span className=" block text-gray-600 text-sm font-medium">
            Monday
          </span>
          <span className=" block text-gray-500 text-xs">sep26</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-6 pt-2">
          <span className=" block text-3xl font-bold text-blue-600">37.5</span>
          <span className=" block text-gray-500 text-sm font-medium">kwh</span>
        </div>
      </div>
    );
}
export default SolarEnergyProductionCard;