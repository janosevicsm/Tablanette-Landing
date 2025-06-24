import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#032D23',
        },
        secondary: {
            main: '#79E684',
        },
        background: {
            default: '#1B4242',
        },
        success: {
            main: '#3FCB4D',
        },
        error: {
            main: '#DD3636',
        },
        text: {
            primary: '#f5f5f5',
            secondary: '#032D23',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: {
            fontFamily: 'Righteous, cursive',
        },
        h2: {
            fontFamily: 'Righteous, cursive',
        },
        h3: {
            fontFamily: 'Righteous, cursive',
        },
        h4: {
            fontFamily: 'Righteous, cursive',
        },
        h5: {
            fontFamily: 'Righteous, cursive',
        },
        h6: {
            fontFamily: 'Righteous, cursive',
        },
    },
});

export default theme;