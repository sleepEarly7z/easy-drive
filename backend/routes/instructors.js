const express = require('express');
const router = express.Router();

const service = require('../services/instructorService');

/**
 * 
 */
router.get('/', function (req, res) {
	let instructorsAll = service.getInstructors();

	res.status(200).send(instructorsAll);
});

router.get('/:id', function (req, res) {

	const id = req.params.id;
	const instructor = service.getInstructorById(id);

	(instructor)
		? res.status(200).send(instructor)
		: res.status(404).send({ message: `User ${id} not found` })
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
 *  @parameters
 *  @payload { Instructor }
 * 
 *  Response:
 *  Success:
 *  @status 200 OK
 *  @payload { Instructor } instructor added
 * 
 *  Error:
 *  @status 400 BAD REQUEST
 * 	@payload error messages
 */
router.post('/', function (req, res) {
	console.log('adding new instructor')
	const inputInstructor = req.body;

	service.addInstructor(inputInstructor)
		.then((instructorAdded) => {
			console.log('instructor added')
			res.status(200).send(instructorAdded);
		})
		.catch((error) => {
			console.log('adding instructor failed')
			res.status(400).send(error);
		})
});

// DELETE
router.delete('/:id', function (req, res) {
	const id = req.params.id;
	const instructor = service.getInstructorById(id);

	if (!instructor) {
		return res.status(404).send(`instructor ${id} not found`);
	}

	const instructorDeleted = service.deleteInstructorById(id);
	(instructorDeleted)
		? res.status(200).send(instructorDeleted)
		: res.status(424).send({ message: `failed to delete instructor ${id} from database` })
});

// UPDATE
router.patch('/:id', function (req, res, next) {
	const id = req.params.id;
	const instructor = service.getInstructorById(id);

	if (!instructor) {
		return res.status(404).send(`instructor ${id} not found`);
	}

	const instructorUpdated = service.updateInstructorById(id, req.body);

	(instructorUpdated)
		? res.status(200).send(instructorUpdated)
		: res.status(424).send({ message: `failed to update instructor ${id} from database` })
});

router.get('/filter', function (req, res) {
	res.send(service.getInstructors());
});

const dropDownType = {
	BEST_MATCH: 'Best Match',
	HIGHEST_RATED: 'Highest Rated'
}

router.get('/sort', function (req, res, next) {
	const instructors = service.getInstructors();
	const condition = req.query.condition.replaceAll('"', '')
	if (condition === dropDownType.HIGHEST_RATED) {
		console.log("pass1")
		instructors.sort(function (a, b) { return b.Rating - a.Rating });
	} else if (condition === dropDownType.BEST_MATCH) {
		instructors.sort(function (a, b) { return b.experience - a.experience })
	} else {
		console.log('fail');
	}
	return res.send(instructors);
});

router.delete('/filter/:id', function (req, res, next) {
	const instructors = service.getInstructors();
	const id = JSON.stringify(req.body.id).replaceAll("\"", "")
	console.log(typeof (id) + id)
	const deleted = instructors.find(instructor => instructor.id.$oid === id);
	if (deleted) {
		instructors = instructors.filter(instructor => instructor.id.$oid !== id);
		return res.send(deleted);
	}
	else {
		return res.status(404).json({ message: 'instructor you are looking for does not exist' });
	}
});

module.exports = router;