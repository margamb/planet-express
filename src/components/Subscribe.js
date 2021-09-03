import React, { useState } from 'react';
import './Subscribe.css';

import companyLogo from '../images/logo.jpg';

function Subscribe() {
    const [email, setEmail] = useState('');

    function emailAddress(ev) {
        ev.preventDefault();
        setEmail(ev.target.email.value);
        console.log('email', email)
    }

    return (
        <section className="subscribe">
            <img src={companyLogo} alt="planet express logo" style={{ width: '100px' }} />
            <h1>Subscribete</h1>
            <p>Subscribete a nuestra newsletter para tener informacion de nuestros envios y viajes interestelares.</p>
            <form onSubmit={emailAddress}>
                <input type="email" name="email" placeholder="Your Email" />
                <input type="submit" value="Submit" />
            </form>

            <p>{email} ya estas subscrita a nuestra newsletter</p>

        </section>
    )
}

export default Subscribe;