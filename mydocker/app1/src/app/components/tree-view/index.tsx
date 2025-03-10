import React, { useState } from "react";
import Tree from './tree'
import treeData from './tree-data';
import * as styles from './tree.module.css';
const TreeView = (props) => {

  return (
  
    <Tree treeData={treeData} open={props.open} setOpen={props.setOpen}/>
    
    );
}

const TreeView2 = (props) => {

  return (
  
    <Tree treeData={treeData} open={props.open} setOpen={props.setOpen}/>
    
    );
}

export default TreeView;
