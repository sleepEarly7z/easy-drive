const API_URL = 'https://ezdrive-test-3.herokuapp.com/'

const addUser = async (name) => {
    const response = await fetch(`${API_URL}users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(name),
    })

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const getUsers = async () => {
    const response = await fetch(`${API_URL}users`, {
        method: 'GET',
    })
    return response.json()
}

export default {
    addUser,
    getUsers,
}
