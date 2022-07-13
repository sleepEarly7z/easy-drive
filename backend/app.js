const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
// const mongoose = require('mongoose');
const connectDB = require('./config/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const instructorsRouter = require('./routes/instructors');
const appointmentsRouter = require('./routes/appointments');
const reviewsRouter = require('./routes/reviews');

// Connect to database
connectDB();

const app = express();

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
