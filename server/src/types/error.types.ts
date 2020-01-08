import { Request } from 'express';

export interface ResponseError extends Error {
  status?: number;
}

export interface RequestMiddleware extends Request {
  [key: string]: any;
}
