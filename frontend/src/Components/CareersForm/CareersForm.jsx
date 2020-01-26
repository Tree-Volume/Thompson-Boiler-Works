import React, { useState } from "react";
import { Button, TextField, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { sendEmail } from "Utils/Requests";

import "./CareersForm.scss";

const defaultValues = {
  Name: "",
  Email: "",
  Subject: "",
  Body: "",
  ResumeText: ""
};

const CareersForm = () => {
  const { t } = useTranslation();
  const { handleSubmit, reset, control, error } = useForm({ defaultValues });
  const [radioValue, setRadioValue] = useState("upload");
  const updateRadio = e => {
    setRadioValue(e.target.value);
  };

  //if form passes validation, send email
  const onSubmit = data => {
    const emailParameters = {
      origin: "CAREERS",
      name: data.Name,
      from: data.Email,
      subject: data.Subject,
      body: data.Body,
      resumeText: data.ResumeText
    };
    sendEmail(emailParameters);
    reset(defaultValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="careers-form">
        <Controller
          as={<TextField label={t("careers.form.name")} variant="filled" />}
          name="Name"
          control={control}
          rules={{ required: true, maxLength: 80 }}
        />
        <Controller
          as={<TextField name="Email" label={t("careers.form.email")} variant="filled" />}
          name="Email"
          control={control}
          rules={{ required: true, pattern: /^\S+@\S+$/i }}
        />
        <Controller
          as={<TextField label={t("careers.form.body")} multiline rows="5" variant="filled" />}
          name="Body"
          control={control}
          rules={{ required: true, maxLength: 500 }}
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
            <Controller
              as={
                <TextField label={t("careers.form.resume")} multiline rows="10" variant="filled" />
              }
              name="ResumeText"
              control={control}
              rules={{ required: true, maxLength: 500 }}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <Button
        className="submit"
        type="submit"
        variant="contained"
        onClick={() => {
          console.log(error);
        }}
      >
        {t("contact.form.button")}
      </Button>
    </form>
  );
};

export default CareersForm;
