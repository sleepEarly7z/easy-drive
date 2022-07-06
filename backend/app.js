const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const instructorsRouter = require('./routes/instructors');
const appointmentsRouter = require('./routes/appointments');
const reviewsRouter = require('./routes/reviews');

const app = express();

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@ezdrive.nuvqxbk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connection open")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/instructors', instructorsRouter);
app.use('/appointments', appointmentsRouter);
app.use('/reviews', reviewsRouter);

module.exports = app;
