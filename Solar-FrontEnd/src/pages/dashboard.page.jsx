import { useGetSolarUnitForUsersQuery } from "@/lib/redux/api";
import DataCard from "./dashboard/components/DataCard";
import DataChart from "./dashboard/DataChart";
import { useUser } from "@clerk/clerk-react";

const DashboardPage = () => {
  const { user, isLoaded } = useUser();

  const {
    data: solarUnit,
    isLoading,
    isError,
    error,
  } = useGetSolarUnitForUsersQuery({
    skip: !isLoaded,
  });

  if (!isLoaded || isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!solarUnit) {
    return <div>No solar unit found for this user.</div>;
  }

  return (
    <main className="mt-4">
      <h1 className="text-4xl font-bold">{user.firstName}'s House</h1>

      <div className="mt-8">
        <DataCard solarUnitId={solarUnit._id} />
      </div>

      <div className="mt-8">
        <DataChart solarUnitId={solarUnit._id} />
      </div>
    </main>
  );
};

export default DashboardPage;
