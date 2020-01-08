import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  date: Date,
  method: String,
  url: String,
});

const Log = mongoose.model('Log', logSchema);

export { Log };
