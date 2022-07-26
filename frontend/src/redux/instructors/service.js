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
        ? `https://easy-drive-405found.herokuapp.com/instructors?${queryString}`
        : `https://easy-drive-405found.herokuapp.com/instructors`

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

const getInstructorById = async (id) => {
    const basicResponse = await fetch(
        'https://easy-drive-405found.herokuapp.com/instructors/' + id,
        {
            method: 'GET',
        },
    )
    // const basicReviews = await fetch('https://easy-drive-405found.herokuapp.com/reviews/' + id, {
    //     method: 'GET',
    // })
    return basicResponse.json()
}

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

    const response = await fetch(
        'https://easy-drive-405found.herokuapp.com/instructors',
        {
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
        },
    )

    const result = await response.json()
    if (!response.ok) {
        const errorMsg = result?.message
        throw new Error(errorMsg)
    }

    return result
}

const updateInstructor = async (payload) => {
    const temp = payload
    // console.log(temp)
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
    // console.log(id)
    // console.log(payload)
    const response = await fetch(
        'https://easy-drive-405found.herokuapp.com/instructors/' + payload._id,
        {
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
        },
    )
    console.log('97 service')
    return response.json()
}

// DELETE
const deleteInstructor = async (id) => {
    const response = await fetch(
        'https://easy-drive-405found.herokuapp.com/instructors/' + id,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    )

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const getFilter = async () => {
    const response = await fetch(
        'https://easy-drive-405found.herokuapp.com/instructors/filter',
        {
            method: 'GET',
        },
    )
    return response.json()
}

const updateFilter = async (id) => {
    const response = await fetch(
        'https://easy-drive-405found.herokuapp.com/instructors/filter' +
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
        'https://easy-drive-405found.herokuapp.com/instructors/sort?' +
            querystring,
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

const InstructorService = {
    getInstructors,
    getInstructorById,
    addInstructor,
    updateInstructor,
    deleteInstructor,
    getFilter,
    updateFilter,
    sortFilter,
}

export default InstructorService