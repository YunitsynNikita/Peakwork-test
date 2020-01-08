import mongoose from 'mongoose';

const logsSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  date: Date,
  method: String,
  url: String,
});

const Log = mongoose.model('Log', logsSchema);

export { Log };
