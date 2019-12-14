import React from "react";
import { PageHeader } from "Components/";
import { Container } from "@material-ui/core";
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
      </Container>
    </>
  );
};

export default ServicesPage;
