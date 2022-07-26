const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

const instructorsRouter = require('./routes/instructors');
const appointmentsRouter = require('./routes/appointments');
const reviewsRouter = require('./routes/reviews');
const studentsRouter = require('./routes/students');

// Connect to database
connectDB();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('frontend/build'))

app.use('/instructors', instructorsRouter);
app.use('/appointments', appointmentsRouter);
app.use('/reviews', reviewsRouter);
app.use('/students', studentsRouter);

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname, 'frontend/build/index.html'))
})
module.exports = app;
