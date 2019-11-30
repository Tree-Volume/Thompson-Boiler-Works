import React from "react";
import CustomDivider from "Components/CustomDivider/CustomDivider";
import { Typography, Container, Button } from "@material-ui/core/";
import landing from "Assets/images/landing.png";
import services_background from "Assets/images/divider.png";

import "./LandingPage.scss";

const landing_section_services = {
  backgroundImage: "url(" + { services_background } + ")"
};

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
      <div class="landing-section">
        <Container>
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
        </Container>
      </div>
      <div style={landing_section_services} class="landing-section">
        <Container>
          <Typography variant="h2" align="center">
            Services
          </Typography>
          <div class="landing-services-body">
            <Typography className="landing-section-body" variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor urna quis
              sapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis, cursus convallis
              magna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue. Donec enim metus,
              fringilla id suscipit ac, malesuada non ligula. Aenean ultricies quam ut sem eleifend,
              quis condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim. Proin vehicula
              dignissim cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              porttitor urna quis sapien rutrum volutpat.
            </Typography>
            <div class="landing-services-image">
              <img src={landing} alt="services"></img>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </div>
          </div>
          <Button variant="contained">Learn more about our services!</Button>
        </Container>
      </div>
      <div class="landing-section">
        <Container>
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
          <div class="landing-projects-image">
            <img src={landing} alt="projects"></img>
            <img src={landing} alt="projects"></img>
            <img src={landing} alt="projects"></img>
            <img src={landing} alt="projects"></img>
          </div>
          <Button variant="contained">Learn more about our projects!</Button>
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
