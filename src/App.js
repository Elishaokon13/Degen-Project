import React from 'react'
import Faq from './components/Faq';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import Subscribe from './components/Subscribe';
import Features from './components/Features'

function App() {
  return (
    <div>
        {/* <Navbar /> */}
        <Hero />
        <Features />
        <Tokenomics />
        <Faq />
        <Footer />
    </div>
  );
}

export default App;
