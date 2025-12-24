const baseUrl = "http://localhost:8002/api";

export const getEnergyGenerationRecordBySolarUnit = async (solarUnitId) =>{
    
        const res = await fetch (`${baseUrl}/energy-generation-records/solar-unit/${solarUnitId}`,
        {
             method: "GET",
         headers: {
             "Content-Type": "application/json",
            },
        }
        );
        const data = await res.json();
        console.log(data);
        return data;
};