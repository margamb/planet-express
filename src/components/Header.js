import React from 'react';
import './Header.css';

import Logo from '../images/Logo'


function Header() {
    return (
        <header className="header">
            <Logo className="header__logo" />
            <h1 className="header__motto">Nuestra tripulación es remplazable, tus envios no</h1>
        </header>
    )
}

export default Header;