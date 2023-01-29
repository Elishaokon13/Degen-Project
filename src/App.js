import React from 'react'
import Faq from './components/Faq';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CTA from './components/CTA';
// import Subscribe from './components/Subscribe';
// import Roadmap from './components/Features'

function App() {
  return (
    <div className='bg-blue-100'>
        {/* <Navbar /> */}
        <Hero />
        {/* <Roadmap /> */}
    
        <Tokenomics />
        <CTA />
        <Faq />
        <Footer />
    </div>
  );
}

export default App;
