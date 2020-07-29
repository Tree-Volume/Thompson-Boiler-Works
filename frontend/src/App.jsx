import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CustomToolbar, CustomFooter } from "Components/";
import { RouterPaths, ScrollToTop } from "Utils";
import {
  ContactPage,
  LandingPage,
  AboutPage,
  CareersPage,
  ServicesPage,
  ProjectsPage
} from "Pages/";
import "./Styles/App.scss";

const App = () => {
  // to-do, setNotLanding to true when not on landing page
  const [notLanding, setNotLanding] = useState(false);
  const usingIe = () => {
    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;
    return isIE;
  };
  const buildRoutes = () => {
    const landingRoute = (
      <Route path={RouterPaths.LANDING}>
        <LandingPage setNotLanding={setNotLanding} />
      </Route>
    );
    // Return IE router (only landing)
    if (usingIe()) {
      return (
        <Switch>
          {landingRoute}
        </Switch>
      )
    }
    // Return normal router
    return (
      <Switch>
        <Route path={RouterPaths.ABOUT}>
          <AboutPage setNotLanding={setNotLanding} />
        </Route>
        <Route path={RouterPaths.SERVICES}>
          <ServicesPage setNotLanding={setNotLanding} />
        </Route>
        <Route path={RouterPaths.CAREERS}>
          <CareersPage setNotLanding={setNotLanding} />
        </Route>
        <Route path={RouterPaths.CONTACT}>
          <ContactPage setNotLanding={setNotLanding} />
        </Route>
        <Route path={RouterPaths.PROJECTS}>
          <ProjectsPage setNotLanding={setNotLanding} />
        </Route>
        {landingRoute}
      </Switch>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <CustomToolbar notLanding={notLanding} />
        {buildRoutes()}
        <CustomFooter />
      </div>
    </Router>
  );
};

export default App;
