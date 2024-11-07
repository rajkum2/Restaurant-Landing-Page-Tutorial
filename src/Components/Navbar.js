/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { Link } from 'react-router-dom';
// import { BsCart2 } from "react-icons/bs";
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Removed unused imports
// import { Route, Routes } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
          <Link to={'/'}>Home</Link>
          {/* <Link to={'/about'}>About</Link> */}
          <Link to={'/menu'}>Menu</Link>
          <Link to={'/catering'}>Catering</Link>
          {/* <a href="">About</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a> */}
          

          
        </div>
        
        
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              
                <ListItem key="Home" disablePadding>
                  <Link to={'/'}>
                    <ListItemButton>
                      <ListItemIcon><RestaurantMenuIcon /></ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem key="Menu" disablePadding>
                  <Link to={'/menu'}>
                    <ListItemButton>
                      <ListItemIcon><HomeIcon /></ListItemIcon>
                      <ListItemText primary="Menu" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem key="Catering" disablePadding>
                  <Link to={'/catering'}>
                    <ListItemButton>
                      <ListItemIcon><DinnerDiningIcon /></ListItemIcon>
                      <ListItemText primary="Catering" />
                    </ListItemButton>
                  </Link>
                </ListItem>
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
      <Grid container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item>4378 Thornton Ave, Fremont, CA-94536</Grid>
        <Grid item>
          <button className="primary-button">
            <a href="tel:5108941238" style={{fontSize: "30px"}}><FaPhoneAlt size={25} color="red" className="navbar-cart-icon" /> 510 894-1238</a>
            <br/> Tue - Sun | 12 PM - 11 PM
          </button>
        </Grid>
      </Grid>
      <div>
        
        
        

      </div>
    </>
  );
};

export default Navbar;
