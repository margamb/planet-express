import React from 'react';
import './Header.css';

import companyLogo from '../images/logo.jpg';


function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={companyLogo} alt="planet express logo" />
            <h1 className="header__motto">Nuestra tripulación es remplazable, tus envios no</h1>
        </header>
    )
}

export default Header;