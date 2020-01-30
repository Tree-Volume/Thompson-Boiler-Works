import React, { useState } from "react";
import { Button, TextField, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { string as yupstring, object as yupobject } from "yup";
import { useForm } from "react-hook-form";
import { sendEmail } from "Utils/Requests";

import "./CareersForm.scss";

const CareersForm = () => {
  const { t } = useTranslation();
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
        .max(500, t("formValidation.length.body")),
      resumeText: yupstring()
        .required(t("formValidation.required.resumeText"))
        .max(1000, t("formValidation.length.resumeText"))
    })
  });
  const [radioValue, setRadioValue] = useState("upload");
  const updateRadio = e => {
    setRadioValue(e.target.value);
  };

  //if form passes validation, send email
  const onSubmit = data => {
    const emailParameters = {
      origin: "CAREERS",
      name: data.name,
      from: data.email,
      subject: data.subject,
      body: data.body,
      resumeText: data.resumeText
    };
    sendEmail(emailParameters);
    reset({ name: "", email: "", subject: "", body: "" });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="careers-form">
        <TextField
          id="name"
          label={t("careers.form.name")}
          name="name"
          inputRef={register}
          variant="filled"
          error={errors.name ? true : false}
          helperText={errors.name ? errors.name.message : ""}
        />
        <TextField
          id="email"
          label={t("careers.form.email")}
          name="email"
          inputRef={register}
          variant="filled"
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          id="body"
          label={t("careers.form.body")}
          name="body"
          inputRef={register}
          variant="filled"
          error={errors.body ? true : false}
          helperText={errors.body ? errors.body.message : ""}
        />
        <RadioGroup
          aria-label="upload format"
          name="format"
          className="careers-form-radios"
          value={radioValue}
          onChange={updateRadio}
        >
          <FormControlLabel
            value="upload"
            control={<Radio disableRipple />}
            label={t("careers.form.upload")}
          />
          <FormControlLabel
            value="paste"
            control={<Radio control={<Radio disableRipple />} />}
            label={t("careers.form.paste")}
          />
        </RadioGroup>
        <div className="careers-form-resume">
          {radioValue === "paste" ? (
            <TextField
              id="resumeText"
              label={t("careers.form.resumeText")}
              name="resumeText"
              inputRef={register}
              variant="filled"
              error={errors.resumeText ? true : false}
              helperText={errors.resumeText ? errors.resumeText.message : ""}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <Button className="submit" type="submit" variant="contained">
        {t("contact.form.button")}
      </Button>
    </form>
  );
};

export default CareersForm;
