const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new mongoose.Schema(
	{
		instructor_id: {
			type: Schema.Types.ObjectId,
			ref: 'Instructor',
		},
		student_id: {
			type: Schema.Types.ObjectId,
			ref: 'Student',
		},
		comment_content: {
			type: String,
		},
		rating: {
			type: Number,
		},
	},
	{ timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = {
	Review,
};
