import React, { useState } from "react";

export default () => {
  let [value, setValue] = useState("Inicial");

  function changeInput(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={changeInput} />
      <input type="text" value={value} readOnly />
      <input type="text" defaultValue={value} />
    </div>
  );
};
