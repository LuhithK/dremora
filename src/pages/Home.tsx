import React from 'react';
import Hero from '../components/Hero';
import FeaturedPackages from '../components/FeaturedPackages';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="pt-0">
      <Hero />
      <FeaturedPackages />
      <Services />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;