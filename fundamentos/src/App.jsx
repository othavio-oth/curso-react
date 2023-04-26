import "./App.css";

import React from "react";
import Family from "./components/basicos/Family";
import First from "./components/basicos/First";
import RandomNumber from "./components/basicos/RamdomNumber";
import WithParams from "./components/basicos/WithParams";
import Card from "./components/layout/Card";
import FamilyMember from "./components/basicos/FamilyMember";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="app">
    <h1 className="app-title">Fundamentos React</h1>
    <div className="app-exercises">
      <Card title="Componentes com filhos">
        <Family surname="Silva">
          <FamilyMember name="João"></FamilyMember>
          <FamilyMember name="Mário"></FamilyMember>
          <FamilyMember name="Ana"></FamilyMember>
        </Family>
      </Card>
      <Card title="Número Aleatório" color="#FF6F61">
        <RandomNumber max={60} min={5}></RandomNumber>
      </Card>
      <Card title="Como usar parâmetros" color="#88B04B">
        <WithParams nome="Augusto" nota={8.2}></WithParams>
      </Card>
      <Card title="Como criar um componente" color="#F7CAC9">
        <First></First>
      </Card>
    </div>
  </div>
);
