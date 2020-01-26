import React, { useEffect } from "react";
import { PageHeader, CareersForm } from "Components/";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import aboutImage from "Assets/images/contact-page-header.jpg";
import "./CareersPage.scss";

const CareersPage = props => {
  const { t } = useTranslation();
  useEffect(() => {
    props.setNotLanding(true);
  });
  return (
    <>
      <PageHeader imagePath={aboutImage} pageTitle={t("careers.title")} />
      <Container className="careers-page">
        <div className="flavor">
          <Typography align="center" className="flavor-text" variant="h5">
            {t("careers.flavorText")}
          </Typography>
        </div>
        <CareersForm />
      </Container>
    </>
  );
};

export default CareersPage;
