import React from "react";
import { useTranslation } from "react-i18next";
import { CustomToolbar } from "Components/";

function LandingPage() {
  const { t } = useTranslation();
  return <CustomToolbar title={t("title")} />;
}

export default LandingPage;
