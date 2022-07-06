// WILL BE REMOVED AFTER MONGODB INTEGRATION

const fs = require('fs');
const PATH = './data/instructors.json';

/**
 * Get all instructors from database
 * 
 * @returns {Array} a list of all instructors stored in BD
 */
const getInstructors = () => {
    return JSON.parse(fs.readFileSync(PATH));
}

/**
 * Get an instructor with given id from database
 * 
 * @param {string} id 
 * 
 * @returns {object | null} instructor with given id, null if not found
 */
const getInstructorById = (id) => {
    const instructors = getInstructors();
    const instructor = instructors.find(instructor => instructor.id.$oid === id);
    return instructor ? instructor : null;
}

/**
 * Add an instructor to the database
 * 
 * @param {string} id 
 * 
 * @returns {object} instructor has been added to the db
 */
const addInstructor = (instructor) => {
    const instructors = getInstructors();
    instructors.push(instructor);
    fs.writeFileSync(PATH, JSON.stringify(instructors));
    return instructor;
}

/**
 * delete instructor with given id from db
 * 
 * @param {string} id 
 * 
 * @returns {object} instructor deleted
 */
const deleteInstructorById = (id) => {
    const instructors = getInstructors();
    const instructorToDelete = getInstructorById(id);
    const instructorsAfterDelete = instructors.filter(i => i.id.$oid !== id);
    fs.writeFileSync(PATH, JSON.stringify(instructorsAfterDelete));
    return instructorToDelete;
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
    // delete the old one
    const instructorToUpdate = deleteInstructorById(id);

    // update
    Object.keys(patch).forEach(key => {
        instructorToUpdate[key] = patch[key];
    })

    // add the new one
    addInstructor(instructorToUpdate);
    return instructorToUpdate;
}


module.exports = {
    getInstructors,
    getInstructorById,
    addInstructor,
    deleteInstructorById,
    updateInstructorById
}