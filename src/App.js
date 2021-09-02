import React, { useState, useEffect } from 'react';
import './App.css';
import companyLogo from './images/logo.jpg';


function App() {
  const [price, setPrice] = useState(0);
  const [number, setNumber] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');

  function dataOfForm(ev) {
    ev.preventDefault();
    setNumber(ev.target.number.value);
    setWeight(ev.target.weight.value);
    console.log('number', number);
    console.log('weight', weight);
    setPrice(number * weight)
    console.log('price', price)
  }

  function emailAddress(ev) {
    ev.preventDefault();
    setEmail(ev.target.email.value);
    console.log('email', email)
  }


  // parte del fetch
  const APIURL = 'futuramaapi.herokuapp.com/api/v2/characters'

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch(APIURL);
      console.log(res)
      return res

    }

    fetchCharacters()
  }, [])


  return (
    <div className="App">
      <header>
        <img src={companyLogo} alt="planet express logo" style={{ width: '100px' }} />
      </header>

      <main>
        <section>
          <p>Quedan 2 dias 3 horas y 20 minutos de oferta</p>
        </section>

        {/* form to know price*/}
        <section>

          <form onSubmit={dataOfForm} >
            <label>
              Numero de paquetes:
              <input type="number" name="number" />
            </label>
            <label>
              Peso:
              <input type="number" name="weight" />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <p>El precio es: {price}</p>

        </section>

        {/* newsletter form */}
        <section>
          <img src={companyLogo} alt="planet express logo" style={{ width: '100px' }} />
          <h1>Subscribe</h1>
          <p>Subscribe to our newsletter and stay updated</p>
          <form onSubmit={emailAddress}>
            <input type="email" name="email" placeholder="Your Email" />
            <input type="submit" value="Submit" />
          </form>

          <p>{email} your subscription has been accepted</p>
        </section>

        {/* our staff */}

        <section>

        </section>




      </main>

    </div>
  );
}

export default App;

// Header 
// Oferta
// Calcula el precio [X]
// Formulario [X]
// Nuestro staff []
// Footer

