import { getCountries, getCountryByCode } from '../services/countries';

export async function countriesLoader() {
    return await getCountries();
}

export async function countriesDetailsLoader({ params }) {
    return  await getCountryByCode(params.code);
}