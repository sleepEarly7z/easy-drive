const mongoose = require('mongoose');
const { Schema } = mongoose;

const timeslotSchema = new mongoose.Schema({
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
		default: 'Monday',
	},
	range: {
		type: String,
		default: '9am',
	},
});

module.exports = mongoose.model('Timeslot', timeslotSchema);
