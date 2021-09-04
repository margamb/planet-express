import React from 'react';
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
        <Testimonials numOfCharacters={8} />
      </main>
      <Footer />
    </div>
  );
}

export default App;


