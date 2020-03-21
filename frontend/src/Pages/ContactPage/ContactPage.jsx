import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { PageHeader, ContactForm } from "Components/";
import { Container } from "@material-ui/core";
import secrets from "secret/front-secret.json"
import contactImage from "Assets/images/contact-page-header.jpg";
import "./ContactPage.scss";

const ContactPage = props => {
  const { t } = useTranslation();
  useLayoutEffect(() => {
    props.setNotLanding(true);
  });
  return (
    <>
      <PageHeader imagePath={contactImage} pageTitle="Contact" />
      <Container className="contact-page">
        <ContactForm />
        <div className="contact-info">
          <iframe
            title="map"
            width="100%"
            height="50%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZy1pVWMKzkwRzSNkeLZIx5s&key=${secrets.GMAPS_API_KEY}`}
            allowFullScreen
          />
          <div className="contact-info-div">
            <h2 className="contact-info-title">{t("contact.info.company")}</h2>
            <p className="contact-info-text">
              {`${t("contact.info.address")}
              ${t("contact.info.city-province")}
              ${t("contact.info.country")}
              ${t("contact.info.postal-code")}
            `}
            </p>

            <p className="contact-info-text">
              {`${t("contact.info.email")}
              ${t("contact.info.phone")}
            `}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
