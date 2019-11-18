import React from "react";
import { Grid } from "@material-ui/core";
import { FooterList } from "Components/";
import "./CustomFooter.scss";

const CustomFooter = () => (
  <div className="footer">
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <h3 className="footer-subtitle">Connect</h3>
        <FooterList />
      </Grid>
      <Grid item xs={3}>
        <h3 className="footer-subtitle">Links</h3>
      </Grid>
      <Grid item xs={3}>
        <h3 className="footer-subtitle">Hours of Operation</h3>
      </Grid>
      <Grid item xs={3}>
        <p>hello</p>
      </Grid>
    </Grid>
  </div>
);

export default CustomFooter;
