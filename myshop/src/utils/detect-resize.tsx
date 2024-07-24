import { useCallback, useEffect, useState } from "react";


interface MediaObj {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isLarge: boolean;
};

//upper limit (BP) for each device. based off Bootstrap breakpoints
//const mobileBP = 768; //sm
const mobileBP = 480; //sm
const tabletBP = 768;  //md 
const laptopBP = 1024  //lg
const desktopBP = 1200; //lg
const largeBP = 1400;

const defaultValues= {
  isMobile: window.innerWidth <= mobileBP ? true : false,
  isTablet: (window.innerWidth > mobileBP && window.innerWidth <= tabletBP) ? true : false,
  isLaptop: (window.innerWidth > tabletBP && window.innerWidth <= laptopBP) ? true : false,
  isDesktop: (window.innerWidth > laptopBP && window.innerWidth <= desktopBP) ? true : false,
  isLarge: (window.innerWidth > largeBP) ? true : false,
}

const useDetectResize = () => {
  const [mediaType, setMediaType] = useState<MediaObj>(defaultValues);
  const [windowDimensions, setWindowDimensions] = useState<{w:number, h:number}>({w: window.innerWidth, h: window.innerHeight});
  let timeout = false;

  //register callback so our function isn't instantiated on each re-render.
  const handleWindowResize = useCallback((timeout:any) => {
    // clear the timeout
    clearTimeout(timeout);
    // debounce getDimensions function ever N ms
    timeout = setTimeout(getDimensions, 1000);

    //store width/height and mediaState 
    function getDimensions(){
      let width = window.innerWidth;
      let height = window.innerHeight;
      setWindowDimensions(currState => currState = {w:width, h: height});
      //console.log('Width Saved!: ', width);

      let mediaTypes = {
        isMobile: window.innerWidth <= mobileBP ? true : false,
        isTablet: (window.innerWidth > mobileBP && window.innerWidth <= tabletBP) ? true : false,
        isLaptop: (window.innerWidth > tabletBP && window.innerWidth <= laptopBP) ? true : false,
        isDesktop: (window.innerWidth > laptopBP && window.innerWidth <= desktopBP) ? true : false,
        isLarge: (window.innerWidth > largeBP) ? true : false,
      }

      setMediaType(currState => currState = mediaTypes);
    }

}, []); 

  useEffect(() => {
    // window.resize event listener will call handleWindowResize() whenever screen width is adjusted.
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  },[])
  
  return{
    isMobile: mediaType.isMobile,
    isTablet: mediaType.isTablet,
    isLaptop: mediaType.isLaptop,
    isDesktop: mediaType.isDesktop,
    isLarge: mediaType.isLarge,
    windowDimensions
  }
}

export default useDetectResize;