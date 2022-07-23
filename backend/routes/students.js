const e = require('express');
const express = require('express');
const router = express.Router();

const service = require('../services/studentService');
const { protect } = require('../middleware/authMiddlewareStud');

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
 *  @data instructor
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
	const id = req.params.id;
	const instructor = service.getStudentById(id);

	if (!instructor) {
		return res.status(404).send(`student ${id} not found`);
	}

	const instructorUpdated = service.updateStudentById(id, req.body);
	res.status(200);
	// (instructorUpdated)
	// 	? res.status(200).send(instructorUpdated)
	// 	: res.status(424).send({ message: `failed to update instructor ${id} from database` })
});

// UPDATE followed instructors
router.patch('/followInstructor/:id', function (req, res, next) {
	const id = req.params.id;
	const followInstructor = service.followInstructorById(id);

	followInstructor
		? res.status(200).send(followInstructor)
		: res.status(424).send({
				message: `failed to follow instructor ${id} from database`,
		  });
});

// check current instructor is already followed or not
router.get('/checkFollowList/:id', function (req, res, next) {
	const id = req.params.id;
	service.isInstructorFollowed(id)
		.then((student) => {
			console.log("4" + student.followedInstructors.includes(id))
			res.status(200).send({ data: student.followedInstructors.includes(id) })
		})

		.catch((error) => {
			res.status(500).send({ error: error.message });
		})

	// service.isInstructorFollowed(id)
	// .then((isInstructorFollowed)=> {
	// 	console.log("4"+isInstructorFollowed)
	// 	res.status(200).send({data: isInstructorFollowed})
	// })

});


// router.get('/filter', function (req, res) {
// 	res.send(service.getInstructors());
// });

// const dropDownType = {
// 	BEST_MATCH: 'Best Match',
// 	HIGHEST_RATED: 'Highest Rated'
// }

// router.get('/sort', function (req, res, next) {
// 	const instructors = service.getInstructors();
// 	const condition = req.query.condition.replaceAll('"', '')
// 	if (condition === dropDownType.HIGHEST_RATED) {
// 		console.log("pass1")
// 		instructors.sort(function (a, b) { return b.Rating - a.Rating });
// 	} else if (condition === dropDownType.BEST_MATCH) {
// 		instructors.sort(function (a, b) { return b.experience - a.experience })
// 	} else {
// 		console.log('fail');
// 	}
// 	return res.send(instructors);
// });

// router.delete('/filter/:id', function (req, res, next) {
// 	const instructors = service.getInstructors();
// 	const id = JSON.stringify(req.body.id).replaceAll("\"", "")
// 	console.log(typeof (id) + id)
// 	const deleted = instructors.find(instructor => instructor.id.$oid === id);
// 	if (deleted) {
// 		instructors = instructors.filter(instructor => instructor.id.$oid !== id);
// 		return res.send(deleted);
// 	}
// 	else {
// 		return res.status(404).json({ message: 'instructor you are looking for does not exist' });
// 	}
// });

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

module.exports = router;
