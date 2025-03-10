import React, { useState } from 'react';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';

import * as styles from './tree.module.css';

import Tree from './tree';

const TreeNode = ({ node ,open, setOpen}) => {
  const { children, label,isFolder } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = (e) => {
    //e.preventDefault()
   // alert("d")
    setShowChildren(!showChildren);
   //if(!isFolder){
    //  setOpen(!open);
   //}
  };

  const linkClick = () => {
    setShowChildren(!showChildren)
  
  }
  return (
    <>
    <div className={styles.label} onClick={(e) =>handleClick(e)}>
      {children?.length > 0 && (
        <span className={styles.treeviewIcon}>
          {showChildren ? <CiSquareMinus /> : <CiSquarePlus />}
        </span>
      )}
      {isFolder?<span>{label}</span>:<span className={styles.underLink}>{label}</span>}
    </div>
    <ul className={styles.subTreeView}>
      {showChildren && <Tree treeData={children} open={open} setOpen={setOpen}/>}
    </ul>
  </>
  );
};

export default TreeNode;
