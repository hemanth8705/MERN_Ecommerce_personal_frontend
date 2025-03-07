import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">
          {user ? `Welcome, ${user.name}!` : 'Welcome'}
        </span>
        <div className="navbar-nav ms-auto">
          <button 
            className="btn btn-outline-primary me-2"
            onClick={() => navigate('/account')}>
            Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;