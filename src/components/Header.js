import React from 'react';
import './Header.css';

import Logo2 from '../images/Logo2'
import Checkbox from './Checkbox';

function Header() {
    return (
        <header className="header">
            <Logo2 className="header__logo" />
            <div className="header__container">
                <Checkbox />
                <h1 className="header__container--motto">Nuestra tripulación es remplazable, tus envios no</h1>
            </div>

        </header>
    )
}

export default Header;