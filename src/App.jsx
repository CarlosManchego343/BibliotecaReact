import { useEffect, useState } from 'react'
import { Component } from './component'
import * as API from "./services/data";


// Este es el componente principal, se exporta para ser usado
// en el archivo main

export function App() {

  const [characters, setCharacters] = useState([])

  // Se va a usar el hook de efecto para hacer la petición de los
  // datos a la API y luego se almacena dentro del componenete 
  // "Characters" por medio del setCharacters.
  useEffect(() => {
    API.getCharacters().then(setCharacters);
  })

  return (
// Se engloba todo en "<></>" para que no haya cproblemas con el
// renderizado de los estilos de los elementos dentto
    <>
    <h2>Personajes del mundo marvel</h2>
      {
        JSON.stringify(characters)
      }
    </>
  )
}


