import React, { cloneElement } from "react";
export default (props) => (
  <div>
    {React.Children.map(props.children, (child) => {
      return cloneElement(child, props);
    })}
  </div>
);
