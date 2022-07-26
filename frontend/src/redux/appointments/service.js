const getAppointmentsByInstructorId = async (id) => {
    console.log(id)
    const response = await fetch(`http://localhost:3001/appointments/${id}`, {
        method: 'GET',
    })
    console.log('getAppointmentsByInstructorId response: ' + response)

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const AppointmentService = {
    getAppointmentsByInstructorId,
}

export default AppointmentService
