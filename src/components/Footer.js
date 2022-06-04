import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container__footer">
                <ul className="footer__list">
                    <li className="footer__list__inner">
                        <a href="#" className="footer__list__inner__link">
                            React
                        </a>
                    </li>
                    <li className="footer__list__inner">
                        <a href="#" className="footer__list__inner__link">
                            Mozilla Developer Network
                        </a>
                    </li>
                    <li className="footer__list__inner">
                        <a href="#" className="footer__list__inner__link">
                            My GitHub Profile
                        </a>
                    </li>
                </ul>
                <div className="footer__date">
                    2022, Odesa, Ukraine
                </div>
            </div>
        </div>
    )
}
export default Footer;