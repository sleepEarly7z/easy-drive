const express = require('express');
const router = express.Router();
const service = require('../services/appointmentService');

// get all appointments
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

// get by appointments by instructor_id
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

// add timeslot whenever register a new instructor account
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

// add timeslot whenever register a new instructor account
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
