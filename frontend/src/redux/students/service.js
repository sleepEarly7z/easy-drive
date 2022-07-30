const API_URL = 'https://ezdrive-test-3.herokuapp.com/'

const getStudents = async () => {
    const response = await fetch(`${API_URL}students`, {
        method: 'GET',
    })
    // console.log("getInstructors()");
    return response.json()
}

const addStudent = async (data) => {
    const {
        first_name,
        last_name,
        email,
        phone,
        street,
        city,
        province,
        country,
    } = data
    const response = await fetch(`${API_URL}students`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone,
            street,
            city,
            province,
            country,
        }),
    })

    const result = await response.json()
    if (!response.ok) {
        const errorMsg = result?.message
        throw new Error(errorMsg)
    }
    return result
}

const updateStudent = async (id, patch) => {
    const response = await fetch(`${API_URL}students/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patch),
    })
    return response.json()
}

const deleteStudent = async (id) => {
    const response = await fetch(`${API_URL}students/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const studentService = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
}

export default studentService
