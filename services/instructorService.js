const jwt = require('jsonwebtoken');

const Instructor = require('../models/instructorModel');
const helpers = require('../utils/helpers');
const {
	DEFUALT_SORT_DIR,
} = require('../utils/constants');

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
		const instructor = await Instructor.findById(id).lean();
		return instructor;
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

	// Create user
	const newInstructor = await Instructor.create({
		role: 'instructor',
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
	});

	if (newInstructor) {
		return {
			_id: newInstructor._id,
			role: newInstructor.role,
			first_name: newInstructor.first_name,
			last_name: newInstructor.last_name,
			email: newInstructor.email,
			password: newInstructor.password,
			phone: newInstructor.phone,
			gender: newInstructor.gender,
			photo: newInstructor.photo,
			rating: newInstructor.rating,
			street: newInstructor.street,
			city: newInstructor.city,
			province: newInstructor.province,
			country: newInstructor.country,
			company: newInstructor.company,
			language: newInstructor.language,
			experience: newInstructor.experience,
			license: newInstructor.license,
			description: newInstructor.description,
			isCarProvided: newInstructor.isCarProvided,
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
		password === instructorFound.password
	) {
		return {
			_id: instructorFound._id,
			role: instructorFound.role,
			first_name: instructorFound.first_name,
			last_name: instructorFound.last_name,
			email: instructorFound.email,
			password: instructorFound.password,
			phone: instructorFound.phone,
			gender: instructorFound.gender,
			photo: instructorFound.photo,
			rating: instructorFound.rating,
			street: instructorFound.street,
			city: instructorFound.city,
			province: instructorFound.province,
			country: instructorFound.country,
			company: instructorFound.company,
			language: instructorFound.language,
			experience: instructorFound.experience,
			license: instructorFound.license,
			description: instructorFound.description,
			isCarProvided: instructorFound.isCarProvided,
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
		role: req.instructor.role,
		email: req.instructor.email,
		first_name: req.instructor.first_name,
		last_name: req.instructor.last_name,
		password: req.instructor.password,
		email: req.instructor.email,
		phone: req.instructor.phone,
		gender: req.instructor.gender,
		photo: req.instructor.photo,
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
 * Update an instructor from database
 *
 * @param {string} id
 * @param {object} patch with properties need to update
 *
 * @returns {object} instructor updated
 */
const updateInstructorById = (id, patch) => {
	Instructor.updateOne({ _id: id }, patch, (err, instructor) => {
		if (err) {
			console.log(err);
		} else {
			console.log(instructor);
		}
	});
};

// Generate Token
// https://jwt.io/
const generateToken = (id) => {
	return jwt.sign({ id }, 'abc123@!#', {
		expiresIn: '30d',
	});
};

const getQueriedInstructors = async (query) => {
	const findQuery = {};
	const sortQuery = { DEFAULT_SORT_BY: DEFUALT_SORT_DIR };

	if (query) {
		const {
			city,
			language,
			license,
			sortBy,
			sortDir,
			offset,
			limit,
		} = query;

		if (city) {
			const cities = helpers.toArray(city);
			findQuery['city'] = { $in: cities };
		}
		if (language) {
			const languages = helpers.toArray(language);
			findQuery['language'] = { $in: languages };
		}
		if (license) {
			const licenses = helpers.toArray(license);
			findQuery['license'] = { $in: licenses };
		}

		if (sortBy && sortDir) {
			sortQuery[sortBy] = sortDir === 'asc' ? 1 : -1;
		}

		if (offset) offset = offset;
		if (limit) limit = limit;
	}

	try {
		const total = await Instructor.count(findQuery);
		const data = await Instructor
			.find(findQuery)
			.sort(sortQuery)
		return { total, data };
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getInstructorById,
	addInstructor,
	registerInstructor,
	loginInstructor,
	getMe,
	updateInstructorById,
	getQueriedInstructors
};
