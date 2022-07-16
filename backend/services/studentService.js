const { v4: uuidv4 } = require('uuid');

const Student = require('../models/studentModel');

/**
 * Get all Students from database
 *
 * @returns {Array} a list of all Students stored in BD
 */
const getStudents = () => {
	try {
		return Student.find({});
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * Get an Student with given id from database
 *
 * @param {string} id
 *
 * @returns {object} Student with given id
 * @throws {object} error - type and messages
 */
const getStudentById = async (id) => {
	try {
		return Student.findById(id);
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * Add an Student to the database
 *
 * @param {object} Student
 *
 * @returns {object} Student has been added to the db
 * @throws {object}} error - type and messages
 */
const addStudent = async (Student) => {
	const newStudent = new Student(Student);

	// validation https://mongoosejs.com/docs/api.html#document_Document-validateSync
	const validationError = newStudent.validateSync();
	if (validationError)
		throw { type: 'validation', message: validationError };

	try {
		await newStudent.save();
		return newStudent;
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * delete Student with given id from db
 *
 * @param {string} id
 *
 * @returns {object} Student deleted
 */
const deleteStudentById = (id) => {
	// TODO
};

/**
 * Update an Student form database
 *
 * @param {string} id
 * @param {object} patch with properties need to update
 *
 * @returns {object} Student updated
 */
const updateStudentById = (id, patch) => {
	// TODO
	// return Student.findByIdAndUpdate(id, patch, { new: true }, (err, Student) => {
	//     if (err) return console.log(err);
	//     console.log(Student);
	// }
	// );
};

/**
 * Update an Student's instructor follow list form database
 *
 * @param {string} id
 * @param {object} patch with properties need to update
 *
 * @returns {object} Student's instructor follow list updated
 */
const followInstructorById = async (id) => {
	const exampleStudentId = '62ce6616d2816a5b9eb398f2';
	const studentFound = await Student.findById(exampleStudentId);
	if (!studentFound.followedInstructors.includes(id)) {
		studentFound.followedInstructors.push(id);
		console.log('new instructor is followed');
	} else {
		console.log('this instructor already followed');
	}
	await studentFound.save();
	return studentFound;
};

module.exports = {
	Student,
	getStudents,
	getStudentById,
	addStudent,
	deleteStudentById,
	updateStudentById,
	followInstructorById,
};
