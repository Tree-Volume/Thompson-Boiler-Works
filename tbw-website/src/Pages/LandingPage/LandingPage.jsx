import React from "react";
import Typography from "@material-ui/core/Typography"

import "./LandingPage.scss";

function LandingPage() {
  return (
      <div class="landing">
        <div class="landing-title" >
          <Typography variant="h1">Thompson Boiler Works</Typography>
          <Typography variant="h2">Welding since 1988</Typography>
        </div>
      </div>
  );
}

export default LandingPage;
