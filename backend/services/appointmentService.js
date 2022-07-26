const { Appointment } = require('../models/appointmentModel');

/**
 * Get a review with given instructor_id from database
 *
 * @param {string} id
 *
 * @returns {object} reviews with given instructor_id
 * @throws {object} error - type and messages
 */
const getAppointmentsByInstructorId = async (id) => {
	try {
		return Appointment.find({ instructor_id: id });
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * Get a review with given student_id from database
 *
 * @param {string} id
 *
 * @returns {object} reviews with given student_id
 * @throws {object} error - type and messages
 */
const getAppointmentsByStudentId = async (id) => {
	try {
		return Appointment.find({
			dates: { time_slots: { isBooked: true, student_id: id } },
		});
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

module.exports = {
	getAppointmentsByInstructorId,
	getAppointmentsByStudentId,
};
