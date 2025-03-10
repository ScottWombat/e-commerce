
import React,{useState,useEffect,useMemo} from 'react';
import { DesktopLayout } from 'app/layout/desktop';
import { MobileLayout } from  'app/layout/mobile';

/*
320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV
*/
const useMediaQueries =() =>{
  const md = useMediaQuery("(min-width: 400px)");
  const lg = useMediaQuery("(min-width: 1200px)");

  return { md, lg };
}

const useMediaQuery = (query:string) =>{
  const mediaQuery = useMemo(() =>window.matchMedia(query),[query]);
  const [match, setMatch] = useState(mediaQuery.matches);
  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
}
const ResponsiveComponent = (() =>{
  const { md, lg } = useMediaQueries();
  const [close,setClose] = useState(false)
 
  if (lg) {
   
    return <DesktopLayout/>;
  }
  if (md) {
   
    return <MobileLayout close={close}/>;
  }

  return <MobileLayout close={close}/>;
})

const App = (props) => {
  return (
      <ResponsiveComponent/>
  );
};

export default App;



