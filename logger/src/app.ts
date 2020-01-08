import http from 'http';
import { PubSub } from '@google-cloud/pubsub';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { saveLog } from './utils/logMessage.helper';

dotenv.config();

const pubsub = new PubSub();
const subscriptionName = 'Peakwork-test-sub';
const subscription = pubsub.subscription(subscriptionName);

mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected'))
  .catch((error) => console.error(error));

subscription.on('message', saveLog);

const port = process.env.PORT || 5050;
const server = http.createServer();

server.listen(port, () => {
  console.log(`Server started at ${port}`);
});
