
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
//import { TweenMax, TimelineMax,Elastic, Back } from "gsap/all";
import { gsap } from "gsap";
import BannerDiv, {Wrapper,Text,Span} from './banner.styles';
import styles from './particles.module.css';
import LoremSvg from 'src/components/svg/lorem';


 const Banner1 = () => {
 
    const [imageId, setImageId] = useState(0);

    const app = useRef<HTMLDivElement>(null);
    const tl = useRef<GSAPTimeline>();

    useEffect(() => {
          let randomIndex = Math.floor(Math.random() * 4);  
          setImageId(randomIndex);
    },[]);

    const imagePath = `./wallpapers/wallpaper${imageId}.jpg`
    return (
        <>
        <BannerDiv bgcolor={'#fff'} bgimage={imagePath}>
           <Wrapper>
             <Text><LoremSvg/></Text>
            </Wrapper>
           
        </BannerDiv>
        <div className={styles.animation_wrapper}>
            <div className={styles.particle}>
              <div className={styles.particle_1}></div>
              <div className={styles.particle_2}></div>
              <div className={styles.particle_3}></div>
              <div className={styles.particle_4}></div>
            </div>
        </div>
      </>
    );
}

export default Banner1;
