import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import "./CustomToolbar.scss";
import logo from "Assets/images/tbw-logo.png"

const CustomToolbar = ({ title, options }) => (
  <AppBar className="toolbar" position="static">
    <Toolbar>
      <a class="toolbar-logo" href="/">
        <div class="toolbar-logo-image">
              <img src={logo} class="img-fluid" alt={title}/>
        </div>
      </a>
      {options.map((value,index) => {
        return <Button key={index}>{value}</Button>;
      })}
    </Toolbar>
  </AppBar>
);

export default CustomToolbar;
