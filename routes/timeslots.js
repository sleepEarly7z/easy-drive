const express = require('express');
const router = express.Router();
const service = require('../services/timeslotService');

// // get all timeslots
// router.get('/', async (req, res) => {
// 	const data = Timeslot.find({});
// 	return res.send(data);
// });

// get by timeslots id
router.get('/:id', function (req, res) {
	const { id } = req.params;
	service
		.getTimeslotById(id)
		.then((timeslot) => {
			console.log(timeslot);
			res.status(200).send({ data: timeslot });
		})
		.catch(() => {
			res.status(404).send({
				error: {
					message: `cannot find timeslot with timeslot_id ${id}`,
				},
			});
		});
});

// // add timeslots whenever register a new instructor account
// router.post('/', function (req, res) {
// 	const inputReview = req.body;
// 	service
// 		.addReview(inputReview)
// 		.then((reviewAdded) => {
// 			res.status(201).send({ data: reviewAdded });
// 		})
// 		.catch((error) => {
// 			if (error.type === 'validation') {
// 				res.status(400).send({ error: error.message });
// 			} else {
// 				res.status(500).send({ error: error.message });
// 			}
// 		});
// });

// // DELETE
// router.delete('/:id', function (req, res) {
// 	const id = req.params.id;
// 	service
// 		.deleteReviewById(id)
// 		.then((review) => {
// 			// console.log(review);
// 			res.status(200).send({ data: review });
// 		})
// 		.catch((error) => {
// 			res.status(424).send({ error: error.message });
// 		});
// });

// router.patch('/:id', function (req, res) {
// 	const id = req.params.id;
// 	const patch = req.body;
// 	service
// 		.updateReviewById(id, patch)
// 		.then((review) => {
// 			// console.log(review);
// 			res.status(200).send({ data: review });
// 		})
// 		.catch((error) => {
// 			res.status(424).send({ error: error.message });
// 		});
// });

module.exports = router;
