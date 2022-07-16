const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Instructor = require('../models/instructorModel');

/**
 * Get all instructors from database
 *
 * @returns {Array} a list of all instructors stored in BD
 */
const getInstructors = async () => {
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

const registerInstructor = async (instructor) => {
	const {
		first_name,
		last_name,
		password,
		email,
		phone,
		gender,
		photo,
		rating,
		street,
		city,
		province,
		country,
		company,
		language,
		experience,
		license,
		description,
		isCarProvided,
	} = instructor;

	// Find if user already exists
	const instructorExists = await Instructor.findOne({ email });

	if (instructorExists) {
		throw {
			type: 'validation',
			message: 'Instructor already exists',
		};
	}

	// Hash password
	// TODO: later after change all password in db into hashed password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create user
	const newInstructor = await Instructor.create({
		first_name,
		last_name,
		// password: hashedPassword,
		password,
		email,
		phone,
		gender,
		photo,
		rating,
		street,
		city,
		province,
		country,
		company,
		language,
		experience,
		license,
		description,
		isCarProvided,
	});

	if (newInstructor) {
		return {
			_id: newInstructor._id,
			name: newInstructor.name,
			email: newInstructor.email,
			password: newInstructor.password,
			token: generateToken(newInstructor._id),
		};
	} else {
		throw {
			type: 'validation',
			message: 'Invalid instructor data',
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
	console.log("instrucotService 150")
	Instructor.updateOne({ _id: id }, patch, (err, instructor) => {
		if (err) {
			console.log(err)
		} else {
			console.log(instructor)
		}
	})
	// ).then(() => {
	//     return Instructor.findById(id);
	// }
	// );
}

// Generate Token
// https://jwt.io/
const generateToken = (id) => {
	return jwt.sign({ id }, 'abc123@!#', {
		expiresIn: '30d',
	});
};

const getQueriedInstructors = (query) => {
	const { city, language, license, sortBy, sortDir } = query;

	const findQuery = {};
	if (city) {
		const cities = (Array.isArray(city)) ? city : [city];
		findQuery['city'] = { $in: cities };
	}
	if (language) {
		const languages = (Array.isArray(language)) ? language : [language];
		findQuery['language'] = { $in: languages };
	}
	if (license) {
		const licenses = (Array.isArray(license)) ? license : [license];
		findQuery['license'] = { $in: licenses };
	}

	const sortQuery = {};
	sortQuery[sortBy] = (sortDir === 'asc') ? 1 : -1;

	// console.log(findQuery);
	// console.log(sortQuery);

	try {
		return Instructor
			.find(findQuery)
			.sort(sortQuery);
	} catch (error) {
		throw { type: 'DB', message: error };
	}
}

module.exports = {
	getInstructors,
	getInstructorById,
	addInstructor,
	registerInstructor,
	loginInstructor,
	getMe,
	deleteInstructorById,
	updateInstructorById,
	getQueriedInstructors
};
