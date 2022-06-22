import './index.scss'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'
import ReviewProfile from '../../components/ReviewProfile'

const ProfileRateReview = () => {
    return (
        // // Version 1
        <>
            <div className="ProfileRateReview">
                <ReviewProfile />
                <br />
                <br />
                <ReviewForm />
                <ReviewList />
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
