import React, { useEffect } from "react";
import { PageHeader, Service } from "Components/";
import { Container, Typography, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import servicesImage from "Assets/images/contact-page-header.jpg";
import "./ServicesPage.scss";

const ServicesPage = props => {
  const { t } = useTranslation();
  useEffect(() => {
    props.setNotLanding(true);
  });
  return (
    <>
      <PageHeader imagePath={servicesImage} pageTitle={t("services.title")} />
      <Container className="services-page">
        <div className="services-nav">
          <div className="row">
            <Button>{t("services.service.one.title")}</Button>
            <span>|</span>
            <Button>{t("services.service.two.title")}</Button>
          </div>
        </div>
        <hr className="linebreak" />
        <div className="flavor">
          <Typography align="center" variant="h6" className="flavor-text">
            {t("services.flavorText")}
          </Typography>
        </div>
        <Service
          title={t("services.service.one.title")}
          content={t("services.service.one.body")}
          image={servicesImage}
          imageAlt={t("services.service.one.imageAlt")}
        />
        <Service
          title={t("services.service.two.title")}
          content={t("services.service.two.body")}
          image={servicesImage}
          imageAlt={t("services.service.two.imageAlt")}
        />
      </Container>
    </>
  );
};

export default ServicesPage;
