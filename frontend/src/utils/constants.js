export const FILTER_CATEGORIES = [
    {
        id: 1,
        name: 'city',
        options: ['Vancouver', 'Richmond', 'Burnaby'],
    },
    {
        id: 2,
        name: 'language',
        options: ['English', 'French', 'Mandarin', 'Cantonese', 'Korean'],
    },
    {
        id: 3,
        name: 'license',
        options: ['Class 7', 'Class 5', 'Class 4'],
    },
]

export const SORT_OPTIONS = [
    {
        label: "rating (high to low)",
        value: "ratingDesc",
        payload: {
            sortBy: 'rating',
            sortDir: 'desc'
        }
    },
    {
        label: "rating (low to high)",
        value: "ratingAsc",
        payload: {
            sortBy: 'rating',
            sortDir: 'asc'
        }
    }
]