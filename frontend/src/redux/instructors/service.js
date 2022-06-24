const addInstructor = async (name) => {
    const response = await fetch('http://localhost:3001/instructors', {
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

const getInstructors = async () => {
    const response = await fetch('http://localhost:3001/instructors', {
        method: 'GET',
    })
    return response.json()
}

const getFilter = async () => {
    const response = await fetch('http://localhost:3001/instructors/filter', {
        method: 'GET',
    })
    return response.json()
}

const updateFilter = async (id) => {
    const response = await fetch('http://localhost:3001/instructors/filter'+JSON.stringify(id).replaceAll("\"", ""), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

const updateInstructor = async (payload) => {
    const {
        id,
        fname,
        lname,
        email,
        phone,
        street,
        city,
        province,
    } = payload;
    console.log(id);
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

export default {
    addInstructor,
    getInstructors,
    updateInstructor,
}
