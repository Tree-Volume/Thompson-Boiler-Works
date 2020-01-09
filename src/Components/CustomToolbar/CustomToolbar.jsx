import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Menu, MenuItem, Toolbar, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import routerPaths from "Utils/RouterPaths";
import "./CustomToolbar.scss";
import logo from "Assets/images/tbw-logo.png";

const returnFlag = lang => {
  if (lang === "en") {
    return (
      <svg
        className="flagIcon"
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icon-css-gb"
        viewBox="0 0 640 480"
      >
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path
          fill="#FFF"
          d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
        />
        <path
          fill="#C8102E"
          d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
        />
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
      </svg>
    );
  }
  if (lang === "fr") {
    return (
      <svg
        className="flagIcon"
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icon-css-fr"
        viewBox="0 0 640 480"
      >
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#fff" d="M0 0h640v480H0z" />
          <path fill="#00267f" d="M0 0h213.3v480H0z" />
          <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
        </g>
      </svg>
    );
  }
  return null;
};

const CustomToolbar = props => {
  const [toolbarColor, setToolbarColor] = useState("#0b121000");
  const [anchorEl, setAnchorEl] = React.useState(null);
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

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // update toolbar color on scroll
  window.addEventListener("scroll", () => {
    // if on landing, else set toolbar to non transparent gray
    if (!notLanding) {
      // if scroll is not at 0
      if (window.scrollY > 0)
        setToolbarColor(`#0b1210${Math.min(Math.max(window.scrollY, 0), 255).toString(16)}`);
      // if scroll is at zero, make toolbar transparent
      else setToolbarColor("transparent");
    } else setToolbarColor("#0b1210");
  });
  return (
    <AppBar
      className="toolbar"
      style={{ backgroundColor: toolbarColor, transition: "background-color 0.2s" }}
    >
      <Toolbar>
        <Link className="toolbar-logo" to={routerPaths.LANDING}>
          <div className="toolbar-logo-image">
            <img src={logo} alt={title} />
          </div>
        </Link>
        {options.map(value => {
          return (
            <Link key={value} to={`/${value.toLowerCase()}`}>
              <Button>{value}</Button>
            </Link>
          );
        })}
        <Button
          className="language-button"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {returnFlag(i18n.language)}
          {i18n.language}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            {returnFlag("en")}
            en
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {returnFlag("fr")}
            fr
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CustomToolbar;
