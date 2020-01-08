import mongoose from 'mongoose';

import { Log } from '../data/models/log';

export const saveLog = async (message: {
  data: string;
  id: string;
  ack: () => void;
}) => {
  const { method, url, date } = JSON.parse(message.data);
  const log = new Log({
    _id: new mongoose.Types.ObjectId(),
    method,
    url,
    date,
  });

  log.save();
  message.ack();
};
