import React, { useState } from 'react';
import './Subscribe.css';

import Bender from './Bender';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [emailPosition, setEmailPosition] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  function emailAddress(ev) {
    ev.preventDefault();
    setEmail(ev.target.email.value);
    setShowNotification(true);
  }

  function handleEmailInput(ev) {
    setEmailPosition(ev.target.value.length);
    console.log(emailPosition);
  }

  return (
    <section className="subscribe">
      <Bender lookAt={emailPosition} />
      <h1 className="subscribe__title">Suscríbete</h1>
      <p className="subscribe__text">
        Suscríbete a nuestra newsletter para tener informacion de nuestros
        envíos y viajes interestelares.
      </p>
      <form className="subscribe__form" onSubmit={emailAddress}>
        <input
          className="subscribe__form--input"
          type="email"
          name="email"
          placeholder="Tu Email"
          onChange={handleEmailInput}
        />
        <input
          className="subscribe__form--submit"
          type="submit"
          value="Enviar"
        />
      </form>

      {showNotification && (
        <div className="subscribe__notification">
          <p className="subscribe__notification--text">
            {email} ha sido suscrita a nuestra newsletter
          </p>
          <span
            className="subscribe__notification--close"
            onClick={() => setShowNotification(false)}
          />
        </div>
      )}
    </section>
  );
}

export default Subscribe;
