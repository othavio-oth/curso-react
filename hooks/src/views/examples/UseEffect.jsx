import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

function getFatorial(number) {
  if (number <= 0) return -1;
  if (number === 1) return 1;
  return getFatorial(number - 1) * number;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(0);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">100</span>
        </div>
      </div>
      <input
        type="number"
        className="input"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => getFatorial(parseInt(number))}>
        Get Fatorial
      </button>
    </div>
  );
};

export default UseEffect;
