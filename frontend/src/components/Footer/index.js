import React from 'react'
import './index.scss'

function Footer() {
    return (
        <div className="main-footer">
            <div className="container-footer">
                <div className="row-footer">
                    {/* Column1 */}
                    <div className="col-footer">
                        <div className="footer-heading-4">EASY DRIVE INC</div>
                        <h1 className="list-unstyled">
                            <li>xxx-xxx-xxxx</li>
                            <li>Vancouver, Canada</li>
                            <li>123 Street South Vancouver</li>
                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col-footer">
                        <div className="footer-heading-4">Services</div>
                        <ul className="list-unstyled">
                            <li>Rate and Review</li>
                            <li>Find a driver instructor</li>
                            <li>Find a driving school</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col-footer">
                        <div className="footer-heading-4">Help</div>
                        <ul className="list-unstyled-footer">
                            <li>Q&A</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row-footer mb-2">
                    <p className="col-sm-footer">
                        &copy;{new Date().getFullYear()} EASY DRIVE | All rights
                        reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
