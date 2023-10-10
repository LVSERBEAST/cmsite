import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar/AppBar';
import { Box, Link, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Facebook, Instagram, Email, } from '@mui/icons-material';
import { facebookLink, instagramLink, emailLink, siteLink } from '../utilities/constants';

function Copyright() {
    return (
        <Typography variant="body2" color="#e1e1e1" align="center">
            <Typography component="span" display="block">
                <Link href={facebookLink} target={'blank'}>
                    <Facebook sx={{ fontSize: 40, color: '#e1e1e1' }} />
                </Link>
                <Link href={instagramLink} target={'blank'}>
                    <Instagram sx={{ fontSize: 40, color: '#e1e1e1' }} />
                </Link>
                <Link href={emailLink}>
                    <Email sx={{ fontSize: 40, color: '#e1e1e1' }} />
                </Link>
            </Typography>
            {'Copyright © '}
            <Link color="inherit" href={siteLink}>
                ChristopherMarkgraf
            </Link>{' '}
            2023
        </Typography>
    );
}

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#00ff00'
        }
    }
});

const LayoutComponent = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AppBar />
            <Outlet />
            <Box sx={{ bgcolor: '#000000', p: 6, padding: '20px' }} component="footer">
                <Copyright />
            </Box>
        </ThemeProvider>
    );
};

export default LayoutComponent;