import { useState, useMemo, createContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import creteCountryTheme from "../theme/countryTheme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ToggleColorMode({ children }) {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }), []);
  
    const theme = useMemo(
      () => creteCountryTheme(mode),
      [mode],
    );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}
