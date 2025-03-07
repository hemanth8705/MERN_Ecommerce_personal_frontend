import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import PrivateRoute from "./components/PrivateRoute";
import GoogleCallback from "./pages/GoogleCallback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />


         {/* The callback route is public */}
         <Route path="/auth/google/callback" element={<GoogleCallback />} />
        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
