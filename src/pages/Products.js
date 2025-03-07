import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";

const Products = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar  />
      <div className="container mt-5">
        <h2>Products Page</h2>
        <p>This page displays the available products for sale.</p>
      </div>
    </>
  );
};

export default Products;