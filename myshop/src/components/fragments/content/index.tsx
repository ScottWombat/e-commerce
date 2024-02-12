import React, { useState,useEffect, useRef } from 'react';
const Content = () => {
    const componentRef = useRef(null);
    useEffect(()=>{
        if ( componentRef.current) {
      
            //componentRef.current.style.display='block'
            
          }
    },[])
    return (
        <div>Content</div>
    )
}

export default Content;