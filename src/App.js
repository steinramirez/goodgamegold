import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/contentSection';
import CtaSection from './components/ctaSection';
import { useEffect, useState } from 'react';
import LogoSection from './components/logoSection';
import Footer from './components/footer';
import WindowSize from './components/widthHeight';
import GoogleAdSense from 'react-simple-adsense';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    
    <div className="App">
      
      <header className="App-header">
      <div style={{width: `${width}px`}}>
       <GoogleAdSense
    html={
      '<ins class="adsbygoogle"\n' +
      'style="display:inline-block;width:728px;height:90px"\n' +
      'data-ad-client="ca-pub-4812206787996960"\n' +
      'data-ad-slot="3989020352"></ins>'
    }
  /> 
      <Navbar /> 
      <WindowSize />
      <Content /> 
      <CtaSection />
      <LogoSection />
      <Footer />
      </div>
      </header>
    </div>
  );
}

export default App;
