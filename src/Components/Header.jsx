// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent text-white p-6 fixed top-0 left-0 right-0 z-5 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Greenfield Academy</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-gray-300 transition duration-300">Home</a>
          <a href="#about" className="hover:text-gray-300 transition duration-300">About Us</a>
          <a href="#programs" className="hover:text-gray-300 transition duration-300">Programs</a>
          <a href="#events" className="hover:text-gray-300 transition duration-300">Events</a>
          <a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

