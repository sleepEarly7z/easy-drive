import './index.scss'
import Carousel from "react-elastic-carousel";
import ProfileCard from '../ProfileCard'

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
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                </Carousel>
              </div>
      </>
  )
}

export default Slider