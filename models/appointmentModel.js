const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new mongoose.Schema({
	instructor_id: {
		type: Schema.Types.ObjectId,
		ref: 'Instructor',
	},
	instructor_firstname: {
		type: String,
	},
	instructor_lastname: {
		type: String,
	},
	date: {
		type: Date,
	},
	weekday: {
		type: String,
		enum: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		],
	},
	range: {
		type: String, // '7am-8am'
	},
	isBooked: {
		type: Boolean,
		default: false,
	},
	student_id: {
		type: Schema.Types.ObjectId,
		ref: 'Student',
		default: null,
	},
	student_firstname: {
		type: String,
		default: null,
	},
	student_lastname: {
		type: String,
		default: null,
	},
});

module.exports = mongoose.model('Appointment', appointmentSchema);
