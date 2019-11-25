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
          <TextField label="Name" variant="outlined" />
          <TextField label="Email" variant="outlined" />
          <TextField label="Subject" variant="outlined" />
          <TextField label="Body" variant="outlined" />
        </div>
        <div className="contact-info">
          <h1>Send us an email!</h1>
        </div>
      </Container>
      <CustomFooter />
    </>
  );
};

export default ContactPage;
