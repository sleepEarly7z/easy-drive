const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    instructor_id: {
        type: String,
        required: true
    },
    student_id: {
        type: String,
        required: true
    },
    comment_content: {
        type: String
    },
    comment_time: {
        type: String
    },
    rating: {
        type: Number
    }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Review
}