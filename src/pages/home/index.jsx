import React from "react";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import WhatWeOffer from "./WhatWeOffer";
import Testimonials from "./Testimonials";
import PopularTemplates from "./PopularTemplates";
import HowItWorks from "./HowItWorks"
import TemplatesThatSpeak from "./TemplatesThatSpeak"

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <WhatWeOffer />
      <TemplatesThatSpeak/>
      <PopularTemplates />
      <HowItWorks/>
      <Testimonials />
    </>
  );
};

export default Home;
