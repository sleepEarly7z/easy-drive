export const FILTER_CATEGORIES = [
    {
        id: 1,
        name: 'city',
        options: [
            'Vancouver',
            'Richmond',
            'Burnaby',
            'Surrey',
            'Coquitlam',
            'North Vancouver',
            'West Vancouver',
        ],
    },
    {
        id: 2,
        name: 'language',
        options: [
            'English',
            'Mandarin',
            'Cantonese',
            'Korean',
            'Japanese',
            'Punjabi',
        ],
    },
    {
        id: 3,
        name: 'license',
        options: ['Class 7', 'Class 5', 'Class 4'],
    },
]

export const SORT_OPTIONS = [
    {
        label: 'rating (high to low)',
        value: 'ratingDesc',
        payload: {
            sortBy: 'rating',
            sortDir: 'desc',
        },
    },
    {
        label: 'rating (low to high)',
        value: 'ratingAsc',
        payload: {
            sortBy: 'rating',
            sortDir: 'asc',
        },
    },
    {
        label: 'experience (less to more)',
        value: 'experienceAsc',
        payload: {
            sortBy: 'experience',
            sortDir: 'asc',
        },
    },
    {
        label: 'experience (more to less)',
        value: 'experienceDesc',
        payload: {
            sortBy: 'experience',
            sortDir: 'desc',
        },
    },
]

export const TIME_SLOTS = [
    '8am',
    '9am',
    '10am',
    '11am',
    '12noon',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
]

export const WEEK_DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

export const MONTHS = [
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
