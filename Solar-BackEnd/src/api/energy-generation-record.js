import  express  from "express";
import { getAllEnergyGenerationRecordsBySolarUnitId } from "../application/energy-generation-record.js";

const energyGenerationRecodRouter = express.Router();

energyGenerationRecodRouter
.route("/solar-unit/:id")
.get(getAllEnergyGenerationRecordsBySolarUnitId);

export default energyGenerationRecodRouter;