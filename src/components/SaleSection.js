import React from 'react';
import Countdown from './Countdown';

import './SaleSection.css';

const SALE_DEADLINE = new Date('09/25/2022')

function SaleSection() {
    return (
        <section className="salesection">
            <p className="salesection__title">Popplers gratis</p>
            <p className="salesection__subtitle"> haciendo tu pedido antes de:</p>
            <h1 className="salesection__timer"><Countdown deadline={SALE_DEADLINE} /></h1>
        </section>
    )
}

export default SaleSection;