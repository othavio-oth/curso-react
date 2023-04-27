import "./products-table.css";

import React from "react";
import products from "../../data/products";
export default () => {
  const productsList = products.map((product) => {
    return (
      <tr className={product.id % 2 === 0 ? "par" : "impar"}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="products-table">
        <thead className="table-head">
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{productsList}</tbody>
      </table>
    </div>
  );
};
