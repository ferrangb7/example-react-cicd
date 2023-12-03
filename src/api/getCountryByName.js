import axios from 'axios'
import { newReliclogs } from './newReliclogs';

export const getCountryByName = async ( countryName ) => {
    try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        return data;
    } catch (error) {
        (async () => {
            await newReliclogs(error.stack);
        })();
        console.error(error);
    }
}
