import { useEffect, useState } from 'react'
import { Component } from './component'
import { getCharacters } from "./services/data";
import logo from "./assets/img/logo.png";

// Este es el componente principal, se exporta para ser usado
// en el archivo main

export function App() {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true); 

  // Se va a usar el hook de efecto para hacer la petición de los
  // datos a la API y luego se almacena dentro del componenete 
  // "Characters" por medio del setCharacters.
  useEffect(() => {

    // Se hace un metodo asincorono para esperar a llegada de datos
    // esto con el fin de para los casos donde no hayan datos

    const fetchData = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
// Se engloba todo en "<></>" para que no haya cproblemas con el
// renderizado de los estilos de los elementos dentto
    <>
    <h2>Personajes del mundo</h2>
    <img src={logo} height='50px'></img>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}


