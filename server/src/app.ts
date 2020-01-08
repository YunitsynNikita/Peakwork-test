import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import { airports } from './routes/api/airports';
import { logs } from './routes/api/logs';
import { logger } from './middleware/logger';
import { createShutdownMiddleware } from './middleware/gracefulShutdown';
import { errorHandler } from './middleware/urlErrorHandler';

const app = express();

mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected'))
  .catch((error) => console.error(error));

app.use(bodyParser.json());
app.use(cors());
app.use(logger);

app.use('/', airports);
app.use('/logs', logs);

app.use(errorHandler);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => console.log(`Server started at ${port}`));

app.use(createShutdownMiddleware(server, mongoose));
