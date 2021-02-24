import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import Community from "./routes/Community";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/community" component={Community}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
