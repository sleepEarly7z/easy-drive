import PropTypes from 'prop-types'
import './index.scss'

// Review Form Card Component Style
const RFCard = ({ children }) => {
    return (
        <div>
            <div className="rfcard">{children}</div>
            <div className="rfcard-bottom-space" />
        </div>
    )
}

RFCard.propTypes = {
    children: PropTypes.node.isRequired,
}

export default RFCard
