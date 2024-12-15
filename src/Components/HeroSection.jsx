import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="bg-cover bg-center h-screen flex items-center justify-center text-white text-center"  
      style={{ backgroundImage: 'url(https://ta-images.condecdn.net/image/1AgammVJa0p/crop/1440/f/no.jpg)' }}>
      <div className="bg-black bg-opacity-70 p-6 rounded-lg">
        <h2 className="text-4xl font-extrabold">Welcome to Our School</h2>
        <p className="mt-4 text-lg">Empowering students for a brighter future with education and creativity.</p>
        <a href="#apply" className="mt-6 inline-block bg-yellow-500 text-gray-900 py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300">Apply Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
