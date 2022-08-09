const e = require('express');
const express = require('express');
const router = express.Router();

const service = require('../services/instructorService');
const { protect } = require('../middleware/authMiddlewareInst');

/**
 * Get all instructors
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
router.get('/', async (req, res) => {
	try {
		const result = await service.getQueriedInstructors(req.query);
		res.status(200).send(result);
	} catch (error) {
		res.status(500).send();
	}
});

/**
 *  Get an instructor
 *
 *  @description get an instructor
 *
 *  @verb GET
 *  @endpoint /instructors/:id
 *
 *  Request:
 *  @parameters
 * 		id - instructor id
 *
 *  Response:
 *  Success:
 *  @status 200 OK
 *  @data instructor
 *
 * 	@status 404 NOT FOUND
 *  @error message
 */
router.get('/:id', function (req, res) {
	const id = req.params.id;

	service
		.getInstructorById(id)
		.then((instructorFound) => {
			console.log(instructorFound);
			res.status(200).send({ data: instructorFound });
		})
		.catch((error) => {
			res.status(404).send({
				error: {
					message: `cannot find instructor with id ${id}`,
				},
			});
		});
});

/**
 *  Register an instructor
 *
 *  @description Add instructor data to database
 *
 *  @verb POST
 *  @endpoint /instructors
 *
 *  Request:
 *  @payload { Instructor }
 *
 *  Response:
 *  Success:
 *  @status 201 OK
 *  @data { Instructor } instructor created
 *
 *  Error:
 *  @status 400 BAD REQUEST
 * 	@error error messages
 *
 *  @status 500 SERVER ERROR
 *  @error error messages
 */
router.post('/', function (req, res) {
	const inputInstructor = req.body;
	service
		.registerInstructor(inputInstructor)
		.then((instructorAdded) => {
			res.status(201).send({ data: instructorAdded });
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
 *  Login as an instructor
 *
 *  @description Login as an instructor using token
 *
 *  @verb POST
 *  @endpoint /instructors
 *
 *  Request:
 *  @payload { Instructor }
 *
 *  Response:
 *  Success:
 *  @status 201 OK
 *  @data { Instructor } instructor token created
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
		.loginInstructor(email, password)
		.then((instructorLoggedIn) => {
			res.status(200).send({ data: instructorLoggedIn });
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

// DELETE
router.delete('/:id', function (req, res) {
	const id = req.params.id;
	const instructor = service.getInstructorById(id);

	if (!instructor) {
		return res.status(404).send(`instructor ${id} not found`);
	}

	const instructorDeleted = service.deleteInstructorById(id);
	instructorDeleted
		? res.status(200).send(instructorDeleted)
		: res.status(424).send({
			message: `failed to delete instructor ${id} from database`,
		});
});

// UPDATE
router.patch('/:id', function (req, res, next) {
	const id = req.params.id;
	console.log('instrucot route 121');
	const instructor = service.getInstructorById(id);

	if (!instructor) {
		return res.status(404).send(`instructor ${id} not found`);
	}
	console.log('instrucot route 127');
	const instructorUpdated = service.updateInstructorById(
		id,
		req.body
	);
	res.status(200);
});

module.exports = router;