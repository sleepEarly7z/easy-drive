const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const timeSlotSchema = new mongoose.Schema({
    range: {
        type: String // '7am-8am'
    },
    isBooked: {
        type: Boolean
    },
    studentId: {
        type: String
    }
});

const TimeSlot = mongoose.model('TimeSlot', timeSlotSchema);

const appointmentSchema = new mongoose.Schema({
    instructorId: {
        type: String,
        required: true
    },
    time_slots: [timeSlotSchema]
})

const Appointment = mongoose.model('Appointement', appointmentSchema);

/**
 * Get all appointments with given instructor id
 * 
 * @returns {Array}
 */
const getAppointmentsByInstructorId = (id) => {
    // TODO
}

module.exports = {
    getAppointmentsByInstructorId
}