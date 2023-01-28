import React from 'react'
import Faq from './components/Faq';
// import Developers from './components/Developers';
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
        <Faq />
        <Footer />
    </div>
  );
}

export default App;
