const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const users = [
	{ id: uuid(), name: 'Stephanie' },
	{ id: uuid(), name: 'Ian' },
	{ id: uuid(), name: 'Danya' },
];

router.get('/', function (req, res, next) {
	return res.send(users);
});

router.get('/:userId', function (req, res, next) {
	const foundUser = users.find(
		(user) => user.id === req.params.userId
	);

	if (!foundUser)
		return res.status(404).send({ message: 'User not found' });

	return res.send(foundUser);
});

router.post('/', function (req, res, next) {
	if (!req.body.name) {
		return res
			.status(400)
			.send({ message: 'User must have a name!' });
	}
	const user = { id: uuid(), name: req.body.name };
	users.push(user);
	return res.send(user);
});

module.exports = router;
