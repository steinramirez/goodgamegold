import React from "react";
import { Button } from '@material-ui/core';

export default function Navbar() {

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: 'rgb(44,44,44)',
    position: 'absolute',
    width: '100%',
    left: '0',
    height: '102px',
    top: '0'
  };

  const button = {
    background: 'rgb(44,44,44)',
    color: 'white',
    padding:'25px'

  };

  return (<nav style={navStyle}>
    <Button style={button}>Home</Button>
    <Button style={button}>COMPRA</Button>
    <Button style={button}>CONTACTO</Button>
    <Button style={button}>FAQ</Button>
  </nav>
  );
}