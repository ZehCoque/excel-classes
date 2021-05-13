import React from 'react';
import './App.css';
import About from './components/about';
import MyCarousel from './components/carousel';
import HowTo from './components/howto';
import MyNavbar from './components/navbar';

const App: React.FC = () => {
  return (
    <>
    <MyCarousel/>
    <About/>
    <HowTo/>
    <MyNavbar />
    </>
  );
};

export default App;
