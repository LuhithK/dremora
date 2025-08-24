import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedPackages from '../components/FeaturedPackages';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <FeaturedPackages />
      <Services />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;