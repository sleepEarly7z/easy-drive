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

const getFilteredInstructors = async () => {
    const response = await fetch('http://localhost:3001/instructors/filter', {
        method: 'GET',
    })
    return response.json()
}

const updateFilter = async (id) => {
    const response = await fetch('http://localhost:3001/instructors/filter' + JSON.stringify(id).replaceAll("\"", ""), {
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

const sortFilter = async (condition) => {
    console.log(JSON.stringify(condition))
    const querystring = 'condition=' + JSON.stringify(condition.condition);
    console.log(querystring)
    const response = await fetch('http://localhost:3001/instructors/sort?' + querystring, {
        method: 'GET',
    });

    console.log(response)
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

export default {
    addInstructor,
    getInstructors,
    getFilter,
    updateFilter,
    sortFilter
}
