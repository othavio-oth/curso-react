import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("5");
  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercicio 01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">Contador</span>
          <span className="text">]</span>
        </div>
        <input type="text" className="input" />
      </div>
    </div>
  );
};

export default UseRef;
