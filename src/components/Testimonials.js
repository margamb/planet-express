import React, { useEffect, useState } from 'react';

import './Testimonials.css';

import Client from './Client';

// La API no permite hacer request para un personaje especifico,
// habria que hacer varias busquedas, una para cada empleado,
// y de esas busquedas coger un resultado al azar (por ejemplo
// una busqueda por bender nos da tres resultados)
// asi que he optado por mostrar los primeros personajes que devuelve
// la API como testimonios de clientes satisfechos
// Mas que nada para que veais que se pedir datos a una API :)
const APIURL = 'https://futuramaapi.herokuapp.com/api/v2/characters'

async function fetchCharacters() {
    const res = await fetch(APIURL)
    const data = await res.json()

    return data
}

function Testimonials({ numOfCharacters = 6 }) {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        async function getCharacters() {
            const characters = await fetchCharacters()
            const charactersToDisplay = characters.slice(0, numOfCharacters)
            setTestimonials(charactersToDisplay);
            console.log(testimonials)
        }

        getCharacters()
    }, [])

    function renderTestimonials() {
        return testimonials.map((client) => {
            return (
                <li className="client" key={client.id}>
                    <Client client={client} />
                </li>
            )
        })
    }

    return (
        <section className="clients">
            <h1 className="clients__title">Our clients</h1>
            <ul className="clients_container">{renderTestimonials()}</ul>

        </section>
    )
}

export default Testimonials;