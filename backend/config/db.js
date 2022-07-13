require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			'mongodb+srv://m001-student:m001-mongodb-basics@ezdrive.nuvqxbk.mongodb.net/?retryWrites=true&w=majority',
			{ useNewUrlParser: true, useUnifiedTopology: true }
		);
		console.log(
			`MongoDB Connected: ${conn.connection.host}`.cyan
				.underline
		);
	} catch (error) {
		console.log(`Error: ${error.message}`.red.underline.bold);
		process.exit(1);
	}
};

module.exports = connectDB;
