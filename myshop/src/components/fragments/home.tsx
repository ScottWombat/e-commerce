import React, { useEffect } from 'react';
import Banner from './banner';
import Content from './content';
const IndexPage = () => {
    useEffect(() => {
      document.title = "love me sexy";

    }, []);
    return (
      <React.Fragment>
        <Content/>
      </React.Fragment>
    );
  }
  
  export default IndexPage;