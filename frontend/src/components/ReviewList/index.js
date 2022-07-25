import './index.scss'
import ReviewCard from '../ReviewCard'
import { v4 as uuidv4 } from 'uuid'

import { useEffect } from 'react'

import { getInstructorsAsync } from '../../redux/instructors/thunks'
import { useDispatch } from 'react-redux'

const ReviewList = ({ instructor }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        return dispatch(getInstructorsAsync())
    }, [dispatch])

    return (
        <>
            <div className="ReviewList">
                {instructor.reviews.map((item, index) => (
                    <ReviewCard item={item} index={index} key={uuidv4()} />
                ))}
            </div>
        </>
    )
}

export default ReviewList

// import './index.scss'
// import ReviewCard from '../ReviewCard'
// import { v4 as uuidv4 } from 'uuid'

// const ReviewList = () => {
//     const reviews = [
//         {
//             reviewer_name: 'Ronni Keld',
//             user_name: 'rkeld0',
//             rating: 3,
//             time: '1/2/2022',
//             comment:
//                 'integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat',
//         },
//         {
//             reviewer_name: 'Laverna Tummasutti',
//             user_name: 'ltummasutti1',
//             rating: 5,
//             time: '6/18/2021',
//             comment: 'blandit',
//         },
//         {
//             reviewer_name: 'Towney Godbehere',
//             user_name: 'tgodbehere2',
//             rating: 5,
//             time: '1/17/2022',
//             comment: 'et magnis dis parturient montes nascetur ridiculus',
//         },
//         {
//             reviewer_name: 'Rubetta Giraudo',
//             user_name: 'rgiraudo3',
//             rating: 4,
//             time: '4/28/2022',
//             comment: 'id nulla ultrices aliquet maecenas',
//         },
//         {
//             reviewer_name: 'Sela Boorman',
//             user_name: 'sboorman4',
//             rating: 3,
//             time: '2/1/2022',
//             comment: 'mi asd ed oodk',
//         },
//     ]
//     return (
//         <>
//             <div className="ReviewList">
//                 {reviews.map((item, index) => (
//                     <ReviewCard item={item} index={index} key={uuidv4()} />
//                 ))}
//             </div>
//         </>
//     )
// }

// export default ReviewList
