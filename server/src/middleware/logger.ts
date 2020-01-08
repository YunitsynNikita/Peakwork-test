import { Request, Response, NextFunction } from 'express';

import { publisher } from '../utils/pubsub.helper';

const logger = async (req: Request, res: Response, next: NextFunction) => {
  await publisher.publishMessage(
    'Peakwork-test',
    JSON.stringify({
      method: req.method,
      url: req.url,
      date: new Date().toISOString(),
    }),
  );

  next();
};

export { logger };
