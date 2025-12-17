import  express  from "express";
import { createSolarUnit, deleteSolarUnit, getAllSolarUnits, getSolarUnitsById, updateSolarUnit} from "../application/solar-unit";

const SolarUnitRouter = express.Router();

SolarUnitRouter.route("/").get(getAllSolarUnits).post(createSolarUnit);
SolarUnitRouter
.route("/:id")
.get(getSolarUnitsById)
.put(updateSolarUnit)
.delete(deleteSolarUnit);

export default SolarUnitRouter;