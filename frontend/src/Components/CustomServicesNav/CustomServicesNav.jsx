import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, Typography } from "@material-ui/core/";
import Scrollspy from "react-scrollspy";
import MediaQuery from "react-responsive";
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
  const navIds = () => {
    const servicesKeys = Object.keys(props.servicesObject);
    var ids = [];
    for (var i = 0; i < servicesKeys.length; i++) {
      ids.push(`service-${i}`);
    }
    return ids;
  };
  //builds the navigation
  const buildNav = () => {
    const servicesKeys = Object.keys(props.servicesObject);
    const nav = [];
    do {
      const keySplice = servicesKeys.splice(0, 4);
      nav.push(
        <div className="row">
          <Scrollspy items={navIds()} componentTag="div" currentClassName="active" offset={ -100 }>
            {keySplice.map((key, index) => (
              <Link component="button" key={key} onClick={() => handleClick(index)}>
                <Typography variant="h3">{t(`services.service.${key}.title`)}</Typography>
              </Link>
            ))}
          </Scrollspy>
        </div>
      );
    } while (servicesKeys.length > 0);
    return nav;
  };

  return (
    <div ref={navRef} className="services-nav">
      <MediaQuery query="(min-width: 1024px)">
        <Typography variant="h2">Our Services</Typography>
      </MediaQuery>
      {buildNav()}
    </div>
  );
};

export default CustomServicesNav;
