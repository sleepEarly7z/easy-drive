import axios from 'axios'

const INST_API_URL = 'http://localhost:3001/instructors/'
const STUD_API_URL = 'http://localhost:3001/students/'

// Register as instructor
const register = async (userData) => {
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
const login = async (userData) => {
    console.log(INST_API_URL)
    const response = await axios.post(INST_API_URL + 'login', userData)
    console.log(response.data)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register,
    logout,
    login,
}

export default authService
