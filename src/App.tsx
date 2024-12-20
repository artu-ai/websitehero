import React from 'react';
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import VideoTutorials from "./components/VideoTutorials";
import "./App.css";

function App() {
  console.log("Rendering App component");

  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Features />
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
