const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
	role: {
		type: String,
		default: 'instructor',
	},
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		default: 'none',
	},
	photo: {
		type: String,
		default: 'https://picsum.photos/200',
	},
	rating: {
		type: Number,
		default: 0,
	},
	street: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	province: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	company: {
		type: String,
	},
	language: {
		type: String,
		required: true,
	},
	experience: {
		type: Number,
		required: true,
		min: 0,
	},
	license: {
		type: String,
		required: true,
		enum: ['Class 5', 'Class 7', 'Class 4'],
	},
	description: {
		type: String,
		default: 'No descirption for this instructor',
	},
	isCarProvided: {
		type: Boolean,
		default: false,
	},
	ratingDistribution: {
		type: Array,
		default: []
	}
});

module.exports = mongoose.model('Instructor', instructorSchema);
