const express = require('express');
const router = express.Router();

const service = require('../services/appointmentService');

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	service
		.getAppointmentsByInstructorId(id)
		// .getAppointmentsByStudentId(id)
		.then((appointment) => {
			res.status(200).send({ data: appointment });
		})
		.catch(() => {
			res.status(404).send({
				error: {
					message: `cannot find appointment with instructor_id ${id}`,
					// message: `cannot find appointment with student_id ${id}`,
				},
			});
		});
});

module.exports = router;
