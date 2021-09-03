import React, { useState } from 'react';

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
    )
}

export default Calculator;