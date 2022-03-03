import React from "react";
import Stock from "./Stock";
import { v4 as uuid } from "uuid";

function StockContainer({ stocksList, clickHandler }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksList.map((stockObj) => {
        return (
          <Stock key={uuid()} stockObj={stockObj} clickHandler={clickHandler} />
        );
      })}
    </div>
  );
}

export default StockContainer;
