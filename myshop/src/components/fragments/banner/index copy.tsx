
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
//import { TweenMax, TimelineMax,Elastic, Back } from "gsap/all";
import { gsap } from "gsap";
import { TimelineLite, CSSPlugin } from "gsap/all";
import BannerDiv, { Wrapper, Text, Span } from './banner.styles';
import styles from './particles.module.css';
import LoremSvg from 'src/components/svg/lorem';
import { Container, TextNow, AnnimateP } from './annimated-text.styles';
import ShopNow from './button.styles';
import styles2 from './index.module.css';
import HeartIcon from 'src/components/svg/heart';
import Heart from 'src/components/svg/letter_heart';
import useDetectResize from 'src/utils/detect-resize';

//-300


const Banner1 = () => {
  const { windowDimensions, isMobile, isTablet, isLaptop, isDesktop,isLarge } = useDetectResize();
  const findXShowNow=()=>{
    //if(isLarge){
      return -300;
    //}
    //return 0;
  }
  const hello = useRef();
  const row1 = useRef();
  const shop_now = useRef();
  const container = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: false, repeat: 0 }));
  const tl = timeline.current;

  const [imageId, setImageId] = useState(0);
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

  const appRef = useRef();

  useEffect(() => {
    setX(findXShowNow)

    const ctx = gsap.context(() => {
      tl.from(hello.current, {
        opacity: 1,
        x: 0,
        duration: 3,
        yPercent: 100,
        ease: "power4",
        stagger: 0.1  
      })
      .from(shop_now.current,{
        opacity: 1,
        x: x,
        duration:3
      })
      .to(row1.current,{
        opacity: 1,
        x: 100,
        duration:1
      });
      
     
    }, container.current);
    //  tl.to(root.current, {
    //     rotation: 360,
    //     duration: 5,
    //  });
    return () => ctx.revert(); //clean up
  }, [x,y]);

  const imagePath = `./wallpapers/wallpaper0.jpg`
  return (
    <>
      <BannerDiv bgcolor={'#fff'} bgimage={imagePath}>
      <div className={styles2.container} ref={container}>
             <div ref={hello} className={styles2.escape}>
                Escape into amazing experiences
              </div>
              <div ref={row1} className={styles2.brand_name}>
                <span>L</span>
                <span><Heart/></span>
                <span>V</span>
                <span>E</span>
                <span>&nbsp;</span>
                <span>M</span>
                <span>E</span>
                <span>&nbsp;</span>
                <span>S</span>
                <span>E</span>
                <span>X</span>
                <span>Y</span>
              </div>
              <div ref={shop_now}>
                <ShopNow>Show Now</ShopNow>
              </div>
        </div>
        
      </BannerDiv>
      {/*
        <div className={styles.animation_wrapper}>
            <div className={styles.particle}>
              <div className={styles.particle_1}></div>
              <div className={styles.particle_2}></div>
              <div className={styles.particle_3}></div>
              <div className={styles.particle_4}></div>
            </div>
        </div>
        */}
    </>
  );
}

export default Banner1;
