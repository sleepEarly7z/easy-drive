import PropTypes from 'prop-types'
import './index.scss'

// Review Form Card Component Style
const RFCard = ({ children }) => {
    return (
        <div>
            <div 
            className="rfcard" 
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

RFCard.propTypes = {
    children: PropTypes.node.isRequired,
}

export default RFCard