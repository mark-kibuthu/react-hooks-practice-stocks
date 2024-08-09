import React from 'react';
import Stock from './Stock';

function PortfolioContainer({ portfolio, onSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.length > 0 ? (
        portfolio.map(stock => (
          <Stock 
            key={stock.id} 
            stock={stock} 
            onBuy={onSell} 
          />
        ))
      ) : (
        <p>No stocks in portfolio.</p>
      )}
    </div>
  );
}

export default PortfolioContainer;
