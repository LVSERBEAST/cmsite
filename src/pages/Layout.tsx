import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar/AppBar';
import { Box, Link, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Facebook, Instagram, Email } from '@mui/icons-material';

function Navigate(media: string, username: string) {
    if (media === 'email') {
        return window.location.href = 'mailto:user@example.com?subject=Subject&body=message%20goes%20here';
    }
    
    const url = `http://${media}.com/${username}`;
    var newWin = window.open(url);

    if (!newWin || newWin.closed || typeof newWin.closed == 'undefined') {
        alert('Please diasble popup blocker')
    } else {
        window.open(`${media}.com/${username}`);
    }
}

function Copyright() {
    return (
        <Typography variant="body2" color="#e1e1e1" align="center">
            <Typography component="span" display="block">
                <Facebook sx={{ fontSize: 40 }} cursor="pointer" onClick={() => Navigate('facebook', 'christopher.markgraf')} />
                <Instagram sx={{ fontSize: 40 }} cursor="pointer" onClick={() => Navigate('instagram', 'christopher.markgraf')} />
                <Email sx={{ fontSize: 40 }} cursor="pointer" onClick={() => Navigate('email', '')} />
            </Typography>
            {'Copyright © '}
            <Link color="inherit" href="https://christophermarkgraf.com/">
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