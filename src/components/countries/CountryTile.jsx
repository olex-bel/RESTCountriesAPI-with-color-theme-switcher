
import { Card, CardMedia, CardContent, Typography, Stack, CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DetailItem from "../common/DetailItem";

export default function CountryTile({ country }) {

    const {
        flagImageUrl,
        flagImageAlt,
        name,
        population,
        region,
        capital,
        code,
    } = country;

    return (
        <Card
            sx={{
                width: 300,
            }}
        >
            <CardActionArea component={RouterLink} to={`/details/${encodeURIComponent(code)}`}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={flagImageUrl}
                    title={flagImageAlt}
                />
                <CardContent>
                    <Typography 
                        gutterBottom
                        variant="h5"
                        sx={
                            {
                                fontWeight: 600,
                            }
                        }
                    >
                        {name}
                    </Typography>
                    <Stack>
                        <DetailItem description={'Population'} value={population.toLocaleString('en-US')} />
                        <DetailItem description={'Region'} value={region} />
                        <DetailItem description={'Capital'} value={capital} />
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}