
import { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import CountryTile from '../components/countries/CountryTile';
import Search from '../components/common/Search';
import RegionSelect from '../components/countries/RegionSelect';

export default function Countries() {
    const countryList = useLoaderData();
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('all');
    const visibleCountries = useMemo(() => {

        if (query === '' && region === 'all') {
            return countryList;
        }

        return countryList.filter((country) => {
            if (region !== 'all' && country.region !== region) {
                return false;
            }

            if (query !== '' && country.name.toLowerCase().indexOf(query.toLowerCase()) === -1) {
                return false;
            }

            return true;
        });
    }, [query, region, countryList]);
    
    

    return (
        <Box>
            <Stack 
                sx={
                    {
                        my: 5,
                        flexDirection: {
                            md: 'row',
                        },
                        gap: {
                            xs: 4,
                            md: 0,
                        },
                        justifyContent: {
                            md: 'space-between',
                        }
                    }
                }
            >
                <Search onSearch={setQuery} />
                <RegionSelect region={region} onSelect={setRegion} />
            </Stack>

            <Box
                sx={
                    {
                        display: 'grid',
                        gap: 5,
                        gridTemplateColumns: 'repeat(auto-fill, 300px)',
                        justifyContent: {
                            xs: 'center',
                            md: 'space-between',
                        },
                    }
                }
            >
                {visibleCountries.map((country) => {
                    return (
                        <CountryTile key={country.code} country={country} />
                    )
                })}
            </Box>
        </Box>
    );
}
