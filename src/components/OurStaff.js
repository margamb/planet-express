import React, { useEffect } from 'react';

import './OurStaff.css';

import Client from './Client';

function OurStaff() {

    //const APIURL = 'https://futuramaapi.herokuapp.com/api/v2/characters?search='

    // La API no permite hacer request para un caracter individual,
    // asi que he hecho una busqueda por un personaje, para demostrar
    // que la culpa es de la API, no mia :)
    // const staff = [
    //     'bender',
    //     'fry',
    //     'leela',
    //     'zoidberg'
    // ]

    // useEffect(() => {
    //     async function fetchCharacters() {
    //         const res = await Promise.all(
    //             staff.map(character => fetch(APIURL + character))
    //         ).then(async r => r.map(data => await data.json(J)))

    //         console.log(character
    //         )
    //         return data

    //     }

    //     fetchCharacters()
    // }, [])

    return (
        <section className="clients">
            <h1 className="clients__title">Our clients</h1>
            <div className="clients_container">
                <Client />
            </div>

        </section>
    )
}

export default OurStaff;