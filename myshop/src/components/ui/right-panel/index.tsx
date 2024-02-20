import React, { useState,useEffect, useRef } from 'react';
import styled from "styled-components";
import { keyframes } from 'styled-components'
import useWindowDimensions from 'src/utils/window-dimension';
import useDetectResize from 'src/utils/detect-resize';

interface props{
    open: boolean
}


const SlidePanel = styled.div<props>`
    background: linear-gradient(to bottom, #003351 0%, #1d0a3a 100%); 
    color: #fff;
    height: 100%;
    min-height: 100%;
    padding: 1em;
    position: absolute;
    right: ${props => props.open ? '0px' : '-360px'};
    transition-duration: 0.2s;
    top: 0;
    overflow: hidden;
    width: 325px;
`;


interface slidedownprops{
    show: boolean
}
const SlideDownPanel = styled.div<slidedownprops>`
    
    background: #ccc;
    color: #fff;
    position: fixed;
    width: 100%;
    height: 20%;
    top: 0;
    left: 0;
    z-index: 101;
    visibility: ${slidedownprops => slidedownprops.show ? 'visible':'hidden'};
    transform: ${slidedownprops => slidedownprops.show ? 'translateY(0px)':'translateY(-100%)'};
    transition: all 0.5s ease-in-out;
`;


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`
const RightPanel = (props: any) => {
    const { windowDimensions, isMobile, isTablet, isLaptop, isDesktop } = useDetectResize();
    const [open, setOpen ]= useState(false);
    const [show, setShow]= useState(false);
    
    const { height, width } = useWindowDimensions();
    console.log(`width:${width},height:${height}`)
    console.log(`dd:${windowDimensions}`)

    return (
        <>
        <Button onClick={()=>setOpen(!open)}>Slide Out</Button>
        <Button onClick={()=>setShow(!show)}>Slide Down</Button>
        <SlidePanel open={open}>
                <Button onClick={()=>setOpen(!open)}>Close</Button>
                <p>Clever girl. That is one big pile of shit. I thought you were one of your big brothers. Don't you see the danger, John, inherent in what you're doing here? They show extreme intelligence, even problem-solving intelligence.</p>
                <p>Dinosaurs eat man; woman inherits the earth. T-Rex doesn't want to be fed. Boy, do I hate being right all the time. White rabbit object: whatever it did, it did it all.</p>
        </SlidePanel>
        <SlideDownPanel show={show}>
        <Button onClick={()=>setShow(!show)}>Close</Button>
                <p>Clever girl. That is one big pile of shit. I thought you were one of your big brothers. Don't you see the danger, John, inherent in what you're doing here? They show extreme intelligence, even problem-solving intelligence.</p>
                <p>Dinosaurs eat man; woman inherits the earth. T-Rex doesn't want to be fed. Boy, do I hate being right all the time. White rabbit object: whatever it did, it did it all.</p>
        </SlideDownPanel>
         
        </>
    );
}

export default RightPanel;