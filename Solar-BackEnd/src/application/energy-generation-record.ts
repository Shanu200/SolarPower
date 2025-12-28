import mongoose from "mongoose";
import { getAllEnergyGenerationRecordsQueryDto } from "../domain/dtos/solar-unit";
import { ValidationError } from "../domain/errors/errors";
import { EnergyGenerationRecord } from "../infrastructure/entities/EnergyGenerationRecord";
import { NextFunction, Request, Response } from "express";

export const getAllEnergyGenerationRecordsBySolarUnitId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const results = getAllEnergyGenerationRecordsQueryDto.safeParse(req.query);
    if (!results.success) {
      throw new ValidationError(results.error.message);
    }

    const { groupBy, limit = "10" } = results.data;
    const limitNumber = Number(limit);

    // NO GROUPING → normal find
    if (!groupBy) {
      const records = await EnergyGenerationRecord.find({
        solarUnitId: id,
      }).sort({ timestamp: -1 });

      return res.status(200).json(records);
    }

    // GROUP BY DATE
    if (groupBy === "date") {
      const pipeline: any[] = [];

      // Match solar unit
      pipeline.push({
        $match: {
          solarUnitId: new mongoose.Types.ObjectId(id),
        },
      });

      //  Group by date
      pipeline.push({
        $group: {
          _id: {
            date: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$timestamp",
              },
            },
          },
          totalEnergy: { $sum: "$energyGenerated" },
        },
      });

      //  Sort
      pipeline.push({
        $sort: { "_id.date": -1 },
      });

      //  Limit (only if valid)
      if (!isNaN(limitNumber) && limitNumber > 0) {
        pipeline.push({ $limit: limitNumber });
      }

      const records = await EnergyGenerationRecord.aggregate(pipeline);
      return res.status(200).json(records);
    }

  } catch (error) {
    next(error);
  }
};
