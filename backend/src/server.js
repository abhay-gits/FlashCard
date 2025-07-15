import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';

import connectDB from './db/connection.db.js';
import deckRoute from './routes/deck.route.js';
import flashcardRoute from './routes/flashcard.route.js';
import requireUser from './middleware/requireUser.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(
  {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }
));
app.use(clerkMiddleware());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Flashcard API');
});
app.use('/api/deck', requireUser, deckRoute)
app.use('/api/flashcard', requireUser, flashcardRoute);

app.listen(PORT, async() => {
  try {
    await connectDB();
  } catch (error) {
    process.exit(1); 
  }
});