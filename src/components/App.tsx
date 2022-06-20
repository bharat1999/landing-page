import React from 'react';
import TopBar from './TopBar';
import Header from './Header'
import Brands from './Brands'
import Features from './Features'
import Headline from './Headline'
import Clients from './Clients'
import CTA from './CTA'
import Footer from './Footer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <Brands/>
      <Features/>
      <Headline/>
      <Clients/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
