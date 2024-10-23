import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div>
      <Header />
      {/* Add padding to avoid content being hidden behind the fixed header */}
      <div style={{ marginTop: '80px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
