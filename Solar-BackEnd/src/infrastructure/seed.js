import mongoose from "mongoose";
import { SolarUnit } from "./entities/SolarUnit.js";
import {EnergyGenerationRecord} from "./entities/EnergyGenerationRecord.js";
import dotenv from "dotenv";
import {connectDB} from "./db.js";

dotenv.config();

async function seed(){
    try{
        connectDB();

        await EnergyGenerationRecord.deleteMany({});
        await SolarUnit.deleteMany({});

        const solarUnit = await SolarUnit.create({
            serialNumber: "Su-0001",
            installationDate: new Date("2025-09-15"),
            capacity: 5000,
            status: "Active",

        });
        const records = [];
        const baseDate = new Date("2023-01-01T00:00:00z");
        for(let i=0; i<10; i++){
            records.push({
                solarUnitId: solarUnit._id,
                timestamp: new Date(baseDate.getTime() + i * 2 * 60 * 60 * 1000),
                energyGenerated: 100 + i * 10,
            });
        }
        await EnergyGenerationRecord.insertMany(records);

        console.log("Database seaded successfully.");
    }catch{
        console.error("seeding error", error);
    } finally{
        await mongoose.disconnect();
    }
}
seed();