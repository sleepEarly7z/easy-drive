const { v4: uuidv4 } = require('uuid');

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
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
	photo: {
		type: String,
		default: 'https://picsum.photos/200',
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
	followedInstructors: {
		type: [String],
	},
});

const Student = mongoose.model('Student', StudentSchema);

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
	console.log('StudentService121');
	console.log(patch.followedInstructors);
	Student.updateOne({ _id: id }, patch, (err, stu) => {
		if (err) {
			console.log(err);
		} else {
			console.log(stu);
		}
	});
};

/**
 * Update an Student's instructor follow list form database
 *
 * @param {string} id
 * @param {object} patch with properties need to update
 *
 * @returns {object} Student's instructor follow list updated
 */
// const followInstructorById = async (id) => {
//     const exampleStudentId = '62ce6616d2816a5b9eb398f2';
//     const studentFound = await Student.findById(exampleStudentId);
//     const {_id,first_name,last_name,password,email,phone,photo,street,city,province,
//         country,followedInstructors} =studentFound;
//     // .then(student => {
//         console.log(_id)
//         console.log(followedInstructors)
//         console.log(studentFound)
//         console.log(studentFound._id)
//         console.log(JSON.stringify(studentFound.followedInstructors))
//         console.log(Array.isArray(studentFound.followedInstructors))

//     if (!studentFound.followedInstructors.includes(id)) {
//         studentFound.followedInstructors.push(id);
//         console.log("new instructor is followed");
//     } else {
//         console.log("this instructor already followed");
//     }
//     await studentFound.save();
//     //.then(() => {return id})
//     //.catch(err=>console.log("error"))
//     return studentFound;

// }
const followInstructorById = (id) => {
	const exampleStudentId = '62ce6616d2816a5b9eb398f2';
	try {
		Student.findById(exampleStudentId).then((student) => {
			if (!student.followedInstructors.includes(id)) {
				student.followedInstructors.push(id);
				console.log('new instructor is followed');
			} else {
				console.log('this instructor already followed');
			}
			student.save().catch((err) => console.log('error'));
		});
		return id;
	} catch (error) {
		throw { type: 'DB', message: error };
	}
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
