const URL = "https://gateway.marvel.com:443/v1/public/series?"

    const public_key = "3020e533d2787d68dc61d8362a92516d"
// private_key = 8fff12f9385ad8e7e745a0fa5e09784e98ca596c
    const time_stap = "1"
// 18fff12f9385ad8e7e745a0fa5e09784e98ca596c3020e533d2787d68dc61d8362a92516d
    const hash = "ae84b281d404769ed93abf500596ec59";

export function getCharacters() {
    try {
        return fetch(URL + "ts=" + time_stap + "&apikey=" + public_key + "&hash=" + hash).then(response => {
            let data = response.json();
            console.log("Entre a data")
            return data;
        })
    } catch (error) {
        console.error(error);
    }
}