import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDetectResize  from 'app/utils/detect-resize';
import IDBProvider from '../../indexed_db';
import DBHandler from '../../indexed_db/db_handler';
import { DatabaseService } from 'app/indexed_db/database'
import { useStatePromise } from 'app/utils/useStatePromise';
import * as styles from './products.module.css';
const styles1 = {
    size: { size: "50 50px"}
  };
const ProductsPage = (props) => {
    //const database = new DBHandler("UserDB");
    const [toDos, setToDo] = useState([]);
    const [ name, setName ] = useState('');
   
    const { catalog, category } = useParams();
    const { windowDimensions, isMobile, isTablet, isLaptop, isDesktop,isLarge } = useDetectResize();
    const getTodosFromDatabase = () => {
        DatabaseService.init().then(async () => {
          const todos = await DatabaseService.add({id:'men_cockrings',data:'re',completed:true});
          console.log(todos)
          setToDo([todos]);
        });
    };
    useEffect(getTodosFromDatabase, []);
    //useEffect(()=>{
        //let prom =database.openDatabase().then(db => database.addData({ userid:811, name:'name811', email:'e8111'}))
        //let result = await prom;
    //    console.log(name)
    //},[name]);
 
    const onclick=((name) =>{
        setName(name)
    })
    return (
        <>
        <div className={styles.header}>Cock Rings</div>
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
            <div className={styles.image_wrapper}>
                <div className={styles.image} onClick={() =>onclick('d1')}>
                <img src="/assets/images/img1.jpg" />
                </div>
                <div className={styles.product_title}>FLUEE LOGO SINGLET</div>
                <div className={styles.product_price}>$146</div>
                <div className={styles.product_selection}>ADD TO CART</div>
            </div>
            <div className={styles.image_wrapper}>
                <div className={styles.image} onClick={() =>onclick('d1')}>
                <img src="/assets/images/img1.jpg" />
                </div>
                <div className={styles.product_title}>FLUEE LOGO SINGLET</div>
                <div className={styles.product_price}>$146</div>
                <div className={styles.product_selection}>ADD TO CART</div>
           
            </div>
            <div className={styles.image_wrapper}>
                <div className={styles.image} onClick={() =>onclick('d1')}>
                    <img src="/assets/images/img1.jpg" />
                    <div>kkk</div>
                    <div>ddde</div>
                    <div>button</div>
                </div>
            </div>
            <div className={styles.image_wrapper}>
            <div className={styles.image}><img src="/assets/images/img1.jpg" /></div>
            </div>
            <div className={styles.image_wrapper}>
            <div className={styles.image}><img src="/assets/images/img1.jpg" /></div>
            </div>
            <div className={styles.image_wrapper}>
            <div className={styles.image}><img src="/assets/images/img1.jpg" /></div>
            </div>
            <div className={styles.image_wrapper}>
            <div className={styles.image}><img src="/assets/images/img1.jpg" /></div>
            </div>
            <div className={styles.image_wrapper}>
            <div className={styles.image}><img src="/assets/images/img1.jpg" /></div>
            </div>
        </div>
        </div>
        </>
    )
}
export default ProductsPage;