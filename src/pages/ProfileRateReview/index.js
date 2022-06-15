import './index.scss'
// import Contact from '../../components/Contact'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'
import ProfileCard from '../../components/ProfileCard'
import ReviewProfile from '../../components/ReviewProfile'

const ProfileRateReview = () => {
    return (
        <>
            <div className="ProfileRateReview">
                <ReviewProfile />
                {/* <ProfileCard name={'Rick Astley'} location={'UK'} years={'10+'} rate={'5'} imgSrc={"https://img.apmcdn.org/768cb350c59023919f564341090e3eea4970388c/square/72dd92-20180309-rick-astley.jpg"} /> */}
                <br />
                <br />
                <ReviewForm />
                <ReviewList />
            </div>
        </>
    )
}

export default ProfileRateReview
