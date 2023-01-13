import React from "react";
import LogoEtransfer from '../assets/logoetransfer.png';
import ThugsG from '../assets/thugsg.png';
import PepperMedia from '../assets/peppermedialogoweb.png';


function LogoSection() {
  const w = window.innerWidth ;
  const textHeader = 'Próximos proyectos'
  const styles = {
    width: '100%',
    height: '466px',
    background: 'rgb(20,20,20)',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
  }
  const responsive = {
    width: '60%',
    height: '70%',
    background: '#161616',
    display: 'flex',
    borderRadius: '40px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
    filter: 'saturate(0%)',
    boxShadow: '0 3px 10px 0 gray',
    
  }
  const logos = {
    width: '90%',
    height: '40%',
    background: '#161616',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '40px',
    alignItems: 'center',
    filter: 'saturate(0%)',
    boxShadow: '0 3px 10px 0 gray',
    
  }
  
  return (<div className="logoSection" style={styles}>
      <style>
        {
          `
          img{
            object-fit: cover;
          }
          `
        }
      </style>
    <div><h2>{textHeader}</h2></div>
    <div  style={w>=714?logos:responsive}>
      <div className="image">
        <img src={ThugsG} width='400px' style={{objectFit: 'contain'}} />
      </div>
      <div className="image">
        <img src={LogoEtransfer} width='400px' style={{objectFit: 'contain'}} />
      </div>
      <div className="image">
      <img src={PepperMedia} width='400px' style={{objectFit: 'contain'}} />
      </div>
    </div>
  </div>
  );

}

export default LogoSection;