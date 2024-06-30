import React, { useEffect, useState} from 'react';
import { useParams,useSearchParams } from "react-router-dom";
import { useAppDispatch,useAppSelector } from 'src/store/hooks';
import { retrieveProducts } from "src/store/products";
import styles from './product-list.module.css'

import Breadcrumbs from 'src/components/breadcrumb';
import { StyledProgressBarDiv,StyledFiltersDiv,StyledProductViewDiv } from './product-list.styled';
import ProductCard from './product-card';
import ProductViewOptions from 'src/components/ui/product-view-options';
import ProductRightFilters from 'src/components/ui/product-view-options/product-right-filters';
import { loadMore,updatePagination } from 'src/store/pagination';
import {total} from 'src/store/products'
const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'Product Detail' },
];

const ProductList = (props) => {
    /* lll */
    const perPage = 20;
    const [totalPages, setTotalPages] = useState(1);
    const [pageNo, setPageNo] = useState(1);
  
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    /* -- */
    
    const [gridListStyle, setGridListStyle] = useState(false);
    const [showFilters ,setShowFilters] = useState(true)
    const { category } = useParams();
  
    const dispatch = useAppDispatch();
    const loadMore1 = useAppSelector(loadMore);
    const products_total1 = useAppSelector(total);
   
    let payload = {products_total: products_total1 }
    dispatch(updatePagination(payload))
   
    useEffect(() => {
        let params ={'category':category}
        dispatch(retrieveProducts(params))
        //{ }
        //const params = new URLSearchParams(search);
        //const queryValue = params.get('catalog');
        setGridListStyle(true);

    }, [])

    useEffect(() => {
        const getUserList = () => {
          setLoading(true);
          fetch(`http://localhost:5000/api/products/products_by_category?category=Cock%20Rings&page_no=${pageNo}&per_page=${perPage}`)
            .then(res => res.json())
            .then(res => {
              setTotalPages(res.total_pages);
              setUserList([...userList, ...res.data]);
              setLoading(false);
            });
        }
        getUserList();
      }, [pageNo]);

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
            <div className={styles.product_view_section}>
                <StyledFiltersDiv filterShow={showFilters}>
                    <ProductRightFilters/>
                </StyledFiltersDiv>
                <StyledProductViewDiv filterShow={showFilters}>
                   <div className={styles.product_view_root}>
                        {userList.map((x, i) => {
                        let img1 = `/${x.image_name}.png`
                        let dis_price = x.price - (x.price * x.percent_discount)/100
                        let product ={
                            category: x.category,
                            name: x.name,
                            discount: x.percent_discount,
                            rating: x.rating,
                            full_price: x.price,
                            discount_price: dis_price.toFixed(2)
                        }
                        return <ProductCard productDetails={product} />
                            
                        })}
                      
                    </div>
                    <div className={styles.clearfix}>
                        <div className={styles.show_items}>Showing 36 of 292 Items</div>
                        <div id="progress_container" className={styles.progress_container}>
                                <div id="progress_bar" className={styles.progress_bar}>
                                </div>
                        </div>
                        <div className={styles.show_items}>
                        {totalPages !== pageNo && <button className="btn-load-more" onClick={() => setPageNo(pageNo + 1)}>{loading ? 'Loading...' : 'Load More'}</button>}
                        </div>
                    </div>
                </StyledProductViewDiv>
                
            </div>
            
            
        </div>
    );
}

export default ProductList;