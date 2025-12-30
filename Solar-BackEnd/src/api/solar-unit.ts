import  express  from "express";
import { createSolarUnit, deleteSolarUnit, getAllSolarUnits, getSolarUnitById, updateSolarUnit, createSolarUnitValidator, getSolarUnitForUser} from "../application/solar-unit";
import { authenticatonMiddleware } from "./middlewares/authentication-middleware";

const SolarUnitRouter = express.Router();

SolarUnitRouter.route("/").get(getAllSolarUnits).post(createSolarUnitValidator, createSolarUnit);
SolarUnitRouter.route("/me").get(authenticatonMiddleware, getSolarUnitForUser);
SolarUnitRouter
.route("/:id")
.get(getSolarUnitById)
.put(updateSolarUnit)
.delete(deleteSolarUnit);

export default SolarUnitRouter;