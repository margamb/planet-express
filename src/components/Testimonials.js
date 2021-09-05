import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../apis/futuramaapi';

import './Testimonials.css';

import Client from './Client';
import Loading from './Loading';


function Testimonials({ numOfCharacters = 6 }) {
    const [testimonials, setTestimonials] = useState([])
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function getCharacters() {
            const characters = await fetchCharacters()
            const charactersToDisplay = characters.slice(0, numOfCharacters)
            setTestimonials(charactersToDisplay);

            if (charactersToDisplay.length <= 0) {
                setStatus('loading');
            }
        }
        getCharacters()
    }, [numOfCharacters])

    function renderTestimonials() {
        return testimonials.map((client) => {
            return (
                <li className="client" key={client.Name}>
                    <Client client={client} />
                </li>
            )
        })
    }

    if (status === 'loading') {
        return <Loading text="loading testimonials" />;
    }

    return (
        <section className="clients">
            <h1 className="clients__title">Our clients</h1>
            <ul className="clients_container">{renderTestimonials()}</ul>

        </section>
    )
}

export default Testimonials;