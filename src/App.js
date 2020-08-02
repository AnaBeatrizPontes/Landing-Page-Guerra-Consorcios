import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Page
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
    </Router>
  );
}

export default App;
