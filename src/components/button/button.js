import React from "react";
import "./button.scss";
const Button = props => {
  let href = props.href || "";
  let onClick = props.onClick || "";
  let details = props.details || "";
  let type = props.type || "";

  return <button onClick={onClick}>{details}</button>;
};
export default Button;
