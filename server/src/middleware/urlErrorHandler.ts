import { Request, Response } from 'express';

import { ResponseError } from '../types/error.types';

const errorHandler = (req: Request, res: Response) => {
  const error: ResponseError = new Error(`Path ${req.url} not found`);

  error.status = 404;
  res.status(error.status || 500).send({ message: error.message });
};

export { errorHandler };
