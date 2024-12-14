// src/App.js
import React from 'react';
import Header from './Components/Header.jsx';
import HeroSection from './Components/HeroSection.jsx';
import FeaturedPrograms from './Components/FeaturedPrograms.jsx';
import EventsSection from './Components/EventsSection.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedPrograms />
      <EventsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
