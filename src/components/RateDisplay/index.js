import './index.scss'
import RatingStar from '../RatingStar'

import ProgressBar from '../ProgressBar'

const RateDisplay = ({ item }) => {
    const average = Math.round(
        item.reduce((acc, { rating }) => acc + rating, 0) / item.length,
    )

    // TODO: set percentage

    return (
        <div className="RateDisplay">
            <div className="RateDisplay-left">
                <div className="ratedisplay-title">Student reviews</div>
                <div className="ratedisplay-average">
                    {average.toFixed(1)}/5.0
                </div>
                <RatingStar average={average} />
                <div className="rdcard-bottom-space" />
            </div>
            <div className="RateDisplay-right">
                <ProgressBar value={60} />
                <ProgressBar value={20} />
                <ProgressBar value={10} />
                <ProgressBar value={10} />
                <ProgressBar value={0} />
                {/* <ProgressBar className='rd-progressbar-item' width={"450px"} value={60} max={100} /> */}
            </div>
        </div>
    )
}

export default RateDisplay
