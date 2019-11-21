import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import "./CustomToolbar.scss";

const CustomToolbar = ({ title, options }) => (
  <AppBar className="AppBar" position="static">
    <Toolbar>
      <Typography className="nav-title">{title}</Typography>
      {options.map((value,index) => {
        return <Button key={index}>{value}</Button>;
      })}
    </Toolbar>
  </AppBar>
);

export default CustomToolbar;
