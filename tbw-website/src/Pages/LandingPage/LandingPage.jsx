import React from "react";
import Typography from "@material-ui/core/Typography";
import CustomDivider from "Components/CustomDivider/CustomDivider";

import "./LandingPage.scss";

function LandingPage() {
  return (
    <div class="landing">
      <div class="landing-title">
        <div class="landing-title-text">
          <Typography variant="h1">Thompson Boiler Works</Typography>
          <Typography variant="h2">Welding since 1988</Typography>
        </div>
      </div>
      <CustomDivider></CustomDivider>
    </div>
  );
}

export default LandingPage;
