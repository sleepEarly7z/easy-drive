const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * timeSlot is a subdocument of appointment
 *
 * useful references
 * https://mongoosejs.com/docs/subdocs.html#finding-a-subdocument
 * https://mongoosejs.com/docs/subdocs.html#adding-subdocs-to-arrays
 * https://mongoosejs.com/docs/subdocs.html#removing-subdocs
 */
const timeSlotSchema = new Schema({
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
	},
});

const appointmentSchema = new mongoose.Schema({
	instructor_id: {
		type: Schema.Types.ObjectId,
		ref: 'Instructor',
	},
	dates: [{ date: { type: Date }, time_slots: [timeSlotSchema] }],
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
const TimeSlot = mongoose.model('TimeSlot', timeSlotSchema);

module.exports = {
	TimeSlot,
	Appointment,
};
