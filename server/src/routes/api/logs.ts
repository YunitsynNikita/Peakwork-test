import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import { LogsData as Logs } from '../../data/controllers/logs';

dotenv.config();

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const { logs } = await Logs.getLogs();

  res.status(200).send(logs);
});

export { router as logs };
