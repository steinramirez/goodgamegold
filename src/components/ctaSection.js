import React from "react";
import { Button } from "@material-ui/core";


function Content() {
  const text = 'Compra stickers de tus \r\n JUEGOS, ANIME Y BANDAS FAVORITAS';
  const styles = {
    width: '100%',
    height: '387px',
    display: 'flex',
    color: 'rgb(24,24,24)',
    justifyContent: 'space-between',
    alignItems: 'right',
    textAlign: 'right',
    fontSize: '5vw',
    gap:'20px',
    flexDirection: 'column',
  }
  const stylesText = {
    fontSize: '2vw',
    margin: '3vw',
    marginLeft: '400px',
  }
  const buttonStyle = {
    borderRadius: '50px',
    border: '3px solid #B72222',
    width:'15vw',
    height: '8hw',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex',
    margin: '0 auto',
    color: '#B72222',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '1.5vw',
    textAlign: 'center',
    marginRight: '3vw'
  }
  return (
  <div style={styles} className='ctaSection'>
    <div>
    <h2 className="textcta" style={stylesText}>
      {text}
    </h2>
    <Button className="buttoncta" style={buttonStyle}>
      Buy Here
    </Button>
    </div>
  
    
  </div>
  
  );

}

export default Content;