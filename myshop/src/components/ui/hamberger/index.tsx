import React, { useState,useEffect, useRef } from 'react';
import styles from './hamberger.module.css'
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
    console.log('dd')
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Hamberger = () => {
  const [open, setOpen ]= useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return(
  <div ref={node}>
    <Burger open={open} setOpen={setOpen}/>
    <MenuItem open={open} setOpen={setOpen} />
  </div>
  );
}
export default Hamberger;

