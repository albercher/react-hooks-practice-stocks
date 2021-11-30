import React from "react";
import Stock from "./Stock";

function StockContainer( { stocks, handleClick, sort, filter } ) {

  let stockSort = [];

  if (sort === "Price"){
    stockSort = stocks.sort((a, b) => {
      return a.price - b.price
    })
  } else if (sort === "Alphabetically"){
    stockSort = stocks.sort(function(a, b){
      if(a.ticker < b.ticker) { return -1; }
      if(a.ticker > b.ticker) { return 1; }
      return 0;
  })
  } else {
    stockSort = stocks
  }

  let stockFilter = [];

  if (filter === ""){
    stockFilter = stockSort;
  } else {
    stockFilter = stockSort.filter(item => item.type === filter)
  }

  const stockRender = stockFilter.map((stock) => {
    return <Stock key={stock.id} stock={stock} handleClick={handleClick} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockRender}
    </div>
  );
}

export default StockContainer;
