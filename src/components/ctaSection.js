import React from "react";
import { Button } from "@material-ui/core";


function Content() {
  const text = `Compra stickers de tus JUEGOS, ANIME Y BANDAS FAVORITAS`;
  const styles = {
    width: '100%',
    height: '387px',
    display: 'flex',
    color: 'rgb(24,24,24)',
    justifyContent: 'space-between',
    alignItems: 'right',
    textAlign: 'right',
    gap: '20px',
    flexDirection: 'column',
  }
  const responsive = {
    width: '100%',
    height: '200px',
    display: 'flex',
    color: 'rgb(24,24,24)',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px',
    flexDirection: 'column',
  }
  const stylesText = {
    fontSize: '3vw',
    margin: '3vw',
    marginLeft: '15rem',
    marginTop: '50px'
  }

  const buttonStyle = {
    background: '#B72222',
    borderRadius: '50px',
    border: '2px solid #B72222',
    width: '18vw',
    height: '8hw',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex',
    margin: '0 auto',
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '2vw',
    textAlign: 'center',
    marginRight: '3vw'
  }
  return (
    <div style={window.innerWidth >= 800 ? styles : responsive} className='ctaSection'>
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