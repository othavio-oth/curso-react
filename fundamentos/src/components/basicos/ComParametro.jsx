import React from "react";

export default function ComParametro(props) {
  const status = props.nota > 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h3>
        {props.nome} tirou a nota {props.nota} e foi {status}
      </h3>
    </div>
  );
}
