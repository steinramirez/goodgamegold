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
  }
  
  return (<div style={styles}>
    
    <div>
      <img src={LogoEtransfer} width='150px' />
    </div>
    <div>
    <img src={ThugsG} width='180px' />
    </div>
    
  </div>
  );

}

export default Content;