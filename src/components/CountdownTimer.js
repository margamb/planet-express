import React from 'react';

import './CountdownTimer.css';

function CountdownTimer() {
    return (
        <section className="CountdownTimer">
            <p className="CountdownTimer__title">Popplers gratis</p>
            <p className="CountdownTimer__subtitle"> haciendo tu pedido antes de:</p>
            <h1 className="CountdownTimer__timer">2 dias 3 horas y 20 minutos</h1>
        </section>
    )
}

export default CountdownTimer;