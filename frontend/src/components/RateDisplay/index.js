import './index.scss'
import RatingStar from '../RatingStar'

import ProgressBar from '../ProgressBar'

const RateDisplay = ({ reviews }) => {
    const average = 4
    // TODO: set percentage

    return (
        <div className="RateDisplay">
            <div className="RateDisplay-left">
                <div className="ratedisplay-title">Student reviews</div>
                <div className="ratedisplay-average">
                    {average.toFixed(1)}/5.0
                </div>
                <RatingStar average={average} />
                {/* <div className="rdcard-bottom-space" /> */}
            </div>
            <div className="RateDisplay-right">
                Five stars
                <ProgressBar value={60} />
                Four stars
                <ProgressBar value={20} />
                Three stars
                <ProgressBar value={10} />
                Two stars
                <ProgressBar value={10} />
                One star
                <ProgressBar value={0} />
                {/* <ProgressBar className='rd-progressbar-reviews' width={"450px"} value={60} max={100} /> */}
            </div>
        </div>
    )
}

export default RateDisplay
