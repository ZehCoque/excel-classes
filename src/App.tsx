import React from 'react';
import './App.css';
import About from './components/about';
import MyCarousel from './components/carousel';
import Contact from './components/contact';
import Footer from './components/footer';
import HowTo from './components/howto';
import MyNavbar from './components/navbar';

const App: React.FC = () => {
  return (
    <>
    <MyCarousel/>
    <About/>
    <HowTo/>
    <MyNavbar />
    <Contact />
    <Footer />
    </>
  );
};

export default App;
