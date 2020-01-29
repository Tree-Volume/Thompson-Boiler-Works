import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";
<<<<<<< HEAD
import { string as yupstring, object as yupobject } from "yup";
import { useForm } from "react-hook-form";
=======
import { useForm, Controller } from "react-hook-form";
>>>>>>> 74a1587af5a691b1715115081004bfa98acf965d
import { sendEmail } from "Utils/Requests";

import "./ContactForm.scss";

const ContactForm = () => {
  const { t } = useTranslation();
  const { handleSubmit, reset, register, errors } = useForm({
    validationSchema: yupobject().shape({
      name: yupstring().required(t("formValidation.required.name")),
      email: yupstring()
        .required(t("formValidation.required.email"))
        .email(t("formValidation.invalid.email")),
      subject: yupstring().required(t("formValidation.required.subject")),
      body: yupstring().required(t("formValidation.required.body"))
    })
  });
  const onSubmit = data => {
    const emailParameters = {
      origin: "CONTACT",
<<<<<<< HEAD
      name: data.name,
      from: data.email,
      subject: data.subject,
      body: data.body
=======
      name: data.Name,
      from: data.Email,
      subject: data.Subject,
      body: data.Body,
      resumeText: ""
>>>>>>> 74a1587af5a691b1715115081004bfa98acf965d
    };
    sendEmail(emailParameters);
    reset({ name: "", email: "", subject: "", body: "" });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <p className="contact-form-title">{t("contact.form.tagline")}</p>
      <TextField
        id="name"
        label={t("contact.form.name")}
        name="name"
        inputRef={register({ required: true })}
        variant="filled"
        error={errors.name ? true : false}
        helperText={errors.name ? errors.name.message : ""}
      />
      <TextField
        id="email"
        label={t("contact.form.email")}
        name="email"
        inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
        variant="filled"
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ""}
      />
      <TextField
        id="subject"
        label={t("contact.form.subject")}
        name="subject"
        inputRef={register({ required: true })}
        variant="filled"
        error={errors.subject ? true : false}
        helperText={errors.subject ? errors.subject.message : ""}
      />
      <TextField
        id="body"
        label={t("contact.form.body")}
        name="body"
        multiline
        rows="5"
        inputRef={register({ required: true })}
        variant="filled"
        error={errors.body ? true : false}
        helperText={errors.body ? errors.body.message : ""}
      />
      <Button variant="contained" type="submit">
        {t("contact.form.button")}
      </Button>
    </form>
  );
};

export default ContactForm;
