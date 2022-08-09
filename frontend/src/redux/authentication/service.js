import axios from 'axios'
import { WEEK_DAYS } from '../../utils/constants'

const INST_API_URL = 'https://ezdrive-test-signup.herokuapp.com/instructors/'
const STUD_API_URL = 'https://ezdrive-test-signup.herokuapp.com/students/'
const TIME_API_URL = 'https://ezdrive-test-signup.herokuapp.com/timeslots/'
const APPO_API_URL = 'https://ezdrive-test-signup.herokuapp.com/appointments/'

const calDay = async (weekday) => {
    const current_date = new Date()
    const isCorrectWeekday = (element) => element === weekday
    const weekday_index = WEEK_DAYS.findIndex(isCorrectWeekday)
    const today_index = current_date.getDay()

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

    const db_date = [db_date_1, db_date_2, db_date_3, db_date_4]

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
    }

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
