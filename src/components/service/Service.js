import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

const Service = (props) => {
  const { icon, title, description } = props;
  return (
    <Grid
      item
      lg={4}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: 40
      }}
    >
      <img src={icon} style={{ width: 44, height: 65, objectFit: "contain" }} />
      <Typography
        style={{
          color: "#1A323E",
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: "bolder",
          fontSize: 24,
          textAlign: "left",
        }}
      >
        {title}
      </Typography>
      <Typography
        style={{
          color: "#6D7B82",
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 14,
          textAlign: "left",
        }}
      >
        {description}
      </Typography>
    </Grid>
  );
};

Service.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Service;
