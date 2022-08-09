const API_URL = 'https://ezdrivemain.herokuapp.com/'

const getReviewsByUserId = async (id, idType) => {
    const response = await fetch(`${API_URL}reviews?${idType}=${id}`, {
        method: 'GET',
    })

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const addReview = async (payload) => {
    const { instructor_id, student_id, comment_content, rating } = payload

    const response = await fetch(`${API_URL}reviews`, {
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

    return data
}

const updateReview = async (payload) => {
    const { _id, instructor_id, student_id, comment_content, rating } = payload

    const response = await fetch(`${API_URL}reviews/${_id}`, {
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

    return data
}

// DELETE
const deleteReview = async (id) => {
    const response = await fetch(`${API_URL}reviews/${id}`, {
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

const ReviewService = {
    getReviewsByUserId,
    addReview,
    updateReview,
    deleteReview,
}

export default ReviewService
