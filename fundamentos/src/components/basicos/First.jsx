import React, { Fragment } from "react";

export default function First() {
  const message = "Primeiro Componente!";
  return (
    <Fragment>
      <p>{message}</p>
    </Fragment>
  );
}
