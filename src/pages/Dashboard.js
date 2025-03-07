import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import ProductCard from "../components/ProductCard";
import CartContent from "../components/CartContent";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, title: 'Product 1', price: 10, image: 'https://images-eu.ssl-images-amazon.com/images/I/611AaVzaCQL._AC_UL225_SR225,160_.jpg' },
    { id: 2, title: 'Product 2', price: 20, image: 'https://images-eu.ssl-images-amazon.com/images/I/61C8ohossoL._AC_UL450_SR450,320_.jpg' },
    { id: 3, title: 'Product 3', price: 30, image: 'https://images-eu.ssl-images-amazon.com/images/I/71wLbVnsgSL._AC_UL450_SR450,320_.jpg' },
    { id: 4, title: 'Product 4', price: 40, image: 'https://images-eu.ssl-images-amazon.com/images/I/51ZJbJb7KnL._AC_UL450_SR450,320_.jpg' },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideNav activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
          <div className="col-md-10">
            {activeSection === 'products' && (
              <div className="row">
                {products.map(product => (
                  <div key={product.id} className="col-md-3">
                    <ProductCard product={product} addToCart={addToCart} />
                  </div>
                ))}
              </div>
            )}
            {activeSection === 'cart' && <CartContent cartItems={cartItems} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;