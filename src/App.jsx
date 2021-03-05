import React, { memo } from "react";
import { render } from "react-dom";

const App = memo(() => <div>The app</div>);

render(<App />, document.getElementById("root"));
