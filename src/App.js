import React from 'react'
import Faq from './components/Faq';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CTA from './components/CTA';
// import Subscribe from './components/Subscribe';
import Roadmap from './components/Roadmap'

function App() {
  return (
    <div className='bg-black text-[#aacf51]'>
        {/* <Navbar /> */}
        <Hero />
        <Roadmap />
    
        <Tokenomics />
        <CTA />
        <Faq />
        <Footer />
    </div>
  );
}

export default App;
