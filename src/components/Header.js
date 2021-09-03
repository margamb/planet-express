import React from 'react';
import './Header.css';

import companyLogo from '../images/logo.jpg';


function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={companyLogo} alt="planet express logo" />
            <p>Y… mézclemelos todos en una jarra grande </p>
        </header>
    )
}

export default Header;