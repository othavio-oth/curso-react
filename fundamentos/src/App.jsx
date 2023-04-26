import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";

export default () => (
  <div>
    <NumeroAleatorio max={60} min={5}></NumeroAleatorio>
    <ComParametro nome="Rafael" nota={6.8}></ComParametro>
    <ComParametro nome="Augusto" nota={8.2}></ComParametro>
    <Primeiro></Primeiro>
  </div>
);
