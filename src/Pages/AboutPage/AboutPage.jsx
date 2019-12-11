import React from "react";
import { CustomToolbar, CustomFooter, PageHeader } from "Components/";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import aboutImage from "Assets/images/contact-page-header.jpg";
import "./AboutPage.scss";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <CustomToolbar />
      <PageHeader imagePath={aboutImage} pageTitle={t("about.title")} />
      <Container className="about-page">
        <div className="about-section">
          <Typography className="about-section-text" variant="h6">
            {t("about.section.one")}
          </Typography>
          <div className="about-section-image">
            <img src={aboutImage} alt="about 1" />
          </div>
        </div>
        <div className="about-section">
          <Typography className="about-section-text" variant="h6">
            {t("about.section.two")}
          </Typography>
          <div className="about-section-image">
            <img src={aboutImage} alt="about 2" />
          </div>
        </div>
      </Container>
      <CustomFooter />
    </>
  );
};

export default AboutPage;
