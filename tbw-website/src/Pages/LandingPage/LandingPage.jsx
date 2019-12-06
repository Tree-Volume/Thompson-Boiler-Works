import React from "react";
import CustomDivider from "Components/CustomDivider/CustomDivider";
import { Typography, Container, Button } from "@material-ui/core/";
import landing from "Assets/images/landing.png";
import servicesBackground from "Assets/images/divider.png";

import "./LandingPage.scss";

const landingSectionServices = {
  backgroundImage: `url(${{ servicesBackground }})`
};

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-title">
        <div className="landing-title-text">
          <Typography variant="h1">Thompson Boiler Works</Typography>
          <Typography variant="h3">Welding since 1988</Typography>
        </div>
      </div>
      <CustomDivider />
      <div className="landing-section">
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
      <div style={landingSectionServices} className="landing-section">
        <Container>
          <Typography variant="h2" align="center">
            Services
          </Typography>
          <div className="landing-services-body">
            <Typography className="landing-section-body" variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor urna quis
              sapien rutrum volutpat. Nullam lectus magna, lacinia nec orci quis, cursus convallis
              magna. Cras dictum laoreet tellus a rutrum. Donec ac commodo augue. Donec enim metus,
              fringilla id suscipit ac, malesuada non ligula. Aenean ultricies quam ut sem eleifend,
              quis condimentum diam rutrum. Duis pulvinar at turpis vitae dignissim. Proin vehicula
              dignissim cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              porttitor urna quis sapien rutrum volutpat.
            </Typography>
            <div className="landing-services-image">
              <img src={landing} alt="services" />
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </div>
          </div>
          <Button variant="contained">Learn more about our services!</Button>
        </Container>
      </div>
      <div className="landing-section">
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
          <div className="landing-projects-image">
            <img src={landing} alt="projects" />
            <img src={landing} alt="projects" />
            <img src={landing} alt="projects" />
            <img src={landing} alt="projects" />
          </div>
          <Button variant="contained">Learn more about our projects!</Button>
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
