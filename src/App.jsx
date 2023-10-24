import { useState } from 'react'
import { Component } from './component'


// Este es el componente principal, se exporta para ser usado
// en el archivo main

export function App() {
  return (

// Se engloba todo en "<></>" para que no haya cproblemas con el
// renderizado de los estilos de los elementos dentto
    <>
      <div>
      <h1>Hola Mundo!!!</h1>
      </div>
      <div>Adios Mundo!!!</div>
      <Component />
    </>
  )
}


