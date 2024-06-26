import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Title = ({ lineContent, lineContent2 }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 2.0,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15
      }
    });
  }, [line1, line2]);
  return (
    <h1 className='page-title'>
      <div className='line-wrap'>
        <div ref={line1} className='line'>
          {lineContent}
        </div>
      </div>
      <div className='line-wrap'>
        <div ref={line2 } className='line'>
          {lineContent2}
        </div>
      </div>
    </h1>
  );

}

export default Title;