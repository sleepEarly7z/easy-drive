const mongoose = require('mongoose');

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

const appoitmentSchema = new mongoose.Schema({
    instructorId: {
        type: String,
        required: true
    },
    time_slots: {
        type: [TimeSlot]
    }
})

const Appointment = mongoose.model('Appointement', appoitmentSchema);