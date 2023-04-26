import React from "react";

export default (props) => {
  let number = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return <div>O seu numero aleatório é {number}</div>;
};
