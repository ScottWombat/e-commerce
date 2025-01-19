import React from 'react';
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as styles from './searchbox.module.css'

import { SearchIcon } from "../../layout/usermenu/search_icon";
const Container = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr ;
`
const CloseButton = styled.button`
    
    border: none;
    background: none;
    font-family: Roboto;
    font-size:22px;
    float:right;
    color:#000;
    margin:15px;
    justify-self: end;
    
`;
export const SearchBox = ({ onClose }: any) => {
    const [inputValue, setInputValue] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const submit= () =>{
        if (inputValue ===''){
            setErrMsg('* Required')
            return;
        }
    }
    return (
        <Container>
            <CloseButton onClick={onClose}>
                <i className="fa fa-times"></i><div className={styles.close}></div>
            </CloseButton>
            <div className={styles.wrap}>
                <div className={styles.search}>
                    
                    <input 
                        type="text" 
                        className={styles.searchTerm} 
                        placeholder="What are you looking for?" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}/>
                    <button type="submit" className={styles.searchButton} onClick={submit}>
                        
                        <SearchIcon width={'40px'} height={'40px'}/>
                    </button>
                    
                </div>
                <div>{errMsg}</div>
            </div>
        </Container>
    )
}