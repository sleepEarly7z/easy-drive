import { TIME_SLOTS, WEEK_DAYS, MONTHS } from '../../utils/constants'

const API_URL = 'https://ezdrive-test-signup.herokuapp.com/appointments/'

const getAppointmentsByInstructorID = async (id) => {
    console.log(id)
    const response = await fetch(`${API_URL}${id}`, {
        method: 'GET',
    })

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    if (data) {
        localStorage.setItem('appointments', JSON.stringify(data))
    }
    console.log('getAppointmentsByInstructorID: ' + data)

    return data
}

const addAppointment = async (appointment) => {
    const {
        instructor_id,
        instructor_firstname,
        instructor_lastname,
        weekday,
        range,
    } = appointment

    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            instructor_id,
            instructor_firstname,
            instructor_lastname,
            weekday,
            range,
        }),
    })

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const updateAppointment = async (patch) => {
    const { _id, isBooked, student_id, student_firstname, student_lastname } =
        patch

    const response = await fetch(`${API_URL}${_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            isBooked,
            student_id,
            student_firstname,
            student_lastname,
        }),
    })

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const AppointmentService = {
    getAppointmentsByInstructorID,
    addAppointment,
    updateAppointment,
}

export default AppointmentService
