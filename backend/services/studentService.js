const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const registerStudent = async (student) => {
	const {
		first_name,
		last_name,
		password,
		email,
		phone,
		photo,
		street,
		city,
		province,
		country,
		followedInstructors,
	} = student;

	// Find if user already exists
	const studentExists = await Student.findOne({ email });

	if (studentExists) {
		throw {
			type: 'validation',
			message: 'Student already exists',
		};
	}

	// Hash password
	// TODO: later after change all password in db into hashed password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create user
	const newStudent = await Student.create({
		first_name,
		last_name,
		password,
		email,
		phone,
		photo,
		street,
		city,
		province,
		country,
		followedInstructors,
	});

	if (newStudent) {
		return {
			_id: newStudent._id,
			name: newStudent.name,
			email: newStudent.email,
			password: newStudent.password,
			token: generateToken(newStudent._id),
		};
	} else {
		throw {
			type: 'validation',
			message: 'Invalid student data',
		};
	}
};

const loginInstructor = async (email, password) => {
	// Find if user exists
	const instructorFound = await Instructor.findOne({
		email: email,
	});

	// Find if user and passwords match
	if (
		instructorFound &&
		// (await bcrypt.compare(password, instructorFound.password))
		password === instructorFound.password
	) {
		return {
			_id: instructorFound._id,
			name: instructorFound.name,
			email: instructorFound.email,
			password: instructorFound.password,
			token: generateToken(instructorFound._id),
		};
	} else {
		throw {
			type: 'validation',
			message: 'Invalid credentials',
		};
	}
};

const getMe = async (req) => {
	const instructor = {
		_id: req.instructor._id,
		email: req.instructor.email,
		first_name: req.instructor.first_name,
		last_name: req.instructor.last_name,
		// password: hashedPassword,
		password: req.instructor.password,
		email: req.instructor.email,
		phone: req.instructor.phone,
		gender: req.instructor.gender,
		photo: req.instructor.phone,
		rating: req.instructor.rating,
		street: req.instructor.street,
		city: req.instructor.city,
		province: req.instructor.province,
		country: req.instructor.country,
		company: req.instructor.company,
		language: req.instructor.language,
		experience: req.instructor.experience,
		license: req.instructor.license,
		description: req.instructor.description,
		isCarProvided: req.instructor.isCarProvided,
	};

	return instructor;
};

// Generate Token
// https://jwt.io/
const generateToken = (id) => {
	return jwt.sign({ id }, 'abc123@!#', {
		expiresIn: '30d',
	});
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
