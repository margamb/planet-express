// La API no permite hacer request para un personaje especifico,
// habria que hacer varias busquedas, una para cada empleado,
// y de esas busquedas coger un resultado al azar (por ejemplo
// una busqueda por bender nos da tres resultados)
// asi que he optado por mostrar los primeros personajes que devuelve
// la API como testimonios de clientes satisfechos
// Mas que nada para que veais que se pedir datos a una API :)
const APIURL = 'https://futuramaapi.herokuapp.com/api/v2/characters';

export async function fetchCharacters() {
  const res = await fetch(APIURL);
  const data = await res.json();

  return data;
}
