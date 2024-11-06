import React from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Products from "./sections/Products.jsx";
import Accounts from "./sections/Accounts.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />
      <Products />
      <Accounts />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
