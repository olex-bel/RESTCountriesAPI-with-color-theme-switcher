
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from "react-router-dom";

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import { ToggleColorMode } from '../../context/ToggleColorMode';
import ColorModeButton from '../common/ColorModeButton';

export default function Layout() {
    return (
        <ToggleColorMode>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar 
                        disableGutters={true} 
                        sx={{ 
                            width: {
                                xs: 'auto%',
                                md: '80%', 
                            },
                            maxWidth: '1440px', 
                            mx: {
                                xs: 2,
                                md: 'auto',
                            }
                        }}
                    >
                        <Typography 
                            variant='logo'
                            sx={{ 
                                flexGrow: 1, 
                                fontWeight: 800 
                            }}
                        >
                            Where in the world!
                        </Typography>
                        <ColorModeButton />
                    </Toolbar>
                </AppBar>
            </Box>

            <Box 
                sx={{ 
                    width: {
                        xs: 'auto',
                        md: '80%', 
                    },
                    maxWidth: '1440px', 
                    mx: {
                        xs: 2,
                        md: 'auto',
                    }
                }}
            >
                <Outlet />
            </Box>
        </ToggleColorMode>
    );
}