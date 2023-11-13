
import { useContext } from 'react';
import { useTheme } from '@mui/material';
import { IconButton, Box } from '@mui/material';
import { NightlightRound, NightlightRoundOutlined } from '@mui/icons-material';

import { ColorModeContext } from '../../context/ToggleColorMode';

export default function ColorModeButton() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box sx={{ textTransform: 'capitalize' }}>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <NightlightRound /> : <NightlightRoundOutlined />}
            </IconButton>
            {theme.palette.mode} mode
        </Box>
    );
}