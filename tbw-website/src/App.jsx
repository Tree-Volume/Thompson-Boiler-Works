import React from "react";
import { useTranslation } from "react-i18next";
import CustomToolbar from "./Components/CustomToolbar";
import "./Styles/App.scss";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <CustomToolbar title={t("title")} />
    </div>
  );
}

export default App;
