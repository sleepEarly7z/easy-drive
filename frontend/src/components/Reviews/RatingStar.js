import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

// TODO
function RatingStar({ average }) {
    return (
        <div className="RatingStar">
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
    )
}

export default RatingStar
