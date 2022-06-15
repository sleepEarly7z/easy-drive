import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import './index.scss'
import { v4 as uuidv4 } from 'uuid'

// TODO
function RatingStar({ average }) {
    return (
        <div className="RatingStar">
            <div className="rating-text">Rating: </div>
            <div className="rating-star">
                {Array(5)
                    .fill()
                    .map((_, index) =>
                        average >= index + 1 ? (
                            <FaStar
                                key={uuidv4()}
                                style={{ color: 'orange', fontSize: '20px' }}
                            />
                        ) : average >= index + 0.5 ? (
                            <FaStarHalfAlt
                                key={uuidv4()}
                                style={{ color: 'orange', fontSize: '17px' }}
                            />
                        ) : (
                            <FaRegStar
                                key={uuidv4()}
                                style={{ color: 'orange', fontSize: '20px' }}
                            />
                        ),
                    )}
            </div>

            {/* <FaStar style={{ color: "orange", fontSize: '43px' }} />
      <FaStarHalfAlt style={{ color: "orange", fontSize: '40px' }} />
      <FaRegStar style={{ color: "orange", fontSize: '43px' }} /> */}
        </div>
    )
}

export default RatingStar
