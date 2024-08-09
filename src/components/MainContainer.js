import React, { useState, useEffect } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from './SearchBar';

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(response => response.json())
      .then(data => {
        setStocks(data);
        setFilteredStocks(data); 
      })
      .catch(error => console.error('Error fetching stocks:', error)); 
  }, []);

  const handleBuy = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const handleSell = (stock) => {
    setPortfolio(portfolio.filter(item => item.id !== stock.id));
  };

  const handleSortChange = (sortOption) => {
    let sortedStocks = [...filteredStocks];
    if (sortOption === "Alphabetically") {
      sortedStocks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "Price") {
      sortedStocks.sort((a, b) => a.price - b.price);
    }
    setFilteredStocks(sortedStocks);
  };

  const handleFilterChange = (filterOption) => {
    let filtered = stocks;
    if (filterOption !== "All") {
      filtered = stocks.filter(stock => stock.type === filterOption);
    }
    setFilteredStocks(filtered);
  };

  return (
    <div>
      <SearchBar 
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={filteredStocks} 
            onBuy={handleBuy} 
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio} 
            onSell={handleSell} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
