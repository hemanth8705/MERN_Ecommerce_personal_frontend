import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar  />
      <div className="container mt-5">
        <h2>Cart Page</h2>
        <p>This page displays the items in the shopping cart.</p>
      </div>
    </>
  );
};

export default Cart;