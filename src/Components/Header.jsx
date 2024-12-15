import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black bg-opacity-50 text-white p-4 fixed top-0 left-0 right-0 shadow-md z-50">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold">Greenfield Academy</h1>

        {/* Hamburger Button */}
        <button 
          className="lg:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <div className="w-6 h-6 flex flex-col justify-around">
            {isMenuOpen ? (
              <span className="block w-6 h-0.5 bg-white transform rotate-45 translate-y-1.5"></span>
            ) : (
              <span className="block w-6 h-0.5 bg-white"></span>
            )}
            {isMenuOpen ? (
              <span className="block w-6 h-0.5 bg-white transform -rotate-45 -translate-y-1.5"></span>
            ) : (
              <span className="block w-6 h-0.5 bg-white"></span>
            )}
          </div>
        </button>

        {/* Navigation Links */}
        <nav 
          className={`lg:flex lg:space-x-4 absolute lg:static bg-black  w-full lg:w-auto top-12 left-0 lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="#home" className="block lg:inline-block py-2 lg:py-0 hover:text-gray-300">Home</a>
          <a href="#about" className="block lg:inline-block py-2 lg:py-0 hover:text-gray-300">About Us</a>
          <a href="#programs" className="block lg:inline-block py-2 lg:py-0 hover:text-gray-300">Programs</a>
          <a href="#events" className="block lg:inline-block py-2 lg:py-0 hover:text-gray-300">Events</a>
          <a href="#contact" className="block lg:inline-block py-2 lg:py-0 hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
