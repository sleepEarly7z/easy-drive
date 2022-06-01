import './index.scss'
import Contact from '../../components/Contact'
import ReviewForm from '../../components/ReviewForm'
import RateDisplay from '../../components/RateDisplay'
import ReviewList from '../../components/ReviewList'

const ProfileRateReview = () => {
    return (
        <>
          <div className='ProfileRateReview'>
              <h1>ProfileRateReview</h1>
              {/* TODO: ProfileCard or text */}
              <Contact />
              {/* TODO: instructor's description */}
              {/* TODO: can combine review and rate components later */}
              <ReviewForm />
              <RateDisplay />
              <ReviewList />
          </div>
        </>
    )
  }
  
  export default ProfileRateReview