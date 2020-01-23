import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PageHeader } from "Components/";
import { Button, Container, TextField } from "@material-ui/core";
import sendEmail from "Utils/EmailSending";
import contactImage from "Assets/images/contact-page-header.jpg";
import "./ContactPage.scss";

const ContactPage = props => {
  const { t } = useTranslation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [body, setBody] = useState();
  useEffect(() => {
    props.setNotLanding(true);
  });
  return (
    <>
      <PageHeader imagePath={contactImage} pageTitle="Contact" />
      <Container className="contact-page">
        <div className="contact-form">
          <p className="contact-form-title">{t("contact.form.tagline")}</p>
          <TextField
            label={t("contact.form.name")}
            variant="filled"
            onChange={e => setName(e.target.value)}
          />
          <TextField
            label={t("contact.form.email")}
            variant="filled"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            label={t("contact.form.subject")}
            variant="filled"
            onChange={e => setSubject(e.target.value)}
          />
          <TextField
            label={t("contact.form.body")}
            multiline
            rows="5"
            variant="filled"
            onChange={e => setBody(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              const emailParameters = {
                origin: "CONTACT",
                name: name,
                from: email,
                subject: subject,
                body: body
              };
              sendEmail(emailParameters);
            }}
          >
            {t("contact.form.button")}
          </Button>
        </div>
        <div className="contact-info">
          <iframe
            title="map"
            width="100%"
            height="50%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZy1pVWMKzkwRzSNkeLZIx5s&key="
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
