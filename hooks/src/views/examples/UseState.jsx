import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();

  const setNameInput = function (event) {
    setName(event.target.value);
  };
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #1 - Valor numérico"></SectionTitle>
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button className="btn" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button
            className="btn"
            onClick={() => setCount((currentValue) => currentValue + 1000)}
          >
            +1000
          </button>
          <button className="btn" onClick={() => setCount(0)}>
            Zerar
          </button>
        </div>
      </div>
      <SectionTitle tle title="Exercício #2 - Valor textual"></SectionTitle>
      <div className="center">
        <input
          type="text"
          value={name}
          name="name"
          className="input"
          onChange={setNameInput}
        />
      </div>
    </div>
  );
};

export default UseState;
