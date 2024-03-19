import React, { useEffect, useState } from 'react';
import styles from './product-list.module.css'
import { useParams } from "react-router";
import Breadcrumbs from 'src/components/breadcrumb';
import { ULWrapper, ListItem, StyledDiv } from './product-list.styled';

const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'Product Detail' },
];

const ProductList = (props) => {
    const [gridListStyle, setGridListStyle] = useState(false);
    const { catalog } = useParams();
    useEffect(() => {
        { }
        //const params = new URLSearchParams(search);
        //const queryValue = params.get('catalog');
        setGridListStyle(true);

    }, [])

    const gridWidth = gridListStyle ? styles.tile : styles.title_width;

    const blueStyle = gridWidth + ' ' + styles.blue;
    const redStyle = gridWidth + ' ' + styles.red;
    const greenStyle = gridWidth + ' ' + styles.green;

    const displayStyle = gridListStyle ? 'inline' : 'flex';

    const changeListStyle = () => {
        setGridListStyle(false)
    }
    const changeGridStyle = () => {
        setGridListStyle(true)
    }

    const foo = 7;
    return (
        <div className={styles.p_container}>
            <div className={styles.breadcrumb_view}>
                <div className={styles.breadcrumb_row}>
                    <a href="#">  <i className="fa fa-home fa-lg"></i></a>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                </div>
            </div>
            {/* Product card */}
            <div className={styles.product_view_root}>
                {[...Array(9)].map((e, i) => 
                <div className={styles.product_card + ' ' + styles.spacing}>
                    <div className={styles.dis_ribbon}><span>35 % Off</span></div>
                    <div className={styles.product_thumb}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2806/2806251.png" />
                    </div>
                    <div className={styles.product_details}>
                        <span className={styles.product_category}>T-Shirt{i}</span>
                        <div className={styles.product_header}><a href="#">New T-Shirt For Man</a></div>
                        <div className={styles.product_desc}>New Import T-Shirt For Man Very Rare Collection, If You Want Order Right Now</div>
                        <div className={styles.product_bottom_details}>
                            <div className={styles.product_price}><small>$15.10</small>$7.99</div>
                            <div className={styles.product_links}>
                            <a href="#"><i className="fa fa-heart"></i></a>
                            <a href="#"><i className="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            
            {/* end Product card */}
            
        </div>
    );
}

export default ProductList;