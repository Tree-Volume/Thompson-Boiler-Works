import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Email, LocationOn, Phone } from "@material-ui/icons";
import { FooterList } from "Components/";
import { useTranslation } from "react-i18next";
import logo from "Assets/images/tbw-logo.png";
import "./CustomFooter.scss";

const CustomFooter = () => {
  const { t } = useTranslation();

  const connectList = [
    {
      icon: LocationOn,
      primaryText: "5678 Power Rd South Gloucester Industrial Park"
    },
    {
      icon: Email,
      primaryText: "{Insert Email}"
    },
    {
      icon: Phone,
      primaryText: "(613) 822-4099"
    }
  ];

  const linksList = [
    {
      primaryText: "Services"
    },
    {
      primaryText: "Projects"
    },
    {
      primaryText: "Careers"
    }
  ];

  const hoursOfOperationList = [
    {
      secondaryText: "Monday - Friday:",
      primaryText: "9:00am - 5:00pm"
    },
    {
      secondaryText: "Saturday - Sunday:",
      primaryText: "Closed"
    }
  ];
  return (
    <div className="footer">
      <Container className="footer-container">
        <Grid className="footer-column">
          <h3 className="footer-subtitle">Connect</h3>
          <FooterList listItems={connectList} />
        </Grid>
        <Grid className="footer-column">
          <h3 className="footer-subtitle">Links</h3>
          <FooterList listItems={linksList} />
        </Grid>
        <Grid className="footer-column">
          <h3 className="footer-subtitle">Hours of Operation</h3>
          <FooterList listItems={hoursOfOperationList} />
        </Grid>
        <Grid className="footer-column">
          <img className="footer-logo" src={logo} alt="temp" />
        </Grid>
      </Container>
    </div>
  );
};

export default CustomFooter;
