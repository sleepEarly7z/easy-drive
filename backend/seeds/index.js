const mongoose = require('mongoose');

const { Instructor } = require('../services/instructorService');
const { TimeSlot, Appointment } = require('../services/appointmentService');

const { instructors } = require('./seedHelpers');
const { TIME_SLOTS } = require('../utils/constants');

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@ezdrive.nuvqxbk.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const clearAll = async () => {
    await Instructor.deleteMany({});
    await Appointment.deleteMany({});
}

const seedInstructor = async () => {
    for (const instructor of instructors) {
        await new Instructor(instructor).save();
    }
}

const seedAppointments = async () => {
    // get 10 random instructor ids
    const instructorIds = await Instructor.aggregate([
        {
            '$sample': {
                'size': 10
            }
        }, {
            '$project': {
                '_id': 1
            }
        }
    ])
    console.log(instructorIds);

    for (const id of instructorIds) {

        const sampleTimeSlots = [];
        for (const slot of TIME_SLOTS) {
            const newTimeSlot = {
                isBooked: false,
                range: slot,
                studentId: null
            }

            sampleTimeSlots.push(newTimeSlot);
        }

        const newAppointment = new Appointment({
            instructor: id._id,
        });

        for (const sampleTimeSlot of sampleTimeSlots) {
            newAppointment.time_slots.push(sampleTimeSlot);
        }

        await newAppointment.save();
    }
};


seedAppointments().then(() => {
    mongoose.connection.close();
    console.log('MongoDB connection closed');
})