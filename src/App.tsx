import React from 'react';
import './App.css';
import MyCarousel from './components/carousel';
import MyNavbar from './components/navbar';

const App: React.FC = () => {
  return (
    <>
    <MyCarousel/>
    <MyNavbar />
    </>
  );
};

export default App;
