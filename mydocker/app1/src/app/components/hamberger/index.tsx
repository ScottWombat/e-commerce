import React, { useState,useEffect, useRef } from 'react';
import * as styles from './hamberger.module.css'
import { useNavigate} from "react-router-dom";

import Burger from './burger';
import MenuItem from './menu-item'

const useOnClickOutside = (ref, handler) => {
 useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Hamberger = (props) => {
  const [open, setOpen ]= useState(props.open);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return(
    <div ref={node}>
    <Burger open={open} setOpen={setOpen}/>
    <MenuItem open={open} setOpen={setOpen}/>
  </div>
  );
}
export default Hamberger;

