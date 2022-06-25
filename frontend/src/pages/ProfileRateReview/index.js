import './index.scss'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'
import ReviewProfile from '../../components/ReviewProfile'
import Comment from '../../components/Comment'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

const ProfileRateReview = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const instructors = useSelector((state) => state.instructors.filter)
    const instructor = instructors.find((user) => user.id.$oid === params.instructorId)

    
    return (
        // // Version 1
        <>
            <div className="ProfileRateReview">
                <div className="ReviewProfile-top">
                    <ReviewProfile instructor={instructor} />
                </div>
                <div>
                    <ReviewForm />
                    <ReviewList instructor={instructor} />
                </div>

                {/* <ReviewForm /> */}
                {/* <Comment /> */}
            </div>
        </>
    )
}

export default ProfileRateReview
