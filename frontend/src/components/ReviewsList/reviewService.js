const KEYS = {
    reviews: 'reviews',
    reviewsId: 'reviewsId',
}


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

// export const getRatingCollection = () => [
//     { id: '1', title: '5 stars' },
//     { id: '2', title: '4 stars' },
//     { id: '3', title: '3 stars' },
//     { id: '4', title: '2 stars' },
//     { id: '5', title: '1 stars' },
// ]

export const getClasstypeCollection = () => [
    { id: '1', title: `Driver's license` },
    { id: '2', title: 'Motorcycle license' },
    { id: '3', title: 'Commercial license' },
    { id: '4', title: 'Riding mopeds and scooters' },
]

export function insertReview(data) {
    let reviews = getAllReviews()
    data['id'] = generateReviewId()

    switch (data.ratingStar) {
        case 'onestar':
            data.rating = 1;
            break;
        case 'twostars':
            data.rating = 2;
            break;
        case 'threestars':
            data.rating = 3;
            break;
        case 'fourstars':
            data.rating = 4;
            break;
        case 'fivestars':
            data.rating = 5;
            break;
        default:
            data.rating = 1;
            break;
    }

    const currentDate = new Date();
    data.reviewDate = months[currentDate.getMonth() + 1] + ' ' + currentDate.getDay() + ', ' + currentDate.getFullYear()
    console.log(currentDate)
    console.log(data.reviewDate)

    reviews.push(data)
    localStorage.setItem(KEYS.reviews, JSON.stringify(reviews))
}

export function updateReview(data) {
    let reviews = getAllReviews()
    let recordIndex = reviews.findIndex((x) => x.id === data.id)
    reviews[recordIndex] = { ...data }
    localStorage.setItem(KEYS.reviews, JSON.stringify(reviews))
}

export function generateReviewId() {
    if (localStorage.getItem(KEYS.reviewsId) == null)
        localStorage.setItem(KEYS.reviewsId, '0')
    var id = parseInt(localStorage.getItem(KEYS.reviewsId))
    localStorage.setItem(KEYS.reviewsId, (++id).toString())
    return id
}

export function getAllReviews() {
    if (localStorage.getItem(KEYS.reviews) == null)
        localStorage.setItem(KEYS.reviews, JSON.stringify([]))
    let reviews = JSON.parse(localStorage.getItem(KEYS.reviews))
    let classtypes = getClasstypeCollection()
    return reviews.map((x) => ({
        ...x,
        classtype: classtypes[x.classtypeId - 1].title,
    }))
}
