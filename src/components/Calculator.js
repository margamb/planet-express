import React, { useState, useEffect } from 'react';
import './Calculator.css';

const PACKET_PRICE = 5
const KG_PRICE = 1

function Calculator() {
    const [price, setPrice] = useState(0);
    const [packetsQuantity, setPacketsQuantity] = useState(0);
    const [weight, setWeight] = useState(0);

    useEffect(() => {
        setPrice((packetsQuantity * PACKET_PRICE) + (weight * KG_PRICE))
    }, [packetsQuantity, weight])

    function handlePacketsChange(ev) {
        setPacketsQuantity(parseInt(ev.target.value, 10))
    }

    function handleWeightChange(ev) {
        setWeight(parseInt(ev.target.value, 10))
    }

    return (
        <section className="calculator">
            <div className="calculator__container">
                <h1 className="calculator__container--title">Calcula el precio de tu envio</h1>
                <form className="calculator__container--form">
                    <label className="calculator__container--label">
                        Numero de paquetes:
                        <input
                            className="calculator__container--input"
                            type="number"
                            name="number"
                            min="1"
                            value={packetsQuantity}
                            onChange={handlePacketsChange}
                        />
                    </label>
                    <label className="calculator__container--label">
                        Peso (en kilos):
                        <input
                            className="calculator__container--input"
                            type="number"
                            name="weight"
                            min="1"
                            value={weight}
                            onChange={handleWeightChange}
                        />
                    </label>
                </form>
                <p className="calculator__container--price">{price} €</p>
            </div>

        </section>
    )
}

export default Calculator;