import './index.scss'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'
import ReviewProfile from '../../components/ReviewProfile'
import Comment from '../../components/Comment'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProfileRateReview = () => {
    const params = useParams();
    
    return (
        // // Version 1
        <>
            <div className="ProfileRateReview">
                <div className="ReviewProfile-top">
                    <ReviewProfile instructorId={params.instructorId} />
                </div>
                <div>
                    <ReviewList instructorId={params.instructorId} />
                </div>

                {/* <ReviewForm /> */}
                {/* <Comment /> */}
            </div>
        </>
    )
}

export default ProfileRateReview
