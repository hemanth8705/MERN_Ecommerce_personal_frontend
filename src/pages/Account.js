import React, {useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Navbar  />
      <div className="container mt-5">
        <h2>Account Page</h2>
        <p>This page is accessible only to logged-in users.</p>

        <button 
          className="btn btn-outline-danger"
          onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Account;