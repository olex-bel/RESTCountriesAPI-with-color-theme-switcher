
import { Link as RouterLink } from "react-router-dom";
import { Stack, Button, Typography, Box } from '@mui/material';

export default function BordersCountries({ borderCountries }) {
    if (!borderCountries.length) {
        return (<></>);
    }

    const countries = borderCountries.map((country) => {
        return (
            <Button 
                variant="contained" 
                component={RouterLink} 
                to={`/details/${encodeURIComponent(country.code)}`}
                key={country.code}
                sx={{
                    minWidth: '80px',
                    flex: '1 1 80px',
                    whiteSpace: 'nowrap',
                }}    
            >
                {country.name}
            </Button>);
    });

    return (
        <Stack 
            gap={2}
            sx={{
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
                width: {
                    xs: '100%',
                    md: 'auto',
                },
                my: 4,
            }}
        >
            <Typography sx={
                {
                    fontWeight: 600,
                    flexShrink: 0,
                }
            }>
                Border Countries:
            </Typography>
            <Box 
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr));',
                    gap: 1,
                    width: '100%',
                }} 
            >
                {countries}
            </Box>
        </Stack>
    );
}