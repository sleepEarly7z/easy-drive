import PropTypes from 'prop-types'
import './index.scss'

// ReviewCard Component Style
const RCard = ({ children }) => {
    return (
        <div>
            <div 
            className="rcard" 
            style={{
                backgroundColor: '#f1fffc',
                color: '#000',
            }}>
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