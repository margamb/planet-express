import React from 'react';
import Countdown from './Countdown';

import './SaleSection.css';

const SALE_DEADLINE = new Date('09/25/2022')

function SaleSection() {
    return (
        <section className="SaleSection">
            <p className="SaleSection__title">Popplers gratis</p>
            <p className="SaleSection__subtitle"> haciendo tu pedido antes de:</p>
            <h1 className="SaleSection__timer"><Countdown deadline={SALE_DEADLINE} /></h1>
        </section>
    )
}

export default SaleSection;