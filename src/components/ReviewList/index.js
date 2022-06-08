import './index.scss'
import ReviewCard from '../../components/ReviewCard'
import RateDisplay from '../RateDisplay';

const ReviewList = () => {
  const reviews = [
      {
        reviewer: 'Phil James',
        rating: 4,
        comment: 'An awesome instructor!',
      },
      {
        reviewer: 'Dave Norman',
        rating: 5,
        comment: 'I really love this instructor! He is patient and funny',
      },
      {
        reviewer: 'Brian Lee',
        rating: 3.5,
        comment: 'Helpful, but he is a busy man and sometimes it`s hard to contact with him',
      }

  ];
  return (
      <>
          <div className='ReviewList'>
              {/* <h1>ReviewList</h1> */}
              <RateDisplay item={reviews} />
              {reviews.map((item) => (
                  <ReviewCard item={item} />
              ))}
          </div>
      </>
  )
}

export default ReviewList