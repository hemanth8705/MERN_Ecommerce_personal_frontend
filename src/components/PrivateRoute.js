import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isVerifying, setIsVerifying] = useState(true);
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

// In PrivateRoute.js
useEffect(() => {
  const verifyToken = async () => {
    try {
      if (!token) {
        navigate('/');
        return;
      }
      const backendUrl = process.env.REACT_APP_BACKEND_URL;


      const response = await fetch(`${backendUrl}/auth/verify`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      console.log("Token verification response:", data);

      if (!response.ok || !data.valid) {
        localStorage.removeItem("authToken");
        navigate('/');
      }
    } catch (error) {
      console.error("Token verification failed:", error);
      localStorage.removeItem("authToken");
      navigate('/');
    } finally {
      setIsVerifying(false);
    }
  };
  verifyToken();
}, [token, navigate]);

  if (isVerifying) {
    return <div>Verifying authentication...</div>;
  }

  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;