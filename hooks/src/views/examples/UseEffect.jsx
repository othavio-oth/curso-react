import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function getFatorial(n) {
  const number = parseInt(n);
  if (number < 0) return -1;
  if (number === 0) return 1;
  return getFatorial(number - 1) * number;
}

const UseEffect = (props) => {
  const [numberEx1, setNumberEx1] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [numberType, setNumberType] = useState("Impar");
  // ---------------------
  useEffect(
    function () {
      setFatorial(getFatorial(numberEx1));
    },
    [numberEx1]
  );
  // ----------------------

  useEffect(
    function () {
      setNumberType(numberEx1 % 2 === 0 ? "Par" : "Impar");
    },
    [numberEx1]
  );
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício 1" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? "Não Existe" : fatorial}
          </span>
        </div>
      </div>
      <input
        type="number"
        className="input"
        value={numberEx1}
        onChange={(event) => setNumberEx1(event.target.value)}
      />
      <SectionTitle title="Exercício 2" />
      <div className="center">
        <div>
          <span className="text red">{numberType}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
