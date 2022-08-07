const mongoose = require('mongoose');

const Instructor = require('../models/instructorModel');
const Student = require('../models/studentModel');
const Review = require('../models/reviewModel');

const Appointment = require('../models/appointmentModel');
const Timeslot = require('../models/timeslotModel');

const { instructors, students } = require('./seedHelpers');
const { TIME_SLOTS, WEEK_DAYS } = require('../utils/constants');

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
	await Timeslot.deleteMany({});
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
				first_name: 1,
				last_name: 1,
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

// random 5 student add 1 review to random 5 instructors
const seedTimeslots = async () => {
	const randomInstructor = await getNRamdonIdsFromModel(
		Instructor,
		10
	);
	const randomStudent = await getNRamdonIdsFromModel(Student, 21);
	for (const instructor of randomInstructor) {
		for (const weekday of WEEK_DAYS) {
			if (weekday === 'Sunday' || weekday === 'Saturday') {
				continue;
			}

			const current_date = new Date();
			const isCorrectWeekday = (element) => element === weekday;
			const weekday_index =
				WEEK_DAYS.findIndex(isCorrectWeekday);
			const today_index = current_date.getDay();

			var db_date_1 = current_date;
			var db_date_2 = new Date();
			var db_date_3 = new Date();
			var db_date_4 = new Date();

			if (weekday_index <= today_index) {
				db_date_1.setDate(
					db_date_1.getDate() +
						(weekday_index + 7 - today_index - 1)
				);
			} else {
				db_date_1.setDate(
					db_date_1.getDate() +
						(weekday_index - today_index - 1)
				);
			}
			db_date_2.setDate(db_date_1.getDate() + 7);
			db_date_3.setDate(db_date_1.getDate() + 14);
			db_date_4.setDate(db_date_1.getDate() + 21);

			const db_date = [
				db_date_1,
				db_date_2,
				db_date_3,
				db_date_4,
			];

			for (const range of TIME_SLOTS) {
				const newTimeSlot = new Timeslot({
					instructor_id: instructor._id,
					instructor_firstname: instructor.first_name,
					instructor_lastname: instructor.last_name,
					weekday: weekday,
					range: range,
				});
				await newTimeSlot.save();

				for (var db_index = 0; db_index < 3; db_index++) {
					var saved_date = db_date[db_index];
					// console.log('saved_date: ' + saved_date);

					let index = Math.floor(Math.random() * 10);
					if (index % 7 === 0) {
						const student =
							randomStudent[
								Math.floor(Math.random() * 21)
							];
						const newAppointment = new Appointment({
							instructor_id: instructor._id,
							instructor_firstname:
								instructor.first_name,
							instructor_lastname: instructor.last_name,
							date: saved_date,
							weekday: weekday,
							range: range,
							isBooked: true,
							student_id: student._id,
							student_firstname: student.first_name,
							student_lastname: student.last_name,
						});
						await newAppointment.save();
					} else {
						const newAppointment = new Appointment({
							instructor_id: instructor._id,
							instructor_firstname:
								instructor.first_name,
							instructor_lastname: instructor.last_name,
							date: saved_date,
							weekday: weekday,
							range: range,
							isBooked: false,
							student_id: null,
							student_firstname: null,
							student_lastname: null,
						});
						await newAppointment.save();
					}
				}
			}
		}
	}
};

const seedAppointments = async () => {
	// get 10 random instructor ids
	const instructorIds = await Instructor.aggregate([
		{
			$sample: {
				size: 10,
			},
		},
		{
			$project: {
				_id: 1,
			},
		},
	]);
	console.log(instructorIds);

	for (const id of instructorIds) {
		console.log(id);

		const sampleTimeSlots = [];
		for (const slot of TIME_SLOTS) {
			const newTimeSlot = {
				isBooked: false,
				range: slot,
				studentId: null,
			};

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
		const avg = await reviewService.getAvgRatingByInstructorId(
			id._id.toString()
		);
		const dist =
			await reviewService.getRatingDistributionByInstructorId(
				id._id.toString()
			);
		await Instructor.findOneAndUpdate(
			{ _id: id },
			{
				rating: avg ? avg : 0,
				ratingDistribution: dist ? dist : [],
			}
		);
	}
	return;
};

updateAllRatings().then(() => {
	mongoose.connection.close();
	console.log('MongoDB connection closed');
});
