import { AnySchema } from '@hapi/joi';
import { Response, NextFunction } from 'express';

import { RequestMiddleware } from 'src/types/error.types';

const validation = (schema: AnySchema, property: string) => {
  return (req: RequestMiddleware, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property]);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const message = error.details.map((detail) => detail.message).join(',');

      res.status(422).json({ error: message });
    }
  };
};

export { validation };
