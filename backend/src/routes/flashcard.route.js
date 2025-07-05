import express from 'express';
import { getFlashcard, postFlashcard, deleteFlashcard } from '../controllers/flashcard.controller.js';
const router = express.Router();

router.get('/', getFlashcard);
router.post('/', postFlashcard);
router.delete('/', deleteFlashcard);

export default router;