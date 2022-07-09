const mongoose = require('mongoose');
const { Schema } = mongoose;

const express = require('express');
const router = express.Router();

/**
 * timeSlot is a subdocument of appointment
 * 
 * useful references
 * https://mongoosejs.com/docs/subdocs.html#finding-a-subdocument
 * https://mongoosejs.com/docs/subdocs.html#adding-subdocs-to-arrays
 * https://mongoosejs.com/docs/subdocs.html#removing-subdocs
 */
const timeSlotSchema = new mongoose.Schema({
    range: {
        type: String // '7am-8am'
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    studentId: {
        // TODO add reference to student schema
        type: String
    }
});

const TimeSlot = mongoose.model('TimeSlot', timeSlotSchema);

const appointmentSchema = new mongoose.Schema({
    instructor: {
        type: Schema.Types.ObjectId, ref: 'Instructor'
    },
    time_slots: [timeSlotSchema]
})

const Appointment = mongoose.model('Appointment', appointmentSchema);

/**
 * Get all appointments with given instructor id
 * 
 * @returns {Array}
 */
const getAppointmentsByInstructorId = (id) => {
    // TODO
}

module.exports = {
    TimeSlot,
    Appointment,
    getAppointmentsByInstructorId
}