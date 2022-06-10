import './index.scss'
import Carousel from "react-elastic-carousel";
import ProfileCard from '../ProfileCard'

// https://www.youtube.com/watch?v=eBKcGAhkZUI&t=526s
// https://www.npmjs.com/package/react-elastic-carousel
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 860, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

const Slider = () => {
  return (
      <>
        <h1 style={{ textAlign: "center" }}>Top Rated Instructors</h1>
              <div className="App">
                <Carousel breakPoints={breakPoints}>
                  <ProfileCard name={'Donald Trump'} location={'USA'} years={'3'} rate={'2'} imgSrc={"https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg"}/>
                  <ProfileCard name={'Donald Trump'} location={'USA'} years={'3'} rate={'2'} imgSrc={"https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg"}/>
                  <ProfileCard name={'Donald Trump'} location={'USA'} years={'3'} rate={'2'} imgSrc={"https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg"}/>
                  <ProfileCard name={'Donald Trump'} location={'USA'} years={'3'} rate={'2'} imgSrc={"https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg"}/>
                  <ProfileCard name={'Donald Trump'} location={'USA'} years={'3'} rate={'2'} imgSrc={"https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg"}/>
                  <ProfileCard name={'Donald Trump'} location={'USA'} years={'3'} rate={'2'} imgSrc={"https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg"}/>
                </Carousel>
              </div>
      </>
  )
}

export default Slider