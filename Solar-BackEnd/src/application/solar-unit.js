import {SolarUnits} from "../infrastructure/data.js";
import {v4 as uuidv4} from "uuid";


export const getAllSolarUnits = async (req, res) => {
    res.status(200).json(SolarUnits);
  
};

export const createSolarUnit = async (req, res) => {
    const {userId, serialNumber, installationDate, Capacity, status} = req.body;

    const newSolarUnit={
        _id: uuidv4(),
        userId,
        serialNumber,
        installationDate,
        Capacity,
        status,
    };

    SolarUnits.push(newSolarUnit);
    res.status(201).json(newSolarUnit);
};

export const getAllSolarUnitsById = async (req, res) => {
    console.log(req.params);

    const {id} = req.params;
    const solarUnit = SolarUnits.find((solarUnit) => solarUnit._id === id);

    if (!solarUnit){
        return res.status(404).json({message: "Solar unit not found"});
    }
    res.status(200).json(solarUnit);
};

export const updateSolarUnit = async (req, res) => {

    const {id} = req.params;
    const {userId, serialNumber, installationDate, Capacity, status} = req.body;
    const solarUnit = SolarUnits.find((solarUnit) => solarUnit._id === id);

        if (!solarUnit){
        return res.status(404).json({message: "Solar unit not found"});
    }

    solarUnit.userId = userId;
    solarUnit.serialNumber = serialNumber;
    solarUnit.installationDate = installationDate;
    solarUnit.Capacity = Capacity;
    solarUnit.status = status;

    res.status(200).json(solarUnit);

};

export const deleteSolarUnit = async (req, res) => {
    const {id} = req.params;
    const idx = SolarUnits.find((solarUnit) => solarUnit._id === id);

    if (!idx){
        return res.status(404).json({message: "Solar unit not found"});
    }
    SolarUnits.splice(idx, 1);
    res.status(200).json({message: "Solar unit deleted successfully"});

};