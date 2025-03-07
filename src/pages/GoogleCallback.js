import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract token from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    console.log("Token from URL in GoogleCallback:");

    if (tokenFromUrl) {
      // Store token in localStorage
      localStorage.setItem("authToken", tokenFromUrl);
      
      // Remove token from URL
      window.history.replaceState({}, document.title, "/dashboard");
      console.log("Token stored, URL cleaned up");

      // Use a short timeout to see logs before navigation
      setTimeout(() => {
        console.log("Redirecting to Dashboard");
        navigate("/dashboard");
      }, 500);
    } else {
      console.log("No token found in URL, redirecting to login");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Processing login...</h2>
    </div>
  );
};

export default GoogleCallback;
