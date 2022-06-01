import './index.scss'
import Slider from '../../components/Slider'

const Explore = () => {
  return (
      <>
          <div className='Explore'>
              <h1>Explore: Recommended instructors for this week</h1>
              <Slider />
              {/* Recommended instructors for this week */}
          </div>
      </>
  )
}

export default Explore