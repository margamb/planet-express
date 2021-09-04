import React from 'react';
import './Client.css';

import client from '../images/client.jpg'


function Client() {
    return (
        <>
            <div className="client">
                <img
                    className="client__img"
                    src={client}
                    alt="imagen de cliente"
                />
                <div className="client__circle"></div>
                <div className="client__info">
                    <p className="client__name">Bender</p>
                    <p className="client__quotes ">Dying sucks butt. How do you living being cope with morality??</p>
                </div>
            </div>



            <div className="client">
                <img
                    className="client__img"
                    src={client}
                    alt="imagen de cliente"
                />
                <div className="client__circle"></div>
                <div className="client__info">
                    <p className="client__name">Bender</p>
                    <p className="client__quotes ">Dying sucks butt. How do you living being cope with morality??</p>
                </div>
            </div>

            <div className="client">
                <img
                    className="client__img"
                    src={client}
                    alt="imagen de cliente"
                />
                <div className="client__circle"></div>
                <div className="client__info">
                    <p className="client__name">Bender</p>
                    <p className="client__quotes ">Dying sucks butt. How do you living being cope with morality??</p>
                </div>
            </div>

            <div className="client">
                <img
                    className="client__img"
                    src={client}
                    alt="imagen de cliente"
                />
                <div className="client__circle"></div>
                <div className="client__info">
                    <p className="client__name">Bender</p>
                    <p className="client__quotes ">Dying sucks butt. How do you living being cope with morality??</p>
                </div>
            </div>
        </>
    )
}

export default Client;