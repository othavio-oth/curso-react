import React, { useState } from "react";
import Son from "./Son";
export default () => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState("0");
  const [isNerd, setIsNerd] = useState(false);

  function showInfo(name, age, isNerd) {
    setName(name);
    setAge(age);
    setIsNerd(isNerd);
  }

  return (
    <div>
      <span>{name}</span> - <span>{age}</span> -{" "}
      <span>{isNerd ? "Verdadeiro" : "Falso"}</span>
      <Son showInformation={showInfo}></Son>
    </div>
  );
};
