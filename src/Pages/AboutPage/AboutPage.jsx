import React from "react";
import { CustomToolbar, CustomFooter, PageHeader } from "Components/";
import { Container, Typography } from "@material-ui/core";
import aboutImage from "Assets/images/contact-page-header.jpg";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <CustomToolbar />
      <PageHeader imagePath={aboutImage} pageTitle="About" />
      <Container className="about-page">
        <div className="about-section">
          <Typography className="about-section-text" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor urna quissapien
            rutrum volutpat. Nullam lectus magna, lacinia nec orci quis, cursus convallismagna. Cras
            dictum laoreet tellus a rutrum. Donec ac commodo augue. Donec enim metus,fringilla id
            suscipit ac, malesuada non ligula. Aenean ultricies quam ut sem eleifend,quis
            condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim. Proin
            vehiculadignissim cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiamporttitor urna quis sapien rutrum volutpat.
          </Typography>
          <div className="about-section-image">
            <img src={aboutImage} alt="about 1" />
          </div>
        </div>
        <div className="about-section">
          <Typography className="about-section-text" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor urna quissapien
            rutrum volutpat. Nullam lectus magna, lacinia nec orci quis, cursus convallismagna. Cras
            dictum laoreet tellus a rutrum. Donec ac commodo augue. Donec enim metus,fringilla id
            suscipit ac, malesuada non ligula. Aenean ultricies quam ut sem eleifend,quis
            condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim. Proin
            vehiculadignissim cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiamporttitor urna quis sapien rutrum volutpat.
          </Typography>
          <div className="about-section-image">
            <img src={aboutImage} alt="about 1" />
          </div>
        </div>
      </Container>
      <CustomFooter />
    </>
  );
};

export default AboutPage;
