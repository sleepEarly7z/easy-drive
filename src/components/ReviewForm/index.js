import { useEffect, useState } from 'react'
import RatingSelect from '../RatingSelect'
import RFCard from '../RCardStyle/RFCard'
import './index.scss'

const ReviewForm = () => {

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(5)
  const [message, setMessage] = useState('')

  const handleTextChange = ({ target: { value } }) => { // 👈  get the value
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
    // prettier-ignore
    } else if (value.trim().length < 10) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
      <RFCard className='ReviewForm'>
        <form onSubmit={handleSubmit}>
          <h1 className='review-form-question'>How would you rate this driver instructor?</h1>
          <RatingSelect select={setRating} selected={rating} />
          <div className='input-group'>
            <input
              onChange={handleTextChange}
              type='text'
              placeholder='Write a review'
              value={text}
            />
            <button type='submit' className='submit-review-button'>
              <div className='submit-review-button-text'>Send</div>
            </button>
          </div>

          {message && <div className='message'>{message}</div>}
        </form>
        <div className='rfcard-bottom-space' />
      </RFCard>
  )
}

export default ReviewForm