const e = require('express');
const express = require('express');
const router = express.Router();

const service = require('../services/studentService');
const { protect } = require('../middleware/authMiddlewareStud');

/**
 * Get all students
 *
 * @verb GET
 * @endpoint /students
 *
 * Responses:
 * Success:
 * @status 200 OK
 * @data students[]
 *
 * Error:
 * @status 500 SERVER ERROR
 * @error message
 */
router.get('/', function (req, res) {
	service
		.getStudents()
		.then((students) => {
			res.status(200).send({ data: students });
		})
		.catch((error) => {
			res.status(500).send({ error: error.message });
		});
});

/**
 *  Get a student
 *
 *  @description get a student
 *
 *  @verb GET
 *  @endpoint /students/:id
 *
 *  Request:
 *  @parameters
 * 		id - student id
 *
 *  Response:
 *  Success:
 *  @status 200 OK
 *  @data student
 *
 * 	@status 404 NOT FOUND
 *  @error message
 */
router.get('/:id', function (req, res) {
	const id = req.params.id;

	service
		.getStudentById(id)
		.then((studentFound) => {
			res.status(200).send({ data: studentFound });
		})
		.catch((error) => {
			res.status(404).send({
				error: {
					message: `cannot find STUDENT with id ${id}`,
				},
			});
		});
});

// DELETE
router.delete('/:id', function (req, res) {
	const id = req.params.id;
	const instructor = service.getStudentById(id);

	if (!instructor) {
		return res.status(404).send(`instructor ${id} not found`);
	}

	const instructorDeleted = service.deleteStudentById(id);
	instructorDeleted
		? res.status(200).send(instructorDeleted)
		: res.status(424).send({
			message: `failed to delete instructor ${id} from database`,
		});
});

// UPDATE
router.patch('/:id', function (req, res, next) {
	const { id } = req.params;
	const patch = req.body;
	if (!id || !patch) return res.status(400).send();

	const student = service.getStudentById(id);
	if (!student) return res.status(404).send(`student ${id} not found`);

	const instructorUpdated = service.updateStudentById(id, patch);
	(instructorUpdated)
		? res.status(200).send(instructorUpdated)
		: res.status(424).send({ message: `failed to update instructor ${id} from database` })
});

/**
 *  Register a student
 *
 *  @description Add student data to database
 *
 *  @verb POST
 *  @endpoint /students
 *
 *  Request:
 *  @payload { Student }
 *
 *  Response:
 *  Success:
 *  @status 201 OK
 *  @data { Student } student created
 *
 *  Error:
 *  @status 400 BAD REQUEST
 * 	@error error messages
 *
 *  @status 500 SERVER ERROR
 *  @error error messages
 */
router.post('/', function (req, res) {
	const inputStudent = req.body;
	service
		.registerStudent(inputStudent)
		.then((studentAdded) => {
			res.status(201).send({ data: studentAdded });
		})
		.catch((error) => {
			if (error.type === 'validation') {
				res.status(400).send({ error: error.message });
			} else {
				res.status(500).send({ error: error.message });
			}
		});
});

/**
 *  Login as a student
 *
 *  @description Login as a student using token
 *
 *  @verb POST
 *  @endpoint /students
 *
 *  Request:
 *  @payload { Student }
 *
 *  Response:
 *  Success:
 *  @status 201 OK
 *  @data { Student } student token created
 *
 *  Error:
 *  @status 401 BAD REQUEST
 * 	@error error messages
 *
 *  @status 500 SERVER ERROR
 *  @error error messages
 */
router.post('/login', function (req, res) {
	const { email, password } = req.body;
	service
		.loginStudent(email, password)
		.then((studentLoggedIn) => {
			res.status(200).send({ data: studentLoggedIn });
		})
		.catch((error) => {
			if (error.type === 'validation') {
				res.status(401).send({ error: error.message });
			} else {
				res.status(500).send({ error: error.message });
			}
		});
});

router.get('/login/me', protect, function (req, res) {
	service
		.getMe(req)
		.then((me) => {
			res.status(200).send({ data: me });
		})
		.catch((error) => {
			if (error.type === 'validation') {
				res.status(401).send({ error: error.message });
			} else {
				res.status(500).send({ error: error.message });
			}
		});
});

router.post('/nearby/:id', function (req, res) {
	const id = req.params.id;
	const city = req.body.city;
	const street = req.body.street;
	const province = req.body.province;
	console.log(req.body.city);
	service
		.getNearbyInstructors(id, city, street, province)
		.then((nearby) => {
			res.status(200).send({ nearby });
		})
		.catch((error) => {
		});
}
);


module.exports = router;