import mongoose from 'mongoose';

const SearchHistorySchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  temperature: { type: Number, required: true },
  conditionText: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('SearchHistory', SearchHistorySchema);
