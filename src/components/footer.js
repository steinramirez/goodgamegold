import React from "react";
import { Button } from '@material-ui/core';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { BsController } from 'react-icons/bs';
import ggg from '../assets/logoforo.png';

const w = window.innerWidth;
const styles = {
  width: '100%',
  height: '100%',
  maxHeight: '100%',
  background: 'rgb(15,15,15)',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContet: 'space-between',
  alignContent: 'center'
}
const textStyle = {
  width: '1428px',
  height: '50vh',
  display: 'flex',
  textAlign: 'center',
  paddingTop: '100px'
}
const inStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignContent: 'center',
  alignItems: 'center',
  justifyContet: 'center',
  color: '#ffffff',
  width: '100%',
 margin: '10px'
}
const inStyle1 = {
  display: 'flex',
  flexDirection: 'row',
 height: '80%',
  justifyContet: 'flex-end',
  color: '#ffffff',
  width: '80%',
  margin: '10px'
}
const inStyle1responsive = {
  display: 'flex',
  flexDirection: 'column',
 height: '80%',
  justifyContet: 'flex-end',
  color: '#ffffff',
  width: '80%',
  textAlign: 'right',
}
const footer = {
  height: '50px',
  display: 'flex',
  fontSize: '1.2rem',
  textAlign: 'center',
  alignContent: 'center',
  alignItems: 'center',
  fontSize: '1rem',
  justifyContet: 'center',
  background:  'rgb(20,20,20)',
  padding: '30px',
}

const date = new Date();
const current = date.toDateString();

function Footer() {

  return (<div style={styles}>
    <style>
      {
        `
        .icon{
          color: white;
          width: 20px;
          height: 20px; 
          margin: 10px;
        }
        .button{
        }
        `
      }
    </style>
    <div style={textStyle}>
      <div style={w>=800?inStyle1:inStyle1responsive}>
        <Button className='button' style={inStyle}>Home</Button>
        <Button style={inStyle}>Tienda</Button>
        <Button style={inStyle}>Contacto</Button>
        <Button style={inStyle}>F.A.Q</Button>
      </div>
      <div style={inStyle}>
        <Button style={{color:'white'}} ><CiMail className="icon" /> GoodGamegold</Button>
        <Button style={{color:'white'}} ><CiMail className="icon" />ThugsGStore</Button>
        <div style={inStyle}>
          <div ><FaTwitter className="icon" /></div>
          <div ><FaInstagram  className="icon"/></div>
          <img src={ggg} ></img>
        </div>
      </div>
    </div>
    <div style={footer}><a><BsController style={{padding:'0 20px 0 0 '}}/>All Rights Reserved {current}. Made by PepperMedia, in Colombia on react using Node.js </a></div>
  </div>


  )
}
export default Footer;