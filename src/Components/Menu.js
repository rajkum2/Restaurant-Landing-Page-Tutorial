import React from "react";
// import AboutBackground from "../Assets/about-background.png";
// import AboutBackgroundImage from "../Assets/about-background-image.png";
import Appetizers from "../Assets/menu/Appetizers.jpg";
import Biryanis from "../Assets/menu/Biryanis.jpg";
import NonVegCurries from "../Assets/menu/Non-veg Curries.jpg";
import VegCurries from "../Assets/menu/Veg Curries.jpg";
import Tandoor from "../Assets/menu/tandooori.jpg";
// import { BsFillPlayCircleFill } from "react-icons/bs";
import Grid from '@mui/material/Grid';
const Menu = () => {
  return (
    <Grid container spacing={2}>
        
        <Grid item xs={12} lg={4}>
            <img src={Biryanis} alt="" />
        </Grid>
        <Grid item xs={12} lg={4}>
            <img src={Tandoor} alt="" />
        </Grid>
        <Grid item xs={12} lg={4}>
            <img src={Appetizers} alt="" />
        </Grid>
        <Grid item xs={12} lg={4}>
            <img src={NonVegCurries} alt="" />
        </Grid>
        <Grid item xs={12} lg={4}>
            <img src={VegCurries} alt="" />
        </Grid>
    </Grid>
  );
};

export default Menu;
