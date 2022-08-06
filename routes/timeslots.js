const express = require('express');
const router = express.Router();
const service = require('../services/timeslotService');

// get all timeslots
router.get('/', async (req, res) => {
	service
		.getTimeslots()
		.then((timeslots) => {
			console.log(timeslots);
			res.status(200).send({ data: timeslots });
		})
		.catch(() => {
			res.status(404).send({
				error: {
					message: `cannot find timeslots`,
				},
			});
		});
});

// get by timeslots by instructor_id
router.get('/:id', function (req, res) {
	const { id } = req.params;
	service
		// .getTimeslotById(id)
		.getTimeslotsByInstructorId(id)
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

// add timeslot whenever register a new instructor account
router.post('/', function (req, res) {
	const patch = req.body;
	service
		.addTimeslot(patch)
		.then((timeslotAdded) => {
			res.status(201).send({ data: timeslotAdded });
		})
		.catch((error) => {
			res.status(400).send({ error: error.message });
		});
});

module.exports = router;
