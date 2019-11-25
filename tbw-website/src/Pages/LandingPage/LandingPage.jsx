import React from "react";
import CustomDivider from "Components/CustomDivider/CustomDivider";
import { Typography, Container, Button } from "@material-ui/core/";
import landing from "Assets/images/landing.png"

import "./LandingPage.scss";


function LandingPage() {
  return (
    <div class="landing">
      <div class="landing-title">
        <div class="landing-title-text">
          <Typography variant="h1">Thompson Boiler Works</Typography>
          <Typography variant="h3">Welding since 1988</Typography>
        </div>
      </div>
      <CustomDivider></CustomDivider>
      <Container>
        <div class="landing-section">
          <Typography variant="h2" align="center">
            Who are we?
          </Typography>
          <Typography className="landing-section-body" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor urna quis
            sapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis, cursus convallis
            magna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue. Donec enim metus,
            fringilla id suscipit ac, malesuada non ligula. Aenean ultricies quam ut sem eleifend,
            quis condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim. Proin vehicula
            dignissim cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            porttitor urna quis sapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis,
            cursus convallis magna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue.
            Donec enim metus, fringilla id suscipit ac, malesuada non ligula. Aenean ultricies quam
            ut sem eleifend, quis condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim.
            Proin vehicula dignissim cursus.
          </Typography>
          <Button variant="contained">Learn more about us!</Button>
        </div>
        <div class="landing-section">
          <Typography variant="h2" align="center">
            Services
          </Typography>
          <Typography className="landing-section-body" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor urna quis
            sapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis, cursus convallis
            magna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue. Donec enim metus,
            fringilla id suscipit ac, malesuada non ligula. Aenean ultricies quam ut sem eleifend,
            quis condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim. Proin vehicula
            dignissim cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            porttitor urna quis sapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis,
            cursus convallis magna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue.
            Donec enim metus, fringilla id suscipit ac, malesuada non ligula. Aenean ultricies quam
            ut sem eleifend, quis condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim.
            Proin vehicula dignissim cursus.
          </Typography>
          <Button variant="contained">Learn more about our services!</Button>
        </div>
        <div class="landing-section">
          <Typography variant="h2" align="center">
            Projects
          </Typography>
          <Typography className="landing-section-body" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor urna quis
            sapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis, cursus convallis
            magna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue. Donec enim metus,
            fringilla id suscipit ac, malesuada non ligula. Aenean ultricies quam ut sem eleifend,
            quis condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim. Proin vehicula
            dignissim cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            porttitor urna quis sapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis,
            cursus convallis magna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue.
            Donec enim metus, fringilla id suscipit ac, malesuada non ligula. Aenean ultricies quam
            ut sem eleifend, quis condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim.
            Proin vehicula dignissim cursus.
          </Typography>
          <Button variant="contained">Learn more about our projects!</Button>
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;
