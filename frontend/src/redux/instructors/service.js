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
    // console.log('data')
    // console.log(data)
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

    // console.log('result');
    // console.log(result);

    return result
}

const getInstructors = async () => {
    const response = await fetch('http://localhost:3001/instructors', {
        method: 'GET',
    })
    return response.json()
}

export default {
    addInstructor,
    getInstructors,
}
