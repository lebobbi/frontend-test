import React, { memo } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Home, Details } from "~/src/Components/Pages";

const App = memo(() => (
  <Router>
    <Home path="/" />
    <Details path="/details/:restaurantId" />
  </Router>
));

render(<App />, document.getElementById("root"));
