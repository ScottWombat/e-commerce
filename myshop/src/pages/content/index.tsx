import React, { useEffect } from 'react';
import styles from './content.module.css'
import { useLocation } from "react-router-dom";

    
const ContentPage = (props) => {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
      let query = useQuery();
      const color = query.get("color");
    
      //const count = props.location.state?.count || 0;    
    return(
        <>Content Page</>
    );
};
export default ContentPage;
