import React from "react";
import { PageHeader } from "Components/";
import { Container, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import servicesImage from "Assets/images/contact-page-header.jpg";
import "./ServicesPage.scss";

const ServicesPage = () => {
  return (
    <>
      <PageHeader imagePath={servicesImage} pageTitle="Services" />
      <Container className="services-page">
        <div className="services-nav">
          <div className="row">
            <Button> Services 1 </Button>
            |
            <Button> Services 2 </Button>
            |
            <Button> Services 3 </Button>
            |
            <Button> Services 4 </Button>
          </div>
          <div className="row">
            <Button> Services 5 </Button>
            |
            <Button> Services 6 </Button>
            |
            <Button> Services 7 </Button>
          </div>
        </div>
        <hr></hr>
        <div className="flavor">
          <Typography align="center" variant="h6" className="flavor-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </div>
        <div className="service">
          <Container>
            <Typography variant="h2">Service 1</Typography>
            <Typography variant="h6" className="service-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor urna quissapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis, cursus convallismagna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue. Donec enim metus,fringilla id suscipit a</Typography>
            <div className="service-image">
              <img src={servicesImage} alt="service 2" />
            </div>
          </Container>
        </div>
        <div className="service">
          <Container>
            <Typography variant="h2">Service 2</Typography>
            <Typography variant="h6" className="service-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor urna quissapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis, cursus convallismagna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue. Donec enim metus,fringilla id suscipit a</Typography>
            <div className="service-image">
              <img src={servicesImage} alt="service 2" />
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default ServicesPage;
