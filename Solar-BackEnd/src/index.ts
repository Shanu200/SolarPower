import "dotenv/config"
import express from "express";
import SolarUnitRouter from "./api/solar-unit";
import energyGenerationRecodRouter from "./api/energy-generation-record";
import { connectDB } from "./infrastructure/db";
import { Request, Response, NextFunction } from "express";
import { loggerMiddleware } from "./api/middlewares/logger-middleware";
import { globalErrorHandler } from "./api/middlewares/global-error-handling-middleware";


const server = express();

server.use(express.json());

server.use(loggerMiddleware);

server.use("/api/solar-units", SolarUnitRouter);
server.use("/api/energy-generation-records", energyGenerationRecodRouter);

server.use(globalErrorHandler);

connectDB();

const PORT = 8002;
server.listen(PORT, () =>{
    console.log(`Server Running on Port ${PORT}`);
});