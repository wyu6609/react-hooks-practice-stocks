import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  //stocks state
  const [stocksList, setStocksList] = useState([]);
  //portfolio state
  const [portfolioList, setPortfolioList] = useState([]);

  //useEffect fetch data
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = () => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((data) => setStocksList(data));
  };
  //add items to portfolio list
  const onAddItem = (clickedObj) => {
    if (portfolioList.includes(clickedObj) === false) {
      setPortfolioList([...portfolioList, clickedObj]);
    }
  };
  const onDeleteItem = () => {
    console.log("tests");
  };
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocksList={stocksList} clickHandler={onAddItem} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioList={portfolioList}
            clickHandler={onDeleteItem}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
