import './index.scss'
import { useRef } from 'react'
import ImageSlider from '../../components/HomePageSections/SectionOne/ImageSlider'
import STTab from '../../components/HomePageSections/SectionTwo/STTab'
import FollowInstructions from '../../components/HomePageSections/SectionTwo'
import TopRecommended from '../../components/HomePageSections/SectionThree'
import TopReivews from '../../components/HomePageSections/SectionFour'
import ScrollToTop from '../../components/HomePageSections/SectionTwo/ScrollToTop'
import OurTeam from '../../components/HomePageSections/SectionFive'
import Contact from '../../components/HomePageSections/SectionSix/Contact'

const Home = () => {
    const slider = useRef(null)
    const instructions = useRef(null)
    const topinstructors = useRef(null)
    const topreviews = useRef(null)
    const ourteam = useRef(null)
    const contactus = useRef(null)

    return (
        <>
            <div className="Home">
                <ScrollToTop />

                <div ref={slider} className="sectionOne">
                    <ImageSlider />
                </div>

                <div className="sectionTabs">
                    <STTab title={'What To Do'} section={instructions} />
                    <STTab title={'Top Instructors'} section={topinstructors} />
                    <STTab title={'About Us'} section={ourteam} />
                </div>

                <div ref={instructions} className="sectionTwo">
                    <FollowInstructions />
                </div>
                <div ref={topinstructors} className="sectionThree">
                    <TopRecommended />
                </div>

                <div ref={topreviews} className="sectionFour">
                    <TopReivews />
                </div>

                <div ref={ourteam} className="sectionFive">
                    <OurTeam />
                </div>

                <div ref={contactus} className="sectionSix">
                    <Contact />
                </div>
            </div>
        </>
    )
}

export default Home
