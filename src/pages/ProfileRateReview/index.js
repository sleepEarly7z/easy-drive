import './index.scss'
// import Contact from '../../components/Contact'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'
import ProfileCard from '../../components/ProfileCard'

const ProfileRateReview = () => {
    return (
        <>
          <div className='ProfileRateReview'>
              {/* <h1>ProfileRateReview</h1> */}
              <ProfileCard name={'Rick Astley'} location={'UK'} years={'10+'} rate={'5'} imgSrc={"https://img.apmcdn.org/768cb350c59023919f564341090e3eea4970388c/square/72dd92-20180309-rick-astley.jpg"} />
              <br /><br />
              {/* TODO: ProfileCard or text */}
              {/* <div className='profile-card'> */}

                {/* Profile image */}
                {/* <div className='profile-image'>
                  photo
                </div> */}

                {/* Profile Info */}
                {/* <div className='profile-info'>
                  <h2>Name</h2>
                  <h5>Location: </h5>
                  <h5>Year of Experience: 15</h5>
                  <h5>Rate: </h5>
                </div> */}

                {/* Add to favorite button */}
                {/* <div className='profile-addToFavorite'>
                  <button>Add to Favorite</button>
                </div> */}

              {/* </div> */}

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