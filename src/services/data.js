const URL = "https://gateway.marvel.com:443/v1/public/characters?"

const public_key= "3020e533d2787d68dc61d8362a92516d"

export function getCharacters() {
    try {
        return fetch(URL + "apikey=" + public_key).then(response => {
            let data = response.json();
            return data;
        })
    } catch (error) {
        console.error(error);
    }
}