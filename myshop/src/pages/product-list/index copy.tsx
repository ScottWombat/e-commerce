import React, { useEffect, useState } from 'react';
import styles from './product-list.module.css'
import { useParams } from "react-router";
import Breadcrumbs from 'src/components/breadcrumb';
import { ULWrapper, ListItem, StyledDiv,  StyledFiltersDiv } from './product-list.styled';
import ProductCard from './product-card';
import ProductViewOptions from 'src/components/ui/product-view-options';
import ProductRightFilters from 'src/components/ui/product-view-options/product-right-filters';
const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'Product Detail' },
];

const ProductList = (props) => {
    const [gridListStyle, setGridListStyle] = useState(false);
    const [showFilters ,setShowFilters] = useState(true)
    const { catalog } = useParams();
    useEffect(() => {
        console.log("poooooo")
        //{ }
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

    return (
        <div className={styles.p_container}>
            <div className={styles.breadcrumb}>
                <div className={styles.breadcrumb_view}>
                    
                    <div className={styles.breadcrumb_row}>
                    <a href="#">  <i className="fa fa-home fa-lg"></i></a>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                    
                </div>
                <div className={styles.product_filter_menu}>
                    <div style={{float: "right"}}>
                     <ProductViewOptions showFilters={showFilters} setShowFilters={setShowFilters}/>
                    </div>
                </div>
            </div>
            
            {/* Product card */}
            <div className={styles.product_section}>
                <StyledFiltersDiv filterShow={showFilters}>
                    ooooooooooooo
                </StyledFiltersDiv>
                
               
                <div className={styles.product_view_root}>
                    {[...Array(31)].map((e, i) => 
                    <ProductCard/>
                    )}
                </div>
                {/* end Product card */}
               
            </div>
            
        </div>
    );
}

export default ProductList;