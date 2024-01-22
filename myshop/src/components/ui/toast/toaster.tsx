import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Toast from "./index";

import checkIcon from "src/assets/toast/check.svg";
import errorIcon from "src/assets/toast/error.svg";
import infoIcon from "src/assets/toast/info.svg";
import warningIcon from "src/assets/toast/warning.svg";

interface IToaster{
    id: number,
    title: string,
    description: string,
    backgroundColor: string,
    icon:string
}

const Toaster = (props)=> {
  //type IToaster = typeof initToaster;
  //const initToaster = {id: 0,title: 'Success',description: 'Suck',backgroundColor: '#5cb85c',icon: ''}
  //to initialize 
  //const [list, setList] = useState<IToaster[] | []>([initToaster]);
  const [list, setList] = useState<IToaster[] | []>([]);
  const { message,type,position,autoDelete, autoDismissTime} = props.toast;

  let toastProperties={};

  useEffect(() => {
    if (type) {
      showToast(type);
    }
  }, [props.toast]);

  const showToast = args => {
    const id = Math.floor(Math.random() * 101 + 1);
    switch (args) {
      case "success":
        toastProperties = {
          id,
          title: "Success",
          description: message,
          backgroundColor: "#5cb85c",
          icon: checkIcon
        };
        break;
      case "danger":
        console.log("danger")
        toastProperties = {
          id,
          title: "Danger",
          description: message,
          backgroundColor: "#d9534f",
          icon: errorIcon
        };
        console.log(JSON.stringify(toastProperties))
        break;
      case "info":
        toastProperties = {
          id,
          title: "Info",
          description: message,
          backgroundColor: "#5bc0de",
          icon: infoIcon
        };
        break;
      case "warning":
        toastProperties = {
          id,
          title: "Warning",
          description: message,
          backgroundColor: "#f0ad4e",
          icon: warningIcon
        };
        break;

      default:
        setList(list);
    }
    const newObj = {...toastProperties}
    const initToaster = {id: 0,title: newObj['title'],description: newObj['description'],backgroundColor: newObj['backgroundColor'],icon: newObj["icon"]}
    setList([initToaster]);

    //alert(args.message);
  };
  return (
    <>
      <Toast
        toastList={list}
        position={position || 'bottom-left'}
        autoDelete={autoDelete}
        dismissTime={autoDismissTime || 1000}
      />
    </>
  );
}



export default Toaster;
