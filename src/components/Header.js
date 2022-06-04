import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="container__header">
                <div className="header__logo">
                    <a href="#" className="header__logo__link">
                        Logo
                    </a>
                </div>
                <ul className="header__menu">
                    <li className="header__menu__list">
                        <a href="#" className="header__menu__list__link">
                            Main
                        </a>
                    </li>
                    <li className="header__menu__list">
                        <a href="#" className="header__menu__list__link">
                            Contacts
                        </a>
                    </li>
                    <li className="header__menu__list">
                        <a href="#" className="header__menu__list__link">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;