const { v4: uuidv4 } = require('uuid');

const mongoose = require('mongoose');
const Review = require('./reviewService');

const instructorSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String, default: 'none'
    },
    photo: {
        type: String, default: 'https://picsum.photos/200'
    },
    rating: {
        type: Number, default: 0
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    company: {
        type: String
    },
    language: {
        type: String
    },
    experience: {
        type: Number
    },
    license: {
        type: String
    },
    description: {
        type: String, default: 'No descirption for this instructor'
    },
    time: {
        type: String
    },
    isCarProvided: {
        type: Boolean, default: false
    },
    reviews: [Review],

})

const Instructor = mongoose.model('Instructor', reviewSchema);

/**
 * Checking if input has missing required property
 * 
 * @param {object} inputInstructor 
 * 
 * @returns {object} the validated instructor
 * @throws {string} the first invalid input key
 */
const validateInstructor = (inputInstructor) => {
    console.log('validating');
    for (const [key, value] of Object.entries(inputInstructor)) {
        if (!value) throw key;
    }
    return inputInstructor;
}

/**
 * adding default properties to an instructor
 * 
 * @param {object} instructor that has been validated
 * 
 * @returns {object} instructor with added default properties
 */
const defaultInstructor = (instructor) => ({
    id: { $oid: uuidv4() },
    first_name: instructor.first_name,
    last_name: instructor.last_name,
    password: instructor.password,
    email: instructor.email,
    phone: instructor.phone,
    gender: instructor.gender ? instructor.gender : 'None',
    photo: instructor.photo
        ? instructor.photo
        : 'https://picsum.photos/200',
    Rating: 0,
    street: instructor.street,
    city: instructor.city,
    country: instructor.country,
    company: instructor.company,
    language: instructor.language,
    experience: instructor.experience,
    license: instructor.license,
    description: instructor.description
        ? instructor.description
        : 'No description for this instructor',
    time: instructor.time,
    carIsProvided: instructor.carIsProvided
        ? instructor.carIsProvided
        : 'false',
    reviews: [],
});

module.exports = {
    validateInstructor,
    defaultInstructor
}