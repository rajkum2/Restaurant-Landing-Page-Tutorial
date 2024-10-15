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
// Removed unused imports
// import { Route, Routes } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Menu",
      icon: <HomeIcon />,
    },
    {
      text: "Catering",
      icon: <HomeIcon />,
    },
    // Uncomment if you plan to use these options
    // {
    //   text: "About",
    //   icon: <InfoIcon />,
    // },
    // {
    //   text: "Testimonials",
    //   icon: <CommentRoundedIcon />,
    // },
    // {
    //   text: "Contact",
    //   icon: <PhoneRoundedIcon />,
    // },
    // {
    //   text: "Cart",
    //   icon: <ShoppingCartRoundedIcon />,
    // },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
        4378 Thornton Ave, Fremont, CA-94538
        
        <button hidden className="primary-button">
          <a href="tel:5108941238" style={{fontSize: "30px"}}><FaPhoneAlt size={25} color="red" className="navbar-cart-icon" /> 510 894-1238</a>
          <br/> Tue - Sun | 12 PM - 11 PM
        </button>
        
      </div>
      <div className="navbar-links-container">
        <Link to={'/'}>Home</Link>
        {/* <Link to={'/about'}>About</Link> */}
        <Link to={'/menu'}>Menu</Link>
        <Link to={'/catering'}>Catering</Link>
        {/* <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a> */}
        

        <button className="primary-button">
          <a href="tel:5108941238" style={{fontSize: "30px"}}><FaPhoneAlt size={25} color="red" className="navbar-cart-icon" /> 510 894-1238</a>
          <br/> Tue - Sun | 12 PM - 11 PM
        </button>
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
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;