import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FoodToys from './components/FoodToys';
import Services from './components/Services';
import Groomers from './components/Groomers';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <FoodToys />
      <Services />
      <Groomers />
      <Testimonials />
      <Newsletter />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
