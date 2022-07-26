const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const Instructor = require('../models/instructorModel');

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			// Get token from header
			token = req.headers.authorization.split(' ')[1];
			// Verify token
			const decoded = jwt.verify(token, 'abc123@!#');
			// Get instructor from token
			req.instructor = await Instructor.findById(
				decoded.id
			).select('-password');

			next();
		} catch (error) {
			console.log(error);
			res.status(401);
			throw new Error('Not authorized');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized');
	}
});

module.exports = { protect };
