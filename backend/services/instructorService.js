const { v4: uuidv4 } = require('uuid');

const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
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
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
    language: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        min: 0
    },
    license: {
        type: String,
        required: true,
        enum: ['Class 5', 'Class 7', 'Class 4']
    },
    description: {
        type: String, default: 'No descirption for this instructor'
    },
    isCarProvided: {
        type: Boolean, default: false
    }
})

const Instructor = mongoose.model('Instructor', instructorSchema);

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

/**
 * Get all instructors from database
 * 
 * @returns {Array} a list of all instructors stored in BD
 */
const getInstructors = () => {
    // TODO
}

/**
 * Get an instructor with given id from database
 * 
 * @param {string} id 
 * 
 * @returns {object | null} instructor with given id, null if not found
 */
const getInstructorById = (id) => {
    // TODO
}

/**
 * Add an instructor to the database
 * 
 * @param {string} id 
 * 
 * @returns {object} instructor has been added to the db
 */
const addInstructor = (instructor) => {
    // TODO
}

/**
 * delete instructor with given id from db
 * 
 * @param {string} id 
 * 
 * @returns {object} instructor deleted
 */
const deleteInstructorById = (id) => {
    // TODO
}

/**
 * Update an instructor form database
 * 
 * @param {string} id 
 * @param {object} patch with properties need to update 
 * 
 * @returns {object} instructor updated 
 */
const updateInstructorById = (id, patch) => {
    // TODO
}

module.exports = {
    Instructor,
    getInstructors,
    getInstructorById,
    addInstructor,
    deleteInstructorById,
    updateInstructorById,
    validateInstructor,
    defaultInstructor
}