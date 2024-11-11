import Header from "./components/Header";
import Hero from "./components/Hero";

import Footer from "./components/Footer";

import Services from "./components/Services";

import WhyChooseAWJ from "./components/WhyChooseAwj";
export default function Home() {
  return (
    <>
      <Header />
      <Hero id="hero" />

      <Services id="services" />
      <WhyChooseAWJ id="why-awj" />
 
      <Footer />
    </>
  );
}
