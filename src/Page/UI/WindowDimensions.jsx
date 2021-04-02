import React, { useState, useEffect, memo } from 'react';

const WindowDimensions = memo(() => {
  const [width, setWidth] = useState(window.innerWidth);
  let size ='';

  if(width >= 992 && size !== 'lg'){
    console.log('1111');
    size = 'lg';
  }
  else if(width>=768 && size !== 'md'){
    console.log('22222');
    size = 'sm';
  }
  else if(size !== 'sm'){
    console.log('3');
    size = 'sm';
  }
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });
  useEffect(()=>{
    console.log('44444');
    return size;
  },[size]);

});
export default WindowDimensions;