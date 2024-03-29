const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new mongoose.Schema({
    role: {
        type: String,
        default: "student"
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    photo: {
        type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVgdPnMdBjCdxkKFnwvfzcvEA6RTfYRMuEA&usqp=CAU'
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    province: {
        type: String
    },
    country: {
        type: String
    },
    followedInstructors: {
        type: [String]
    }
})

module.exports = mongoose.model('Student', StudentSchema);
