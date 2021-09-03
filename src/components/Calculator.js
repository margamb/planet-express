import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [price, setPrice] = useState(0);
    const [number, setNumber] = useState('');
    const [weight, setWeight] = useState('');

    function dataOfForm(ev) {
        ev.preventDefault();
        setNumber(ev.target.number.value);
        setWeight(ev.target.weight.value);
        setPrice(number * weight)
    }
    return (
        <section className="calculator">
            <div className="calculator__container">
                <h1 className="calculator__container--title">Calcula el precio de tu envio</h1>
                <form className="calculator__container--form" onSubmit={dataOfForm}>
                    <label className="calculator__container--label">
                        Numero de paquetes:
                        <input className="calculator__container--input" type="number" name="number" />
                    </label>
                    <label className="calculator__container--label">
                        Peso:
                        <input className="calculator__container--input" type="number" name="weight" />
                    </label>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
                <div className="calculator__container--price">
                    {/* <p className="calculator__container--price--text">El precio es:</p> */}
                    <p className="calculator__container--price--euro">{price} €</p>
                </div>

            </div>

        </section>
    )
}

export default Calculator;