import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/about-us/AboutUs.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about-us" component={AboutUs} />
        
      </Switch>
    </Router>
  );
}

export default App;