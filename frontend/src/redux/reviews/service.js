const getReviewsByInstructorId = async (id) => {
    const response = await fetch('http://localhost:3001/reviews/' + id, {
        method: 'GET',
    })
    console.log('getReviewsByInstructorId response: ' + response)

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }

    return data
}

const getReviewsByStudentId = async (id) => {
    const response = await fetch('http://localhost:3001/reviews/' + id, {
        method: 'GET',
    })
    console.log('response: ' + response)

    const data = await response.json()
    if (!response.ok) {
        const errorMsg = data?.message
        throw new Error(errorMsg)
    }
    console.log('update review: ' + data)
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
    // return data
    return await getReviewsByStudentId(id)
}

// GET Rating
// const getRating = async (id) => {
//     const response = await fetch('http://localhost:3001/reviews/' + id, {
//         method: 'GET',
//     })

//     const reviews = await response.json().data
//     if (!response.ok) {
//         const errorMsg = reviews?.message
//         throw new Error(errorMsg)
//     }
//     console.log('getRating:  ' + reviews)
//     const numberOfReviews = reviews.length
//     const numberOfRatingOne = 0
//     const numberOfRatingTwo = 0
//     const numberOfRatingThree = 0
//     const numberOfRatingFour = 0
//     const numberOfRatingFive = 0
//     const {
//         average,
//         ratingOne,
//         ratingTwo,
//         ratingThree,
//         ratingFour,
//         ratingFive,
//     } = { data }

//     return data
// }

const ReviewService = {
    getReviewsByInstructorId,
    getReviewsByStudentId,
    addReview,
    updateReview,
    deleteReview,
    // getRating,
}

export default ReviewService
