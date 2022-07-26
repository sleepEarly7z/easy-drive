import React, { useState } from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

// TODO
function RatingStar({ average }) {
    const [number, setNumber] = useState(average);
    // if (isNaN(average)) {
    //     setNumber(average)
    // } else {
    //     if (average === 'onestar') setNumber(1)
    //     if (average === 'twostars') setNumber(2)
    //     if (average === 'threestars') setNumber(1)
    //     if (average === 'onestar') setNumber(1)
    //     if (average === 'onestar') setNumber(1)
    // }
    return (
        <div className="RatingStar">
            {Array(5)
                .fill()
                .map((_, index) =>
                number >= index + 1 ? (
                        <FaStar
                            key={uuidv4()}
                            style={{ color: 'orange', fontSize: '20px' }}
                        />
                    ) : number >= index + 0.5 ? (
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