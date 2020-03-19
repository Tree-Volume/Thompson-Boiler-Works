import React from "react";
import { returnFlagByLanguage } from "Utils/";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./LanguageMenu.scss";

const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const [anchorLng, setAnchorLng] = React.useState(null);

  const handleLngClick = event => {
    setAnchorLng(event.currentTarget);
  };

  const handleLngClose = lang => {
    if (lang === "en" || lang === "fr") {
      i18n.changeLanguage(lang);
    }
    setAnchorLng(null);
  };

  return (
    <>
      <Button
        className="language-button"
        aria-controls="lng-menu"
        aria-haspopup="true"
        onClick={handleLngClick}
      >
        {returnFlagByLanguage(i18n.language)}
        {i18n.language}
      </Button>
      <Menu
        id="lng-menu"
        anchorEl={anchorLng}
        keepMounted
        open={Boolean(anchorLng)}
        onClose={handleLngClose}
      >
        <MenuItem onClick={() => handleLngClose("en")}>
          {returnFlagByLanguage("en")}
          EN
        </MenuItem>
        <MenuItem onClick={() => handleLngClose("fr")}>
          {returnFlagByLanguage("fr")}
          FR
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageMenu;
