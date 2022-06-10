import './index.scss'
import ReviewCard from '../../components/ReviewCard'
import RateDisplay from '../RateDisplay';

const ReviewList = () => {
  const reviews = [
      {
        reviewer: 'Phil James',
        datetime: '22-Oct, 2022',
        rating: 4,
        comment: 'An awesome instructor!',
      },
      {
        reviewer: 'Dave Norman',
        datetime: '12-Jun, 2021',
        rating: 5,
        comment: 'I really love this instructor! He is patient and funny',
      },
      {
        reviewer: 'Brian Lee',
        datetime: '07-May, 2022',
        rating: 3,
        comment: 'Helpful, but he is a busy man and sometimes it`s hard to contact with him',
      }

  ];
  return (
      <>
          <div className='ReviewList'>
              {/* <h1>ReviewList</h1> */}
              <RateDisplay item={reviews} />
              {reviews.map((item, index) => (
                  <ReviewCard item={item} index={index} />
                  // <RSection item={item} index={index} />
              ))}
          </div>
      </>
  )
}

export default ReviewList