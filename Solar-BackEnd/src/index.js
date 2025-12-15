import "dotenv/config.js"
import express from "express";
import SolarUnitRouter from "./api/solar-unit.js";
import energyGenerationRecodRouter from "./api/energy-generation-record.js";
import { connectDB } from "./infrastructure/db.js";


const server = express();

server.use(express.json());
server.use("/api/solar-units", SolarUnitRouter);
server.use("/api/energy-generation-records", energyGenerationRecodRouter);
connectDB();

const PORT = 8002;
server.listen(PORT, () =>{
    console.log(`Server Running on Port ${PORT}`);
});