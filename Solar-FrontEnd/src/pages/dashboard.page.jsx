import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/api";
import DataCard from "./dashboard/components/DataCard";
import DataChart from "./dashboard/DataChart";

const DashboardPage = () => {
  const { data, isLoading, isError, error } =
    useGetEnergyGenerationRecordsBySolarUnitQuery({
      id: "694d7574c64d3851b7b07b94",
      groupBy: "date",
    });

  if (isError || !data) return null;

  return (
    <main className="mt-4">
      <h1 className="text-4xl font-bold text-foreground">Alice's House</h1>
      <p className="text-gray-600 mt-2">
        Welcome back to your Solar Energy Production Dashboard
      </p>
      <div className="mt-8">
        <DataCard
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          title="Last 7 Days Energy Production"
        />
      </div>
      <div className="mt-8">
        <DataChart
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      </div>
    </main>
  );
};

export default DashboardPage;
