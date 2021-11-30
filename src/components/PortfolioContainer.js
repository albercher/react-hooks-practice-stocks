import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { portfolio, handleClick } ) {

  const portfolioRender = portfolio.map((item) => {
    return <Stock key={item.id} stock={item} handleClick={handleClick} />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioRender}
    </div>
  );
}

export default PortfolioContainer;
