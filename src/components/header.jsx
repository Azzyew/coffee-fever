import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-center md:justify-between items-center py-2 md:py-4">
      <img src="/img/logo.svg" alt="logo" />

      <nav className="hidden md:block space-x-8 ">
        <a href="/" className="tracking-wide hover:text-gray-300">menu</a>
        <a href="/" className="tracking-wide hover:text-gray-300">contact</a>
        <a href="/" className="tracking-wide hover:text-gray-300">find us</a>
      </nav>
    </header>
  )
}

export default Header