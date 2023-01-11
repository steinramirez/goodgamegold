import React from "react";
import { Button } from '@material-ui/core';


const styles = {
  width: '100%',
  height: '378px',
  maxHeight: '100%',
  display: 'flex',
  background: 'rgb(15,15,15)',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContet: 'center',
  alignContent: 'center'


}
const textStyle = {
  width: '1428px',
  height: '256px',
  display: 'flex',
  justifyContet: 'space-between',
  textAlign: 'center',
  flexDirection: 'row',
  paddingTop: '100px'
}
const inStyle = {
  display: 'flex',
  flexDirection: 'column',
  color: '#ffffff',
}
const footer = {
  display: 'flex',
  fontSize: '1.2rem'
}

const date = new Date();
const current = date.toDateString();
function Footer() {

  return (<div style={styles}>
    <div style={textStyle}>
      <div style={inStyle}>Menú
        <Button style={inStyle}>Home</Button>
        <Button style={inStyle}>Tienda</Button>
        <Button style={inStyle}>Contacto</Button>
        <Button style={inStyle}>F.A.Q</Button>
      </div>
      <div style={inStyle}>Contáctanos
        <Button style={inStyle}>goodgamegold@protonmail.com</Button>
        <Button style={inStyle}>thugsgstore@gmail.com</Button>
        <div style={inStyle}>
          <Button style={inStyle}>IG</Button>
          <Button style={inStyle}>TWT</Button>
        </div>
        <div>Text</div>
      </div>
    </div>
    <div style={footer}>Rights Reserved {current}</div>
  </div>


  )
}
export default Footer;