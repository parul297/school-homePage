// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Footer Content */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm leading-6">
            Our school is committed to providing quality education and holistic development for all students. Join us to build a brighter future!
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Our Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">123, School Street, City, State, ZIP</p>
          <p className="text-sm mt-2">Email: info@greenfield.com</p>
          <p className="text-sm mt-2">Phone: +1 (123) 456-7890</p>
        </div>

        {/* Section 4: Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition text-white font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 Greenfield Academy. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">
            <FaFacebook className="hover:text-blue-400 transition  " />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
            <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
            <FaInstagram className="hover:text-blue-400 transition" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
            <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
