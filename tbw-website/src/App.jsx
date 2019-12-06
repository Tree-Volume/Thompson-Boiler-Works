import React from "react";
import { CustomToolbar, CustomFooter } from "Components/";
import { useTranslation } from "react-i18next";
import LandingPage from "./Pages";
import "./Styles/App.scss";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <CustomToolbar />
      <LandingPage />
      <CustomFooter />
    </div>
  );
}

export default App;
