import { handleResponse } from '../utils'
const API_URL = 'https://ezdrive-test-signup.herokuapp.com/'
const baseUrl = `${API_URL}instructors`

const getQueryString = (query) => {
    if (!query) return null

    const { filterBy, sortBy } = query
    let params = new URLSearchParams()

    if (filterBy) {
        for (const category of filterBy) {
            const { categoryName, options } = category
            for (const option of options) {
                params.append(categoryName, option)
            }
        }
    }

    if (sortBy) {
        params.append('sortBy', sortBy.sortBy)
        params.append('sortDir', sortBy.sortDir)
    }

    return params.toString()
}

const getInstructors = async (query) => {
    const queryString = getQueryString(query)
    const url = queryString
        ? `${API_URL}instructors?${queryString}`
        : `${API_URL}instructors`

    console.log(url)

    try {
        const response = await fetch(url, {
            method: 'GET',
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const getInstructorById = (id) => {
    const reqOption = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    return fetch(`${baseUrl}/${id}`, reqOption)
        .then(handleResponse)
        .then((response) => ({ data: response.data }))
        .catch((error) => ({ error }))
}

const updateInstructor = async (payload) => {
    const {
        _id,
        first_name,
        last_name,
        password,
        email,
        phone,
        street,
        city,
        province,
        country,
        company,
        language,
        experience,
        license,
        description,
        time,
        carIsProvided,
    } = payload

    const response = await fetch(`${API_URL}instructors/${payload._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id,
            first_name,
            last_name,
            password,
            email,
            phone,
            street,
            city,
            province,
            country,
            company,
            language,
            experience,
            license,
            description,
            time,
            carIsProvided,
        }),
    })
    
    return response.json()
}

// DELETE
const deleteInstructor = async (id) => {
    const response = await fetch(`${API_URL}instructors/${id}`, {
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

const InstructorService = {
    getInstructors,
    getInstructorById,
    updateInstructor,
    deleteInstructor,
}

export default InstructorService
