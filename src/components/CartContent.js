import React from 'react';

const CartContent = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartContent;