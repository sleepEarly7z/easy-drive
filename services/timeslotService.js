const Timeslot = require('../models/timeslotModel');

const getTimeslots = async () => {
	try {
		return Timeslot.find({});
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

const getTimeslotsByInstructorId = async (id) => {
	try {
		return Timeslot.find({ instructor_id: id });
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

const addTimeslot = async (patch) => {
	const newTimeslot = new Timeslot(patch);

	try {
		await newTimeslot.save();
		return newTimeslot;
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

module.exports = {
	getTimeslots,
	getTimeslotsByInstructorId,
	addTimeslot,
};
