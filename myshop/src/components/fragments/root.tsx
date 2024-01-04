import React, { useEffect } from 'react';
import Banner from './banner';
import Content from './content';
const RootFragment = () => {
    useEffect(() => {
      document.title = "love me sexy";

    }, []);
    return (
      <React.Fragment>
        <Banner />
        <Content/>
      </React.Fragment>
    );
  }
  
  export default RootFragment;