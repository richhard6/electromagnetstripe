import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Caroussel from './components/Caroussel';
import FeaturesList from './components/FeaturesList';
import ProductDescription from './components/ProductDescription';
import RevenueModels from './components/RevenueModels';
import MarketStrategy from './components/MarketStategy';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Caroussel />
      <ProductDescription />
      <FeaturesList />
      <RevenueModels />
      <MarketStrategy />
      <CallToAction />
      <Footer />
      {/*  
      <h2>Electromagnet Company</h2>
      <button>
        <a href="https://buy.stripe.com/8wM3gebfZ5MP9uUdQQ">BUY AUCTION</a>
      </button> */}
    </div>
  );
}

export default App;
