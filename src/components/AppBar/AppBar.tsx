import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../images/cmwhite.png';
import styles from './AppBar.module.css';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const pages = ['Home', 'Gallery', 'About', 'Contact'];

function ResponsiveAppBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElAdmin, setAnchorElAdmin] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElAdmin(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseAdminMenu = () => {
        setAnchorElAdmin(null);
    };

    function handleMenuNav(page: string) {
        navigate(`/${page === 'Home' ? '' : page}`);
        handleCloseNavMenu();
    }

  return (
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
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          WOOF
                      </IconButton>
                      <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElAdmin}
                          anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right'
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right'
                          }}
                          open={Boolean(anchorElAdmin)}
                          onClose={handleCloseAdminMenu}
                      ></Menu>
                  </Box>
              </Toolbar>
          </Container>
      </AppBar>
  );
}
export default ResponsiveAppBar;