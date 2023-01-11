import React from "react";
import LogoEtransfer from '../assets/logoetransfer.png';
import ThugsG from '../assets/thugsg.png';


function LogoSection() {
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
  const logos = {
    width: '90%',
    height: '30%',
    background: '#161616',
    display: 'flex',
    borderRadius: '40px',
    alignItems: 'center',
    filter: 'saturate(0%)',
    boxShadow: '0 3px 10px 0 gray',
    
  }
  const PepperMedia = (text) => {
    return <div className="Epilogue-text">{text}</div> ;
  }
  return (<div style={styles}>
      <style>
        {`
          .cards>div{
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            padding:0px 70px 0 70px;
          }
          .Epilogue-text {
            font-family: 'Epilogue';
          }
        `}
      </style>
    <div><h2>{textHeader}</h2></div>
    <div className='cards' style={logos}>
      <div>
        <img src={ThugsG} width='100%' />
      </div>
      <div>
        <img src={LogoEtransfer} width='30%' />
      </div>
      {PepperMedia('PepperMedia')}
    </div>
  </div>
  );

}

export default LogoSection;