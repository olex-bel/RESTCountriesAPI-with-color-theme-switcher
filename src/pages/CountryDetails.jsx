
import { useLoaderData } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import DetailItem from "../components/common/DetailItem";
import BordersCountries from '../components/details/BordersCountries';
import BackButton from "../components/common/BackButton";

export default function CountryDetails() {
    const countryInfo = useLoaderData();
    
    const {
        name,
        flagImageUrl,
        flagImageAlt,
        nativeName,
        population,
        region,
        subRegion,
        capital,
        topLevelDomain,
        currencies,
    } = countryInfo;

    const languages = countryInfo.languages.map((language) => language.name).join(', ');
   

    return (
        <Box 
            sx={{
                mx: {
                    xs: 2,
                    md: 0,
                }
            }}
        >
            <BackButton />
            <Stack 
                direction="row" 
                alignItems="center"
                gap={15}
                sx={{ 
                    width: '100%',
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },
                }}
            >
                <Box 
                    sx={{
                        width: '100%',
                        maxWidth: '600px',
                    }}
                    component="img" 
                    src={flagImageUrl} 
                    alt={flagImageAlt}
                >
                </Box>
                
                <Box sx={
                        {
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                md: '1fr 1fr',
                            },
                            gap: 5,
                        }
                    }
                >
                    <Typography 
                            sx={{ 
                                gridColumn: '1/-1',
                                fontSize: 16,
                                fontWeight: 800,
                            }} 
                            variant="h4"
                    >
                        {name}
                    </Typography>

                    <Stack direction="column" gap={1}>
                        <DetailItem description="Native Name" value={nativeName} />
                        <DetailItem description={'Population'} value={population.toLocaleString('en-US')} />
                        <DetailItem description={'Region'} value={region} />
                        <DetailItem description={'Sub Region'} value={subRegion} />
                        <DetailItem description={'Capital'} value={capital} />
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <DetailItem description="Top Level Domain" value={topLevelDomain} />
                        <DetailItem description="Currencies" value={currencies} />
                        <DetailItem description="Languages" value={languages} />
                    </Stack>

                    <Box sx={{ gridColumn: '1/-1' }}>
                        <BordersCountries borderCountries={countryInfo.borders} />
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
}
