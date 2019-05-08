import React from "react";
import ReactDOM from "react-dom";

import App from "./app.js";
import Button from "./components/button/button.js";

function Main() {
  return (
    <Button
      details="Click It"
      onClick={() => {
        console.log("dont do it");
      }}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
