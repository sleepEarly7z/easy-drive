const { Review } = require('../models/reviewModel');
const Instructor = require('../models/instructorModel');
const ObjectId = require('mongodb').ObjectId;

/**
 * 
 * @param {string} instructorId 
 * 
 * @returns {Number | null} avg rating of that instructor (rouded to two decimal places);
 */
const getAvgRatingByInstructorId = async (instructorId) => {
	const AVG_RATING_PIPLINE = [
		{
			'$match': {
				'instructor_id': ObjectId(`${instructorId}`)
			}
		}, {
			'$group': {
				'_id': '$instructor_id',
				'avgRating': {
					'$avg': '$rating'
				}
			}
		}, {
			'$project': {
				'instructor_id': '$_id.instructor_id',
				'avgRating': {
					'$round': [
						'$avgRating', 2
					]
				}
			}
		}
	];

	try {
		const result = await Review.aggregate(AVG_RATING_PIPLINE);
		const { avgRating } = result[0];
		console.log(`avgRating: ${avgRating}`);
		return avgRating;
	} catch {
		return null;
	}
}

const getRatingDistributionByInstructorId = async (instructorId) => {
	const RATING_DIST_PIPELINE = [
		{
			'$match': {
				'instructor_id': ObjectId(`${instructorId}`)
			}
		}, {
			'$group': {
				'_id': {
					'instructor_id': '$instructor_id',
					'rating': '$rating'
				},
				'ratingCount': {
					'$count': {}
				}
			}
		}, {
			'$group': {
				'_id': {
					'instructor_id': '$_id.instructor_id'
				},
				'totalRatingCounts': {
					'$sum': '$ratingCount'
				},
				'ratingDistribution': {
					'$push': {
						'rating': '$_id.rating',
						'ratingCounts': '$ratingCount'
					}
				}
			}
		}, {
			'$unwind': {
				'path': '$ratingDistribution'
			}
		}, {
			'$project': {
				'instructor_id': '$_id.instructor_id',
				'avgRating': '$avgRating',
				'rating': '$ratingDistribution.rating',
				'ratingCounts': '$ratingDistribution.ratingCounts',
				'ratingRatio': {
					'$round': [
						{
							'$divide': [
								'$ratingDistribution.ratingCounts', '$totalRatingCounts'
							]
						}, 2
					]
				}
			}
		}, {
			'$sort': {
				'rating': 1
			}
		}, {
			'$group': {
				'_id': {
					'instructor_id': '$instructor_id'
				},
				'ratingDistribution': {
					'$push': {
						'rating': '$rating',
						'ratingCounts': '$ratingCounts',
						'ratingRatio': '$ratingRatio'
					}
				}
			}
		}
	];

	try {
		const result = await Review.aggregate(RATING_DIST_PIPELINE);
		const { ratingDistribution } = result[0];
		console.log(`ratingDistribution`);
		console.log(ratingDistribution);
		return ratingDistribution;
	} catch {
		return null;
	}
}

const updateRatingByInstructorId = async (instructorId) => {
	console.log(`updateRatingByInstructorId():`);
	const avg = await getAvgRatingByInstructorId(instructorId);
	console.log(`avg: ${avg}`);
	const dist = await getRatingDistributionByInstructorId(instructorId);
	console.log(`dist:`);
	console.log(dist);
	await Instructor.findOneAndUpdate(
		{ _id: instructorId },
		{ rating: avg ? avg : 0, ratingDistribution: dist ? dist : [] }
	);
	console.log('updatedRating');
	return;
}

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
	// console.log(userType);
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
		const instructorId = newReview.instructor_id.toString();
		await updateRatingByInstructorId(instructorId);
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
		const reviewToDelete = await Review.findById(id);
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
		const updatedReview = await Review.findById(id);
		const instructorId = updatedReview.instructor_id.toString();
		await updateRatingByInstructorId(instructorId);
		return updatedReview;
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
	getReviewsByUserId,
	getAvgRatingByInstructorId,
	getRatingDistributionByInstructorId
};
