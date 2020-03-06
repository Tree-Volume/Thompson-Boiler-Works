import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { string as yupstring, object as yupobject } from "yup";
import { useForm } from "react-hook-form";
import { sendEmail } from "Utils/Requests";

import "./ContactForm.scss";

const useInputStyles = makeStyles(theme => ({
  root: {
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "black"
    }
  }
}));

const ContactForm = () => {
  const { t } = useTranslation();
  const classes = useInputStyles();
  const { handleSubmit, reset, register, errors } = useForm({
    validationSchema: yupobject().shape({
      name: yupstring()
        .required(t("formValidation.required.name"))
        .max(50, t("formValidation.length.name")),
      email: yupstring()
        .required(t("formValidation.required.email"))
        .email(t("formValidation.invalid.email")),
      subject: yupstring()
        .required(t("formValidation.required.subject"))
        .max(80, t("formValidation.length.subject")),
      body: yupstring()
        .required(t("formValidation.required.body"))
        .max(1000, t("formValidation.length.resumeText"))
    })
  });
  const onSubmit = data => {
    const emailParameters = {
      origin: "CONTACT",
      name: data.name,
      from: data.email,
      subject: data.subject,
      body: data.body
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
        inputRef={register}
        classes={errors.name ? {} : classes}
        variant="filled"
        color="primary"
        error={errors.name ? true : false}
        helperText={errors.name ? errors.name.message : ""}
      />
      <TextField
        id="email"
        label={t("contact.form.email")}
        name="email"
        inputRef={register}
        classes={errors.email ? {} : classes}
        variant="filled"
        color="primary"
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ""}
      />
      <TextField
        id="subject"
        label={t("contact.form.subject")}
        name="subject"
        inputRef={register}
        classes={errors.subject ? {} : classes}
        variant="filled"
        color="primary"
        error={errors.subject ? true : false}
        helperText={errors.subject ? errors.subject.message : ""}
      />
      <TextField
        id="body"
        label={t("contact.form.body")}
        name="body"
        multiline
        rows="5"
        inputRef={register}
        classes={errors.body ? {} : classes}
        variant="filled"
        color="primary"
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
