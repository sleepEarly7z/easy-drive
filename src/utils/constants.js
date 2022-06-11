export const FILTER_CATEGORIES = [
    {
        id: 1,
        name: 'location',
        options: ['vancouver', 'richmond', 'burnaby']
    },
    {
        id: 2,
        name: 'availability',
        options: ['7 a.m. to 12 p.m. ', '12 p.m. to 17 p.m. ', '17 p.m. to 22 p.m.']
    },
    {
        id: 3,
        name: 'language',
        options: ['English', 'French', 'Mandarin', 'Cantonese', 'Korean']
    },
    {
        id: 4,
        name: 'licence type',
        options: [
            {type: "Driver's licence", classes:['Class 5', 'Class 7']},
            {type: "Motorcycle licence", classes:['Class 6', 'Class 8']},
            {type: "Commercial licence", classes:['Class 1', 'Class 2', 'Class 3', 'Class 4 (restricted)', 'Class 4 (unrestricted)']},
            {type: "Heavy trailer endorsement", classes:['Class 1', 'Class 2', 'Class 3', 'Class 4 (restricted)', 'Class 4 (unrestricted)']}
        ]
    }
]
