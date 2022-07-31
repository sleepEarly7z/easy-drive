const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/studentModel');
const service = require('../services/instructorService');
const axios = require('axios');

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
const updateStudentById = async (id, patch) => {
	// https://mongoosejs.com/docs/documents.html#updating-using-queries
	await Student.findOneAndUpdate({ _id: id }, patch, { runValidators: true });
}

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
		role: 'student',
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
		followedInstructors: [],
	});

	if (newStudent) {
		return {
			_id: newStudent._id,
			role: newStudent.role,
			first_name: newStudent.first_name,
			last_name: newStudent.last_name,
			email: newStudent.email,
			password: newStudent.password,
			phone: newStudent.phone,
			photo: newStudent.photo,
			street: newStudent.street,
			city: newStudent.city,
			province: newStudent.province,
			country: newStudent.country,
			followedInstructors: newStudent.followedInstructors,
			token: generateToken(newStudent._id),
		};
	} else {
		throw {
			type: 'validation',
			message: 'Invalid student data',
		};
	}
};

const loginStudent = async (email, password) => {
	// Find if user exists
	const studentFound = await Student.findOne({
		email: email,
	});

	// Find if user and passwords match
	if (
		studentFound &&
		// (await bcrypt.compare(password, studentFound.password))
		password === studentFound.password
	) {
		return {
			_id: studentFound._id,
			role: studentFound.role,
			first_name: studentFound.first_name,
			last_name: studentFound.last_name,
			email: studentFound.email,
			password: studentFound.password,
			phone: studentFound.phone,
			photo: studentFound.photo,
			street: studentFound.street,
			city: studentFound.city,
			province: studentFound.province,
			country: studentFound.country,
			followedInstructors: studentFound.followedInstructors,
			token: generateToken(studentFound._id),
		};
	} else {
		throw {
			type: 'validation',
			message: 'Invalid credentials',
		};
	}
};

const getMe = async (req) => {
	const student = {
		_id: req.student._id,
		role: req.student.role,
		first_name: req.student.first_name,
		last_name: req.student.last_name,
		password: req.student.password,
		email: req.student.email,
		phone: req.student.phone,
		photo: req.student.photo,
		street: req.student.street,
		city: req.student.city,
		province: req.student.province,
		country: req.student.country,
		followedInstructors: req.student.followedInstructors,
	};
	console.log(student);

	return student;
};

// Generate Token
// https://jwt.io/
const generateToken = (id) => {
	return jwt.sign({ id }, 'abc123@!#', {
		expiresIn: '30d',
	});
};

const getNearbyInstructors = async (id, city, street, province) => {
	console.log(id, city, street, province);
	const promises = [];
	const stustreet = street.split(' ').join('%20');
	const stucity = city.split(' ').join('%20');
	const stuprovince = province.split(' ').join('%20');

	return Promise.resolve(service.getQueriedInstructors()).then(async (instructors) => {
		// console.log(instructors);
		const promiseArr = [];
		// const res = axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=AIzaSyA_-GRrfKO0phA9S28YpLrmeGZFvH3Jjgk`)

		for(i of instructors.data) {
			const instStreet = i.street.split(' ').join('%20');
			const instCity = i.city.split(' ').join('%20');
			const instProvince = i.province.split(' ').join('%20');
			const res = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${stustreet}%2C${stucity}%2C${stuprovince}&destinations=${instStreet}%2C${instCity}%2C${instProvince}&units=imperial&key=AIzaSyA_-GRrfKO0phA9S28YpLrmeGZFvH3Jjgk`)
			promiseArr.push({
				instructor: i,
				distance: res
			});
		}
		// console.log(promiseArr);
		return promiseArr;
	}
	)
	.then((res) => {
		console.log(res);
		const resultArray = [];
		return Promise.all(res).then((values) => {
			for (i of values) {
				if(i.distance.data.rows[0].elements[0].status === 'OK') {
					// console.log(i.distance.data.rows[0]);
					if(i.distance.data.rows[0].elements[0].distance.text.split(' ')[0] < 100) {
						resultArray.push({
							instructorID: i.instructor._id,
							instructorName: i.instructor.first_name + ' ' + i.instructor.last_name,
							distance: i.distance.data.rows[0].elements[0].distance.text,
						});
					}
				} else {
					console.log('no distance');
				}
			}
			console.log(resultArray);
			return resultArray;
		}
		).catch((err) => {
			console.log(err);
		});
	}
	)
	.catch((err) => {
		console.log(err);
	}
	);

}


module.exports = {
	Student,
	getStudents,
	getStudentById,
	addStudent,
	deleteStudentById,
	updateStudentById,
	registerStudent,
	loginStudent,
	getMe,
	getNearbyInstructors,
};
