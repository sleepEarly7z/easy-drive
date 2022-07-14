const e = require('express');
const express = require('express');
const router = express.Router();

const service = require('../services/studentService');

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
	service.getStudents()
		.then((students) => {
			res.status(200).send({ data: students });
		})
		.catch((error) => {
			res.status(500).send({ error: error.message });
		})
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

	service.getStudentById(id)
		.then((studentFound) => {
			res.status(200).send({ data: studentFound });
		})
		.catch((error) => {
			res.status(404).send({ error: { message: `cannot find STUDENT with id ${id}` } });
		})
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
 *  @status 200 OK
 *  @data { Instructor } instructor added
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

	service.addStudent(inputInstructor)
		.then((instructorAdded) => {
			res.status(200).send({ data: instructorAdded });
		})
		.catch((error) => {
			if (error.type === 'validation') {
				res.status(400).send({ error: error.message });
			} else {
				res.status(500).send({ error: error.message });
			}
		})
});

// DELETE
router.delete('/:id', function (req, res) {
	const id = req.params.id;
	const instructor = service.getStudentById(id);

	if (!instructor) {
		return res.status(404).send(`instructor ${id} not found`);
	}

	const instructorDeleted = service.deleteStudentById(id);
	(instructorDeleted)
		? res.status(200).send(instructorDeleted)
		: res.status(424).send({ message: `failed to delete instructor ${id} from database` })
});

// UPDATE
router.patch('/:id', function (req, res, next) {
	const id = req.params.id;
	const instructor = service.getStudentById(id);

	if (!instructor) {
		return res.status(404).send(`student ${id} not found`);
	}

	const instructorUpdated = service.updateStudentById(id, req.body);

	(instructorUpdated)
		? res.status(200).send(instructorUpdated)
		: res.status(424).send({ message: `failed to update instructor ${id} from database` })
});

// UPDATE followed instructor
router.patch('/followInstructor/:id', function (req, res, next) {
	const id = req.params.id;
	console.log(id)
	// const instructor = service.getStudentById(id);

	// if (!instructor) {
	// 	return res.status(404).send(`student ${id} not found`);
	// }

	const followInstructor = service.followInstructorById(id, req.body);

	(followInstructor)
		? res.status(200).send(followInstructor)
		: res.status(424).send({ message: `failed to follow instructor ${id} from database` })
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

module.exports = router;