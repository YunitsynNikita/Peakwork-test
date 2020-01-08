import { Request, Response, NextFunction } from 'express';

const exit = process.exit;

export const createShutdownMiddleware = (server: any, database: any) => {
  process.on('SIGINT', gracefulShutdown);
  process.on('SIGTERM', gracefulShutdown);

  function gracefulShutdown() {
    server.close((err: any) => {
      if (err) {
        console.log(err);
        exit(1);
      }

      database.connection.close(() => {
        exit(0);
      });
    });
  }

  function middleware(req: Request, res: Response, next: NextFunction) {
    return next();
  }

  return middleware;
};
