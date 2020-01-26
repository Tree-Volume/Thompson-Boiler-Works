import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { sendEmail } from "Utils/Requests";

import "./ContactForm.scss";

const defaultValues = {
  Name: "",
  Email: "",
  Subject: "",
  Body: ""
};

const ContactForm = () => {
  const { handleSubmit, reset, control } = useForm({ defaultValues });
  const { t } = useTranslation();

  //if form passes validation, send email
  const onSubmit = data => {
    const emailParameters = {
      origin: "CONTACT",
      name: data.Name,
      from: data.Email,
      subject: data.Subject,
      body: data.Body,
      resumeText: ""
    };
    sendEmail(emailParameters);
    reset(defaultValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <p className="contact-form-title">{t("contact.form.tagline")}</p>
      <Controller
        as={<TextField label={t("contact.form.name")} variant="filled" />}
        name="Name"
        control={control}
        rules={{ required: true, maxLength: 80 }}
      />
      <Controller
        as={<TextField label={t("contact.form.email")} variant="filled" />}
        name="Email"
        control={control}
        rules={{ required: true, pattern: /^\S+@\S+$/i }}
      />
      <Controller
        as={<TextField label={t("contact.form.subject")} variant="filled" />}
        name="Subject"
        control={control}
        rules={{ required: true, maxLength: 40 }}
      />
      <Controller
        as={<TextField label={t("contact.form.body")} multiline rows="5" variant="filled" />}
        name="Body"
        control={control}
        rules={{ required: true, maxLength: 500 }}
      />
      <Button variant="contained" type="submit">
        {t("contact.form.button")}
      </Button>
    </form>
  );
};

export default ContactForm;
