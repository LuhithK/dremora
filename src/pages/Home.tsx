import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import QuotationForm from '../components/QuotationForm';
import TravelersDestinations from '../components/TravelersDestinations';
import TravelersDestinations from '../components/TravelersDestinations';
import FeaturedPackages from '../components/FeaturedPackages';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <QuotationForm />
      <TravelersDestinations />
      <FeaturedPackages />
      <Services />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;