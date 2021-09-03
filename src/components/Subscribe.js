import React, { useState } from 'react';
import './Subscribe.css';

import companyLogo from '../images/bender_newsletter.jpg';

function Subscribe() {
    const [email, setEmail] = useState('');

    function emailAddress(ev) {
        ev.preventDefault();
        setEmail(ev.target.email.value);
    }

    return (
        <section className="subscribe">
            <img className="subscribe__img" src={companyLogo} alt="planet express logo" />
            <h1 className="subscribe__title">Subscribete</h1>
            <p className="subscribe__text">Subscribete a nuestra newsletter para tener informacion de nuestros envios y viajes interestelares.</p>
            <form className="subscribe__form" onSubmit={emailAddress}>
                <input className="subscribe__form--input" type="email" name="email" placeholder="Your Email" />
                <input className="subscribe__form--submit" type="submit" value="Submit" />
            </form>

            <div className="subscribe__exit">
                <p className="subscribe__exit--text">{email} ha sido subscrita a nuestra newsletter</p>
                <p className="subscribe__exit--close">x</p>
            </div>

        </section>
    )
}

export default Subscribe;