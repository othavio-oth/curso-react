import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
