import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./CustomToolbar.scss";
import logo from "Assets/images/tbw-logo.png";

const CustomToolbar = props => {
  const [toolbarColor, setToolbarColor] = useState("#22222200");
  const { notLanding } = props;
  const { t } = useTranslation();
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
    if (notLanding) setToolbarColor("#222222");
  }, [notLanding]);
  // update toolbar color on scroll
  window.addEventListener("scroll", () => {
    // if on landing, else set toolbar to non transparent gray
    if (!notLanding) {
      // if scroll is not at 0
      if (window.scrollY > 0)
        setToolbarColor(`#222222${Math.min(Math.max(window.scrollY, 0), 255).toString(16)}`);
      // if scroll is at zero, make toolbar transparent
      else setToolbarColor("transparent");
    } else setToolbarColor("#222222");
  });
  return (
    <AppBar className="toolbar" style={{ backgroundColor: toolbarColor }}>
      <Toolbar>
        <a className="toolbar-logo" href="/">
          <div className="toolbar-logo-image">
            <img src={logo} alt={title} />
          </div>
        </a>
        {options.map(value => {
          return (
            <Link to={`/${value}`}>
              <Button key={value}>{value}</Button>
            </Link>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default CustomToolbar;
