import React, { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
const style = {
  position: 'fixed',
  right:'20px',
  bottom:'20px',
  index: '999',
  background:'black',
  height: '20px',
  fontSize:'15px',
  borderRadius: '20px',
  padding: '10px',
  marginTop: '10px',
  marginLeft: '5px'
  

}

const text = {
 color: 'orange',
}
function WindowSize() {
  const size = useWindowSize();

  return (
    <div style={style}>
     <p style={text}>Width: {size.width}px, Height: {size.height}px </p>
    </div>
  );
}

export default WindowSize;