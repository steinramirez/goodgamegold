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
    gap: '20px',
  }
  const responsive = {
    width: '80%',
    height: '40%',
    background: '#161616',
    display: 'flex',
    borderRadius: '40px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    filter: 'saturate(0%)',
    boxShadow: '0 3px 10px 0 gray',
    
  }
  const logos = {
    width: '90%',
    height: '30%',
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
        {`
          .cards>div{
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            padding:0px 70px 0 70px;
          }
        `}
      </style>
    <div><h2>{textHeader}</h2></div>
    <div className='cards' style={window.innerWidth>=714?logos:responsive}>
      <div>
        <img src={ThugsG} width={'400rem'} />
      </div>
      <div>
        <img src={LogoEtransfer} width='40%' />
      </div>
      <div>
      <img src={PepperMedia} width='40%' />
      </div>
    </div>
  </div>
  );

}

export default LogoSection;