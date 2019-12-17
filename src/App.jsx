import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CustomToolbar, CustomFooter } from "Components/";
import { ContactPage, LandingPage, AboutPage, ServicesPage } from "Pages/";
import "./Styles/App.scss";

const App = () => {
  // to-do, setNotLanding to true when not on landing page
  const [notLanding, setNotLanding] = useState(false);
  return (
    <Router>
      <div className="App">
        <CustomToolbar notLanding={notLanding} />
        <Switch>
          <Route path="/About">
            <AboutPage />
          </Route>
          <Route path="/Services">
            <ServicesPage />
          </Route>
          <Route path="/Contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        <CustomFooter />
      </div>
    </Router>
  );
};

export default App;
