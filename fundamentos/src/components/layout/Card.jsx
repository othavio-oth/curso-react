import React from "react";
import "./Card.css";
export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || "#F00",
    borderColor: props.color || "#F00",
  };

  return (
    <div className="card" style={cardStyle}>
      <h2 className="title">{props.title}</h2>
      <p className="content">{props.children}</p>
    </div>
  );
};
