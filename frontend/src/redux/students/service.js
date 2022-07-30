import { handleResponse } from '../utils'

const API_URL = 'https://ezdrive-test-merge.herokuapp.com/'
const baseUrl = `${API_URL}students`

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
    const reqOption = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patch),
    }

    return fetch(`${baseUrl}/${id}`, reqOption)
        .then(handleResponse)
        .catch((error) => ({ error }))
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

const getStudentById = (id) => {
    const reqOption = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    return fetch(`${baseUrl}/${id}`, reqOption)
        .then(handleResponse)
        .then((response) => ({ info: response.data }))
        .catch((error) => ({ error }))
}

const studentService = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById,
}

export default studentService
