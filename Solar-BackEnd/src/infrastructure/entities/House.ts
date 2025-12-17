import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    solarUnitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SolarUnit",
        unique: true,
    },
});

export default houseSchema;