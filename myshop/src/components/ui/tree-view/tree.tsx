import React from 'react';
import TreeNode from './tree-node';
/*
source=https://stackblitz.com/edit/stackblitz-starters-ju6rui?file=src%2FTreeview%2FTreeNode.js
*/
import styles from './tree.module.css';

const Tree = ({ treeData = [],open,setOpen } ) => {

  return (
    <ul className={styles.treeViewContainer}>
      {treeData.map((node) => (
        <TreeNode node={node} key={node.key} open={open} setOpen={setOpen}/>
      ))}
    </ul>
  );
};

export default Tree;