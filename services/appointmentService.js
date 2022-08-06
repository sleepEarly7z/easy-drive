const Appointment = require('../models/appointmentModel');

const getAppointments = async () => {
	try {
		return Appointment.find({});
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

const getAppointmentsByInstructorId = async (id) => {
	try {
		return Appointment.find({ instructor_id: id });
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

const addAppointment = async (patch) => {
	console.log(patch);
	const newAppointment = new Appointment(patch);
	console.log(Appointment);

	try {
		await newAppointment.save();
		return newAppointment;
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

const updateAppointmentById = async (id, patch) => {
	try {
		const appointment = await Appointment.findOneAndUpdate(
			{ _id: id },
			patch,
			{
				runValidators: true,
			}
		);
		return appointment;
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

module.exports = {
	getAppointments,
	// getTimeslotById,
	getAppointmentsByInstructorId,
	addAppointment,
	updateAppointmentById,
};
