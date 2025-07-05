import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema({
    topicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic',
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
})

const Flashcard = mongoose.model('Flashcard', topicSchema);
export default Flashcard;