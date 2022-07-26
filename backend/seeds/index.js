const mongoose = require('mongoose');

const Instructor = require('../models/instructorModel');
const Student = require('../models/studentModel');
const Review = require('../models/reviewModel');
const { Appointment } = require('../models/appointmentModel');

const { instructors, students } = require('./seedHelpers');
const { TIME_SLOTS, AVAIL_DATES } = require('../utils/constants');

mongoose.connect(
	'mongodb+srv://m001-student:m001-mongodb-basics@ezdrive.nuvqxbk.mongodb.net/?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const clearAll = async () => {
	// await Instructor.deleteMany({});
	// await Review.deleteMany({});
	// await Student.deleteMany({});
	await Appointment.deleteMany({});
};

const seedInstructor = async () => {
	for (const instructor of instructors) {
		await new Instructor(instructor).save();
	}
};

const seedStudents = async () => {
	for (const student of students) {
		await new Student(student).save();
	}
};

const getNRamdonIdsFromModel = async (model, n) => {
	const ids = await model.aggregate([
		{
			$sample: {
				size: n,
			},
		},
		{
			$project: {
				_id: 1,
			},
		},
	]);
	return ids;
};

// random 5 student add 1 review to random 5 instructors
const seedReviews = async () => {
	const randomStudentIds = await getNRamdonIdsFromModel(
		Student,
		10
	);
	const randomInstructorIds = await getNRamdonIdsFromModel(
		Instructor,
		10
	);

	const randomReviewContent = [
		'Good instructor!',
		'This insctrutor helped me got my N!',
		'Super patient!',
	];

	for (const student of randomStudentIds) {
		for (const instructor of randomInstructorIds) {
			const newReview = new Review({
				instructor_id: instructor._id,
				student_id: student._id,
				comment_content:
					randomReviewContent[
						Math.floor(Math.random() * 2)
					],
				rating: Math.floor(Math.random() * 6),
			});
			await newReview.save();
		}
	}
};

const seedAppointments = async () => {
	// get 10 random instructor ids
	const instructorIds = await Instructor.aggregate([
		{
			$sample: {
				size: 20,
			},
		},
		{
			$project: {
				_id: 1,
			},
		},
	]);
	const studentIds = await Student.aggregate([
		{
			$sample: {
				size: 20,
			},
		},
		{
			$project: {
				_id: 1,
			},
		},
	]);

	for (const id of instructorIds) {
		console.log(id);

		const newAppointment = new Appointment({
			instructor_id: id._id,
			dates: [],
		});

		for (const day of AVAIL_DATES) {
			const sampleDayElement = {
				date: day,
				time_slots: [],
			};
			const sampleTimeSlots = [];
			for (const slot of TIME_SLOTS) {
				const newTimeSlot = {
					isBooked: false,
					range: slot,
					studentId: null,
				};

				const newTimeSlotFilled = {
					isBooked: true,
					range: slot,
					student_id:
						studentIds[Math.floor(Math.random() * 19)]
							._id,
				};

				Math.floor(Math.random() * 6) % 3 === 0
					? sampleTimeSlots.push(newTimeSlotFilled)
					: sampleTimeSlots.push(newTimeSlot);
				// sampleTimeSlots.push(newTimeSlot);
			}

			for (const sampleTimeSlot of sampleTimeSlots) {
				sampleDayElement.time_slots.push(sampleTimeSlot);
			}
			newAppointment.dates.push(sampleDayElement);
			console.log(newAppointment);
		}

		await newAppointment.save();
	}
};

seedAppointments().then(() => {
// clearAll().then(() => {
	mongoose.connection.close();
	console.log('MongoDB connection closed');
});
