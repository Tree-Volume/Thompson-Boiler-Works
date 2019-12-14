import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./CustomToolbar.scss";
import logo from "Assets/images/tbw-logo.png";

const CustomToolbar = () => {
  const { t } = useTranslation();
  const title = t("title");
  const options = [
    t("nav.about"),
    t("nav.services"),
    t("nav.projects"),
    t("nav.careers"),
    t("nav.contact")
  ];
  return (
    <AppBar className="toolbar">
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
