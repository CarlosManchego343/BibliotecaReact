import logo from "./assets/img/logo.png";
import { Characters } from "./components/characters";

// Este es el componente principal, se exporta para ser usado
// en el archivo main

export function App() {

  return (
// Se engloba todo en "<></>" para que no haya cproblemas con el
// renderizado de los estilos de los elementos dentto
    <>
    <h2>Personajes del mundo</h2>
    <img src={logo} height='50px'></img>
    {/* El llamado a los componentes es mas modular de esta forma */}
    <Characters></Characters>
    </>
  )
}


