import React from "react";
import LogoEtransfer from '../assets/logoGG.png';
import ThugsG from '../assets/thugsg.png';

function Content() {

  const styles = {
    width: '100%',
    height: '844px',
    background: 'rgb(20,20,20)',
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'cover',
  }
  const w = window.innerWidth;
  return (<div style={styles}>
    <style>
      {
        `
        .thugsLogo{
          transition-duration: 1s;
        }
        @keyframes shine {
          from { background-position: -(image width)px; }
          to { background-position: (image width)px; }
        }
        .hover:hover {
          animation: shine 2s linear infinite;
        }
        .hover {
          background-image: none;
          background-repeat: repeat-x;
        }
        `
      }
    </style>
    
  
      <img src={LogoEtransfer} width='150px' className="hover" />
    
    <div className="thugsLogo" style={w>=800?{display:'flex'}:{display:'none'}}>
    <img src={ThugsG} width='180px' />
    </div>
    
  </div>
  );

}

export default Content;