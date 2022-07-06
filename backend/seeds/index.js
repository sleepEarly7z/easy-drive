const mongoose = require('mongoose');

// const cities = require('./cities')
// const { places, descriptors } = require('./seedHelpers');

// const Campground = require('../models/campground');
const { Instructor } = require('../services/instructorService');
const { instructors } = require('./seedHelpers');

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@ezdrive.nuvqxbk.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Instructor.deleteMany({});

    for (const instructor of instructors) {
        await new Instructor(instructor).save();
    }

    return;
}


seedDB().then(() => {
    mongoose.connection.close();
    console.log('MongoDB connection closed');
})