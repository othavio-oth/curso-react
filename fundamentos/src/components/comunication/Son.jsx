import React from "react";

export default (props) => {
  const showInfo = props.showInformation;
  let name = "John";
  let age = parseInt(Math.random() * 40 + 20);
  let isNerd = Math.random() > 0.5;

  return (
    <div>
      <button onClick={() => showInfo(name, age, isNerd)}>
        Mostrar Informações
      </button>
    </div>
  );
};
