import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./CustomToolbar.scss";
import logo from "Assets/images/tbw-logo.png";
import { useEffect } from "react";

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
  useEffect(() => {
    if (notLanding) setToolbarColor("#222222");
  }, [notLanding]);
  window.addEventListener("scroll", () => {
    if (!notLanding) {
      // to-do convert Math.min(Math.max(window.scrollY, 0), 255).toString()} to hex
      setToolbarColor(`#222222${Math.min(Math.max(window.scrollY, 0), 255).toString(16)}`);
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
