import React from 'react';
import { Link } from 'react-router-dom';
import styles from './breadcrumb.module.css'
const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <div className={styles.breadcrumbs}>
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={index}>
                    {index > 0 && <span className={styles.separator}>/</span>}
            {breadcrumb.link ? (
                <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
            ) : (
                <span>{breadcrumb.label}</span>
            )}
        </span>
    ))
}
</div >
);
};

export default Breadcrumbs;