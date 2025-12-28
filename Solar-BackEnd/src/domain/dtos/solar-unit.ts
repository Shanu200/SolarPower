import { z } from "zod";

export const CreateSolarUnitDto = z.object({
    serialNumber: z.string().min(1),
    installationDate: z.string().min(1),
    capacity: z.number(),
    status: z.enum(["Active", "Inactive" ,"Maintenance"]),
    userId: z.string().min(1),
});

export const getAllEnergyGenerationRecordsQueryDto = z.object({
    groupBy: z.enum(["date"]).optional(),
    limit: z.string().min(1),
});