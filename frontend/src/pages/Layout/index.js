import { Outlet } from 'react-router-dom'

import LayoutNavbar from '../../components/LayoutNavbar/LayoutNavbar'
import LayoutNavbarTest from '../../components/LayoutNavbar/LayoutNavbarTest'
import Footer from '../../components/LayoutFooter/Footer'

const Layout = () => {
    return (
        <>
            <div className="App">
                {/* <LayoutNavbar /> */}
                <LayoutNavbarTest />
                <div className="page">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
