import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container block-inner">
                <div className="footer-description">
                    <div className="footer-description-item decor">Download app</div>
                    <div className="footer-description-item description-text">Show everyone what you can do!</div>
                </div>
                <div className="icon footer-icon">
                    <a href="#" className="icon-link">
                        <div className="icon-item">
                            <div className="description-item">download on the</div>
                            <div className="description-item strong">app store</div>
                        </div>
                    </a>
                    <a href="#" className="icon-link item">
                        <div className="icon-item google">
                            <div className="description-item">get it on</div>
                            <div className="description-item strong">google play</div>
                        </div>
                    </a>
                </div>
            </div>
            <footer className="footer-item">
                <div className="container">
                    <div className="footer-content">
                        <div className="social-main">
                            <div className="social">
                                <a href="#" className="social-link">
                                    <div className="social-item fb"></div>
                                </a>
                                <a href="#" className="social-link">
                                    <div className="social-item tw"></div>
                                </a>
                                <a href="#" className="social-link">
                                    <div className="social-item inst"></div>
                                </a>
                            </div>
                        </div>

                        <div className="footer-item-description">Contact Us | Terms & Conditions</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;