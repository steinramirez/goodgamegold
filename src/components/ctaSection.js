import React from "react";
import { Button } from "@material-ui/core";
import GoogleAdSense from 'react-simple-adsense';


function Content() {
  const text = 'Compra stickers de tus \r\n JUEGOS, ANIME Y BANDAS FAVORITAS';
  const styles = {
    width: '100%',
    height: '387px',
    display: 'flex',
    color: 'rgb(24,24,24)',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '5vw',
    gap:'20px'
  }
  const stylesText = {
    fontSize: '2vw',
    margin: '3vw',
    marginLeft: '400px',
  }
  const buttonStyle = {
    borderRadius: '50px',
    border: '5px solid #B72222',
    width:'20vw',
    height: '10hw',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex',
    margin: '0 auto',
    color: '#B72222',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '2vw',
    lineHeight: '71px',
    textAlign: 'center',
    marginRight: '3vw'
  }
  return (
  <div style={styles} className='ctaSection'>
    
    <h2 className="textcta" style={stylesText}>
      {text}
    </h2>
    <Button className="buttoncta" style={buttonStyle}>
      Buy Here
    </Button>
    <GoogleAdSense
    html={
      '<ins class="adsbygoogle"\n' +
      'style="display:inline-block;width:728px;height:90px"\n' +
      'data-ad-client="ca-pub-4812206787996960"\n' +
      'data-ad-slot="3989020352"></ins>'
    }
  /> 
  </div>
  );

}

export default Content;