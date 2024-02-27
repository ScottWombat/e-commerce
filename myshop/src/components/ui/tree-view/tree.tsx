import React from 'react';
import TreeNode from './tree-node';

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