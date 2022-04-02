import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import { Container, Grid } from "@mui/material";
import Banner from "../../components/banner/Banner";
import Utils from "../../utils/Utils";
import Service from "../../components/service/Service";
import Footer from "../../components/footer/Footer";

const Home = (props) => {
  return (
    <Grid container>
      <Header />
      <Banner />
      <Container style={{ marginTop: 100, marginBottom: 50 }}>
        <Grid container>
          {Utils.Services.map((service) => {
            return (
              <Service
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
};

Home.propTypes = {};

export default Home;
