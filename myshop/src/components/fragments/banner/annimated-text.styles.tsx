import styled, { css,  keyframes } from 'styled-components';

const showup = keyframes`
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
`;

const fadeaway = keyframes`
    100% {opacity:0;}
    80% {opacity:1;}
    20% {opacity:1;}
    0% {opacity:0;}
`;

const slidein = keyframes`
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
`

const reveal = keyframes`
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:155px;}
    80% {opacity:1;}
    100% {opacity:0;width:355px;}
`;

const fade =keyframes`
    0% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const Container = styled.div`
  display: relative;
  text-align:center;
  background:linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%);
  color:#555;
  font-family:'Roboto';
  font-weight:300;
  font-size:32px;
  padding-top:4vh;
  height:100vh;
  overflow:hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0,0,0);

`;
export const TextNow = styled.div`
    display:inline-block;
    overflow:hidden;
    white-space:nowrap;
    font-size:32px;
    color:#fff;
    :first-of-type {      
        animation: ${showup} 7s;
    }
    :last-of-type {
        width:0px;
        animation: ${reveal} 10s;
    }
    :last-of-type span {
        margin-left:0px;
        animation: ${slidein} 15s;
    }
    
  
   
}
`;

export const AnnimateP = styled.p`
    font-size:12px;
    color:#999;
    margin-top:20px;
`;