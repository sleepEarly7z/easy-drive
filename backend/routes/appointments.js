const express = require('express');
const router = express.Router();

const service = require('../services/appointmentService');

// EXMAPLE DELETE THIS AFTER IMPLEMENTING
// router.get('/', function (req, res) {
// 	const id = req.params.id;
// 	const results = service.getAppointmentsByInstructorId(id);

// 	(results)
// 		? res.status(200).send(results)
// 		: res.status(404).send({ message: ` No appointments found` });
// });

// helpers
const errorWithMessage = (role, id) => ({
	error: {
		message: `cannot find appointments for ${role} ${id}`
	}
})

router.get('/', async (req, res) => {
	const { instructorId, studentId } = req.query;

	if (!instructorId && !studentId) return res.status(400).send();
	if (instructorId && studentId) return res.status(400).send();

	let resultAppointments = [];
	let error = null;

	if (instructorId) {
		try {
			resultAppointments = await service.getAppointmentsByInstructorId(instructorId);
		} catch {
			error = errorWithMessage('instructor', instructorId)
		}
	}

	if (studentId) {
		try {
			resultAppointments = await service.getAppointmentsByStudentId(studentId);
		} catch {
			error = errorWithMessage('student', studentId)
		}
	}

	if (!error) {
		res.status(200).send(resultAppointments);
	} else {
		res.status(400).send(error);
	}
});

module.exports = router;