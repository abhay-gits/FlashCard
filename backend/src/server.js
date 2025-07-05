import express from 'express';
import dotenv from 'dotenv/config';

import connectDB from './db/connection.db.js';
import topicRoute from './routes/topic.route.js';
import flashcardRoute from './routes/flashcard.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/topic', topicRoute)
app.use('/api/flashcard', flashcardRoute);

app.listen(PORT, async() => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});