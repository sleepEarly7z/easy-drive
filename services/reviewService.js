const { Review } = require('../models/reviewModel');
const {
	ObjectId
} = require('mongodb');

const getReviewById = async (id) => {
	try {
		return Review.findById(id);
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * Get a review with given instructor_id from database
 *
 * @param {string} id
 *
 * @returns {object} reviews with given instructor_id
 * @throws {object} error - type and messages
 */
const getReviewsByInstructorId = async (id) => {
	try {
		return Review.find({ instructor_id: id });
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};


const getReviewsByUserId = async (userType, id) => {
	console.log(userType);
	if (userType === 'instructor') {
		const GET_INSTRUCTOR_REVIEWS_PIPE = [
			{
				'$match': {
					'instructor_id': new ObjectId(`${id}`)
				}
			}, {
				'$lookup': {
					'from': 'students',
					'localField': 'student_id',
					'foreignField': '_id',
					'as': 'student'
				}
			}, {
				'$unwind': {
					'path': '$student'
				}
			}, {
				'$project': {
					'instructor_id': '$instructor_id',
					'student_name': {
						'$concat': [
							'$student.first_name', ' ', '$student.last_name'
						]
					},
					'student_id': '$student_id',
					'comment_content': '$comment_content',
					'rating': '$rating',
					'createdAt': '$createdAt',
					'updatedAt': '$updatedAt'
				}
			}
		];
		try {
			const results = await Review.aggregate(GET_INSTRUCTOR_REVIEWS_PIPE);
			return results;
		} catch (error) {
			throw { type: 'DB', message: error };
		}
	}

	if (userType === 'student') {
		const GET_STUDENT_REVIEWS_PIPE = [
			{
				'$match': {
					'student_id': new ObjectId(`${id}`)
				}
			}, {
				'$lookup': {
					'from': 'instructors',
					'localField': 'instructor_id',
					'foreignField': '_id',
					'as': 'instructor'
				}
			}, {
				'$unwind': {
					'path': '$instructor'
				}
			}, {
				'$project': {
					'instructor_id': '$instructor_id',
					'instructor_name': {
						'$concat': [
							'$instructor.first_name', ' ', '$instructor.last_name'
						]
					},
					'student_id': '$student_id',
					'comment_content': '$comment_content',
					'rating': '$rating',
					'createdAt': '$createdAt',
					'updatedAt': '$updatedAt'
				}
			}
		];
		try {
			const results = await Review.aggregate(GET_STUDENT_REVIEWS_PIPE);
			return results;
		} catch (error) {
			throw { type: 'DB', message: error };
		}
	}

	throw { type: 'DB', message: error };
};

/**
 * Get a review with given student_id from database
 *
 * @param {string} id
 *
 * @returns {object} reviews with given student_id
 * @throws {object} error - type and messages
 */
const getReviewsByStudentId = async (id) => {
	try {
		return Review.find({ student_id: id });
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * Add a review to the database
 *
 * @param {object} review
 *
 * @returns {object} review has been added to the db
 * @throws {object}} error - type and messages
 */
const addReview = async (review) => {
	const newReview = new Review(review);

	// validation https://mongoosejs.com/docs/api.html#document_Document-validateSync
	const validationError = newReview.validateSync();
	if (validationError) {
		throw { type: 'validation', message: validationError };
	}

	try {
		await newReview.save();
		return newReview;
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * delete review with given id from db
 *
 * @param {string} id
 *
 * @returns {object} review deleted
 */
const deleteReviewById = async (id) => {
	try {
		const review = await Review.findByIdAndDelete(id);
		return getReviewsByInstructorId(review.instructor_id);
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

/**
 * Update a review from database
 *
 * @param {string} id
 * @param {object} patch with properties need to update
 *
 * @returns {object} review updated
 */
const updateReviewById = async (id, patch) => {
	try {
		const review = await Review.updateOne({ _id: id }, patch, {
			$set: { isVerifiedEmail: true },
		}).catch((error) => {
			console.log(error);
		});
		console.log(review);
		return Review.findById(id);
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};

module.exports = {
	getReviewsByInstructorId,
	getReviewsByStudentId,
	getReviewById,
	addReview,
	deleteReviewById,
	updateReviewById,
	getReviewsByUserId
};