import React, { useEffect } from 'react';
import { BannerSection} from 'src/styled/layout';
import Banner from 'src/components/fragments/banner';
import ButtonMenu from 'src/components/ui/button-menu';
const HomePage = () => {
    useEffect(() => {


    }, []);
    return (
      <React.Fragment>
        <Banner/>
        <ButtonMenu/>
       
      </React.Fragment>
    );
  }
  
  export default HomePage;