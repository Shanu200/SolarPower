import  express  from "express";
import { createSolarUnit, deleteSolarUnit, getAllSolarUnits, getSolarUnitsById, updateSolarUnit, createSolarUnitValidator} from "../application/solar-unit";

const SolarUnitRouter = express.Router();

SolarUnitRouter.route("/").get(getAllSolarUnits).post(createSolarUnitValidator, createSolarUnit);
SolarUnitRouter
.route("/:id")
.get(getSolarUnitsById)
.put(updateSolarUnit)
.delete(deleteSolarUnit);

export default SolarUnitRouter;