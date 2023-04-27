import React from "react";

export default function WithParams(props) {
  const status = props.nota > 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <p>
        {props.nome} tirou a nota {props.nota} e foi {status}
      </p>
    </div>
  );
}
