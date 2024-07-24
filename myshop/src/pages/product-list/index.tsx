import React, { useEffect, useState} from 'react';
import { useParams,useSearchParams } from "react-router-dom";
import { useAppDispatch,useAppSelector } from 'src/store/hooks';
import { retrieveProducts, } from "src/store/products";
import styles from './product-list.module.css'

import Breadcrumbs from 'src/components/breadcrumb';
import { StyledProgressBarDiv,StyledFiltersDiv,StyledProductViewDiv } from './product-list.styled';
import ProductCard from './product-card';
import ProductViewOptions from 'src/components/ui/product-view-options';
import ProductRightFilters from 'src/components/ui/product-view-options/product-right-filters';
import { loadMore,updatePagination } from 'src/store/pagination';
import {selectRetriveProductStatus,selectAllItems,selectProductsInfo,addProducts} from 'src/store/products'
const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'Product Detail' },
];

const ProductList = (props) => {
    const [totalPages, setTotalPages] = useState(1);
    const [pageNo, setPageNo] = useState(0);
    const [perPage,setPerPage] = useState(20);
    const [totalItems,setTotalItems] = useState(0);
    const [progressWidth,setProgressWidth] = useState(0);
    const [viewItems,setViewItems] = useState(0)
    const [productList,setProductList] = useState([])
    const [productInfo,setProductInfo] = useState([])
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    /* -- */
    
    const [gridListStyle, setGridListStyle] = useState(false);
    const [showFilters ,setShowFilters] = useState(true)
    const { catalogue,category,page_no } = useParams();

    const dispatch = useAppDispatch();
    const loadMore1 = useAppSelector(loadMore);
    //const products_total1 = useAppSelector(total);
    const product_items = useAppSelector(selectAllItems);
    const product_info = useAppSelector(selectProductsInfo);
    const product_retrieve_status = useAppSelector(selectRetriveProductStatus);
   
    //let payload = {products_total: products_total1 }
    //dispatch(updatePagination(payload))
   /*
    useEffect(() => {
        let params ={'catalogue':catalogue,'category':category,'per_page':perPage,'page_no':pageNo}
        dispatch(retrieveProducts(params))
        console.log("retrieve status");
        console.log(product_retrieve_status);
        console.log("Loading page")
        setGridListStyle(true);
        //setPageNo(0)

        //setProductList([...productList,...product_items]);
        //setProductInfo(product_info)
        //const p = selectProductById(state,'667a8da10d35869504d6bf78')
        //console.log("producg")
        //console.log(productInfo)
    },[props])
    */
    /*
    useEffect(() =>{
        console.log("IIIIIII");
        console.log(product_retrieve_status);
        setProductList([...productList,...product_items]);
        setProductInfo(product_info)
    },[])
    */
   /*
    useEffect (() =>{
        setPageNo(0)
        let params ={'catalogue':catalogue,'category':category,'per_page': perPage,'page_no':pageNo}
        dispatch(retrieveProducts(params))
    })
    */
   /*
    useEffect(() => {
        console.log("DDDD")
        console.log(pageNo)
        console.log(product_retrieve_status)
       
       
        setProductInfo(product_info)
        console.log(product_info)

        const getProductList = async() => {
             setProductList([...productList,...product_items]);
            
             setTotalPages(product_info.totalPages);
             //setLoading(false)
             setProgressWidth(product_info.progressBar);
             setTotalItems(product_info.totalItems);
             setViewItems(product_info.viewItems);
            
        }
        getProductList();
        console.log(product_info.total_items)
    },[pageNo])
    */
    
    useEffect(() => {
        const getProductList = async() => {
          setLoading(true);
          fetch(`http://localhost:5000/api/products/products_by_catalogue_category?catalogue=${catalogue}&category=${category}&page_no=${pageNo}&per_page=${perPage}`)
            .then(res => res.json())
            .then(res => {
              setTotalPages(res.total_pages);
              setProductList([...productList, ...res.data]);
              setLoading(false);
              setProgressWidth(res.progress_bar);
              setTotalItems(res.total_items);
              setViewItems(res.view_items);
              dispatch(addProducts([...productList, ...res.data]));
              
            });
        }
        
        getProductList();
        
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
                        {productList.map( x => {
                                                   
                           let dis_price = x.price - (x.price * x.percent_discount)/100
                           let product ={
                              id: x.id,
                              category: x.category,
                              catalogue: catalogue,
                              name: x.name,
                              discount: x.percent_discount,
                              rating: x.rating,
                              full_price: x.price,
                              image: `/${x.image_name}.png`,
                              discount_price: dis_price.toFixed(2)
                           }
                           
                           return <ProductCard productDetails={product} />
                            
                        })}
                      
                    </div>
                    <div className={styles.clearfix}>
                        <div className={styles.show_items}>You have viewed {viewItems} of {totalItems} Items</div>
                        <div id="progress_container" className={styles.progress_container}>
                                <StyledProgressBarDiv width={progressWidth}/>
                        </div>
                        <div className={styles.show_items}>
                        {totalItems !== viewItems && <button className={styles.btn_load_more} onClick={() => setPageNo(pageNo + 1)}>{loading ? 'Loading...' : 'Load more products'}</button>}
                        </div>
                    </div>
                </StyledProductViewDiv>
                
            </div>
            
            
        </div>
    );
}

export default ProductList;