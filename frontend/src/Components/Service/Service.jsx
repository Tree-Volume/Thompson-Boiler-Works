import React from "react";
import { Container, Typography } from "@material-ui/core";
import "./Service.scss";

const Service = props => {
  const { id, reference, title, content, image, imageAlt } = props;
  return (
    <div id={id} ref={reference} className="service">
      <Container className="service-container">
        <div className="service-body">
          <Typography variant="h2">{title}</Typography>
          <Typography variant="body1" className="service-body-text">
            {content}
          </Typography>
        </div>
        <div className="service-image">
          <img src={image} alt={imageAlt} />
        </div>
      </Container>
    </div>
  );
};

export default Service;
