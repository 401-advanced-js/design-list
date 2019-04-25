import React from "react";
import Unordered from "./unordered/unordered.js";
import Ordered from "./ordered/ordered.js";

function List(props) {
  return (
    <>
      {props.type === "ordered" ? (
        <Ordered items={props.items} />
      ) : (
        <Unordered items={props.items} />
      )}
    </>
  );
}

export default List;
