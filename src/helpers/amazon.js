//https://amazon-api.sellead.com/country
//https://amazon-api.sellead.com/city
const BASE_URL = 'https://amazon-api.sellead.com/';

export const fetchCountries = () => {
    const url = `${BASE_URL}/country`;

    return fetch(url).then(response => response.json());
}

export const fetchCities = (country) => {
    const url = `${BASE_URL}/city`;

    return fetch(url).then(response => response.json());
}