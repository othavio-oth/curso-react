import "./App.css";

import React from "react";
import Family from "./components/basics/Family";
import First from "./components/basics/First";
import RandomNumber from "./components/basics/RamdomNumber";
import WithParams from "./components/basics/WithParams";
import Card from "./components/layout/Card";
import FamilyMember from "./components/basics/FamilyMember";
import StudentsList from "./components/repetition/StudentsList";
import ProductsTable from "./components/repetition/ProductsTable";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="app">
    <h1 className="app-title">Fundamentos React</h1>
    <div className="app-exercises">
      <Card title="Renderizando Tabela de Produtos" color="#0180fd">
        <ProductsTable />
      </Card>
      <Card title="Renderizando Lista de Alunos" color="#e81913">
        <StudentsList />
      </Card>
      <Card title="Componentes com filhos" color="#fe8a49">
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
      <Card title="Como criar um componente" color="#d44a02">
        <First></First>
      </Card>
    </div>
  </div>
);
