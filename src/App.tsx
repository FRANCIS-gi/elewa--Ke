import React from 'react';

import './App.css';
import { Footer } from './viewModel/components/footer';
import { Header } from './viewModel/components/header';
import { HomePage } from './viewModel/components/homePage';
import People from "./view/images/people.png";

function App() {
  return (
    <div className="App">      
      <Header/> 
      <HomePage imgSrc={People} />
      <Footer/>
    </div>
    
  );
}

export default App;
