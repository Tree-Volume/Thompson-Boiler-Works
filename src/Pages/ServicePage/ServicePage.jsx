import React from "react";
import { CustomToolbar, CustomFooter, PageHeader } from "Components/";
import { Container } from "@material-ui/core";
import servicesImage from "Assets/images/contact-page-header.jpg";
import "./ServicePage.scss";

const ServicePage = () => {
  return (
    <>
      <CustomToolbar />
      <PageHeader imagePath={servicesImage} pageTitle="Services" />
      <Container className="service-page" />
      <CustomFooter />
    </>
  );
};

export default ServicePage;
