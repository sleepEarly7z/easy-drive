const API_URL = 'https://ezdrive-test-signup.herokuapp.com/timeslots/'

const addTimeslot = async (timeslot) => {
    const {
        instructor_id,
        instructor_firstname,
        instructor_lastname,
        weekday,
        range,
    } = timeslot

    const response = await fetch(`${API_URL}reviews`, {
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

const TimeslotService = {
    addTimeslot,
}

export default TimeslotService
