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
  const servicesObject = t("services.service", { returnObjects: true });
  function buildNavBar() {
    const servicesKeys = Object.keys(servicesObject);
    const nav = [];
    do {
      const keySplice = servicesKeys.splice(0, 4);
      nav.push(
        <div className="row">
          {keySplice.map((key, index) => (
            <>
              <Button key={key}>{t(`services.service.${key}.title`)}</Button>
              {index + 1 !== keySplice.length && <span>|</span>}
            </>
          ))}
        </div>
      );
    } while (servicesKeys.length > 0);
    return nav;
  }
  return (
    <>
      <PageHeader imagePath={servicesImage} pageTitle={t("services.title")} />
      <Container className="services-page">
        <div className="services-nav">{buildNavBar()}</div>
        <hr className="linebreak" />
        <div className="flavor">
          <Typography align="center" variant="h6" className="flavor-text">
            {t("services.flavorText")}
          </Typography>
        </div>
        {servicesObject != null &&
          Object.keys(servicesObject).map(key => (
            <Service
              key={key}
              title={t(`services.service.${key}.title`)}
              content={t(`services.service.${key}.body`)}
              image={servicesImage}
              imageAlt={t(`services.service.${key}.imageAlt`)}
            />
          ))}
      </Container>
    </>
  );
};

export default ServicesPage;
