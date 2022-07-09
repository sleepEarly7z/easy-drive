const getInstructors = async () => {
    const response = await fetch('http://localhost:3001/instructors', {
        method: 'GET',
    })
    return response.json()
}

// const getInstructor = async (id) => {
//     const response = await fetch('http://localhost:3001/instructors/' + id, {
//         method: 'GET',
//     })
//     return response.json()
// }

const addInstructor = async (data) => {
    const {
        first_name,
        last_name,
        password,
        email,
        phone,
        street,
        city,
        country,
        company,
        language,
        experience,
        license,
        description,
        time,
        carIsProvided,
    } = data

    const response = await fetch('http://localhost:3001/instructors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_name,
            last_name,
            password,
            email,
            phone,
            street,
            city,
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

    const result = await response.json()
    if (!response.ok) {
        const errorMsg = result?.message
        throw new Error(errorMsg)
    }

    return result
}

const updateInstructor = async (payload) => {
    const { id, fname, lname, email, phone, street, city, province } = payload
    console.log(id)
    const response = await fetch('http://localhost:3001/instructors/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fname,
            lname,
            email,
            phone,
            street,
            city,
            province,
        }),
    })
    return response.json()
}

// DELETE
const deleteInstructor = async (id) => {
    const response = await fetch('http://localhost:3001/instructors/' + id, {
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

const getFilter = async () => {
    const response = await fetch('http://localhost:3001/instructors/filter', {
        method: 'GET',
    })
    return response.json()
}

const updateFilter = async (id) => {
    const response = await fetch(
        'http://localhost:3001/instructors/filter' +
            JSON.stringify(id).replaceAll('"', ''),
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        },
    )

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const sortFilter = async (condition) => {
    console.log(JSON.stringify(condition))
    const querystring = 'condition=' + JSON.stringify(condition.condition)
    console.log(querystring)
    const response = await fetch(
        'http://localhost:3001/instructors/sort?' + querystring,
        {
            method: 'GET',
        },
    )

    console.log(response)
    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

export default {
    getInstructors,
    // getInstructor,
    addInstructor,
    updateInstructor,
    deleteInstructor,
    getFilter,
    updateFilter,
    sortFilter,
}
