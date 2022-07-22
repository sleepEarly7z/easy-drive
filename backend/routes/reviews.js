const express = require('express');
const router = express.Router();

const service = require('../services/reviewService');

/**
 * Get all reviews for one instructor
 *
 * @verb GET
 * @endpoint /instructors
 *
 * Responses:
 * Success:
 * @status 200 OK
 * @data instructors[]
 *
 * Error:
 * @status 500 SERVER ERROR
 * @error message
 */
//  router.get('/', function (req, res) {
// 	const query = req.query;

// 	const getInstructors = (query)
// 		? service.getQueriedInstructors(query)
// 		: service.getInstructors()

// 	getInstructors
// 		.then((instructors) => {
// 			res.status(200).send({ data: instructors });
// 		})
// 		.catch((error) => {
// 			res.status(500).send({ error: error.message });
// 		});
// });

/**
 * Get all reviews of one instructor or one student
 *
 *  @description get one instructor's or student's reviews
 *
 *  @verb GET
 *  @endpoint /reviews/:id
 *
 *  Request:
 *  @parameters
 * 		id - instructor/student id
 *
 *  Response:
 *  Success:
 *  @status 200 OK
 *  @data reviews
 *
 * 	@status 404 NOT FOUND
 *  @error message
 */
router.get('/:id', function (req, res) {
	const id = req.params.id;

	service
		.getReviewsByInstructorId(id)
		.then((reviews) => {
			// console.log(reviews.length);
			res.status(200).send({ data: reviews });
		})
		.catch((error) => {
			res.status(404).send({
				error: {
					message: `cannot find reviews with instructor_id/student_id ${id}`,
				},
			});
		});
});

/**
 *  Add a review to one instructor given student_id
 *
 *  @description Add review data to database
 *
 *  @verb POST
 *  @endpoint /reviewss
 *
 *  Request:
 *  @payload { Review }
 *
 *  Response:
 *  Success:
 *  @status 201 OK
 *  @data { Review } review created
 *
 *  Error:
 *  @status 400 BAD REQUEST
 * 	@error error messages
 *
 *  @status 500 SERVER ERROR
 *  @error error messages
 */
router.post('/', function (req, res) {
	const inputReview = req.body;
	service
		.addReview(inputReview)
		.then((reviewAdded) => {
			res.status(201).send({ data: reviewAdded });
		})
		.catch((error) => {
			if (error.type === 'validation') {
				res.status(400).send({ error: error.message });
			} else {
				res.status(500).send({ error: error.message });
			}
		});
});

// DELETE
router.delete('/:id', function (req, res) {
	const id = req.params.id;
	service
		.deleteReviewById(id)
		.then((review) => {
			console.log(review);
			res.status(200).send({ data: review });
		})
		.catch((error) => {
			res.status(424).send({ error: error.message });
		});
});

router.patch('/:id', function (req, res) {
	const id = req.params.id;
	const patch = req.body;
	service
		.updateReviewById(id, patch)
		.then((review) => {
			console.log(review);
			res.status(200).send({ data: review });
		})
		.catch((error) => {
			res.status(424).send({ error: error.message });
		});
});

module.exports = router;
