import React from "react";
import { useTranslation } from "react-i18next";
import { CustomToolbar, CustomFooter } from "Components/";

function LandingPage() {
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
      <div style={{ height: "500px" }} />
      <CustomFooter />
    </>
  );
}

export default LandingPage;
