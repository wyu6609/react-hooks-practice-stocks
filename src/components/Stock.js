import React from "react";

function Stock({ stockObj, clickHandler }) {
  return (
    <div>
      <div className="card" onClick={() => clickHandler(stockObj)}>
        <div className="card-body">
          <h5 className="card-title">{stockObj.name}</h5>
          <p className="card-text">
            {stockObj.ticker}: {stockObj.price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
