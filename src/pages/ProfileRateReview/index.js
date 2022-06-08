import './index.scss'
// import Contact from '../../components/Contact'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'

const ProfileRateReview = () => {
    return (
        <>
          <div className='ProfileRateReview'>
              <h1>ProfileRateReview</h1>
              
              {/* TODO: ProfileCard or text */}
              <div className='profile-card'>

                {/* Profile image */}
                <div className='profile-image'>
                  photo
                </div>

                {/* Profile Info */}
                <div className='profile-info'>
                  <h2>Name</h2>
                  <h5>Location: </h5>
                  <h5>Year of Experience: 15</h5>
                  <h5>Rate: </h5>
                </div>

                {/* Add to favorite button */}
                <div className='profile-addToFavorite'>
                  <button>Add to Favorite</button>
                </div>

              </div>

              {/* TODO: Contact */}
              {/* <Contact /> */}
              {/* TODO: instructor's description */}

              {/* TODO: can combine review and rate components later */}
              <ReviewForm />
              <ReviewList />
          </div>
        </>
    )
  }
  
  export default ProfileRateReview