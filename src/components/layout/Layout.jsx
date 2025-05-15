import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import '../../styles/Layout.scss';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`layout ${isHomePage ? 'home-page' : ''}`}>
      <Navbar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout; 