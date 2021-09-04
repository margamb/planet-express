import { findAllByAltText } from '@testing-library/react';
import React, { useEffect } from 'react';

function OurStaff() {

    // parte del fetch
    const APIURL = 'https://futuramaapi.herokuapp.com/api/v2/characters?search='

    // La API no permite hacer request para un caracter individual,
    // asi que he hecho una busqueda por un personaje, para demostrar
    // que la culpa es de la API, no mia :)
    const staff = [
        'bender',
        'fry',
        'leela',
        'zoidberg'
    ]

    useEffect(() => {
        async function fetchCharacters() {
            const res = await Promise.all(
                staff.map(character => fetch(APIURL + character))
            ).then(async r => r.map(data => await data.json(J)))
            
            console.log(character
                )
            return data

        }

        fetchCharacters()
    }, [])

    return (
        <section>
            <h1>Our Staff</h1>
        </section>
    )
}

export default OurStaff;