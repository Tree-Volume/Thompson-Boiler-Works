import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Menu, MenuItem, Toolbar, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MediaQuery from "react-responsive";
import { useTranslation } from "react-i18next";
import { returnFlagByLanguage, RouterPaths } from "Utils/";
import "./CustomToolbar.scss";
import logo from "Assets/images/tbw-logo.png";

const CustomToolbar = props => {
  const [toolbarColor, setToolbarColor] = useState("#0b121000");
  const [anchorLng, setAnchorLng] = React.useState(null);
  const [anchorMn, setAnchorMn] = React.useState(null);
  const { notLanding } = props;
  const { t, i18n } = useTranslation();
  const title = t("title");
  const options = [
    t("nav.about"),
    t("nav.services"),
    t("nav.projects"),
    t("nav.careers"),
    t("nav.contact")
  ];
  // set toolbar to gray if not on landing
  useEffect(() => {
    if (notLanding) setToolbarColor("#0b1210");
    else setToolbarColor("transparent");
  }, [notLanding]);

  const handleLngClick = event => {
    setAnchorLng(event.currentTarget);
  };

  const handleLngClose = lang => {
    i18n.changeLanguage(lang);
    setAnchorLng(null);
  };

  const handleMnClick = event => {
    setAnchorMn(event.currentTarget);
  };

  const handleMnClose = lang => {
    setAnchorMn(null);
  };

  // update toolbar color on scroll
  window.addEventListener("scroll", () => {
    // if on landing, else set toolbar to non transparent gray
    if (!notLanding) {
      // if scroll is not at 0
      if (window.scrollY > 0) setToolbarColor(`#0b1210`);
      // if scroll is at zero, make toolbar transparent
      else setToolbarColor("transparent");
    } else setToolbarColor("#0b1210");
  });
  return (
    <AppBar
      className="toolbar"
      style={{ backgroundColor: toolbarColor, transition: "background-color 0.5s" }}
    >
      <Toolbar>
        <Link className="toolbar-logo" to={RouterPaths.LANDING}>
          <div className="toolbar-logo-image">
            <img src={logo} alt={title} />
          </div>
        </Link>
        <MediaQuery query="(min-device-width: 1024px)">
          {options.map(value => {
            return (
              <Link key={value} to={`/${value.toLowerCase()}`}>
                <Button>{value}</Button>
              </Link>
            );
          })}
        </MediaQuery>
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

        <MediaQuery query="(max-device-width: 1023px)">
          <Button
            className="menu-button"
            aria-controls="nav-menu"
            aria-haspopup="true"
            onClick={handleMnClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="nav-menu"
            anchorEl={anchorMn}
            keepMounted
            open={Boolean(anchorMn)}
            onClose={handleMnClose}
          >
            {options.map(value => {
              return (
                <MenuItem
                  key={value}
                  component={Link}
                  to={`/${value.toLowerCase()}`}
                  onClick={handleMnClose}
                >
                  {value}
                </MenuItem>
              );
            })}
          </Menu>
        </MediaQuery>
      </Toolbar>
    </AppBar>
  );
};

export default CustomToolbar;
