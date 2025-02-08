import React from "react";
export const MessageBox = (props)=>{
    let show = props.show;

    if (props.show){
      return <><div>&nbsp;</div><div style={{marginTop:'15px',marginBottom:'15px',color:'#FF0000'}}>is required *</div></>;
    }else{
      return <><div>&nbsp;</div><div>&nbsp;</div></>;
    }
}