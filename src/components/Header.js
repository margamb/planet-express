import React from 'react';
import './Header.css';

import Logo from './Logo';
import Checkbox from './Checkbox';

function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__container">
        <Checkbox />
        <h1 className="header__container--motto">
          Nuestra tripulación es remplazable, tus envíos no
        </h1>
      </div>
    </header>
  );
}

export default Header;
