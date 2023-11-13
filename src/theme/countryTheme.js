import { createTheme, responsiveFontSizes } from "@mui/material";

export default function creteCountryTheme(mode) {
    let theme = createTheme({
        typography: {
          fontFamily: '"Nunito Sans", Roboto, sans-serif',
          button: {
            fontWeight: 300,
          },
          body1: {
            fontWeight: 300,
          },
        },
        palette: {
          mode,
          ...(mode === 'light'
              ? {
                  primary: {
                    main: 'hsl(0, 0%, 100%)',
                  },
                  background: {
                    default: 'hsl(0, 0%, 98%)',
                    main: 'hsl(0, 0%, 98%)',
                    paper: 'hsl(0, 0%, 100%)',
                  },
                  text: {
                    primary: 'hsl(200, 15%, 8%)',
                  },
                  
                }
              : {
                  primary: {
                    main: 'hsl(209, 23%, 22%)',
                  },
                  background: {
                    default: 'hsl(207, 26%, 17%)',
                    main: 'hsl(209, 23%, 22%)',
                    paper: 'hsl(209, 23%, 22%)',
                  },
                  text: {
                    primary: 'hsl(0, 0%, 100%)',
                  },
                }
          ),
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-family: 'Nunito Sans';
                font-style: normal;
                font-weight: 300 800;
                font-stretch: 100%;
                src: url(https://fonts.gstatic.com/s/nunitosans/v15/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7t1R-tQLL50tE8.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              }
            `,
          },
          MuiInputBase: {
            styleOverrides: {
              root: ({ theme }) => ({ backgroundColor: theme.palette.background.paper }),
            }
          },
          MuiButton: {
            styleOverrides: {
              root: ({ ownerState, theme }) => ({
                ...(ownerState.variant  === 'contained' && {
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  textTransform: 'none',
                }),
              }),
            },
          },
        },
    });

    theme.typography.logo = {
      fontSize: '1rem',
      fontWeight: 800,
      [theme.breakpoints.up('md')]: {
        fontSize: '1.3rem',
      },
    };

    return responsiveFontSizes(theme);
}