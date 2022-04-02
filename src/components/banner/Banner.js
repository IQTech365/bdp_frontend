import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@mui/material";

const Banner = (props) => {
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid item lg={2}>
        <img
          src="./images/icons/banner_left_icon.png"
          style={{ width: 60, height: 120 }}
        />
      </Grid>
      <Grid
        item
        lg={5}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            color: "#1A323E",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "bolder",
            fontSize: 24,
            textAlign: "left",
          }}
        >
          Online Courses and <br />
          Education Template <br />
          for Adobe XD
        </Typography>
        <Typography
          style={{
            color: "#6D7B82",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 14,
            textAlign: "left",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </Typography>
        <Button
          style={{
            color: "#ffffff",
            backgroundColor: "#004282",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "bolder",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 0,
            alignSelf: "center",
            marginTop: 20,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          VIEW ALL COURSES
        </Button>
      </Grid>
      <Grid item lg={5}>
        <img
          src="./images/icons/banner_image.png"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Grid>
    </Grid>
  );
};

Banner.propTypes = {};

export default Banner;
