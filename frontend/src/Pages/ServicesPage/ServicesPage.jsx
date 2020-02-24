import React, { useEffect, useRef } from "react";
import { PageHeader, Service } from "Components/";
import { Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import servicesImage from "Assets/images/contact-page-header.jpg";
import CustomServicesNav from "Components/CustomServicesNav";
import "./ServicesPage.scss";

const ServicesPage = props => {
  const { t } = useTranslation();
  useEffect(() => {
    props.setNotLanding(true);
  });
  const servicesObject = t("services.service", { returnObjects: true });
  const serviceRefs = useRef(
    Array.from({ length: Object.keys(servicesObject).length }, () => React.createRef())
  );
  return (
    <>
      <PageHeader imagePath={servicesImage} pageTitle={t("services.title")} />
      <Container className="services-page">
        <div>
        <CustomServicesNav className="services-nav" servicesObject={servicesObject} serviceRefs={serviceRefs} />
        </div>
        <div className="services-content">
          {servicesObject != null &&
            Object.keys(servicesObject).map((key, index) => (
              <Service
                reference={serviceRefs.current[index]}
                key={key}
                title={t(`services.service.${key}.title`)}
                content={t(`services.service.${key}.body`)}
                image={servicesImage}
                imageAlt={t(`services.service.${key}.imageAlt`)}
              />
            ))}
        </div>
      </Container>
    </>
  );
};

export default ServicesPage;
