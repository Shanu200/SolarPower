import mongoose from "mongoose";

const SolarUnitSchema = new mongoose.Schema({
    serialNumber: {
        type: String,
        required: true,
        unique: true,
    },
    installationDate: {
        type: Date,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        requires: true,
        enum: ["Active", "Inactive", "Maintenance"],
    },
});

export const SolarUnit = mongoose.model("SolarUnit", SolarUnitSchema);