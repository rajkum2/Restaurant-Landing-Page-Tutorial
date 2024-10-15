import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import Appetizers from "../Assets/menu/Appetizers.jpg";
import CateringByTray from "../Assets/catering/cateringbytray.png";
import NonVegCurries from "../Assets/menu/Non-veg Curries.jpg";
import VegCurries from "../Assets/menu/Veg Curries.jpg";
import Tandoor from "../Assets/menu/tandooori.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Grid from '@mui/material/Grid';
const Catering = () => {
  return (
    <Grid container spacing={2}>
        
        <Grid item xs={12} lg={12}>
            <h1>Catering By Tray</h1>
            <img src={CateringByTray} alt="" />
        </Grid>
    </Grid>
  );
};

export default Catering;
