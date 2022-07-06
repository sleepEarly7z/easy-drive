const express = require('express');
const router = express.Router();

const service = require('../services/appointmentService');

// EXMAPLE DELETE THIS AFTER IMPLEMENTING
router.get('/', function (req, res) {
	const id = req.params.id;
	const results = service.getAppointmentsByInstructorId(id);

	(results)
		? res.status(200).send(results)
		: res.status(404).send({ message: ` No appointments found` });
});