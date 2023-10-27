
import { useEffect, useState } from 'react'
import { getCharacters } from "../services/data";

export function Characters() {


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
        <>
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