import React from "react";
import "./unordered.scss";
function Unordered(props) {
  return (
    <>
      <h3>Unordered</h3>
      <ul>
        {props.items.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </>
  );
}
export default Unordered;
