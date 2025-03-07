import React from 'react';

const SideNav = ({ activeSection, setActiveSection }) => {
  return (
    <div className="sidenav">
      <button 
        className={`btn ${activeSection === 'products' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setActiveSection('products')}
      >
        Products
      </button>
      <button 
        className={`btn ${activeSection === 'cart' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setActiveSection('cart')}
      >
        Cart
      </button>
    </div>
  );
};

export default SideNav;