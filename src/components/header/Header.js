import React, { useState } from "react";
import { Grid, Button, IconButton, Container } from "@mui/material";
import Utils from "../../utils/Utils";
import logo from "../../logo.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Header = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  return (
    <Container>
      <Grid
        container
        spacing={2}
        style={{
          paddingTop: 15,
          paddingBottom: 15,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Logo */}
        <Grid item sm={12} lg={2} style={{display: 'flex', justifyContent: 'flex-end'}}>
          <IconButton style={{ padding: 0 }}>
            <img src={"./images/icons/logo.png"} style={{ width: 80, height: 40, objectFit: 'contain' }} />
          </IconButton>
        </Grid>
        {/* Menu Link */}
        <Grid item sm={12} lg={6}>
          <Grid container spacing={1}>
            {Utils.MenuLinks.map((menuLink, i) => {
              const textColor = activeLinkIndex === i ? "#004282" : "#1A323E";
              const fontWeight = activeLinkIndex === i ? 600 : 400;
              return (
                <Grid item>
                  <Button
                    style={{
                      color: textColor,
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: fontWeight,
                      textTransform: "none",
                    }}
                  >
                    {menuLink.mainLink}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {/* User Action */}
        <Grid item sm={12} lg={4}>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                color: "#004282",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "bolder",
                textTransform: "none",
              }}
            >
              Become a Teacher
            </Button>
            <IconButton>
              <img
                src={"./images/icons/save_instagram_icon.png"}
                style={{ width: 16, height: 16, color: "#AAB9C2" }}
              />
            </IconButton>
            <Button
              style={{
                color: "#ffffff",
                backgroundColor: "#004282",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "bolder",
                textTransform: "none",
                borderRadius: 15,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 2,
                paddingBottom: 2,
              }}
            >
              Sign In
            </Button>
            <IconButton>
              <SearchOutlinedIcon style={{ color: "#AAB9C2" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
