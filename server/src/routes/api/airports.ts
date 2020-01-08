import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import { AirportsData as Airports } from '../../data/controllers/airport';
import { validation } from '../../middleware/validation';
import { validSchemas } from '../../validation/schemas';

dotenv.config();

const router = express.Router();

router.get(
  '/',
  validation(validSchemas.airportSearchParamSchema, 'query'),
  async (req: Request, res: Response) => {
    const { airports, totalResults } = await Airports.findAirports(req.query);

    res.status(200).send({ airports, totalResults });
  },
);

export { router as airports };
