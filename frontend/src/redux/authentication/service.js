import axios from 'axios'

const INST_API_URL = 'https://ezdrive-test-3.herokuapp.com/instructors/'
const STUD_API_URL = 'https://ezdrive-test-3.herokuapp.com/students/'

// Register as instructor
const registerAsInstructor = async (userData) => {
    console.log(INST_API_URL)
    const response = await axios.post(INST_API_URL, userData)
    console.log(response.data)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
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
