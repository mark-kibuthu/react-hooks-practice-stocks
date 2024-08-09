import React from 'react';

function Stock({ stock, onBuy }) {
  const handleClick = () => {
    onBuy(stock);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">Price: ${stock.price.toFixed(2)}</p>
        <p className="card-text">Type: {stock.type}</p>
      </div>
    </div>
  );
}

export default Stock;
