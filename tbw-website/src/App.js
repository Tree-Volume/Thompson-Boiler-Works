import React from 'react';
import CustomToolbar from './Components/CustomToolbar'
import { useTranslation } from 'react-i18next';
import './Styles/App.css';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <CustomToolbar title={t("title")}></CustomToolbar>
    </div>
  );
}

export default App;
