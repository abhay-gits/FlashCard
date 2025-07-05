import express from 'express';
import { getTopic, postTopic, updateTopic, deleteTopic } from '../controllers/topic.controller.js';
const router = express.Router();

router.get('/', getTopic);
router.post('/', postTopic);
router.put('/', updateTopic);
router.delete('/:id', deleteTopic);

export default router;