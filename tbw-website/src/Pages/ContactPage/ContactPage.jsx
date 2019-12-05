import React from "react";
import { useTranslation } from "react-i18next";
import { CustomToolbar, CustomFooter, PageHeader } from "Components/";
import { Container, TextField } from "@material-ui/core";
import contactImage from "Assets/images/contact-page-header.jpg";
import "./ContactPage.scss";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <CustomToolbar
        title={t("title")}
        options={[
          t("nav.about"),
          t("nav.services"),
          t("nav.projects"),
          t("nav.careers"),
          t("nav.contact")
        ]}
      />
      <PageHeader imagePath={contactImage} pageTitle="Contact" />
      <Container className="contact-page" style={{ height: "500px" }}>
        <div className="contact-form">
          <p className="contact-form-title">Send us an email!</p>
          <TextField label="Name" variant="filled" />
          <TextField label="Email" variant="filled" />
          <TextField label="Subject" variant="filled" />
          <TextField label="Body" multiline rows="5" variant="filled" />
        </div>
        <div className="contact-info">
          {/*
            <iframe
              title="map"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZy1pVWMKzkwRzSNkeLZIx5s&key=..."
              allowFullScreen
            />
          */}
          <h1>Send us an email!</h1>
        </div>
      </Container>
      <CustomFooter />
    </>
  );
};

export default ContactPage;
