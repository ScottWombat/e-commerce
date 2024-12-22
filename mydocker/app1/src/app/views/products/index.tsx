import React, { useState, useEffect} from 'react';

import { useParams,useLocation } from 'react-router-dom';
import useDetectResize  from 'app/utils/detect-resize';
import IDBProvider from '../../indexed_db';
import DBHandler from '../../indexed_db/db_handler';
import { DatabaseService } from 'app/indexed_db/database'
import { useStatePromise } from 'app/utils/useStatePromise';
import * as styles from './products.module.css';
import { getCache } from 'app/redis/cache';
import axios from 'axios';
import ProductService from 'app/services/product.service';
import Pagination from './pagination'
import Products from './products'
const styles1 = {
    size: { size: "50 50px"}
  };
  
const ProductsPage = (props) => {
    
    const apiClient = new ProductService();

    const [products, setProducts] = useState([]);
    const [totalProducts,setTotalProducts]= useState(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);


    const [toDos, setToDo] = useState([]);
    const [ name, setName ] = useState('');
    const [data,setData] = useState([]);

  
   
    const { catalog, category } = useParams();
    const { windowDimensions, isMobile, isTablet, isLaptop, isDesktop,isLarge } = useDetectResize();
    //const getTodosFromDatabase = () => {
    //    DatabaseService.init().then(async () => {
    //      const todos = await DatabaseService.add({id:'men_cockrings',data:'re',completed:true});
    //      console.log(todos)
    //      setToDo([todos]);
    //    });
    //};
   // const k = ()=>{
        //const re = new RedisService();
        //const i = re.getInstance();
        //await RedisService.get('key1')
       // const cache = getCache().then()
    //}
    useEffect(()=>{
      apiClient.getProducts(catalog,category).then(products=>{
        setProducts(products['data'])
        setTotalProducts(products['totalProducts'])
      })
    },[products])
   
  
    //useEffect(getTodosFromDatabase, []);
    //useEffect(()=>{
        //let prom =database.openDatabase().then(db => database.addData({ userid:811, name:'name811', email:'e8111'}))
        //let result = await prom;
    //    console.log(name)
    //},[name]);
 
    const onclick=((name) =>{
        setName(name)
    })

    const indexOfLastPost = currentPage * productsPerPage;
    const indexOfFirstPost = indexOfLastPost - productsPerPage;
    const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => {
      setCurrentPage(pageNumber);
    }
    return (
        <>
        <div className={styles.header}>{category}</div>
        <div className={styles.product_menu}>
            <div className={styles.float}>Showing 1-16 of 19 results</div>
            <div className={styles.float + '' + styles.right}>
            <select name="filter_select" id="filter_select" className={styles.filter} defaultValue={'latest'}>
            <option value="popularity" className={styles.text_indent}>Sort by popularity</option>
            <option value="rating" className={styles.text_indent}>Sort by average rating</option>
            <option value="latest" className={styles.text_indent}>Sort by latest</option>
            <option value="low" className={styles.text_indent}>Sort by price: low to high</option>
            <option value="high" className={styles.text_indent}>Sort by price: hight to low</option>
            </select>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.image_holder}>
                 <Products productList={currentProducts}/>
            </div>
        </div>
        <div className={styles.pagination}>
            
            <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
          />
          </div>   
        
        </>
    )
}
export default ProductsPage;