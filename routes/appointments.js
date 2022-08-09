const express = require('express');
const router = express.Router();
const service = require('../services/appointmentService');

/**
 * Get all appointments
 *
 * @verb GET
 * @endpoint /appointments
 *
 * Responses:
 * Success:
 * @status 200 OK
 * @data appointments[]
 *
 * Error:
 * @status 500 SERVER ERROR
 * @error message
 */
router.get('/', async (req, res) => {
	service
		.getAppointments()
		.then((appointments) => {
			console.log(appointments);
			res.status(200).send({ data: appointments });
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
 *  Get all appointments of one instructor
 *
 *  @description get all appointments of one instructor
 *
 *  @verb GET
 *  @endpoint /appointments/:id
 *
 *  Request:
 *  @parameters
 * 		id - instructor id
 *
 *  Response:
 *  Success:
 *  @status 200 OK
 *  @data appointments
 *
 * 	@status 404 NOT FOUND
 *  @error message
 */
router.get('/:id', function (req, res) {
	const { id } = req.params;
	service
		.getAppointmentsByInstructorId(id)
		.then((appointments) => {
			console.log(appointments);
			res.status(200).send({ data: appointments });
		})
		.catch(() => {
			res.status(404).send({
				error: {
					message: `cannot find appointments with instructor_id ${id}`,
				},
			});
		});
});

/**
 *  Add an appointment
 *
 *  @description Add appointment data of one instructor to database when a new instructor account is created
 *
 *  @verb POST
 *  @endpoint /appointments
 *
 *  Request:
 *  @payload { Appointment }
 *
 *  Response:
 *  Success:
 *  @status 201 OK
 *  @data { Appointment } appointment created
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
		.addAppointment(patch)
		.then((appointmentAdded) => {
			res.status(201).send({ data: appointmentAdded });
		})
		.catch((error) => {
			res.status(400).send({ error: error.message });
		});
});


/**
 *  Update an appointment
 *
 *  @description Update appointment data from unbooked to booked when a student books the current timeslot
 *
 *  @verb POST
 *  @endpoint /appointments
 *
 *  Request:
 *  @payload { Appointment }
 *
 *  Response:
 *  Success:
 *  @status 201 OK
 *  @data { Appointment } appointment updated
 *
 *  Error:
 *  @status 400 BAD REQUEST
 * 	@error error messages
 */
router.patch('/:id', function (req, res) {
	const { id } = req.params;
	const patch = req.body;
	service
		.updateAppointmentById(id, patch)
		.then((appointmentUpdated) => {
			res.status(201).send({ data: appointmentUpdated });
		})
		.catch((error) => {
			res.status(400).send({ error: error.message });
		});
});

module.exports = router;
