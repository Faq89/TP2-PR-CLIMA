import express from 'express';
import connectDB from './db.js';
import SearchHistory from './models/SearchHistory.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.post('/api/history', async (req, res) => {
  const { city, country, temperature, conditionText } = req.body;
  try {
    const newSearch = new SearchHistory({ city, country, temperature, conditionText });
    await newSearch.save();
    res.status(201).json(newSearch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
