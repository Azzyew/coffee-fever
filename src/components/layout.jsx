import React from 'react';
import Header from './header';

const Layout = ({ children }) => (
    <div className="mx-auto xl:px-40">
      <Header />
      {children}
    </div>
)

export default Layout;