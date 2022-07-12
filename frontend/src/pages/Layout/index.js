import { Outlet } from 'react-router-dom'
import Navbar from '../../components/LayoutNavbar/Navbar'
import Footer from '../../components/LayoutFooter/Footer'
import './index.scss'

const Layout = () => {
    return (
        <>
            <div className="App">
                <Navbar />
                <div className="page">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
