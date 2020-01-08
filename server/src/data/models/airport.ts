import mongoose from 'mongoose';

const airportsSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  id: String,
  name: String,
  city: String,
  country: String,
  iata: String,
  icao: String,
  latitude: String,
  longitude: String,
  altitude: String,
  timeZone: String,
  dst: String,
  databaseTimeZone: String,
  type: String,
  source: String,
});

const Airport = mongoose.model('Airport', airportsSchema);

export { Airport };
