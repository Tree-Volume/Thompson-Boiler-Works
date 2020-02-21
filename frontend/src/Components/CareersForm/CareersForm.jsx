import React from "react";

import "./CareersForm.scss";

const CareersForm = () => {
  <form>
    <div className="careers-form">
      <TextField label={t("careers.labels.name")} variant="filled" />
      <TextField label={t("careers.labels.email")} variant="filled" />
      <TextField label={t("careers.labels.body")} multiline rows="5" variant="filled" />
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
          label={t("careers.labels.upload")}
        />
        <FormControlLabel
          value="paste"
          control={<Radio control={<Radio disableRipple />} />}
          label={t("careers.labels.paste")}
        />
      </RadioGroup>
      <div className="careers-form-resume">
        {radioValue === "paste" ? (
          <TextField label={t("careers.labels.resume")} multiline rows="10" variant="filled" />
        ) : (
          <DropzoneArea
            dropzoneClass="dropzone"
            filesLimit={1}
            dropzoneText={t("careers.dropzoneText")}
          />
        )}
      </div>
    </div>
    <Button className="submit" variant="contained">
      {t("contact.form.button")}
    </Button>
  </form>;
};

export default CareersForm;
