import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import Utils from "../../utils/Utils";
import { Box } from "@mui/system";

const Footer = (props) => {
  return (
    <Grid container style={{ backgroundColor: "#AAB9C2", paddingTop: 50 }}>
      <Container>
        <Grid container>
          <Grid
            item
            lg={3}
            sm={12}
            md={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={"./images/icons/logo.png"}
              style={{ width: 80, height: 40, objectFit: "contain" }}
            />
            <Typography
              style={{
                color: "#647786",
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 14,
                textAlign: "left",
              }}
            >
              Lectus magna fringilla urna porttitor rhoncus dolor purus non
              enim. Morbi tristique senectus et netus et. Sed viverra tellus in
              hac habitasse platea dictumst vestibulum.
            </Typography>
          </Grid>
          <Grid item lg={5} sm={12} md={12}>
            <Grid container lg={12} spacing={2}>
              <Grid
                item
                lg={4}
                sm={12}
                md={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#647786",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 18,
                    textAlign: "left",
                    fontWeight: "bolder",
                  }}
                >
                  Menu
                </Typography>
                {Utils.FooterMenu.map((fmenu, i) => {
                  return (
                    <Typography
                      key={i}
                      style={{
                        color: "#ffffff",
                        cursor: "pointer",
                        marginTop: 5,
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: "bolder",
                      }}
                    >
                      {fmenu}
                    </Typography>
                  );
                })}
              </Grid>
              <Grid
                item
                lg={4}
                sm={12}
                md={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#647786",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 18,
                    textAlign: "left",
                    fontWeight: "bolder",
                  }}
                >
                  Courses
                </Typography>
                {Utils.FooterCourses1.map((fmenu, i) => {
                  return (
                    <Typography
                      key={i}
                      style={{
                        color: "#ffffff",
                        cursor: "pointer",
                        marginTop: 5,
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: "bolder",
                      }}
                    >
                      {fmenu}
                    </Typography>
                  );
                })}
              </Grid>
              <Grid
                item
                lg={4}
                sm={12}
                md={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Box height={30} />
                {Utils.FooterCourses2.map((fmenu, i) => {
                  return (
                    <Typography
                      key={i}
                      style={{
                        color: "#ffffff",
                        cursor: "pointer",
                        marginTop: 5,
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: "bolder",
                      }}
                    >
                      {fmenu}
                    </Typography>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={4}
            sm={12}
            md={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={"./images/icons/app_store.png"}
              style={{ width: 150, height: 100, objectFit: "contain" }}
            />
            <img
              src={"./images/icons/play_store.png"}
              style={{ width: 150, height: 100, objectFit: "contain" }}
            />
            <img
              src={"./images/icons/qrcode.png"}
              style={{ width: 100, height: 100, objectFit: "contain" }}
            />
          </Grid>
        </Grid>
        <Box height={15} />
        <Divider style={{ height: 2 }} />
        <Typography
          style={{
            color: "#647786",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 12,
            textAlign: "center",
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          © Rozoom - Courses and Education Template 2020, Made in Ukraine
        </Typography>
      </Container>
    </Grid>
  );
};

Footer.propTypes = {};

export default Footer;
