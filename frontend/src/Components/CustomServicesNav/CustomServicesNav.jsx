import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, Typography } from "@material-ui/core/";
import "./CustomServicesNav.scss";

const CustomServicesNav = props => {
  const { t } = useTranslation();
  const navRef = useRef(null);
  //handles click on nav link
  const handleClick = index => {
    const serviceRefs = props.serviceRefs;
    window.scrollTo({
      top: serviceRefs.current[index].current.offsetTop - 125,
      behavior: "smooth"
    });
  };
  //builds the navigation
  const buildNav = () => {
    const servicesKeys = Object.keys(props.servicesObject);
    const nav = [];
    do {
      const keySplice = servicesKeys.splice(0, 4);
      nav.push(
        <div className="row">
          {keySplice.map((key, index) => (
            <Link component="button" key={key} onClick={() => handleClick(index)}>
              <Typography variant="h3">{t(`services.service.${key}.title`)}</Typography>
            </Link>
          ))}
        </div>
      );
    } while (servicesKeys.length > 0);
    return nav;
  };

  return (
    <div ref={navRef} className="services-nav">
      <Typography variant="h2">Our Services</Typography>
      {buildNav()}
    </div>
  );
};

export default CustomServicesNav;
