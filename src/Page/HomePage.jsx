import React from "react";
import Guide from "../Components/Guide";
import Hero from "../Components/Hero";
import Properties from "../Components/Properties";
import Details from "../Components/Details";
import GetStarted from "../Components/GetStarted";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
    </>
  );
}

export default HomePage;
