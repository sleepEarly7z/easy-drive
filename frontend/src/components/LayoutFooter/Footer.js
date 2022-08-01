import React from 'react'
import './index.scss'

function Footer() {
    return (
        <div className="Footer-main-footer">
            <div className="Footer-container-footer">
                <div className="Footer-row-footer">
                    {/* Column1 */}
                    <div className="Footer-col-footer">
                        <div className="Footer-footer-heading-4">
                            EASY DRIVE INC
                        </div>
                        <ul className="Footer-list-unstyled-footer">
                            <li>xxx-xxx-xxxx</li>
                            <li>BC V6T 1Z4, Canada</li>
                            <li>2329 West Mall, Vancouver</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="Footer-col-footer">
                        <div className="Footer-footer-heading-4">Services</div>
                        <ul className="Footer-list-unstyled-footer">
                            <li>Rate and Review</li>
                            <li>Find a driver instructor</li>
                            <li>Find a driving school</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="Footer-col-footer">
                        <div className="Footer-footer-heading-4">Help</div>
                        <ul className="Footer-list-unstyled-footer">
                            <li>Q&A</li>
                            <li>
                                <a
                                    href="https://www.facebook.com/ezeasydrive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>
                            </li>
                            {/* https://www.facebook.com/ezeasydrive */}
                            <li>
                                <a
                                    href="https://twitter.com/EZEasyDrive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter
                                </a>
                            </li>
                            {/* https://twitter.com/EZEasyDrive */}
                            <li>
                                <a
                                    href="https://www.instagram.com/ezeasydrive/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                            {/* https://www.instagram.com/ezeasydrive/ */}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="Footer-row-footer mb-2">
                    <p className="Footer-col-sm-footer">
                        &copy;{new Date().getFullYear()} EASY DRIVE | All rights
                        reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
