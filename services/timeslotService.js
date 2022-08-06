const Timeslot = require('../models/timeslotModel');

const getTimeslots = async () => {
	try {
		return Timeslot.find({});
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

// const getTimeslotById = async (id) => {
// 	try {
// 		return Timeslot.findById(id);
// 	} catch (error) {
// 		throw { type: 'DB', message: error };
// 	}
// };

const getTimeslotsByInstructorId = async (id) => {
	try {
		return Timeslot.find({ instructor_id: id });
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

const addTimeslot = async (patch) => {
	console.log(patch);
	const newTimeslot = new Timeslot(patch);
	console.log(newTimeslot);

	try {
		await newTimeslot.save();
		return newTimeslot;
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

// const deleteTimeslotById = async (id) => {
// 	try {
// 		const timeslot = await Timeslot.findByIdAndDelete(id);
// 		return getTimeslotById(timeslot.instructor_id);
// 	} catch (error) {
// 		throw { type: 'DB', message: error };
// 	}
// };

// const updateTimeslotById = async (id, patch) => {
// 	try {
// 		const review = await Timeslot.updateOne({ _id: id }, patch, {
// 			$set: { isVerifiedEmail: true },
// 		}).catch((error) => {
// 			console.log(error);
// 		});
// 		console.log(timeslot);
// 		return Timeslot.findById(id);
// 	} catch (error) {
// 		throw { type: 'DB', message: error };
// 	}
// };

module.exports = {
	getTimeslots,
	// getTimeslotById,
	getTimeslotsByInstructorId,
	addTimeslot,
	// updateTimeslotById,
	// deleteTimeslotById,
};
