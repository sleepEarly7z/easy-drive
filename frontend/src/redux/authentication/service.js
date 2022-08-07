import axios from 'axios'

const INST_API_URL = 'http://localhost:3001/instructors/'
const STUD_API_URL = 'http://localhost:3001/students/'
const TIME_API_URL = 'http://localhost:3001/timeslots/'
const APPO_API_URL = 'http://localhost:3001/appointments/'

const TIME_SLOTS = [
    '8am',
    '9am',
    '10am',
    '11am',
    '12noon',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
]

const WEEK_DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const calDay = async (weekday) => {
    const current_date = new Date()
    const isCorrectWeekday = (element) => element === weekday
    const weekday_index = WEEK_DAYS.findIndex(isCorrectWeekday)
    const today_index = current_date.getDay()

    // console.log("current_date: " + current_date);
    // console.log("weekday_index: " + weekday_index);
    // console.log("today_index: " + today_index);

    var db_date_1 = current_date
    var db_date_2 = new Date()
    var db_date_3 = new Date()
    var db_date_4 = new Date()

    if (weekday_index <= today_index) {
        db_date_1.setDate(
            db_date_1.getDate() + (weekday_index + 7 - today_index - 1),
        )
    } else {
        db_date_1.setDate(
            db_date_1.getDate() + (weekday_index - today_index - 1),
        )
    }
    db_date_2.setDate(db_date_1.getDate() + 7)
    db_date_3.setDate(db_date_1.getDate() + 14)
    db_date_4.setDate(db_date_1.getDate() + 21)
    // console.log('db_date_1: ' + db_date_1)
    // console.log('db_date_2: ' + db_date_2)
    // console.log('db_date_3: ' + db_date_3)
    // console.log('db_date_4: ' + db_date_4)

    const db_date = [db_date_1, db_date_2, db_date_3, db_date_4]
    // console.log('db_date: ' + db_date)

    return db_date
}

// Register as instructor
const registerAsInstructor = async (data) => {
    const {
        role,
        first_name,
        last_name,
        password,
        email,
        phone,
        street,
        city,
        province,
        country,
        license,
        experience,
        company,
        language,
        isCarProvided,
        description,
        availability,
    } = data

    const userData = {
        role,
        first_name,
        last_name,
        password,
        email,
        phone,
        street,
        city,
        province,
        country,
        license,
        experience,
        company,
        language,
        isCarProvided,
        description,
    }
    // register instructor account
    console.log(INST_API_URL)
    const response = await axios.post(INST_API_URL, userData)
    console.log(response.data)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    for (const avail_slot of availability) {
        await axios.post(TIME_API_URL, {
            instructor_id: response.data.data._id,
            instructor_firstname: response.data.data.first_name,
            instructor_lastname: response.data.data.last_name,
            weekday: avail_slot.split('-')[0],
            range: avail_slot.split('-')[1],
        })
        // console.log('TIMESLOTS service:')
        // console.log('instructor_id: ' + response.data.data._id)
        // console.log('instructor_firstname:  ' + response.data.data.first_name)
        // console.log('instructor_lastname: ' + response.data.data.last_name)
        // console.log('weekday: ' + avail_slot.split('-')[0])
        // console.log('range: ' + avail_slot.split('-')[1])

        // calculate weekday and date
        const db_date = await calDay(avail_slot.split('-')[0])

        for (var db_index = 0; db_index < 3; db_index++) {
            await axios.post(APPO_API_URL, {
                instructor_id: response.data.data._id,
                instructor_firstname: response.data.data.first_name,
                instructor_lastname: response.data.data.last_name,
                date: db_date[db_index],
                weekday: avail_slot.split('-')[0],
                range: avail_slot.split('-')[1],
                isBooked: false,
                student_id: null,
                student_firstname: null,
                student_lastname: null,
            })
        }
        // console.log('APPOINTMENT service:')
        // console.log('instructor_id: ' + response.data.data._id)
        // console.log('instructor_firstname:  ' + response.data.data.first_name)
        // console.log('instructor_lastname: ' + response.data.data.last_name)
        // console.log('db_date: ' + db_date)
        // console.log('date[0]: ' + db_date[0])
        // console.log('date[1]: ' + db_date[1])
        // console.log('date[2]: ' + db_date[2])
        // console.log('weekday: ' + avail_slot.split('-')[0])
        // console.log('range: ' + avail_slot.split('-')[1])
    }
    // const timeslots = await axios.post(TIME_API_URL, availability)
    // const appointments = await axios.post(APPO_API_URL, availability)

    return response.data
}

// Logout instructor
const logout = () => localStorage.removeItem('user')

// Login as instructor
const loginAsInstructor = async (userData) => {
    console.log(INST_API_URL)
    const response = await axios.post(INST_API_URL + 'login', userData)
    console.log(response.data)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login as student
const loginAsStudent = async (userData) => {
    console.log(STUD_API_URL)
    const response = await axios.post(STUD_API_URL + 'login', userData)
    console.log(response.data)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    registerAsInstructor,
    loginAsInstructor,
    loginAsStudent,
    logout,
}

export default authService
