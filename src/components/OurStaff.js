import React, { useEffect } from 'react';

function OurStaff() {

    // parte del fetch
    const APIURL = 'futuramaapi.herokuapp.com/api/v2/characters'

    useEffect(() => {
        async function fetchCharacters() {
            const res = await fetch(APIURL);
            console.log(res)
            return res

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