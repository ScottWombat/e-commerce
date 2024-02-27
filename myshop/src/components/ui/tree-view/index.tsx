import React, { useState } from "react";

import Tree from './tree'
import treeData from './tree-data';
const TreeView = (props) => {

  return (
    <Tree treeData={treeData} open={props.open} setOpen={props.setOpen}/>
    );
}

export default TreeView;
