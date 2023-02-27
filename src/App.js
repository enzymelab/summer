import React from "react";
import Cta from "./component/cta/cta";
import Brand from "./component/brand/brand";
import Navbar from "./component/navbar/navbar";
import { Footer, Blog, Possibility, Features, Header, WhatGPT3 } from './containers';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      <h1>GPT-3</h1>
    </div>
  )
}

export default App;


