const { v4: uuidv4 } = require('uuid');

const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		default: 'none',
	},
	photo: {
		type: String,
		default: 'https://picsum.photos/200',
	},
	rating: {
		type: Number,
		default: 0,
	},
	street: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	province: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	company: {
		type: String,
	},
	language: {
		type: String,
		required: true,
	},
	experience: {
		type: Number,
		required: true,
		min: 0,
	},
	license: {
		type: String,
		required: true,
		enum: ['Class 5', 'Class 7', 'Class 4'],
	},
	description: {
		type: String,
		default: 'No descirption for this instructor',
	},
	isCarProvided: {
		type: Boolean,
		default: false,
	},
});

const Instructor = mongoose.model('Instructor', instructorSchema);

/**
 * Get all instructors from database
 *
 * @returns {Array} a list of all instructors stored in BD
 */
const getInstructors = () => {
	try {
		return Instructor.find({});
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * Get an instructor with given id from database
 *
 * @param {string} id
 *
 * @returns {object} instructor with given id
 * @throws {object} error - type and messages
 */
const getInstructorById = async (id) => {
	try {
		return Instructor.findById(id);
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * Add an instructor to the database
 *
 * @param {object} instructor
 *
 * @returns {object} instructor has been added to the db
 * @throws {object}} error - type and messages
 */
const addInstructor = async (instructor) => {
	const newInstructor = new Instructor(instructor);

	// validation https://mongoosejs.com/docs/api.html#document_Document-validateSync
	const validationError = newInstructor.validateSync();
	if (validationError)
		throw { type: 'validation', message: validationError };

	try {
		await newInstructor.save();
		return newInstructor;
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * delete instructor with given id from db
 *
 * @param {string} id
 *
 * @returns {object} instructor deleted
 */
const deleteInstructorById = (id) => {
	// TODO
};

/**
 * Update an instructor form database
 *
 * @param {string} id
 * @param {object} patch with properties need to update
 *
 * @returns {object} instructor updated
 */
const updateInstructorById = (id, patch) => {
	// TODO
};

module.exports = {
	Instructor,
	getInstructors,
	getInstructorById,
	addInstructor,
	deleteInstructorById,
	updateInstructorById,
};
