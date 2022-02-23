import React from "react";
const Header = () => {
    return (
        <header className="head">
            <div className="container">
                <div className="ob">
                    <div className="logo">
                        <a href="#" className="logo__link">
                            Logo
                        </a>
                    </div>
                    <div className="bl__button">
                        <div className="footer__phone">
                            <a href="#" className="footer__cont__phone-inner-other">
                                +380 33 6826000
                            </a>
                            <a href="#" className="footer__cont__email-inner">
                                <span className="footer__cont__email">Email:</span> msr2018@mail.ru
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;