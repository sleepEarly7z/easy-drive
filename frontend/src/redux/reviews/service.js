const getReviewsByUserId = async (id, idType) => {
    console.log(idType);
    const response = await fetch(
        `http://localhost:3001/reviews?${idType}=${id}`,
        {
            method: 'GET',
        },
    )
    console.log('getReviewsById response: ' + response)

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const addReview = async (payload) => {
    const { instructor_id, student_id, comment_content, rating } = payload

    const response = await fetch('http://localhost:3001/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            instructor_id,
            student_id,
            comment_content,
            rating,
        }),
    })

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }
    console.log('add review: ' + data)
    return data
}

const updateReview = async (payload) => {
    const { _id, instructor_id, student_id, comment_content, rating } = payload

    console.log(_id)
    console.log(payload)
    const response = await fetch('http://localhost:3001/reviews/' + _id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id,
            instructor_id,
            student_id,
            comment_content,
            rating,
        }),
    })

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }
    console.log('update review: ' + data)
    return data
}

// DELETE
const deleteReview = async (id) => {
    const response = await fetch('http://localhost:3001/reviews/' + id, {
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
    console.log('delete review: ' + data)
    return data
    // return await getReviewsByStudentId(id)
    // return await getReviewsById(id, 'student')
}

const ReviewService = {
    getReviewsByUserId,
    addReview,
    updateReview,
    deleteReview,
}

export default ReviewService
