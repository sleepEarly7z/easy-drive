const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema(
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

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = {
	Appointment,
};
