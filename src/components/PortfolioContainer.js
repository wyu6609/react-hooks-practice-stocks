import React from "react";
import Stock from "./Stock";
import { v4 as uuid } from "uuid";

function PortfolioContainer({ portfolioList, clickHandler }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList.map((stockObj) => {
        return (
          <Stock key={uuid()} stockObj={stockObj} clickHandler={clickHandler} />
        );
      })}
    </div>
  );
}

export default PortfolioContainer;
