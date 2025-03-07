import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

// In UserContext.js
useEffect(() => {
  const fetchUser = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return;

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;


      const response = await fetch(`${backendUrl}/auth/user`, {
      
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      console.log("User fetching response:", data);
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
      localStorage.removeItem("authToken");
    }
  };

  fetchUser();
}, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};