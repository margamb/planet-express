import React, { useState, useEffect } from 'react';
import './App.css';


import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import Calculator from './components/Calculator';
import Subscribe from './components/Subscribe';
import OurStaff from './components/OurStaff';
import Footer from './components/Footer';


function App() {





  return (
    <div className="App">
      <Header />
      <main>
        <CountdownTimer />
        <Calculator />
        <Subscribe />
        <OurStaff />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// Header 
// Oferta
// Calcula el precio [X]
// Formulario [X]
// Nuestro staff []
// Footer

