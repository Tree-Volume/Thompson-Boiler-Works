import React from "react";
import LandingPage from "./Pages";
import { CustomToolbar, CustomFooter } from "Components/";
import { useTranslation } from "react-i18next";
import "./Styles/App.scss";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
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
      <LandingPage />
      <CustomFooter />
    </div>
  );
}

export default App;
