const mongoose = require('mongoose');

const Instructor = require('../models/instructorModel');
const Student = require('../models/studentModel');
const Review = require('../models/reviewModel');

const { TimeSlot, Appointment } = require('../services/appointmentService');
const reviewService = require('../services/reviewService');

const { instructors, students } = require('./seedHelpers');
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
    // await Instructor.deleteMany({});
    await Review.deleteMany({});
    await Student.deleteMany({});
}

const seedInstructor = async () => {
    for (const instructor of instructors) {
        await new Instructor(instructor).save();
    }
}

const seedStudents = async () => {
    for (const student of students) {
        await new Student(student).save();
    }
}

const getNRamdonIdsFromModel = async (model, n) => {
    const ids = await model.aggregate([
        {
            '$sample': {
                'size': n
            }
        }, {
            '$project': {
                '_id': 1
            }
        }
    ])
    return ids;
}

// random 5 student add 1 review to random 5 instructors
const seedReviews = async () => {
    const randomStudentIds = await getNRamdonIdsFromModel(Student, 10);
    const randomInstructorIds = await getNRamdonIdsFromModel(Instructor, 10);

    const randomReviewContent = [
        'Good instructor!',
        'This insctrutor helped me got my N!',
        'Super patient!'
    ]

    for (const student of randomStudentIds) {
        for (const instructor of randomInstructorIds) {
            const newReview = new Review({
                instructor_id: instructor._id,
                student_id: student._id,
                comment_content: randomReviewContent[Math.floor(Math.random() * 2)],
                rating: Math.floor(Math.random() * 6)
            })
            await newReview.save();
        }
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
        console.log(id);

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

const updateAllRatings = async () => {
    // getting all ids
    const ids = await Instructor.find().select({ _id: 1 });
    for (const id of ids) {
        const avg = await reviewService.getAvgRatingByInstructorId(id._id.toString());
        const dist = await reviewService.getRatingDistributionByInstructorId(id._id.toString());
        await Instructor.findOneAndUpdate({ _id: id }, { rating: avg ? avg : 0, ratingDistribution: dist ? dist : [] });
    }
    return;
};

updateAllRatings().then(() => {
    mongoose.connection.close();
    console.log('MongoDB connection closed');
})