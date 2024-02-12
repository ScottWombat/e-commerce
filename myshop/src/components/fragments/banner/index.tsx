
import React, { useState, useEffect,useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
//import { TweenMax, TimelineMax,Elastic, Back } from "gsap/all";
import { gsap } from "gsap";
import BannerDiv, {Wrapper,Text,Span} from './banner.styles';
import styles from './particles.module.css';
import { CSSTransition } from "react-transition-group";
import { Container, Button, Alert } from 'react-bootstrap';
import LoremSvg from 'src/components/svg/lorem';
import Title from './title';
import styles1 from './title.module.css'
import './my_node.module.css'
import './alert.module.css'

 const Banner = () => {
    const [inProp, setInProp] = useState(false);
    const nodeRef1 = useRef(null);
 
    const [imageId, setImageId] = useState(0);
    const root = useRef();
    const app = useRef<HTMLDivElement>(null);
    const tl = useRef<GSAPTimeline>();

    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const nodeRef = useRef(null);

    const [width, setWidth]   = useState(window.innerWidth);

    useEffect(() => {
          let randomIndex = Math.floor(Math.random() * 4);  
          setImageId(randomIndex);
    },[]);

    useEffect(() => {
      console.log("DDDDD")
      let ctx = gsap.context(() => {
        // all your animations go in here...
        gsap.to(root.current, { 
          delay: 1.0,
          opacity: 1,
          x: width/2,
          ease: "power3",
          duration: 2
        });
      }, root); // <- scopes all selector text to the root element
      console.log(ctx)
      return () => ctx.revert();
    }, []);
  

    const imagePath = `./wallpapers/wallpaper${imageId}.jpg`
    return (
        <>
         <BannerDiv bgcolor={'#fff'} bgimage={imagePath}>
          <Wrapper>
           <div ref={root} className={styles1.app}>
            <div className={styles1.hide}>love me sexy</div>
           </div>
           <CSSTransition nodeRef={nodeRef1} in={inProp} timeout={200} className="my_node">
              <div ref={nodeRef1}>
                {"I'll receive my-node-* classes"}
            </div>
            </CSSTransition>
            <button type="button" onClick={() => setInProp(true)}>
            Click to Enter
            </button>
            <Container style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          ref={nodeRef}
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>
            Animated alert message
          </Alert.Heading>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          <Button
            variant="primary"
            onClick={() => setShowMessage(false)}
          >
            Close
          </Button>
        </Alert>
      </CSSTransition>
    </Container>
          </Wrapper>
           
        </BannerDiv>
        
      </>
    );
}

export default Banner;
