import React from "react";
import "./ordered.scss";
function Ordered(props) {
  return (
    <>
      <h2>Ordered</h2>
      <ol>
        {props.items.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ol>
    </>
  );
}
export default Ordered;
