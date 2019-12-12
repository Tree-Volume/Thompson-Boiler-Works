import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CustomToolbar, CustomFooter } from "Components/";
import { ContactPage, LandingPage } from "Pages/";
import "./Styles/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomToolbar />
        <Switch>
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
}

export default App;
