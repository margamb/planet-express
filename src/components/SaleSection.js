import React from 'react';
import { SALE_DEADLINE } from '../config';
import Countdown from './Countdown';

import './SaleSection.css';

const deadline = new Date(SALE_DEADLINE)

function SaleSection() {
    return (
        <section className="salesection">
            <p className="salesection__title">Popplers gratis</p>
            <p className="salesection__subtitle"> haciendo tu pedido antes de:</p>
            <h1 className="salesection__timer"><Countdown deadline={deadline} /></h1>
        </section>
    )
}

export default SaleSection;