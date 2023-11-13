
let countriesList = null;

async function getData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return await response.json();
}

function mapCountryLanguages(countryItem) {
    return Object.entries(countryItem.languages).map((item) => {
        const [id, name] = item;

        return {
            id, 
            name,
        };
    }).sort((a ,b) => a.name.localeCompare(b.name));
}

function getNativeName(countryItem, language) {
    const { nativeName: nativeNames } = countryItem.name;
    const { id: languageCode } = language;

    if (languageCode in nativeNames) {
        return nativeNames[languageCode].common;
    }
    
    const [, names] = Object.entries(nativeNames)[0];

    return names.common;
}

function mapCountryDetailsFields(countryItem) {
    const languages = mapCountryLanguages(countryItem);
    const currencies =  Object.entries(countryItem.currencies).map(([, { name }]) => name);

    return {
        code: countryItem.cca3,
        name: countryItem.name.common,
        nativeName: getNativeName(countryItem, languages[0]),
        flagImageUrl: countryItem.flags.png,
        flagImageAlt: countryItem.flags.alt,
        population: countryItem.population,
        region: countryItem.region,
        subRegion: countryItem.subregion,
        capital: countryItem.capital,
        topLevelDomain: countryItem.tld,
        currencies: currencies,
        languages: languages,
        borders: getCountriesNameByCodes(countryItem.borders),
    }
}

function mapCountryFields(countryItem) {
    return {
        code: countryItem.cca3,
        name: countryItem.name.common,
        flagImageUrl: countryItem.flags.png,
        flagImageAlt: countryItem.flags.alt,
        population: countryItem.population,
        region: countryItem.region,
        capital: countryItem.capital,
    }
}

function getCountriesNameByCodes(codes) {
    if (!codes) {
        return [];
    }

    return countriesList.filter((country) => {
        return codes.includes(country.cca3);
    }).map((country) => {
        return {
            code: country.cca3,
            name: country.name.common,
        };
    });
}

export async function getCountries() {
    if (!countriesList) {
        countriesList = await getData();
    }

    return countriesList.map(mapCountryFields);
}
 
export async function getCountryByCode(countryCode) {
    if (!countriesList) {
        countriesList = await getData();
    }

    const countryInfo = countriesList.find((country) => {
        return country.cca3 === countryCode;
    });

    return mapCountryDetailsFields(countryInfo);
}
