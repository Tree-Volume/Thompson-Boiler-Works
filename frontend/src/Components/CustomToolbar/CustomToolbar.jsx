import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Menu, MenuItem, Toolbar, Button, Tabs, Tab } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { returnFlagByLanguage, RouterPaths } from "Utils/";
import MenuIcon from "@material-ui/icons/Menu";
import MediaQuery from "react-responsive";
import "./CustomToolbar.scss";
import logo from "Assets/images/tbw-logo.png";


const CustomToolbar = props => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [toolbarColor, setToolbarColor] = useState("#0b121000");
  const [anchorLng, setAnchorLng] = React.useState(null);
  const [anchorMn, setAnchorMn] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(location.pathname.replace("/", ""));
  const { notLanding } = props;
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
    setCurrentPage(location.pathname.replace("/", ""));
  }, [notLanding,location.pathname]);

  const handleChange = (event, newValue) => {
    setCurrentPage(newValue);
  };

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
        <Link className="toolbar-logo" to={RouterPaths.LANDING} onClick={() => setCurrentPage("")}>
          <div className="toolbar-logo-image">
            <img src={logo} alt={title} />
          </div>
        </Link>
        <MediaQuery query="(min-width: 1024px)">
          <Tabs value={currentPage} onChange={handleChange} >
            {options.map(value => {
              return (
                <Tab
                  value={value.toLowerCase()}
                  label={value}
                  to={`/${value.toLowerCase()}`}
                  component={Link}
                ></Tab>
              );
            })}
          </Tabs>
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

        <MediaQuery query="(max-width: 1023px)">
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
