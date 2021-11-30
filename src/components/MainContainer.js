import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {


  const [inStocks, setStocks] = useState([]);
  const [inPortfolio, setPortfolio] = useState([]);

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");


  useEffect(() => {
    fetch('http://localhost:3001/stocks')
  .then(response => response.json())
  .then(data => setStocks(data));
  }, [])

  function handleSortChange(event){
    setSort(event.target.value);
  }

  function handleFilterChange(event){
    setFilter(event.target.value);
  }


  function handlePortfolioAdd(id){
    fetch(`http://localhost:3001/stocks/${id}`)
      .then(response => response.json())
      .then(data => {
        setPortfolio([...inPortfolio, data]);
      });
    let filteredStocks = inStocks.filter((item) => id !== item.id);
    setStocks(filteredStocks);
  }

  function handleStocksAdd(id){
    fetch(`http://localhost:3001/stocks/${id}`)
    .then(response => response.json())
    .then(data => {
      setStocks([...inStocks, data]);
    });
  let filteredPort = inPortfolio.filter((item) => id !== item.id);
  setPortfolio(filteredPort);
  }


  return (
    <div>
      <SearchBar handleSortChange={handleSortChange} handleFilterChange={handleFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer sort={sort} filter={filter} stocks={inStocks} handleClick={handlePortfolioAdd} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={inPortfolio} handleClick={handleStocksAdd} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
