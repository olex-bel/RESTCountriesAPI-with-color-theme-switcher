
import { Link as RouterLink } from "react-router-dom";
import { Link, Box, Typography } from "@mui/material";

export default function Error() {
    return (
        <Box sx={{
            width: {
                xs: 'auto',
                md: '80%', 
            },
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            mx: {
                xs: 2,
                md: 'auto',
            }
        }}>
            <Typography variant="h4">Woops! Something went wrong :(</Typography>
            <Link component={RouterLink} to="/" sx={{ mt: 4 }}>
                Have you tried turning it off and on again?
            </Link>
        </Box>
    );
}