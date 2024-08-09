import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { setTheme } from "../store/ThemeSlice"

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const navItems = [
    {
      text: "Home",
      url: "/",
      authStatus: null, // null for showing this tab irrespective of user login
    },
    {
      text: "SignIn",
      url: "/signin",
      authStatus: !isAuthenticated, // show when user is not logged in
    },
    {
      text: "SignUp",
      url: "/signup",
      authStatus: !isAuthenticated,
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleThemeChange = () => {
    dispatch(setTheme());
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Movie Website
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) =>
          (item.authStatus === null || item.authStatus) ? (
            <Link to={item.url} >
              <ListItem key={item.url} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} >
                  <ListItemText primary={item.text} />

                </ListItemButton>
              </ListItem>
            </Link>
          ) : null)}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', position: 'sticky' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "rgb(14,102,85)", flexWrap: "wrap" }} position='sticky' className='dark:bg-[rgb(46,64,83)]'>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            Movie Website
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (item.authStatus === null || item.authStatus) ? (
              <Link to={item.url}>
                <Button key={item.url} sx={{ color: '#fff' }}>
                  {item.text}
                </Button>
              </Link>
            ) : null)}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            color="inherit"
            edge="start"
            sx={{ ml: 1, }}
            onClick={handleThemeChange}
          >
            {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
