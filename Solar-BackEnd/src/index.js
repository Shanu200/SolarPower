import express from "express";
import SolarUnitRouter from "./api/solar-unit.js";

const server = express();

server.use(express.json());
server.use("/api/solar-units", SolarUnitRouter);

const PORT = 8000;
server.listen(PORT, () =>{
    console.log(`Server Running on Port ${PORT}`);
});