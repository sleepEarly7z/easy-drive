import PropTypes from 'prop-types'
import './index.scss'

// ReviewCard Component Style
const RCard = ({ children }) => {
    return (
        <div>
            <div 
            className="rcard" >
                {children}
            </div>
            <div className='rcard-bottom-space' />
        </div>
    )
}

RCard.propTypes = {
    children: PropTypes.node.isRequired,
}

export default RCard