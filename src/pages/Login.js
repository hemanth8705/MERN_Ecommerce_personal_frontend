import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyExistingToken = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        
        if (response.ok && data.valid) {
          navigate('/dashboard');
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        localStorage.removeItem("authToken");
      }
    };

    verifyExistingToken();
  }, [navigate]);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    console.log("Redirecting to:", `${backendUrl}/auth/google`);
    window.location.href = `${backendUrl}/auth/google`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome to E-Commerce</h2>
      <p>Please sign in to continue</p>
      <button 
        onClick={handleGoogleLogin} 
        disabled={isLoading}
        style={{ 
          padding: "10px 20px", 
          fontSize: "16px",
          backgroundColor: "#4285f4",
          color: "white",
          border: "none",
          borderRadius: "4px"
        }}>
        {isLoading ? "Loading..." : "Sign in with Google"}
      </button>
    </div>
  );
};

export default Login;