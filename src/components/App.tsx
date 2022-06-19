import React from 'react';
import TopBar from './TopBar';
import Header from './Header'
import Brands from './Brands'
import FeatureBody from './FeaturesBody'
import Headline from './Headline'
import './App.scss';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <Brands/>
      <FeatureBody/>
      <Headline/>
    </div>
  );
}

export default App;
