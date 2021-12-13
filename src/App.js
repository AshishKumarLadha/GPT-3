import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Footer, Blog, Features, Possibility, WhatGPT3, Header } from './containers'
import { CTA, Brand, Navbar } from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header />
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    
    </div>
  );
}

export default App;
