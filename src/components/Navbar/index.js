import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
        <div className='nav-bar'>
            <nav className='left-top'>
                <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#ffffff" size="2x" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="list-link" to="/explore">
                    <FontAwesomeIcon icon={faList} color="#ffffff" size="2x" />
                </NavLink>
            </nav>
            <nav className='right-top'>
                <NavLink exact="true" activeclassname="active" className="profile-link" to="/sign-in">
                    <FontAwesomeIcon icon={faUser} color="#ffffff" size="2x" />
                </NavLink>
            </nav>
        </div>
        {/* <div className='bottom-bar'>
            <nav className='bottom'>
              <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                  <FontAwesomeIcon icon={faQuestion} color='#808080' size="lg" />
              </NavLink>
            </nav>
        </div> */}
    </>
  )
}

export default Navbar