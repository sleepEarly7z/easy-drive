const express = require('express');
const router = express.Router();
const service = require('../services/timeslotService');

/**
 * Get all timeslots
 *
 * @verb GET
 * @endpoint /timeslots
 *
 * Responses:
 * Success:
 * @status 200 OK
 * @data timeslots[]
 *
 * Error:
 * @status 500 SERVER ERROR
 * @error message
 */
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

/**
 *  Get all timeslots of one instructor
 *
 *  @description get all timeslots of one instructor
 *
 *  @verb GET
 *  @endpoint /timeslots/:id
 *
 *  Request:
 *  @parameters
 * 		id - instructor id
 *
 *  Response:
 *  Success:
 *  @status 200 OK
 *  @data timeslots
 *
 * 	@status 404 NOT FOUND
 *  @error message
 */
router.get('/:id', function (req, res) {
	const { id } = req.params;
	service
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

/**
 *  Add a timeslot
 *
 *  @description Add timeslot data of one instructor to database when a new instructor account is created
 *
 *  @verb POST
 *  @endpoint /timeslots
 *
 *  Request:
 *  @payload { Timeslot }
 *
 *  Response:
 *  Success:
 *  @status 201 OK
 *  @data { Timeslot } timeslot created
 *
 *  Error:
 *  @status 400 BAD REQUEST
 * 	@error error messages
 *
 *  @status 500 SERVER ERROR
 *  @error error messages
 */
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
