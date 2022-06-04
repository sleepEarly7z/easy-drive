import './index.scss'

const RateDisplay = ({ item }) => {

    const average = Math.round(
      item.reduce((acc, { rating }) => acc + rating, 0) / item.length
    )

    return (
      <div className='RateDisplay'>
        <h1>Student reviews</h1>
        <h1>{average}/5</h1>
        <h3>Rating: </h3>
        <h3>{item.length} Reviews</h3>
      </div>
    )
}

export default RateDisplay