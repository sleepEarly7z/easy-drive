import './index.scss'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'
import ReviewProfile from '../../components/ReviewProfile'
import Comment from '../../components/Comment'

const ProfileRateReview = () => {
    return (
        // // Version 1
        <>
            <div className="ProfileRateReview">
                <div className='ReviewProfile-top'>
                    <ReviewProfile />
                </div>
                <div>
                    <ReviewList />
                </div>

                {/* <ReviewForm /> */}
                {/* <Comment /> */}
            </div>
        </>
        // // Version 2
        // <div className="ProfileRateReview">
        //     <div className="listContainer">
        //         <div className="listWrapper">
        //             <div id="review-profile-panel">
        //                 <ReviewProfile />
        //             </div>
        //             <div id="review-comment-panel">
        //                 <ReviewForm />
        //                 <ReviewList />
        //                 {/* <ReviewForm /> */}
        //                 {/* <ReviewList /> */}
        //                 <div className='boxTitle'>123</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProfileRateReview
