import React from 'react';
import './Header.css';

import Logo from '../images/Logo'
// import companyLogo from '../images/logo_planet_express.svg';


function Header() {
    return (
        <header className="header">
            <Logo className="header__logo" />
            {/* <img className="header__logo" src={companyLogo} alt="planet express logo" /> */}
            <h1 className="header__motto">Nuestra tripulación es remplazable, tus envios no</h1>
        </header>
    )
}

export default Header;