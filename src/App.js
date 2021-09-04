import React from 'react';
import './App.css';


import Header from './components/Header';
import SaleSection from './components/SaleSection';
import Calculator from './components/Calculator';
import Subscribe from './components/Subscribe';
// import OurStaff from './components/OurStaff';
import Footer from './components/Footer';


function App() {





  return (
    <div className="App">
      <Header />
      <main>
        <SaleSection />
        <Calculator />
        <Subscribe />
        {/* <OurStaff /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;


