import React from 'react';

import { NUM_OF_TESTIMONIALS } from './config';
import './App.css';

import Header from './components/Header';
import SaleSection from './components/SaleSection';
import Calculator from './components/Calculator';
import Subscribe from './components/Subscribe';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SaleSection />
        <Calculator />
        <Subscribe />
        <Testimonials numOfCharacters={NUM_OF_TESTIMONIALS} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
