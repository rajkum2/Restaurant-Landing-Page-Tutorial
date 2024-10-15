import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Appetizers from "../Assets/categories/appetizers.webp";
import Biryanis from "../Assets/categories/mttndumbir.png";
import NonVegCurries from "../Assets/categories/nonvegcurries.png";
import Bevarages from "../Assets/categories/beverages.png";
import Desserts from "../Assets/categories/dessert.png";
import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
const Categories = () => {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const components = [
    {
      id: 1,
      title: "Tile One",
      background: "green",
      order: 1,
      stacked: true,
      position: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 8,
        xl: 8
      }
    },
    {
      id: 2,
      title: "Tile Two",
      background: "purple",
      order: 2,
      stacked: false,
      position: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      id: 3,
      title: "Tile Three",
      background: "pink",
      order: 3,
      stacked: false,
      position: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      id: 4,
      title: "Tile Four",
      background: "orange",
      order: 4,
      stacked: false,
      position: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      id: 5,
      title: "Tile Five",
      background: "brown",
      order: 5,
      stacked: false,
      position: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      id: 6,
      title: "Tile Six",
      background: "cyan",
      order: 6,
      stacked: true,
      position: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      id: 7,
      title: "Tile Seven",
      background: "teal",
      order: 7,
      stacked: true,
      position: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 4,
        xl: 4
      }
    }
  ];

  let results = [];

  components.forEach((item, i, arr) => {
    const prev = arr[i - 1] || 0;
    if (item.stacked) {
      if (prev && prev.stacked) {
        results[results.length - 1].push(item);
      } else {
        results.push([item]);
      }
    } else {
      results.push([item]);
    }
  });
  return (
    <Grid
    container
    spacing={2}
    className="App"
    sx={{
        height: isMobile ? "auto" : "100vh"
    }}
    padding={5}
    >
        
        <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            sx={{ display: "flex", flexDirection: "column" }}
        >
            <Link to={'/menu'}>
              <div
                  style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "300px",
                  textAlign: "center",
                  background: "green",
                  backgroundImage: "url(" + Appetizers + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                  }}
              >
                <span style={{backgroundColor:"black", padding: "5px", color:"white"}}>Appetizers</span>
              </div>
            </Link>
        </Grid>
        <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            sx={{ display: "flex", flexDirection: "column" }}
        >
            <Link to={'/menu'}>
              <div
                  style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "300px",
                  textAlign: "center",
                  background: "white",
                  backgroundImage: "url(" + Biryanis + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                  }}
              >
                  
                  <span style={{backgroundColor:"black", padding: "5px", color:"white"}}>Biryanis</span>
              </div>
            </Link>
        </Grid>
        <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            sx={{ display: "flex", flexDirection: "column" }}
        >
            <Link to={'/menu'}>
              <div
                  style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "300px",
                  textAlign: "center",
                  background: "white",
                  backgroundImage: "url(" + NonVegCurries + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                  }}
              >
                  
                  <span style={{backgroundColor:"black", padding: "5px", color:"white"}}>Curries</span>
              </div>
            </Link>
        </Grid>
        <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            sx={{ display: "flex", flexDirection: "column" }}
        >
            
            <div
                style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "300px",
                textAlign: "center",
                background: "white",
                backgroundImage: "url(" + Desserts + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}
            >
                
                <span style={{backgroundColor:"black", padding: "5px", color:"white"}}>Desserts</span>
            </div>
        </Grid>
        <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            sx={{ display: "flex", flexDirection: "column" }}
        >
            <Link to={'/menu'}>
              <div
                  style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "300px",
                  textAlign: "center",
                  background: "white",
                  backgroundImage: "url(" + Bevarages + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                  }}
              >
                  
                  <span style={{backgroundColor:"black", padding: "5px", color:"white"}}>Bevarages</span>
              </div>
            </Link>
        </Grid>
    </Grid> 
  );
};

export default Categories;
