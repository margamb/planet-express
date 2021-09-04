import React, { useEffect } from 'react';

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


    useEffect(() => {
        async function getCharacters() {
            const characters = await fetchCharacters()
            const charactersToDisplay = characters.slice(0, numOfCharacters)
            console.log(charactersToDisplay)
            return charactersToDisplay
        }
        getCharacters()
    })

    return (
        <section className="clients">
            <h1 className="clients__title">Our clients</h1>
            <div className="clients_container">
                <Client />
            </div>

        </section>
    )
}

export default Testimonials;