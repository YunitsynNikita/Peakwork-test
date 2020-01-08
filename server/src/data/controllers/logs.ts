import { Log } from '../models/log';

const LogsData = {
  getLogs: async () => {
    const logs = await Log.find({});

    return { logs };
  },
};

export { LogsData };
