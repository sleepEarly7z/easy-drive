const express = require('express');
const router = express.Router();

const instructorsData = require('../data-access/instructorsData');
const { validateInstructor, defaultInstructor } = require('../models/instructors');

router.get('/', function (req, res) {
	let instructorsAll = instructorsData.getInstructors();

	res.status(200).send(instructorsAll);
});

router.get('/:id', function (req, res) {

	const id = req.params.id;
	const instructor = instructorsData.getInstructorById(id);

	(instructor)
		? res.status(200).send(instructor)
		: res.status(404).send({ message: `User ${id} not found` })
});

router.post('/', function (req, res) {
	const inputInstructor = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		password: req.body.password,
		email: req.body.email,
		phone: req.body.phone,
		street: req.body.street,
		city: req.body.city,
		country: req.body.country,
		company: req.body.company,
		language: req.body.language,
		experience: req.body.experience,
		license: req.body.license,
		time: req.body.time,
	}

	try {
		validateInstructor(inputInstructor);
	} catch (invalidProperty) {
		res.status(400).send({ message: `${invalidProperty} cannot be empty` });
	}

	const instructor = defaultInstructor(req.body);

	const instructorAdded = instructorsData.addInstructor(instructor);
	(instructorAdded)
		? res.status(200).send(instructorAdded)
		: res.status(424).send({ message: `failed to add instructor ${instructor.first_name}  ${instructor.lastname} to database` })
});

// DELETE
router.delete('/:id', function (req, res) {
	const id = req.params.id;
	const instructor = instructorsData.getInstructorById(id);

	if (!instructor) {
		return res.status(404).send(`instructor ${id} not found`);
	}

	const instructorDeleted = instructorsData.deleteInstructorById(id);
	(instructorDeleted)
		? res.status(200).send(instructorDeleted)
		: res.status(424).send({ message: `failed to delete instructor ${id} from database` })
});

// UPDATE
router.patch('/:id', function (req, res, next) {
	const id = req.params.id;
	const instructor = instructorsData.getInstructorById(id);

	if (!instructor) {
		return res.status(404).send(`instructor ${id} not found`);
	}

	const instructorUpdated = instructorsData.updateInstructorById(id, req.body);

	(instructorUpdated)
		? res.status(200).send(instructorUpdated)
		: res.status(424).send({ message: `failed to update instructor ${id} from database` })
});

router.get('/filter', function (req, res) {
	res.send(instructorsData.getInstructors());
});

const dropDownType = {
	BEST_MATCH: 'Best Match',
	HIGHEST_RATED: 'Highest Rated'
}

router.get('/sort', function (req, res, next) {
	const instructors = instructorsData.getInstructors();
	const condition = req.query.condition.replaceAll('"', '')
	if (condition === dropDownType.HIGHEST_RATED) {
		console.log("pass1")
		instructors.sort(function (a, b) { return b.Rating - a.Rating });
	} else if (condition === dropDownType.BEST_MATCH) {
		instructors.sort(function (a, b) { return b.experience - a.experience })
	} else {
		console.log("fail")
	}
	return res.send(instructors);
});

router.delete('/filter/:id', function (req, res, next) {
	const instructors = instructorsData.getInstructors();
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
