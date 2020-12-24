import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => (
    <header className="flex justify-center md:justify-between items-center py-1 md:py-4 border-b-2 border-gray-300 xl:py-7">
      <img src={logo} alt="logo" />

      <nav className="hidden md:block space-x-8">
        <a href="/" className="tracking-wide hover:text-yellow-500">menu</a>
        <a href="/" className="tracking-wide hover:text-yellow-500">contact</a>
        <a href="/" className="tracking-wide hover:text-yellow-500">find us</a>
      </nav>
    </header>
  )

export default Header