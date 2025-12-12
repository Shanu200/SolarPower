import  express  from "express";
import { createSolarUnit, deleteSolarUnit, getAllSolarUnits, getAllSolarUnitsById, updateSolarUnit} from "../application/solar-unit.js";

const SolarUnitRouter = express.Router();

SolarUnitRouter.route("/").get(getAllSolarUnits).post(createSolarUnit);
SolarUnitRouter
.route("/:id")
.get(getAllSolarUnitsById)
.put(updateSolarUnit)
.delete(deleteSolarUnit);

export default SolarUnitRouter;