import { AppBar, Box, Menu, Toolbar, IconButton, Container, Button, MenuItem, Typography, Snackbar } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/cmwhite.png';
import styles from './AppBar.module.css';
import { useNavigate } from 'react-router-dom';
import { pages } from '../../utilities/constants';
import Login from '../Login/Login';
import { useState } from 'react';

function ResponsiveAppBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [openLogin, setOpenLogin] = useState<boolean>(false);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    const closeModal = () => {
        setOpenLogin(false);
    };

    function handleMenuNav(page: string) {
        navigate(`/${page === 'Home' ? '' : page}`);
        handleCloseNavMenu();
    }

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img
                            src={logo}
                            alt={'logo'}
                            className={styles.logoFullScreen}
                            onClick={() => {
                                handleMenuNav('Home');
                            }}
                        />
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton size="large" aria-label="menu" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        className={styles.menuItem}
                                        style={{ width: '115px', fontSize: '28 px' }}
                                        key={page}
                                        onClick={() => {
                                            handleMenuNav(page);
                                        }}
                                    >
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <img
                            src={logo}
                            alt={'logo'}
                            className={styles.logoMobile}
                            onClick={() => {
                                handleMenuNav('Home');
                            }}
                        />
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => {
                                        handleMenuNav(page);
                                    }}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={() => setOpenLogin(true)} sx={{ p: 0, cursor: 'default' }}>
                                WOOF
                            </IconButton>
                            <Login open={openLogin} handleClose={closeModal}></Login>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default ResponsiveAppBar;